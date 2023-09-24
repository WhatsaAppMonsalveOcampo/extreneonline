const $navbarHeader = document.getElementById("navbar-header"),
$navbarHeaderLinks = document.getElementById("navbar-header__links"),
mainScroll = document.querySelector("main").offsetTop,
$hamburguer = document.getElementById("hamburguer"),
$hamburgerDivCenter = document.getElementById("hamburguer__div-center")
let initialScroll = window.scrollY

$hamburguer.addEventListener("click", () => {
	$hamburgerDivCenter.classList.toggle("hamburguer--simple")
	document.getElementById("navbar__links").classList.toggle("navbar--visible");
	// // document.querySelector(".contact-button").classList.toggle("contact-button--hiden");
	// document.querySelector("main").classList.toggle("pointer-events-none");

});


window.addEventListener("scroll", () => {
	let currentScroll = window.scrollY
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
