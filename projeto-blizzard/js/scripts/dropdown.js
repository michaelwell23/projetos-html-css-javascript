{
  const btnMenu = document.querySelectorAll("#js-btn-dropdown");
  const btnDropdown = document.querySelectorAll("#js-menu");

  btnMenu.forEach((btn, index) => {
    if (btn) {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        btnDropdown.forEach((dropdown) => {
          dropdown.classList.remove("active");
          if (dropdown) {
            dropdown.addEventListener("mouseleave", (event) => {
              dropdown.classList.remove("active");
              btnMenu.forEach((item) => {
                item.classList.remove("active");
              });
            });
          }
        });

        btnMenu.forEach((item) => {
          item.classList.remove("active");
        });

        btn.classList.add("active");
        btnDropdown[index].classList.add("active");
      });
    }
  });
}
