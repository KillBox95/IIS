function statusCorz(){
    console.log('statusCorz');

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartStatus =  document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    console.log(cartWrapper.children.length);

    if (cartWrapper.children.length > 0) {
        cartStatus.classList.add('none');
        orderForm.classList.remove('none');
    }
    else{
        cartStatus.classList.remove('none');
        orderForm.classList.add('none');
    }
}