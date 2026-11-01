
const changeBtn = document.getElementById('changeBtn');
const message = document.getElementById('message');

functiom changeMessage(){
   message.textContent = "Hello there!;
}

changeBtn.addEventListner('click',changeMessage);