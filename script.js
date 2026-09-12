const menuIcon = document.getElementById("menu-icon");
const navLink = document.getElementById("nav-link");
const searchBtn = document.getElementById("search-btn");

// =========================================================
// MOBILE MENU
// =========================================================

menuIcon.addEventListener("click", () => {
  navLink.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// =========================================================
// SEARCH
// =========================================================

searchBtn.addEventListener("click", () => {
  const searchInput = document.querySelector(".search-input");

  searchInput.focus();
});

// =========================================================
// PARALLAX AIRPLANE
// =========================================================

const plane = document.querySelector(".plane");

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth <= 768) return;

  const x = (window.innerWidth / 2 - e.clientX) / 80;
  const y = (window.innerHeight / 2 - e.clientY) / 80;

  plane.style.transform = `translate(${x}px, ${y}px) rotate(-8deg)`;
});

// =========================================================
// ACTIVE NAV
// =========================================================

const links = document.querySelectorAll(".nav-link a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    ```
links.forEach(item => {
  item.classList.remove("active");
});

link.classList.add("active");
```;
  });
});
