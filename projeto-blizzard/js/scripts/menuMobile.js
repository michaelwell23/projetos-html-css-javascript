{
  // Menu Mobile
  const btnMenuMobile = document.getElementById("js-btn-menu-mobile");
  const closeModal = document.getElementById("js-close-modal");
  const overlayMenu = document.getElementById("js-overlay");
  function menuMobile() {
    document.documentElement.classList.toggle("menu-opened");
  }

  if (btnMenuMobile) {
    btnMenuMobile.addEventListener("click", menuMobile);
  }

  if (overlayMenu) {
    overlayMenu.addEventListener("click", menuMobile);
  }

  if (closeModal) {
    closeModal.addEventListener("click", menuMobile);
  }
}
