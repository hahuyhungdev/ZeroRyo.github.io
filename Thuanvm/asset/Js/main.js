// $(document).ready(function() {

//     $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:-40,
//     nav:false,
//     dots:true,
//     slidesToScroll:1,
//     navigationText: ['<i class="far fa-dot-circle"></i>','<i class="far fa-dot-circle"></i>'],
//     responsive:{
//     0:{
//     items:1
//     },
//     600:{
//     items:1
//     },
//     1000:{
//     items:3,
//     slidesToScroll: 1,
//     }
//     }
//     });
    
//     $('.dots').click(function() {
//     $active = $('.owl-item .item.show');
//     $('.owl-item .item.show').removeClass('show');
//     $('.owl-item .item').removeClass('next');
//     $('.owl-item .item').removeClass('prev');
//     $active.addClass('next');
//     if($active.is('.first')) {
//     $('.owl-item .last').addClass('show');
//     $('.first').addClass('next');
//     $('.owl-item .last').parent().prev().children('.item').addClass('prev');
//     }
//     else {
//     $active.parent().prev().children('.item').addClass('show');
//     if($active.parent().prev().children('.item').is('.first')) {
//     $('.owl-item .last').addClass('prev');
//     }
//     else {
//     $('.owl-item .show').parent().prev().children('.item').addClass('prev');
//     }
//     }
//     });
    
//     $('.dots').click(function() {
//     $active = $('.owl-item .item.show');
//     $('.owl-item .item.show').removeClass('show');
//     $('.owl-item .item').removeClass('next');
//     $('.owl-item .item').removeClass('prev');
//     $active.addClass('prev');
//     if($active.is('.last')) {
//     $('.owl-item .first').addClass('show');
//     $('.owl-item .first').parent().next().children('.item').addClass('prev');
//     }
//     else {
//     $active.parent().next().children('.item').addClass('show');
//     if($active.parent().next().children('.item').is('.last')) {
//     $('.owl-item .first').addClass('next');
//     }
//     else {
//     $('.owl-item .show').parent().next().children('.item').addClass('next');
//     }
//     }
//     });
    
//     }); Carousel 

function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
              
          }
      });
  }
  
// bubbles -----------------
  
  
  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
  
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});


// 

    $(document).ready(function(){

        $('.items').slick({
        infinite: true,
        margin:33,
        autoplay:true,
        Autoscroll:true,
        slidesToShow: 4,
        nav:true,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            
            ]
        });
        });
        $(document).ready(function(){

        $('.items').slick({
        infinite: true,
        margin:33,
        autoplay:true,
        Autoscroll:true,
        slidesToShow: 4,
        nav:true,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            
            ]
        });
        });
        $(document).ready(function(){

          $('.itemse').slick({
          infinite: true,
          margin:33,
          autoplay:true,
          Autoscroll:true,
          slidesToShow: 3,
          nav:true,
          slidesToScroll: 1,
          responsive: [
              {
              breakpoint: 1024,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
              }
              },
              {
              breakpoint: 600,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 2
              }
              },
              {
              breakpoint: 480,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
              }
              
              ]
          });
          });

        $(document).ready(function(){

            $('.itemss').slick({
            infinite: true,
            slidesToShow: 3,
            Autoscroll:true,
            nav:true,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
                
                ]
            });
            });


        let intro = document.querySelector('.intro');
        let logo = document.querySelector('.logo-header');

        window.addEventListener('DOMContentLoaded', ()=>{
           setTimeout(() => {
               setTimeout(() => {
                   intro.classList.add('active');
               });

               setTimeout(()=> {
                    intro.classList.remove('active');
                    intro.classList.add('fade');
               },900)
           })
        })

          // var preloader = document.getElementById("load");



       
      
      
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown menu if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.btn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
          
          function myFunction1() {
            document.getElementById("Dropdown").classList.toggle("shows");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(e) {
            if (!e.target.matches('.vertical_Menu-title')) {
            var drop = document.getElementById("Dropdown");
              if (drop.classList.contains('shows')) {
                drop.classList.remove('shows');
              }
            }
          }

          function myFunction2() {
            document.getElementById("Dropdowns").classList.toggle("shows");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(e) {
            if (!e.target.matches('.vertical_Menu-title')) {
            var drop1 = document.getElementById("Dropdowns");
              if (drop1.classList.contains('shows1')) {
                drop1.classList.remove('shows1');
              }
            }
          }


          
          

          let thumnails = document.querySelectorAll('.slideProduct-thumnail-img-item');
          let activeImg = document.querySelector('.active');

          for(var i = 0; i < thumnails.length; i++)
          {
            
            thumnails[i].addEventListener('mouseover', function(){
              console.log(activeImg)
              if(activeImg.length > 0)
              {
                activeImg[0].classList.remove('active')
              }

              this.classList.add('active')
              document.getElementById('activeImage').src = this.src

            })
          }


          



          
        
          
       