const openButton = document.getElementById("open-sidebar-button");
const closeButton = document.getElementById("close-sidebar-button");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

const media = window.matchMedia("(max-width: 700px)");

media.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
	const isMobile = e.matches;
	if (isMobile) {
		navbar.setAttribute("inert", "");
	} else {
		// Desktop device
		navbar.removeAttribute("inert");
		navbar.classList.remove("show"); // Close sidebar if resizing to desktop
		openButton.setAttribute("aria-expanded", "false");
		overlay.style.display = "none"; // Hide overlay on desktop
	}
}

function openSidebar() {
	navbar.classList.add("show");
	openButton.setAttribute("aria-expanded", "true");
	navbar.removeAttribute("inert"); // Enable links when sidebar is open
	overlay.style.display = "block"; // Show overlay when sidebar is open
}

function closeSidebar() {
	navbar.classList.remove("show");
	openButton.setAttribute("aria-expanded", "false");
	navbar.setAttribute("inert", ""); // Disable links when sidebar is closed
	overlay.style.display = "none"; // Hide overlay when sidebar is closed
}

updateNavbar(media);

// ACCORDION FUNCTIONALITY
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
	const itemToggle = this.getAttribute("aria-expanded");

	// Close all other accordions
	items.forEach((item) => item.setAttribute("aria-expanded", "false"));

	// Toggle the clicked accordion
	if (itemToggle === "false") {
		this.setAttribute("aria-expanded", "true");
	}
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
