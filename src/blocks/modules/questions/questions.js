let plus = document.querySelectorAll('.questions__plus'),
    answer = document.querySelectorAll('.questions__answer');
    console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
        answer[i].style.display = 'block';
    });
}
