document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (!menuToggle || !mobileMenu || !closeMenu) {
    console.error("ID mismatch: menuToggle / mobileMenu / closeMenu not found");
    return;
  }

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

});
