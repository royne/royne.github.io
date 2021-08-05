$(document).ready(function(){
  // boton scrollTop
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('#js_up').fadeIn();
    } else {
      $('#js_up').fadeOut();
    }
  });
});

// animacion boton top
$('#js_up').click(function(){
  $('body, html').animate({scrollTop: 0 }, 1000);
});


// barras skills
var skills = $('#skills');

$(window).scroll(function(){
  if ($(this).scrollTop() > 800){
    $(function(){
      setInterval(function(){
        $('.html').animate({'width':'0%'}).animate({'width':'80%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.css').animate({'width':'0%'}).animate({'width':'80%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.bootstrap').animate({'width':'0%'}).animate({'width':'90%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.git').animate({'width':'0%'}).animate({'width':'90%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.ruby').animate({'width':'0%'}).animate({'width':'75%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.rails').animate({'width':'0%'}).animate({'width':'75%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.js').animate({'width':'0%'}).animate({'width':'70%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.vue').animate({'width':'0%'}).animate({'width':'50%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.react').animate({'width':'0%'}).animate({'width':'70%'}, 1000).delay(90000);
      });
      setInterval(function(){
        $('.next').animate({'width':'0%'}).animate({'width':'70%'}, 1000).delay(90000);
      });
    });
  }
});
