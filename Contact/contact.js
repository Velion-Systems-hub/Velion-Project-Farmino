
//Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMsg = document.getElementById('successMsg');
  
    if (email && message) {
      successMsg.textContent = "Message sent successfully!";
      successMsg.style.color = "green";
      this.reset();
      setTimeout(() => {
        successMsg.textContent = "";
      }, 3000);
    } else {
      successMsg.textContent = "Please fill in all fields, Thanks.";
      successMsg.style.color = "red";
    }
  });
  