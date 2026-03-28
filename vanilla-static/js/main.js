(function () {
  var toggle = document.getElementById("nav-toggle");
  var mobile = document.getElementById("nav-mobile");
  var iconMenu = document.getElementById("icon-menu");
  var iconClose = document.getElementById("icon-close");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setOpen(open) {
    if (!mobile || !toggle) return;
    mobile.classList.toggle("hidden", !open);
    if (iconMenu && iconClose) {
      iconMenu.classList.toggle("hidden", open);
      iconClose.classList.toggle("hidden", !open);
    }
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var isOpen = !mobile.classList.contains("hidden");
      setOpen(!isOpen);
    });

    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }
})();
