/* Smooth scroll */

$('a[href*="#"]')
  .click(function(event) {
      var target = $(this.hash);
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top-60
          },
          1000,
          function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      });


  $('.nav').on('click',function(){
    $('a.nav').removeClass('active');
    $(this).addClass('active');
  })

