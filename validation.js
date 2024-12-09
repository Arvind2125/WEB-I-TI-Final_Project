document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input, select, textarea");

  // Highlight inputs on focus
  inputs.forEach(input => {
      input.addEventListener("focus", function() {
          this.classList.add("border-blue-500");
      });
      input.addEventListener("blur", function() {
          this.classList.remove("border-blue-500");
      });
  });

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Validate fields
      const fname = document.getElementById("fname").value.trim();
      const nim = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const major = document.getElementById("major").value;
      const birthday = document.getElementById("birthday").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("tlp").value.trim();

      if (!fname || !nim || !email || !major || !birthday || !gender || !address || !phone) {
          alert("Please fill in all fields.");
          return;
      }

      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      // Validate phone number (numeric and minimum length)
      const phonePattern = /^[0-9]+$/;
      if (!phonePattern.test(phone) || phone.length < 10) {
          alert("Please enter a valid phone number (numeric and at least 10 digits).");
          return;
      }

      // If all validations pass, clear the form and show success message
      alert("Form submitted successfully!");
      form.reset(); // Clear the form
  });
});