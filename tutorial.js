// Shared tutorial script for UI-BASIC chapters
// - Prevent F5 reload inside iframe
// - Wire "Open in UI-BASIC Editor" buttons to postMessage with example files

(function () {
  function getRuntimeConfig() {
    const runtime = window.UIBASIC_RUNTIME || {};
    const params = new URLSearchParams(window.location.search || "");
    return {
      debug: Boolean(runtime.debug) || params.get("debug") === "1",
      targetOrigin: runtime.parentOrigin || params.get("parentOrigin") || "*",
    };
  }

  const runtimeConfig = getRuntimeConfig();

  function debugLog(label, payload) {
    if (!runtimeConfig.debug) return;
    try {
      if (typeof payload === "undefined") {
        console.debug("[UIBASIC DEBUG]", label);
      } else {
        console.debug("[UIBASIC DEBUG]", label, payload);
      }
    } catch (e) {
      // Ignore debug logging failures.
    }
  }

  // Prevent F5 inside the iframe from refreshing the whole IDE
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "F5") {
        e.preventDefault();
      }
    },
    true
  );

  function getFilesFromExampleSection(sectionEl) {
    // Support multiple container types: <textarea>, <pre>, or any element with data-file-name
    const nodes = sectionEl.querySelectorAll("[data-file-name]");
    const files = [];
    // Determine a suggested base directory based on the tutorial context
    // e.g., article[data-chapter="1"] => "chapter1"
    const article = sectionEl.closest("article.tutorial");
    let baseDir = "";
    if (article) {
      const ch = article.getAttribute("data-chapter");
      if (ch) {
        baseDir = `chapter${String(ch).trim()}`;
      }
    }
    nodes.forEach((el) => {
      const rawName = el.getAttribute("data-file-name") || "Untitled";
      const name = baseDir ? `${baseDir}/${rawName}` : rawName;
      const tag = el.tagName.toLowerCase();
      // Prefer .value for <textarea> to get literal text, fallback to textContent
      let content = tag === "textarea" ? el.value : el.textContent;
      if (typeof content !== "string") content = "";
      content = content.replace(/^\n/, ""); // trim single leading newline
      files.push({
        name,
        language: el.getAttribute("data-file-language") || "basic",
        role: el.getAttribute("data-file-role") || "aux",
        content,
      });
    });
    return files;
  }

  function sendOpenExample(message) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(message, runtimeConfig.targetOrigin);
      debugLog("postMessage sent", {
        targetOrigin: runtimeConfig.targetOrigin,
        type: message.type,
        exampleId: message.exampleId,
      });
      return;
    }

    if (typeof window.UIBasicStandaloneOpenExample === "function") {
      window.UIBasicStandaloneOpenExample(message);
      debugLog("standalone fallback invoked", message);
      return;
    }

    debugLog("no open-example receiver available", message);
  }

  function handleOpenClick(event) {
    const btn = event.currentTarget;
    const exampleId = btn.getAttribute("data-example-id");
    if (!exampleId) return;

    const section = document.querySelector(
      '.example[data-example-id="' + exampleId + '"]'
    );
    if (!section) return;

    const title = section.getAttribute("data-example-title") || "Untitled Example";
    const files = getFilesFromExampleSection(section);

    const message = {
      type: "YoBasicOpenExample",
      exampleId: exampleId,
      title: title,
      files: files,
    };

    sendOpenExample(message);
  }

  function initExampleButtons() {
    const buttons = document.querySelectorAll("button.example-open");
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleOpenClick);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExampleButtons);
  } else {
    initExampleButtons();
  }
})();
