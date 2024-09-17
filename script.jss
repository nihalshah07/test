const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')
menuIcon.onclick = ()=>{
    navLinks.classList.toggle('active');
}

document.onclick = function(e){
    if (e.target.id !== 'nav-links' && e.target.id !== 'menu-icon')
    {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active')
    }
}