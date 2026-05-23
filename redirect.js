(function () {
  var loc = window.location;
  if (!loc || !loc.hostname) return;

  var hostname = String(loc.hostname || "").toLowerCase();
  var protocol = String(loc.protocol || "").toLowerCase();

  // Skip redirects while running locally or on development/private hosts.
  if (
    protocol === "file:" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "0.0.0.0" ||
    hostname === "[::1]" ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal") ||
    /^10\./.test(hostname) ||
    /^192\.168\./.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
  ) {
    return;
  }

  // Legacy domain migration: yobasic.com -> uibasic.com
  if (hostname === "yobasic.com" || hostname === "www.yobasic.com") {
    var newUrl = loc.protocol + "//uibasic.com" + loc.pathname + loc.search + loc.hash;
    window.location.replace(newUrl);
  }
})();