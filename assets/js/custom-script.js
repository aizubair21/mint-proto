//when document ready
$(document).ready(

    //get all nav item class "nav-item". add click event
    $(".nav-item").on("click", (e) => {
        //get data-nav from click element
        let nav_item_name = e.target.dataset.nav;

        //active nav 
        $(".nav-item").removeClass('nav-item-active');
        e.target.classList.add("nav-item-active");

        //filter content
        $(".content-item").hide();
        let filter_content = document.getElementsByClassName(nav_item_name);
        for (let i = 0; i < filter_content.length; i++) {
            filter_content[i].style.display = 'block';

        }
    }),

    //wow js
    new WOW().init(),


    //countup animation plugins
    $("#countupOne").countMe(20, 50),
    $("#countupTwo").countMe(100, 100),
    $("#countupThree").countMe(20, 100),
    $("#countupFour").countMe(100, 200),


    //magnific popup
    $('.popup-image').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
    }),



    //service carousel sliler
    $(".owl-carousel").owlCarousel({
        // center:true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    }),


    // open opoup contact 
    $(".popup-contact").on("click", ()=>{
        $("#contact-popup").css('top',0);
    })

)