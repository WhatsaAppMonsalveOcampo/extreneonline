const $navbarHeader = document.getElementById("navbar-header"),
$navbarHeaderLinks = document.getElementById("navbar-header__links"),
mainScroll = document.querySelector("main").offsetTop,
$hamburguer = document.getElementById("hamburguer"),
$hamburgerDivCenter = document.getElementById("hamburguer__div-center")
let initialScroll = window.scrollY

console.log("click")
$hamburguer.addEventListener("click", () => {
	$hamburgerDivCenter.classList.toggle("hamburguer--simple")
	document.getElementById("navbar__links").classList.toggle("navbar--visible");
	// // document.querySelector(".contact-button").classList.toggle("contact-button--hiden");
	// document.querySelector("main").classList.toggle("pointer-events-none");

});

// const navbarLinks = document.querySelectorAll(".navbar__link");

// navbarLinks.forEach((link) => {
// 	link.addEventListener("click", (e) => {
// 		// Quita la clase .navbar__link--active de todos los elementos
// 		navbarLinks.forEach((link) => {
// 			link.classList.remove("navbar__link--active");
// 		});

// 		// Agrega la clase .navbar__link--active solo al elemento clicado
// 		e.target.classList.add("navbar__link--active");
// 	});
// });

window.addEventListener("scroll", () => {
	// console.log("initial " + initialScroll)
	let currentScroll = window.scrollY
	// console.log("current " + currentScroll)
	if (currentScroll >= initialScroll) {
		$navbarHeader.classList.add("navbar-header--small")
		$navbarHeader.classList.add("navbar-header--hide")
	}else {
		// $navbarHeader.classList.remove("navbar-header--hide")
	}
	if (currentScroll == 0) {
		$navbarHeader.classList.remove("navbar-header--small")
	}
	if (currentScroll > mainScroll ) {
		$navbarHeader.classList.add("navbar-header--background")
	}else{
		$navbarHeader.classList.remove("navbar-header--background")
	}
	setTimeout(() => {
		initialScroll = currentScroll;
	}, 100);

});
