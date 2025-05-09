// Function to open the login modal
function openLoginModal() {
  document.getElementById('loginModal').classList.add('show');
}

// Function to close the login modal
function closeModal() {
  document.getElementById('loginModal').classList.remove('show');
}

// Function to handle login
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const correctUsername = '8';
  const correctPassword = '1';

  // Check if credentials are correct
  if (username === correctUsername && password === correctPassword) {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('resourcesSection').style.display = 'block';
  } else {
    alert('Invalid credentials! Please try again.');
  }
}

// Function to open Maths Book with password protection
function openMathsBook() {
  const correctPassword = 'Hardeep6713@';
  const userInput = prompt('Please enter the password to access the Maths Book:');
  
  // If the password matches, open the link
  if (userInput === correctPassword) {
    window.open("http://readedge.mielib.com/home/ViewContent?BookId=49&BookName=Excellence%20In%20Mathematics&type=5", "_blank");
  } else {
    alert('Incorrect password. Access denied.');
  }
}

// Open login modal when the page loads
window.onload = function() {
  openLoginModal();
}
