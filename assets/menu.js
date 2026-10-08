// Pull-down menu: <details class="menu"> works without JavaScript; this adds
// closing on Escape, on a click outside the menu, and after choosing a link.
document.querySelectorAll("details.menu").forEach((menu) => {
  const summary = menu.querySelector("summary");
  const sync = () => summary.setAttribute("aria-expanded", menu.open ? "true" : "false");
  sync();
  menu.addEventListener("toggle", sync);
  document.addEventListener("click", (e) => {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
});
