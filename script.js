// Mobile menu toggle
document.getElementById("menu-btn").onclick = function () {
  document.getElementById("menu").classList.toggle("show");
};

// Form submit
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  alert("Booking Successful!");
};

// Button scroll
function scrollToDest() {
  document.getElementById("dest").scrollIntoView();
}