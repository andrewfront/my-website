const scroll = () => {
    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('#header')
        const mainContainer = document.querySelector('.main')
        const scrollHeight = window.pageYOffset
        if (scrollHeight > 250) {
            navBar.classList.add('fixed')
            mainContainer.style.marginTop = `60px`
        } else {
            navBar.classList.remove('fixed')
            mainContainer.style.marginTop = `0px`
        }
    })
    const menuLinks = document.querySelectorAll('[data-scroll]')
if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener('click', menuLinkClick)
    })
}
function menuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
        const goToBlock = document.querySelector(menuLink.dataset.scroll)
        const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('#header').offsetHeight
        window.scrollTo({
            top: goToBlockValue,
            behavior: 'smooth'
        })
        e.preventDefault()
    }
}
const headerLogo = document.querySelectorAll('#logo')
headerLogo.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: (0, 0),
            behavior: 'smooth'
        })
    })
})
}
export default scroll