var name = 'Петья';
var surname = 'Васичкин';
var age = 25;

var c = false;
var d = 5;

// a = 456;

// a = prompt ('Напишите значение переменной a');

// if (a == 37) {
// 	alert ('a = 37');
// } else {
// 	alert ('что-то другое')
// }

// for (var i = 0;i < 5;i++) {
// 	alert (i);
// }


var user = {
	'name': 'Петья',
	'surname': 'Васичкин',
	'age': 25,
	'getElementById' : function () {}
}

// alert ( document.getElementById );

var mas = ['Петья', 'Васичкин', 25];

// alert (mas[2]);



function doMagic (a,dfdf) {
	alert (a + dfdf);
}

// doMagic(10,5);
// doMagic(1,1);



var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.desktop');
	img.style.display = 'none';
	document.querySelector('.skill-change').style.marginLeft = '50px';
}

$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})