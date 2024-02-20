document.addEventListener('DOMContentLoaded', function () {
  const btnMobile = document.querySelector('.btn-mobile');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  const menuLinks = document.querySelectorAll('.mobile-menu a'); // Seleciona todos os links dentro do menu

  btnMobile.addEventListener('click', function () {
    mobileMenu.style.display =
      mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });

  // Adiciona evento de clique para cada link dentro do menu
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.style.display = 'none'; // Oculta o menu ao clicar em um link
    });
  });
});
