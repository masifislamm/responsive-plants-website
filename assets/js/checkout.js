/*=============== STEP NAVIGATION ===============*/
function goToStep(step) {
    // Hide all panels
    document.querySelectorAll('.checkout__panel').forEach(p => {
        p.classList.add('checkout__panel--hidden')
    })

    // Show target panel
    const target = document.getElementById('panel-' + step)
    if (target) {
        target.classList.remove('checkout__panel--hidden')
    }

    // Update step indicators
    document.querySelectorAll('.checkout__step').forEach(el => {
        const s = parseInt(el.dataset.step)
        el.classList.remove('checkout__step--done', 'checkout__step--active')
        if (s < step)       el.classList.add('checkout__step--done')
        else if (s === step) el.classList.add('checkout__step--active')
    })

    // Update connector lines
    document.querySelectorAll('.checkout__step-line').forEach((line, i) => {
        line.classList.toggle('checkout__step-line--done', i < step - 1)
    })

    // Hide order summary on confirm screen
    const summary = document.getElementById('checkout-summary')
    if (summary) {
        summary.style.display = step === 3 ? 'none' : ''
    }

    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
