//function to select any element on DOM
const selectElement = element => document.querySelector(element);

//Call selectElement function then values into variables
const header = selectElement("header");
const mainContent = selectElement("main");

//Click event on hamburger menu to trigger the .active state
selectElement(".hamburger").addEventListener("click", () => {
  header.classList.toggle("active");
  mainContent.classList.toggle("active");
});

//Close sidebar when clicked outside of it
window.onclick = event => {
  if (event.target.matches(".active")) {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      mainContent.classList.remove("active");
    }
  }
};
