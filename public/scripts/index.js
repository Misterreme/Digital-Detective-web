const $ = (id) => document.getElementById(id);

const navBar = $("nav-bar");
console.log("loaded")

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navBar.classList.add("backdrop-blur-lg");
    navBar.classList.remove("bg-white");
  } else {
    navBar.classList.remove("bg-red-500");
    navBar.classList.add("bg-white");
  }
});
