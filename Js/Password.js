const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const messageElement = document.getElementById('message');

const correctPassword = '7camp219';

submitButton.addEventListener('click', function() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    messageElement.textContent = 'Пароль верный!';
    messageElement.style.color = 'green';
	window.location.href = 'Main/Good_work-team_Main.html'
  } else {
    messageElement.textContent = 'Неверный пароль!';
    messageElement.style.color = 'red';
  }
});