
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
    $("#countupOne").countMe(150,90),
    $("#countupTwo").countMe(100,150),
    $("#countupThree").countMe(100,50),
    $("#countupFour").countMe(100,120),


    //magnific popup
    $('.popup-image').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
    }),

)