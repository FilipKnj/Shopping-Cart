let allTotal = 0;

const addToCart = element => {
    let mainEl = element.closest('.single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('.price').innerText;
    let quantity = mainEl.querySelector('input').value;

    price = price.substring(1);
    price = parseInt(price);
    quantity = parseInt(quantity);

    if(quantity > 0){
        
        let total = 0;
        total = price * quantity;
        allTotal += total;

        element.innerText = `Dodato`;
        element.setAttribute('disabled','disabled');

        document.querySelector('.cart-items').innerHTML += `<div class='cart-single-item'>
                                                            <h3>${name}</h3>
                                                            <p>$${price} * ${quantity} = $<span>${total}</span></p>
                                                            <button onclick='removeFromCart(this)'>Ukloni</button>
                                                           </div>`;

        document.querySelector('.total').innerText = `Total $${allTotal}`;                                                   

    }else{
        alert('Odaberi Kolicinu');
    };

};

const removeFromCart = element => {
    let mainEl = element.closest('.cart-single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('span').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price);

    mainEl.remove();
    allTotal -= price;
    document.querySelector('.total').innerText = `Total $${allTotal}`;                                                   

    vegetables.forEach(vege => {
        let itemName = vege.querySelector('h3').innerText;

        if(itemName === name){
            vege.querySelector('input').value = 0;
            vege.querySelector('button').innerText = `Dodaj`;
            vege.querySelector('button').removeAttribute('disabled','disabled');
        };
    });

};
