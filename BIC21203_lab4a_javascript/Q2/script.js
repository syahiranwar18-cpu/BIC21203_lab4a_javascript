
const checkBtn = document.getElementById('checkBtn')
const userInput = document.getElementByiD('userInput');
const result = document.getElementById('result');

funtion checkInput(){
  const value = userInput.value.trim();
  
  if (value === "" || (Number(value))){
    result.textCotent = "Please enter a valid number!";
	return:
}	

const num = Number(value);

if (num < 10){
   result.textContent ="The number is lower than 10";
   } else if(num > 10){
   result.textContent ="The number is higher than 10";
   } else {
   result.textContent ="The number is equal to 10":
   }
 }
 
 checkBtn.addEventListner('click',checkinput);

