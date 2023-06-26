const toggleBar = document.querySelector("nav .toggle_bar");
toggleBar.addEventListener("click", () => {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("navactive");

  toggleBar.classList.toggle("close_active");
  // Check if the nav menu is active
  if (nav.classList.contains("navactive")) {
    toggleBar.innerHTML = "&times;"; // Set toggle bar icon to "&times;"
  } else {
    toggleBar.innerHTML = "&#9776;"; // Set toggle bar icon to bar icon
  }
});

// Check if device is in landscape mode
// if (window.matchMedia("(orientation: landscape)").matches) {
//   alert("Please turn your device to portrait mode for better look.");
// }
const model = document.querySelector(".box .model img");
const box = document.querySelector(".box");
const gallery = document.querySelector(".gallery");
const allImgs = document.querySelectorAll(".gallery img");
const closeButton = document.querySelector(".model p span");

allImgs.forEach((img) =>
  img.addEventListener("click", (e) => {
    openModel(e);
  })
);

function openModel(e) {
  currentImgSource = e.target.src;
  box.style.display = "block";
  model.src = currentImgSource;

  gallery.style.filter = "blur(10px)";
  gallery.style.pointerEvents = "none";

  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

closeButton.addEventListener("click", () => {
  box.style.display = "none";
  gallery.style.filter = "unset";
  gallery.style.pointerEvents = "unset";
});
