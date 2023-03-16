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
    const closeMobileMenu = document.getElementById('close-mobile-menu')

    const toogleMenu = () => {
        //mainMenu.classList.toggle('hidden')
        mainMenu.classList.toggle('-left-full')
        mainMenu.classList.toggle('left-0')
        
        backgroundMobileMenu.classList.toggle('-left-full')
        backgroundMobileMenu.classList.toggle('left-0')
    }

    hamburgerBtn.addEventListener('click', toogleMenu)
    closeMobileMenu.addEventListener('click', toogleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

//banner detect width element and assing value height
const bigBannerSquare = document.querySelector('.big-banner-square')
const smallBanner = document.querySelectorAll('.small-banner')

let widthElement = bigBannerSquare.offsetWidth

bigBannerSquare.setAttribute("style", `height: ${widthElement}px`) 
smallBanner.forEach((banner) => {
    console.log(banner)
    banner.setAttribute("style", `height:${widthElement/2}px`)
})