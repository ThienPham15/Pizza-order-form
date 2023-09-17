/* Get elements from .html */
const form = document.querySelector('form');
const submitButton = document.querySelector('#submitButton');
const nameInput = document.querySelector('#customerName'); 
const sizeInput = document.querySelectorAll('[name="size"]');
const toppingsInput = document.querySelectorAll('[type="checkbox"]');
const deliveryInput = document.querySelector('#deliveryOptions');
const price = document.querySelector('#price');

/* Calculate price*/
function priceCalc() {
    let nameResult = nameInput.value;
    let priceResult = 0; 
    let sizeResult = '';
    let toppingsResult = [];
    let deliveryResult = deliveryInput.options[deliveryInput.selectedIndex].value;

    //taking the checked radiobutton of sizes
    for (const size of sizeInput) {
        if (size.checked) {
            sizeResult = size.id
        }
    }

    switch (sizeResult) {
        case 'size1':
            priceResult += 7.50;
            break;
        case 'size2':
            priceResult += 10.50;
            break;
        case 'size3':
            priceResult += 12.50;
            break;
        case 'size4':
            priceResult += 15.50;
            break;
    }
    //update price based on topping numbers
    for (const topping of toppingsInput) {
        if (topping.checked) {    
            toppingsResult.push(topping.value);
        }
    }

    if (toppingsResult.length > 4) {
        priceResult += (toppingsResult.length - 4) * 0.5;
    }
    
    //update price by delivery option
    if (deliveryResult === 'homeDelivery') {
        priceResult += 5; 
    }

    price.textContent = `${priceResult}€`;
}

//check if size is chosen 
function checkSizeInput() {
    //call the checked radiobu
    const sizes = document.querySelectorAll("input[name=size]:checked"); 
    if (sizes.length <= 0) {
        window.alert("Please choose the size of your pizza")
    } 
}

form.addEventListener('input', priceCalc);
submitButton.addEventListener('click',checkSizeInput);