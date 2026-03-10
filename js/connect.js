// Get all the connect buttons
let buttons = document.querySelectorAll(".connect-btn");

// Empty array to store names of connected students
let connected = [];

// Loop through each button
buttons.forEach(function(btn) {

  // Add click event
  btn.addEventListener("click", function() {

    // Find student name from the same card
    let name = btn.parentElement.querySelector("h3").textContent;

    // Check if already connected
    if (!connected.includes(name)) {
      connected.push(name);
      alert("✅ Connected with " + name);
    } else {
      alert("⚡ You already connected with " + name);
    }

    console.log("Connected Students: ", connected);
  });
});