let subCard = document.getElementById('card-sub');

let confirmCard = document.getElementById('card-confirmation');

const form = document.getElementById("form");

let emailInput = document.getElementById('form__input')

let result = document.getElementById('result')

const errorMessage = document.getElementById('error-message');

let dismissButton = document.getElementById('card-confirmation__button');


dismissButton.addEventListener("click", function() {
    subCard.style.display = 'flex';
    confirmCard.style.display = 'none';
    emailInput.value = ' '
});


form.addEventListener("submit", function(e){
    e.preventDefault();
  
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value); 

    const data = Object.fromEntries(new FormData(e.target));

    if (isValid) {

        errorMessage.style.display = 'none'; 
        emailInput.classList.remove('error'); 

        for (const email in data) {
            console.log(data[email]);
            result.textContent = data[email]
            subCard.style.display = 'none';
            confirmCard.style.display = 'flex'; 
        }
    } else {

        errorMessage.style.display = 'block'; 
        emailInput.classList.add('error'); 
        console.log("Invalid email");
    }
    
    
});
