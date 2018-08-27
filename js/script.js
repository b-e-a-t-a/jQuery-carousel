$(function(){

  var carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000);
  function changeSlide(){
    carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide)
  };
  
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:-400});
  };

  function changeSlideLeft(){
      carouselList.animate({'marginLeft':0}, 500, moveLastSlide)
    };

  function moveLastSlide(){
    var firstItem = carouselList.find("li:first"); //jeszcze raz deklarujemy zmienne
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-400});
  };

  $(".next").click(changeSlide);
  $(".previous").click(changeSlideLeft);
  

});

/*
$(".kontrolka").click(function(){
  $(this).css('color', 'red');
  $(this).toggleClass('active');
  console.log($(this).attr('data-number'));
});

var activeDot = $(".active");
var previousDot = $()


*/


//end of js code here, below exercises






/* 1.
//example in Javascript
addEventListener('click', function() { … });
//example in jQuery
$('p').click(function() { ... };



metody: 

keydown 
keyup
keypress 
mouseover
mouseout
mouseenter
scroll
focus
blur

preventDefault(); --> zapobiega domyślnym akcjom

toggle --> przełączanie
  in --> załączanie
  out --> wyłączanie

var isVisible = paragraphs.is(":visible"); --> sprawdza czy p jest widoczny

określenie szybkości efektu:
  slow/ fast
  czasowo ustawiamy w parametrze wartość w ms



efekty:

hide --> ukrywa elementy
$('p').hide();

slideToggle --> odkrywa element na stronie po określonej akcji
$('p').slideToggle();

fadeToggle

fadeIn --> pojawianie się elementu 
fadeOut --> znikanie elementu
    te 2 metody się przydają gdy chcemy ustawić inną prędkość efektu pojawiania się i znikania elementu
*/

/* 2.hover za pomocą jQuery

$(function(){
  var ul = $('nav').find('ul');
  var li = ul.find('li');
  li.mouseover(function(){
    $(this).css('color','red');
  });
  li.mouseout(function(){
    $(this).css('color','black');
  })
});

*/

/* 3.
$(function(){
  var a = $('nav').find('a');
  a.mouseover(function(){
    $(this).css('color','red');
  });
  a.mouseout(function(){
    $(this).css('color','black');
  })
  a.click(function(event){
    event.preventDefault();
    console.log('Siema!');
  });
});

*/

/* 4.
$(function() {
  var gallery = $('.gallery');
  gallery.on('mouseover', 'img', function() { //funkcja nasłuchująca na rodzicu
    $(this).css('filter', 'grayscale(0%)');
    $(this).css('-webkit-filter', 'grayscale(0%)');
  });
  gallery.on('mouseout', 'img', function() {
    $(this).css('filter', 'grayscale(100%)');
    $(this).css('-webkit-filter', 'grayscale(100%)');
  });
});
*/

/* 5.
$(function(){
  $('p').hide();
  $('button').click(function(){
    $('p').slideToggle();
  });
});
*/

/* 6.
$(function(){ //ukrywamy element body na początku załadowania-CSS
  $('body').fadeIn(1200); // pokazujemy element body
  $('p').hide(); //ukrywamy elementy p po załadowaniu drzewa DOM
  $('button').click(function(){
    var paragraphs = $('p')
    var isVisible = paragraphs.is(":visible"); //sprawdza czy element jest widoczny na stronie
    if(isVisible) {
      paragraphs.fadeOut("slow");
    } else {
      paragraphs.fadeIn("fast");
    }
  });
});

*/











