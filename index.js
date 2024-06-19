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

  for (let i = 1; i <= 16; i++) {
      let modalClone = $('#projectModalTemplate').clone();
      modalClone.attr('id', `projectModal${i}`);
      modalClone.find('.modal-title').text(``);
      modalClone.find('img').attr('src', `${i}.png`);
      modalClone.find('p').text(``);
      $('body').append(modalClone);
  }
});

