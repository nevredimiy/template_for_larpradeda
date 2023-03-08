const darkMode = document.getElementById('dark-mode')
const html = document.querySelector('html')

darkMode.addEventListener('click', () => {
    html.classList.toggle('dark')
})