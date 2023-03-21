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
const hamburgerBtn = document.getElementById('hamburger-button')
const mainMenu = document.getElementById('main-menu')
const backgroundMobileMenu = document.getElementById('background-mobile-menu')
const closeMobileMenus = document.querySelectorAll('.close-mobile-menu')

const toogleMenu = () => {
    mainMenu.classList.toggle('-left-full')
    mainMenu.classList.toggle('left-0')
    backgroundMobileMenu.classList.toggle('hidden')
}

hamburgerBtn.addEventListener('click', toogleMenu)
backgroundMobileMenu.addEventListener('click', toogleMenu)
closeMobileMenus.forEach(closeMobileMenu => {
    closeMobileMenu.addEventListener('click', toogleMenu)
})

//search
const mainContent = document.getElementById('main-content')
const search = document.getElementById('search')
const searchForm = document.getElementById('search-form')
const gradientBlock = document.getElementById('gradient-block')

const showSearchInput = () => {
    mainContent.classList.toggle('blur-sm')
    searchForm.classList.toggle('opacity-0')
    searchForm.classList.toggle('opacity-100')
    searchForm.classList.toggle('invisible')
    searchForm.classList.toggle('visible')
    gradientBlock.classList.toggle('opacity-0')
    gradientBlock.classList.toggle('opacity-100')
    gradientBlock.classList.toggle('invisible')
    gradientBlock.classList.toggle('visible')
}
search.addEventListener('click', showSearchInput)
gradientBlock.addEventListener('click', showSearchInput)

//banner detect width element and assing value height
const bigBannerSquare = document.querySelector('.big-banner-square')
const smallBanner = document.querySelectorAll('.small-banner')

let widthElement = bigBannerSquare.offsetWidth

bigBannerSquare.setAttribute("style", `height: ${widthElement}px`) 
smallBanner.forEach((banner) => {
    //console.log(banner)
    banner.setAttribute("style", `height:${widthElement/2}px`)
})

//dropmenu
const dropmenuBtns = document.querySelectorAll('.dropmenu-btn')

dropmenuBtns.forEach(dropmenuBtn => {

    const showDropMenu = () => {
        dropmenuBtn.parentElement.classList.toggle('bg-gray-200')
        dropmenuBtn.parentElement.classList.toggle('dark:bg-gray-700')
        dropmenuBtn.classList.toggle('after:rotate-90')
        dropmenuBtn.nextElementSibling.classList.toggle('max-h-0')
    }
    dropmenuBtn.addEventListener('click', showDropMenu)
})

//switcher cat tab
const allCatTab = document.querySelectorAll('.cat-tab')
const allTabContent = document.querySelectorAll('.tab-content')

allCatTab.forEach((catTab, index) => {
    catTab.addEventListener('click', () => {
        allCatTab.forEach(catTab => {
            catTab.classList.remove('active-link')
        })
        if (!catTab.classList.contains('active-link')) 
            catTab.classList.add('active-link')
        allTabContent.forEach(tabContent => {
            tabContent.classList.remove('flex')
            tabContent.classList.add('hidden')
            })
  
        allTabContent[index].classList.add('flex')
        allTabContent[index].classList.remove('hidden')
  
    })
})


//quik view
const allProductCard = document.querySelectorAll('.product-card')
const allQuickViewBtn = document.querySelectorAll('.quick-view-btn')

allProductCard.forEach(productCard => {
    productCard.addEventListener('mouseenter', () => {
        productCard.children[0].classList.remove('hide-btn')
        productCard.children[0].classList.add('show-btn')        
    })
    productCard.addEventListener('mouseleave', () => {
        productCard.children[0].classList.add('hide-btn')
        productCard.children[0].classList.remove('show-btn') 
    })
})