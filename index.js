$(document).ready(function() {
  function createScroller(fromId, toId) {
    return function() { 
      $(fromId).click(function(e) {
        e.preventDefault(); 
        $('html,body').stop().animate({
          scrollTop: $(toId).offset().top
        }, 700);
      });
    };
  }

  createScroller('#about-nav', '#about-section')();
  createScroller('#projects-nav', '#projects-section')();
  createScroller('#contact-nav', '#contact-section')();
  createScroller('#home-nav','#home')();

  $('.nav a').on('click', function() {
    $('.navbar-toggle').click();
  });

  for (let i = 1; i <= 16; i++) {
    let modalClone = $('#projectModalTemplate').clone();
    modalClone.attr('id', `projectModal${i}`);
    modalClone.find('.modal-title').text(`Project ${i}`);
    modalClone.find('img').attr('src', `${i}.png`);  // Görseller HTML dosyasıyla aynı dizinde
    modalClone.find('p').text(`Description for Project ${i}`);
    $('body').append(modalClone);
  }

  $('.project img').each(function(index) {
    $(this).attr('data-target', `#projectModal${index + 1}`);
  });
});
