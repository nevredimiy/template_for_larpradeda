// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('darkMode') === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

//Dark Mode
const darkMode = document.getElementById('dark-mode')
const html = document.querySelector('html')

const checkThemeMode =  () => {
    html.classList.toggle('dark')
    if (html.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'dark')    
    } else {
        localStorage.setItem('darkMode', 'light')    
    }    
}

darkMode.addEventListener('click', checkThemeMode)


//Burger
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mainMenu = document.getElementById('main-menu')
    const backgroundMobileMenu = document.getElementById('background-mobile-menu')

    const toogleMenu = () => {
        mainMenu.classList.toggle('hidden')
        backgroundMobileMenu.classList.toggle('hidden')
        hamburgerBtn.classList.toggle('toggle-hamburger-button')
    }

    hamburgerBtn.addEventListener('click', toogleMenu)
    mainMenu.addEventListener('click', toogleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)