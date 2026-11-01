
const changeBtn = document.getElementById('changeBtn');
const message = document.getElementById('message');

function changeMessage() {
  message.textContent = "Hello there!";
}

changeBtn.addEventListener('click', changeMessage);