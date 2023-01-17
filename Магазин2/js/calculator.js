function calculator() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    let totalPrice = 0;

    cartItems.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');


        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice = totalPrice + currentPrice;

    });
    //вывод суммы на странице
    totalPriceEl.innerText = totalPrice;

    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    }
    else {
        cartDelivery.classList.add('none');
    }

    //сумма доставки

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'БЕСПЛАТНО';
    }
    else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '300₽';
    }

}