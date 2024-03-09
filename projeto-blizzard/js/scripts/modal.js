{
  const btnOpenModal = document.getElementById("js-open-modal");
  const btnCloseModal = document.getElementById("js-close-modal");
  const overlay = document.getElementById("js-overlay");

  function modal(event) {
    event.preventDefault();
    let tagHtml = document.documentElement;
    tagHtml.classList.toggle("show-modal");
  }

  btnOpenModal.addEventListener("click", modal);
  btnCloseModal.addEventListener("click", modal);
  overlay.addEventListener("click", modal);
}
