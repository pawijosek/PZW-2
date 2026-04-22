
// BUTTONY DO NAWIGACJI
const menuButton = document.querySelector('.icon__menu')
const navMenu = document.querySelector('nav')
const burgerIcon = document.querySelector('.burger__btn')
const closeIcon = document.querySelector('.close__menu')

menuButton.addEventListener('click', () => {
	navMenu.classList.toggle('active')
	burgerIcon.classList.toggle('hidden')
	closeIcon.classList.toggle('hidden')
})


// LICZNIK do animacji liczb w sekcji "Statystyki"

const stats = document.querySelectorAll('.stats__number')

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			animateNumber(entry.target)
			observer.unobserve(entry.target) // żeby liczyło tylko raz
		}
	})
})

stats.forEach(stat => observer.observe(stat))

function animateNumber(el) {
	const target = parseInt(el.dataset.target) // bierzemy liczbę z data-target
	let current = 0
	const duration = 2000 // 2 sekundy
	const step = target / (duration / 16) // 60fps

	const timer = setInterval(() => {
		current += step
		if (current >= target) {
			el.textContent = target + '+'
			clearInterval(timer)
		} else {
			el.textContent = Math.floor(current) + '+'
		}
	}, 16)
}
