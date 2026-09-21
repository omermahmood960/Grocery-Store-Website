document.addEventListener("DOMContentLoaded", () => {
    /* Slick Slider Code Starts*/
      $('.products').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false, // we'll use custom arrows
        prevArrow: $('.slick-prev-custom'),
        nextArrow: $('.slick-next-custom'),
        responsive: [
          {
            breakpoint: 769,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    
      // Custom arrow controls
      $('.slick-prev-custom').on('click', function(){
        $('.products').slick('slickPrev');
      });
    
      $('.slick-next-custom').on('click', function(){
        $('.products').slick('slickNext');
      });    
      /* Slick Slider Code Ends */      

    const searchBar = document.querySelector('.search-bar');
    const searchIcon = document.querySelector('.search-icon');
    const cartIcon = document.querySelector('.cart-icon');
    const cartSection = document.querySelector('.cart-section');
    const menuBar = document.querySelector('.bar-icon');
    const navBar = document.querySelector('.navbar');
    menuBar?.addEventListener('click', () => {
        cartSection?.classList.remove('active');
        searchBar?.classList.remove('active');
        navBar?.classList.toggle('active');
    })
    searchIcon?.addEventListener("click", () => {
        cartSection?.classList.remove('active');
        searchBar?.classList.toggle('active');
        navBar?.classList.remove('active');
    });

    cartIcon?.addEventListener("click", () => {
        searchBar?.classList.remove('active');
        cartSection?.classList.toggle('active');
        navBar?.classList.remove('active');
    });
});
