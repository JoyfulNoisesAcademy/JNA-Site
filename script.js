const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const currentYear = document.getElementById("currentYear");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

currentYear.textContent = new Date().getFullYear();