const btnResetForm = document.getElementById('reset-form');

btnResetForm.style.display = 'none';


const submitProcess = document.getElementById('submit-process');


const validateInputString = document.getElementById('input-string');

validateInputString.addEventListener('keyup', function(){

    let validateValueString = validateInputString.value;

    let responseValidationLengthString = validateLengthInput(validateValueString);

    let responseValidationLengthNumbers = validateLengthNumbers(validateValueString);

    if( responseValidationLengthString === true && responseValidationLengthNumbers === true ){

        submitProcess.classList.remove("bg-gray-400");
        submitProcess.classList.add("bg-green-600");
        submitProcess.classList.add("hover:bg-green-700");

    } else {

        submitProcess.classList.remove("bg-green-600");
        submitProcess.classList.remove("hover:bg-green-700");
        submitProcess.classList.add("bg-gray-400");
    }  
})



let validationLenghtInitial = document.getElementById('validation-length-initial');
let validationLenghtSuccess = document.getElementById('validation-length-success');
let validationLenghtWrning = document.getElementById('validation-length-warning');

function validateLengthInput(validateValueString){

    validationLenghtInitial.style.display = "none";
    validationLenghtSuccess.style.display = "none";
    validationLenghtWrning.style.display = "none";           

    if( validateValueString.length >= 15 ){

        validationLenghtSuccess.style.display = 'initial'
        return true;

    } else {
        
        validationLenghtWrning.style.display = "initial"
        return false;
    }
}



let validationNumberInitial = document.getElementById('validation-numbers-initial');
let validationNumberSuccess = document.getElementById('validation-numbers-success');
let validationNumberWrning = document.getElementById('validation-numbers-warning');

function validateLengthNumbers(validateValueString){

    validationNumberInitial.style.display = "none";
    validationNumberSuccess.style.display = "none";
    validationNumberWrning.style.display = "none";

    let amountNumbersInInput = 0;

    for( let i = 0; i < validateValueString.length; i++ ){

        if( !isNaN( parseInt( validateValueString[i])) ){

            amountNumbersInInput += 1;
        } 
    }

    if( amountNumbersInInput >= 5 ){

        validationNumberSuccess.style.display = 'initial' 
        return true; 

    } else {

        validationNumberWrning.style.display = "initial"
        return false;
    }
}

const formProcess = document.getElementById('form-process');

formProcess.addEventListener('submit', function(event){

    event.preventDefault();

    document.querySelector('#output-string').innerHTML = '';

    const inputString = document.getElementById('input-string');

    const valueString = inputString.value;           

    let responseValidationLengthString = validateLengthInput( valueString );
    let responseValidationLengthNumbers = validateLengthNumbers( valueString );


    if( responseValidationLengthString === false || responseValidationLengthNumbers === false ){
        return false;
    }                    

    let newString = '';
    let newNumber = '';

    for( let i = 0; i < valueString.length; i++ ){

        if( isNaN( parseInt( valueString[i] )) ){

            newString = valueString[i] + newString

        } else {

            newNumber = newNumber + valueString[i];
        } 
    }

    let arrayNumbers =  [...newNumber];

    let NumberOrdened = arrayNumbers.sort( function( a, b ){
        return b - a
    })

    let NumberToString = NumberOrdened.join('');

    document.querySelector('#output-string').innerHTML = `${newString}${NumberToString}`;

    document.getElementById('reset-form').style.display = 'initial';

})



btnResetForm.addEventListener('click', function(){

    validationLenghtInitial.style.display = "initial";
    validationLenghtSuccess.style.display = "none";
    validationLenghtWrning.style.display = "none";

    validationNumberInitial.style.display = "initial";
    validationNumberSuccess.style.display = "none";
    validationNumberWrning.style.display = "none"; 

    document.querySelector('#output-string').innerHTML = '';
    btnResetForm.style.display = 'none';

    submitProcess.classList.remove("bg-green-600");
    submitProcess.classList.remove("hover:bg-green-700");
    submitProcess.classList.add("bg-gray-400");
}) 