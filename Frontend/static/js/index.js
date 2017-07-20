(function($) {
  $(document).arrive("#slick", function() {
    $('#slick').slick({
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  })
}(jQuery))
