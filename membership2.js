document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('membershipForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent actual form submission
  
      // Optionally, you can validate here or collect data
  
      // Replace the form content with a thank you message
      form.innerHTML = `
        <h2>Thank you for joining The Iron Temple!</h2>
        <p>Your membership form has been successfully submitted.</p>
      `;
    });
  });
  