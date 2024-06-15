// navbar-mobile-pop-up
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggleButton = document.getElementById("navbar-toggle-button");
    const navbarMobilePopup = document.getElementById("navbar-mobile-popup");
    const navbarPopupClose = document.getElementById("navbar-mobile-popup-close");
    const navbarLinks = navbarMobilePopup.querySelectorAll(
      '.navbar-mobile-brand a, navbar-mobile-menu a:not([href="#"]), .navbar-mobile-start-btn button'
    );
  
    navbarToggleButton.addEventListener("click", function () {
      navbarMobilePopup.classList.add("show");
    });
  
    navbarPopupClose.addEventListener("click", () => {
      navbarMobilePopup.classList.remove("show");
    });
  
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarMobilePopup.classList.remove("show");
      });
    });
  });
  