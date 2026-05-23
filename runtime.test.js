const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

function executeBootstrap(startUrl, options = {}) {
  const parsed = new URL(startUrl);
  let htmlWritten = "";
  let stopped = false;

  const documentMock = {
    open() {},
    write(html) {
      if (stopped && options.stopBlocksDocumentWrite) {
        return;
      }
      htmlWritten += String(html || "");
    },
    close() {},
    getElementById() {
      return null;
    },
    createElement() {
      return { textContent: "", value: "" };
    },
  };

  const windowMock = {
    location: {
      href: parsed.href,
      search: parsed.search,
      origin: parsed.origin,
      protocol: parsed.protocol,
    },
    self: null,
    top: null,
    document: documentMock,
    addEventListener() {},
  };

  if (options.includeStop) {
    windowMock.stop = function () {
      stopped = true;
    };
  }

  windowMock.self = windowMock;
  windowMock.top = windowMock;

  const context = {
    window: windowMock,
    URL,
    URLSearchParams,
    console,
    Date,
  };

  vm.createContext(context);
  const source = fs.readFileSync("bootstrap.js", "utf8");
  vm.runInContext(source, context, { filename: "bootstrap.js" });

  return {
    windowMock,
    htmlWritten,
  };
}

function loadBootstrapApi(startUrl) {
  return executeBootstrap(startUrl).windowMock.UIBASIC_BOOTSTRAP_TEST_API;
}

const api = loadBootstrapApi("https://uibasic.comindex.html?embedded=1");

assert.equal(api.resolveMode("embedded", false), "embedded");
assert.equal(api.resolveMode("standalone", true), "standalone");
assert.equal(api.resolveMode("", true), "embedded");
assert.equal(api.resolveMode("", false), "standalone");

assert.equal(api.shouldWrapStandalone("standalone", false, false), true);
assert.equal(api.shouldWrapStandalone("embedded", false, false), false);
assert.equal(api.shouldWrapStandalone("standalone", true, false), false);
assert.equal(api.shouldWrapStandalone("standalone", false, true), false);

const httpsChild = new URL(
  api.buildChildUrlForHref(
    "https://uibasic.comlessons/001/index.html?debug=1",
    "https://uibasic.com",
    "https:"
  )
);
assert.equal(httpsChild.searchParams.get("embedded"), "1");
assert.equal(httpsChild.searchParams.get("mode"), "embedded");
assert.equal(httpsChild.searchParams.get("parentOrigin"), "https://uibasic.com");
assert.equal(httpsChild.searchParams.get("debug"), "1");

const fileChild = new URL(
  api.buildChildUrlForHref("file:///E:/Projects/Blackrushindex.html", "null", "file:")
);
assert.equal(fileChild.searchParams.get("embedded"), "1");
assert.equal(fileChild.searchParams.get("mode"), "embedded");
assert.equal(fileChild.searchParams.has("parentOrigin"), false);

const standaloneRun = executeBootstrap("http://localhost:8000/", {
  includeStop: true,
  stopBlocksDocumentWrite: true,
});
assert.ok(
  standaloneRun.htmlWritten.includes("ui-shell-frame"),
  "Standalone bootstrap should still render the shell markup when running at localhost"
);

console.log("runtime.test.js passed");