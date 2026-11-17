// Forwards the bank's redirect (…/callback/?code=…&state=…, or ?error=…) to Spend Tracker on this Mac.
// The destination is fixed: this page can never send you anywhere else. Nothing is stored or sent elsewhere.
(function () {
  var TARGET = 'http://localhost:47321/callback';
  var query = window.location.search;
  var msg = document.getElementById('msg');
  if (!query || query.charAt(0) !== '?' || query.length > 4096) {
    if (msg) msg.textContent = 'Nothing to forward. You can close this page.';
    return;
  }
  window.location.replace(TARGET + query);
})();
