//прослушка на всем окне
window.addEventListener('click', function(event){
//проверяем явлеться ли элемент плюс
    if (event.target.dataset.action === 'plus'){

        console.log('Plus');
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]');
        console.log(counter);

        counter.innnerText = ++counter.innerText;


    }
//проверяем явлеться ли элемент минус
    if (event.target.dataset.action === 'minus'){

        console.log('Minus');
        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        const counter = counterWrapper.querySelector('[data-counter]');
        console.log(counter);

                //находим счетчик в корзине, если значение равно 1 то удаляет товар
                if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){

                    event.target.closest('.cart-item').remove();

                    statusCorz();
                            
                }

        if (parseInt(counter.innerText) > 1){

            counter.innnerText = --counter.innerText; //уменьшаем счетчик
        };


    }
//проверяем + или - в корзине
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calculator();
    };
});