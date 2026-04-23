
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

// Intersection Observer - animacje przy scrollowaniu
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
  '.stats__item, .benefits__item, .map__section, .benefits__text, .about__title, .about__text, .about__history, .about__history-title, .about__history-content, .values__title, .values__item, .membership__text, .membership__documents, .membership__documents-title, .membership__documents-subtitle, .membership__documents-item, .membership__registration-title, .membership__registration-item, .cta__container, .gallery__title, .gallery__info, .gallery__item, .contact__title, .contact__description, .contact__info-title, .contact__info-item'
).forEach(el => observer.observe(el));
});