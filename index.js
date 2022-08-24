const cardRecipients = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cardRecipients, surprise){
const shoppingCart = [];    
    for(let i = 0; i < cardRecipients.length; i++){
        console.log(`Thank you, ${cardRecipients[i]}, for the wonderful ${surprise} gift!`);
        shoppingCart.push(`Thank you, ${cardRecipients[i]}, for the wonderful ${surprise} gift!`);
    }    
return shoppingCart;
}

function countDown(){
let counter = 10;
while (counter >= 0){
    console.log(counter--);
    }
}