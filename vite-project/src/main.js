const btnBurger = document.querySelector(".header-burger-button");
const btnClose = document.querySelector(".mobile-menu-close");
const mobile = document.querySelector(".mobile-bg");
const btnMobile = document.querySelector(".mobile-anchor");
const mobileListItem = document.querySelectorAll(".mobile-list-item");

// MobileMenu
btnBurger.addEventListener("click", () => {
  mobile.classList.add("is-open");
});

const mobileMenuClose = () => {
  mobile.classList.remove("is-open");
};

btnClose.addEventListener("click", mobileMenuClose);
mobileListItem.forEach((listItem) => {
  listItem.addEventListener("click", mobileMenuClose);
});
