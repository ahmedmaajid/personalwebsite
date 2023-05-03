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
