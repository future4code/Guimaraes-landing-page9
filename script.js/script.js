const navButton = document.getElementById('mobile-nav')
const sidebar = document.getElementById('sidebar')

navButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active')
})