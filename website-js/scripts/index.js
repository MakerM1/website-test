let menu = document.querySelector('.open-menu')

function openMenu() {
    menu.classList.remove('open-menu')
    menu.classList.add('open-menu-active')
}

function closeMenu() {
    menu.classList.remove('open-menu-active')
    menu.classList.add('open-menu')
}