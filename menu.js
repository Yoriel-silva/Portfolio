let btnAbrirMenu = document.getElementById('btnAbrirMenu')
let menuMobile = document.getElementById('menuMobile')
let overlayMenu = document.getElementById('overlayMenu')

btnAbrirMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const target = document.querySelector(this.getAttribute('href'))

        if (target) {
            const targetPosition = target.offsetTop
            smoothScrollTo(targetPosition - 100, 800) // 1000ms = 1 segundo
        }
    })
})