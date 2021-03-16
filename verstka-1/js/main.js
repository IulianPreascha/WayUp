// let a = 10;

// a = prompt("scrie ceva");
// if (a == 10) {
//     alert('a = 10');
// } else {
//     alert("alt ceva");
// }

// for (let i = 0; i < 5; i++) {
//     alert(i);
// }



let user = {
    'name': 'Iulian',
    'surname': 'Preasca',
    'age': 18
}
// alert(user.age);

let mas = [
    'Iulian',
    'Preasca',
    25
];
// alert(mas[0]);

function doMagic () {
    alert(5 + 5);
}

// doMagic();

let btn = document.getElementById('btn');
btn.onclick = function (e) {
    e.preventDefault();
    let text = document.querySelector('.intro');
    text.classList.toggle('red');
    let img = document.querySelector('.desktop');
    img.style.display = 'none';
    document.querySelector('.skill-change').style.marginleft = '50px';
}
$(window).scroll(function() {
    $('#expect h2').each(function(){
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow + 650) {
            $(this).addClass('fadeInLeft');
        }
})

