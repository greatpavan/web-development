document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Simple client-side validation (replace with actual back-end validation in a real app)
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in both fields!";
      return;
    }
  
    // Assuming the username and password are correct (You would usually verify with the server)
    if (username === "user" && password === "password123") {
      alert("Login successful!");
      // Redirect to the home page or dashboard (For now, just redirect to a demo page)
      window.location.href = "index.html"; 
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });
  