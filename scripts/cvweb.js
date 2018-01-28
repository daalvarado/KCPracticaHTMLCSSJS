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

function checkWordCount() {
  s = document.getElementById("mensaje").value;
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  if (s.split(" ").length <= 300) {
    alarm("not enough words...");
    return false;
  }
}


var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("emailaddress");
var phone = document.getElementById("tel");
var conocido = document.getElementById("conocido");
var conocidoOthers = document.getElementById("others");
var mensaje = document.getElementById("mensaje");
var submit = document.getElementById("submit");
var form = document.getElementById("formulario");

var numWords = 0;
var maxWords = 300;









//nuevo campo
conocido.addEventListener("change", function() {
  if (conocido.value === "Otros") {
    conocidoOthers.classList.remove("hidden");
  } else {
    conocidoOthers.classList.add("hidden");
  }});
