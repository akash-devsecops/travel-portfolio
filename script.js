document.addEventListener("DOMContentLoaded", () => {
  const states = {
    "California": "images/california.jpg",
    "Texas": "images/texas.jpg",
    "New York": "images/new-york.jpg"
  };

  // Assuming you're using an SVG map
  const mapContainer = document.getElementById("map-container");
  mapContainer.innerHTML = '<svg>...U.S. map SVG...</svg>'; // Add your SVG map here.

  document.querySelectorAll("svg path").forEach(state => {
    state.addEventListener("click", () => {
      const stateName = state.getAttribute("data-name"); // Adjust to your SVG's structure
      const imageDisplay = document.getElementById("image-display");
      imageDisplay.innerHTML = `<img src="${states[stateName]}" alt="${stateName}">`;
    });
  });
});
