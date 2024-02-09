document.addEventListener('DOMContentLoaded', function () {
  const btnMobile = document.querySelector('.btn-mobile');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');

  btnMobile.addEventListener('click', function () {
    mobileMenu.style.display =
      mobileMenu.style.display === 'block' ? 'none' : 'block';
  });

  closeBtn.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });
});
