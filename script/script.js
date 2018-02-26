

//----------- changing channels carousel--------

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("channel");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "flex"; 
}

// -------------- rotate tv-button -----------------

var value = 0
$("#clicker").rotate({
  bind:
  {
    click: function(){
      value +=60;
      $(this).rotate({ animateTo:value});
      $(this).removeClass('tv-clicker');
    }
  }
});



    // ----------------- SMOOTH SCROLL ------------------------

    var $root = $('html, body');
    $('a').not('.exclude-scroll').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
    });

 // --------------------  HOME BUTTON fadeIn/Out-----------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.home-btn').fadeIn();
        } else {
            $('.home-btn').fadeOut();
        }
    });
