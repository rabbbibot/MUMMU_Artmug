const PAGE_LEAVE_MS = 420;

function isInternalPageLink(anchor) {
  if (!anchor || anchor.target === "_blank") return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) return false;

  if (/^https?:\/\//i.test(href)) {
    try {
      return new URL(href).origin === location.origin;
    } catch {
      return false;
    }
  }

  return href.endsWith(".html") || href === "index.html" || href === "./";
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a[href]");
  if (!isInternalPageLink(anchor)) return;

  event.preventDefault();

  const href = anchor.href;
  document.body.classList.add("page-leaving");

  window.setTimeout(() => {
    location.href = href;
  }, PAGE_LEAVE_MS);
});
