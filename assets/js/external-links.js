document.addEventListener("DOMContentLoaded", function () {
  const hostname = window.location.hostname;

  document.querySelectorAll("a[href]").forEach(function (link) {
    const href = link.getAttribute("href");

    // skip anchors, mailto, tel, javascript, and empty hrefs
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      return;
    }

    // Convert to absolute URL (so we can reliably compare hostnames)
    let url;
    try {
      url = new URL(href, window.location.origin);
    } catch (e) {
      return;
    }

    const isExternal = url.hostname && url.hostname !== hostname;

    if (isExternal) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
