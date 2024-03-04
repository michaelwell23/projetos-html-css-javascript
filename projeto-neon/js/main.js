document.addEventListener('DOMContentLoaded', function () {
  const btnMobile = document.querySelector('.btn-mobile');
  const closeMenuBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  btnMobile.addEventListener('click', function () {
    mobileMenu.classList.add('menu-open');
    btnMobile.style.display = 'none'; // Oculta o botão btn-mobile
    closeMenuBtn.style.display = 'block'; // Mostra o botão close-menu
  });

  closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('menu-open');
    btnMobile.style.display = 'block'; // Mostra o botão btn-mobile
    closeMenuBtn.style.display = 'none'; // Oculta o botão close-menu
  });
});
