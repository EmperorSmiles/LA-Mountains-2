let menuOpen = false; 
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const sidemenu = document.querySelector('.sidemenu');
const menuLinks = document.querySelectorAll('.sidemenu a');

function closeMenu() {
    menuOpen = false;
    sidemenu.classList.remove('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'inline-block';
}

menuIcon.addEventListener('click', function() {
    menuOpen = !menuOpen;

    if (menuOpen) {
        sidemenu.classList.add('active');
        closeIcon.style.display = 'inline-block';
        menuIcon.style.display = 'none';
    } else {
        closeMenu();
    }
});

closeIcon.addEventListener('click', function() {
    closeMenu();
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        closeMenu();
    });
});

