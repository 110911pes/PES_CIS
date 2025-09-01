function login() {
  const lrn = document.getElementById("username-input").value.trim();

  if (lrn === "") {
    alert("Please enter your valid Username");
    return;
  }

  const allowedUsers = [
    "admin110911", "4743855", "4745740", "4539229", "4745402", "6506301",
    "4424712", "4538439", "4586705", "6023222", "4371369", "6023703",
    "6022056", "6022057", "6436116", "4437279", "6438492", "4430914",
    "6017339", "4240723", "4134347", "6020452", "4587005", "4265140",
    "6506154", "4743558", "6435046", "4422498"
  ];

  if (!allowedUsers.includes(lrn.toLowerCase())) {
    alert("Access Denied: Invalid Username");
    return;
  }

  window.location.href = `dashboard.html?user=${encodeURIComponent(lrn)}`;
}

// ✅ REAL Reshuffling of image positions in the DOM
function reshuffleImages() {
  const grid = document.querySelector(".image-grid");
  const images = Array.from(grid.children);

  // Fisher-Yates Shuffle
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // Re-insert shuffled images into the grid
  images.forEach((img) => grid.appendChild(img));
}

window.addEventListener("load", () => {
  setInterval(reshuffleImages, 3000); // Reshuffle every 3s
});
