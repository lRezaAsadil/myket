$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop:true,
    item: 4,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        nav: true,
        items: 1,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,

      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [3000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })

});
//
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


var urls = [
  './asset/img/product1.jpg',
  './asset/img/product2.jpg',
  './asset/img/product3.jpg',
  './asset/img/product4.jpg'
];
var options = {
  thumbLeft:true,
  thumbRight:true,
  //thumbHide:true,
  //width:300,
  //height:500,
};
$('#img-p').zoomy(urls,options);




