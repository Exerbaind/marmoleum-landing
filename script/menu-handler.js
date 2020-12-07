const menuButton = document.querySelector(".header__menu-handler");
const navbarList = document.querySelector(".header__navbar");

// Функции

const menuHandler = () => {
  menuButton.classList.toggle("header__menu-handler_active");
  navbarList.classList.toggle("header__navbar_active");
};

// Event
menuButton.addEventListener("click", menuHandler);
