
$(document).ready(function(){
  $('.toTop').click(function(){
   $('html, body').animate({scrollTop : 0}, 'slow');
    });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  /*
  $('.toCompare').click(function(){
   $('html, body').animate({scrollTop : 800}, 'slow');
    }); 
  $('.toReferences').click(function(){
   $('html, body').animate({scrollTop : 1465}, 'slow');
    }); 
  $('.toProjects').click(function(){
   $('html, body').animate({scrollTop : 2500}, 'slow');
    }); 
  $('.toEtc').click(function(){
   $('html, body').animate({scrollTop : 5300}, 'slow');
    }); 
  $('.toSignature').click(function(){
   $('html, body').animate({scrollTop : 6000}, 'slow');
    }); 
    */     
});

