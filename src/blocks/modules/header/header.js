let buttons = document.querySelectorAll('button'),
    cross = document.querySelector('.modal__cross'),
    body = document.querySelector('body'),
    popup = document.querySelector('.modal');

for(let button of buttons) {
    button.addEventListener('click', function() {
        popup.style.display = 'flex';
        body.style.overflow = 'hidden';
    });
}

cross.addEventListener('click', function () {
    popup.style.display = 'none';
    body.style.overflow = 'visible';

});

popup.addEventListener('click', function(e) {
    if(e.target === popup) {
        popup.style.display = 'none';
        body.style.overflow = 'visible';
    }
});


let plus = document.querySelectorAll('.questions__question'),
    answer = document.querySelectorAll('.questions__answer');
    console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
        for(let elem of answer) {
            elem.style.display = 'none';
        }
        answer[i].style.display = 'block';
    });
}

