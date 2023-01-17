const cartWrapper = document.querySelector('.cart-wrapper')

//клик на странице
window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.card');
        const tovarInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            price__currency: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
        console.log(tovarInfo);

        //объединять товар в корзине
        const itemInCorz = cartWrapper.querySelector(`[data-id="${tovarInfo.id}"]`);
        console.log(itemInCorz);

        if (itemInCorz) {
            const counterElement = itemInCorz.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(tovarInfo.counter);
        }
        else {



            const cartItemHTML = `<div class="cart-item" data-id="${tovarInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img class="product-img" src="${tovarInfo.imgSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${tovarInfo.title}</div>
                <div class="cart-item__weight">${tovarInfo.itemsInBox}</div>
                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${tovarInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${tovarInfo.price__currency}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);



        };
        //сброс счетчика после добавления в корзину
        card.querySelector('[data-counter]').innerText = '1';


        //статус корзины ВКЛ-ВЫКЛ
        statusCorz();

        //пересчет суммы
        calculator();


    };

});