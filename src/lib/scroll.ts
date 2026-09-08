// 🎯 Scroll an in-page anchor into view at its *real* position — reliable even while layout is still settling
const NAV_OFFSET = 88;

export function scrollToHash(hash: string) {
  const el = document.querySelector<HTMLElement>(hash);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", hash);
  return true;
}
