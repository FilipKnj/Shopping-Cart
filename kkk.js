let allTotal = 0;

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0){
        price = price.substring(1);
        let total = parseInt(quantity) * parseInt(price);
        allTotal += total;

        cartItems.innerHTML += `<div class='cart-single-item'>
                                <h3>${name}</h3>
                                <p>$${price} * ${quantity} = $<span>${total}</span></p>
                                <button onclick='removeFromCart(this)' class='remove-item'>Ukloni</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`
        element.innerText = `Dodato`
        element.setAttribute('disabled','true');
    }else{
        alert(`Odaberi kolicinu`)
    }
}

function removeFromCart(element){
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price);
    mainEl.remove();

    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`
 
    vegetables.forEach(function (vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        console.log(itemName,name)
        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').innerText = 'Dodaj';
            vege.querySelector('.actions button').removeAttribute('disabled');
        }
    });

}