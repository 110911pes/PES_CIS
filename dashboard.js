// Get username from URL
const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");

// Display username on dashboard (default: Guest)
document.getElementById("user-display").textContent = user ? user : "Guest";

// Function to open links in new tab
function openLink(url) {
  window.open(url, "_blank");
}

// Show admin button only if username is 'admin'
if (user && user.toLowerCase() === "admin") {
  const adminBtn = document.getElementById("admin-btn");
  if (adminBtn) {
    adminBtn.style.display = "block";
  }
}

// Logout function
function logout() {
  alert("Logging out...");
  // redirect back to login page (index.html)
  window.location.href = "index.html";
}
