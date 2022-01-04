/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
var sections = window.theme.sections;
var slideshowAutoExtension = {
  init: function() {
    this.on('slideshow_desktop_init_done', this._autoplaySlideshow.bind(this));
  },
  _autoplaySlideshow: setInterval(function() {
    var $slide = $('.slideshow__slide--active')
                   .removeClass('slideshow__slide--active');

    var $button = $('.slideshow__button--active')
                   .removeClass('slideshow__button--active');

    var $slides = $('.slideshow__slide');

    var currentIndex = ($slides.index($slide) + 1) % $slides.length;

    $slides
      .eq(currentIndex)
      .addClass('slideshow__slide--active');

    var $buttons = $('.slideshow__button')
      .eq(currentIndex)
      .addClass('slideshow__button--active');

  }, 5000)

};

sections.extend('slideshow', slideshowAutoExtension);

$(".site-nav__link--button").click(function(){
  $(".site-nav--has-dropdown").toggleClass("site-nav--active-dropdown");
});

$(document).on('click', function(event) {
          if (!$(event.target).closest('.site-nav__link--button').length)  {
                $(".site-nav--has-dropdown").removeClass("site-nav--active-dropdown");
          }
        });
/*
$(".site-nav__link--button").hover(function(){
  $(".site-nav--has-dropdown").addClass("site-nav--active-dropdown");
});

$(document).on('click', function(event) {
          if (!$(event.target).closest('.site-nav__link--button').length)  {
                $(".site-nav--has-dropdown").removeClass("site-nav--active-dropdown");
          }
        });
/*  $('#SiteNavLabel-shop').hover(function(){
    $(".site-nav--has-dropdown").addClass("site-nav--active-dropdown");
}, function(){
    $(".site-nav--has-dropdown").removeClass("site-nav--active-dropdown");
});
$('.site-nav__link--button').hover(function(){
    $(".site-nav--has-dropdown").addClass("site-nav--active-dropdown");
}, function(){
    $(".site-nav--has-dropdown").removeClass("site-nav--active-dropdown");
});

   $("li.site-nav--has-dropdown").hover(
     function() {
      $("#SiteNavLabel-shop").slideDown();
    });
      
      $("#Slideshow-slideshow").hover(
     function() {
      $("#SiteNavLabel-shop").slideUp();
    }); */
  

