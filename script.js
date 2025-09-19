// ====================
// Part 1: Event Handling
// ====================
document.getElementById("showMessageBtn").addEventListener("click", function() {
  const messageOutput = document.getElementById("messageOutput");
  messageOutput.textContent = "🎉 You clicked the button!";
});

// ====================
// Part 2: Interactive Features
// ====================

// Feature 1: Click Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});

// Feature 2: Theme Toggle
document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

// ====================
// Part 3: Custom Form Validation
// ====================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Validation logic
  if (username === "" || email === "" || password === "") {
    message.textContent = "⚠️ All fields are required!";
    message.style.color = "red";
  } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
    message.textContent = "⚠️ Enter a valid email address!";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.textContent = "⚠️ Password must be at least 6 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  }
});

