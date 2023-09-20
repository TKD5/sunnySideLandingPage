const hamburgerMenu = document.querySelector('.burger-icon');
const mobileMenu = document.querySelector('.mobile-header-items');

hamburgerMenu.addEventListener('click', function() {
    if (mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'flex';
    } else  {
        mobileMenu.style.display = 'none';
    }
})