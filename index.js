function createScroller(fromId, toId) {
    scrollFunc = function() { 
      $(fromId).click(function(e) {
        e.preventDefault(); 
        $('html,body').stop().animate({
          scrollTop: $(toId).offset().top
        }, 700);
     });
    };
    return(scrollFunc);
  };
  
  $(document).ready(function() {
    createScroller('#about-nav', '#about-section')();
    createScroller('#projects-nav', '#projects-section')();
    createScroller('#contact-nav', '#contact-section')();
    createScroller('#home-nav','#home')();
   $('.nav a').on('click', function(){
      $('.navbar-toggle').click();
  });
  });
