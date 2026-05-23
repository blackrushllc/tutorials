(function () {
  if (window.__UIBASIC_BOOTSTRAP_LOADED__) {
    return;
  }
  window.__UIBASIC_BOOTSTRAP_LOADED__ = true;

  function safeIsEmbedded() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  function resolveMode(forcedMode, actualEmbedded) {
    var mode = String(forcedMode || "").toLowerCase();
    if (mode === "embedded" || mode === "standalone") {
      return mode;
    }
    return actualEmbedded ? "embedded" : "standalone";
  }

  function shouldWrapStandalone(mode, embeddedFlag, actualEmbedded) {
    return mode === "standalone" && !embeddedFlag && !actualEmbedded;
  }

  function buildChildUrlForHref(href, origin, protocol) {
    var childUrl = new URL(href);
    childUrl.searchParams.set("embedded", "1");
    childUrl.searchParams.set("mode", "embedded");
    if (String(protocol || "").toLowerCase() !== "file:" && origin) {
      childUrl.searchParams.set("parentOrigin", origin);
    }
    return childUrl.toString();
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getSearchParams(search) {
    try {
      return new URLSearchParams(search || "");
    } catch (e) {
      return new URLSearchParams();
    }
  }

  var params = getSearchParams(window.location.search);
  var forcedMode = params.get("mode") || "";
  var embeddedFlag = params.get("embedded") === "1";
  var actualEmbedded = safeIsEmbedded();
  var mode = resolveMode(forcedMode, actualEmbedded);
  var debugEnabled = params.get("debug") === "1";
  var parentOrigin = params.get("parentOrigin") || "";

  window.UIBASIC_RUNTIME = {
    forcedMode: forcedMode,
    mode: mode,
    embeddedFlag: embeddedFlag,
    actualEmbedded: actualEmbedded,
    debug: debugEnabled,
    parentOrigin: parentOrigin,
  };

  window.UIBASIC_BOOTSTRAP_TEST_API = {
    resolveMode: resolveMode,
    shouldWrapStandalone: shouldWrapStandalone,
    buildChildUrlForHref: buildChildUrlForHref,
  };

  if (!shouldWrapStandalone(mode, embeddedFlag, actualEmbedded)) {
    return;
  }

  var childUrl = buildChildUrlForHref(
    window.location.href,
    window.location.origin,
    window.location.protocol
  );
  var childOrigin = "";
  try {
    childOrigin = new URL(childUrl).origin;
  } catch (e) {
    childOrigin = "";
  }

  var debugAttr = debugEnabled ? "" : " hidden";
  var doc = window.document;

  doc.open();
  doc.write(
    '<!doctype html>' +
      '<html lang="en">' +
      "<head>" +
      '  <meta charset="utf-8" />' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1" />' +
      "  <title>UI-BASIC Standalone Preview</title>" +
      "  <style>" +
      "    body { margin: 0; padding: 0; background: #020617; color: #e2e8f0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; overflow: hidden; }" +
      "    .ui-shell { width: 100vw !important; max-width: none !important; height: 100vh !important; margin: 0 !important; padding: 0 !important; display: flex; }" +
      "    .ui-shell-editor { width: min(420px, 42vw); min-width: 260px; max-width: 520px; height: 100%; box-sizing: border-box; border-right: 1px solid #334155; background: blue; padding: 12px; display: flex; flex-direction: column; gap: 8px; }" +
      "    .ui-shell-editor h1 { margin: 0; font-size: 1rem; }" +
      "    .ui-shell-editor p { margin: 0; font-size: 0.9rem; color: #cbd5e1; }" +
      "    .ui-shell-editor label { display: block; font-size: 0.8rem; color: #94a3b8; }" +
      "    .ui-shell-editor select, .ui-shell-editor textarea { width: 100%; box-sizing: border-box; border-radius: 4px; border: 1px solid #475569; background: #020617; color: #e2e8f0; font-family: 'Fira Code', 'Courier New', monospace; }" +
      "    .ui-shell-editor select { padding: 5px 6px; }" +
      "    .ui-shell-editor textarea { max-height: 600px; flex: 1; min-height: 0; padding: 8px; resize: none; }" +
      "    .ui-shell-status { font-size: 0.8rem; color: #93c5fd; }" +
      "    .ui-shell-preview { flex: 1; min-width: 0; height: 100%; background: blue; display: flex; justify-content: flex-end; }" +
      "    .ui-shell-frame { width: min(100%, 500px); height: 100%; border: 0; background: #fff; display: block; }" +
      "    .ui-shell-debug { border: 1px dashed #475569; border-radius: 6px; padding: 8px; font-size: 0.75rem; background: #0b1220; }" +
      "    .ui-shell-debug pre { margin: 6px 0 0; white-space: pre-wrap; word-break: break-word; max-height: 180px; overflow: auto; color: #bfdbfe; }" +
      "  </style>" +
      "</head>" +
      "<body>" +
      '  <div class="ui-shell" role="main">' +
      '    <section class="ui-shell-editor">' +
      "      <h1>UI-BASIC Standalone Preview</h1>" +
      "      <p>This left pane simulates the terminal/editor area from the parent website.</p>" +
      '      <label for="ui-shell-file-select">Mock terminal editor:</label>' +
      '      <select id="ui-shell-file-select" aria-label="Example file"></select>' +
      '      <textarea id="ui-shell-textarea" readonly spellcheck="false"></textarea>' +
      '      <div id="ui-shell-status" class="ui-shell-status">Click "Open in UI-BASIC Editor" inside the frame to load code here.</div>' +
      '      <section id="ui-shell-debug" class="ui-shell-debug"' +
      debugAttr +
      ">" +
      "      <strong>Debug overlay (?debug=1)</strong>" +
      '      <div id="ui-shell-debug-meta"></div>' +
      '      <pre id="ui-shell-debug-log"></pre>' +
      "    </section>" +
      "    </section>" +
      '    <section class="ui-shell-preview">' +
      '      <iframe id="ui-shell-frame" class="ui-shell-frame" src="' +
      escapeHtml(childUrl) +
      '" title="UI-BASIC lesson frame"></iframe>' +
      "    </section>" +
      "  </div>" +
      "</body>" +
      "</html>"
  );
  doc.close();

  var frame = doc.getElementById("ui-shell-frame");
  var fileSelect = doc.getElementById("ui-shell-file-select");
  var textarea = doc.getElementById("ui-shell-textarea");
  var statusEl = doc.getElementById("ui-shell-status");
  var debugMeta = doc.getElementById("ui-shell-debug-meta");
  var debugLog = doc.getElementById("ui-shell-debug-log");
  var files = [];

  function appendDebug(label, data) {
    if (!debugEnabled || !debugLog) {
      return;
    }

    var details = "";
    if (typeof data !== "undefined") {
      try {
        details = "\n" + JSON.stringify(data, null, 2);
      } catch (e) {
        details = "\n" + String(data);
      }
    }
    var line = new Date().toISOString() + " " + label + details;
    var existing = debugLog.textContent || "";
    debugLog.textContent = line + "\n\n" + existing.slice(0, 7000);
  }

  if (debugMeta) {
    debugMeta.textContent =
      "mode=standalone-shell | expectedOrigin=" +
      (childOrigin || "(any)") +
      " | childUrl=" +
      childUrl;
  }

  function showFileAt(index) {
    if (!files.length || index < 0 || index >= files.length) {
      textarea.value = "";
      return;
    }
    var file = files[index];
    textarea.value = String(file.content || "");
  }

  function renderExample(message) {
    var nextFiles = Array.isArray(message.files) ? message.files : [];
    files = nextFiles.slice();
    fileSelect.innerHTML = "";

    if (!files.length) {
      statusEl.textContent = "Received open-example message but no files were attached.";
      textarea.value = "";
      return;
    }

    files.forEach(function (file, idx) {
      var option = doc.createElement("option");
      option.textContent = file && file.name ? file.name : "Untitled-" + (idx + 1);
      option.value = String(idx);
      fileSelect.appendChild(option);
    });

    fileSelect.selectedIndex = 0;
    showFileAt(0);

    var title = message.title || message.exampleId || "Example";
    statusEl.textContent =
      title +
      " loaded in the mock editor. On the parent website this appears in the terminal/editor pane.";
  }

  if (fileSelect) {
    fileSelect.addEventListener("change", function () {
      showFileAt(fileSelect.selectedIndex);
    });
  }

  function originAllowed(origin) {
    if (window.location.protocol === "file:") {
      return origin === "null" || origin === "";
    }
    if (!childOrigin || childOrigin === "null") {
      return true;
    }
    return origin === childOrigin;
  }

  window.UIBasicStandaloneOpenExample = function (message) {
    renderExample(message || {});
    appendDebug("local fallback open", message || {});
  };

  window.addEventListener("message", function (event) {
    var sourceOk = !!frame && event.source === frame.contentWindow;
    var originOk = originAllowed(event.origin);
    var payload = event.data;
    var typeOk = payload && payload.type === "YoBasicOpenExample";

    appendDebug("message received", {
      origin: event.origin,
      sourceOk: sourceOk,
      originOk: originOk,
      type: payload && payload.type,
      typeOk: typeOk,
    });

    if (!sourceOk || !originOk || !typeOk) {
      return;
    }

    renderExample(payload);
    appendDebug("open example accepted", payload);
  });
})();