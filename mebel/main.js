new WOW().init();

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass(`sticky`);
        }else{
            $(`.navbar`).removeClass(`sticky`);
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
    })
    
    $(`.scroll-btn`).click(function(){
        $('html').animate({scrollTop:0})
    });
    //toog;r navbar
    $(`.menu-btn`).click(function(){
        $(`.navbar .menu`).toggleClass(`active`);
        $(`.menu-btn i`).toggleClass(`active`);
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav: false

            },
            500:{
                items:1,
                nav: false
            },
            700:{
                items:2,
                nav: false

            },
            900:{
                items:2,
                nav: false

            },
            1100:{
                items:3,
                nav: false
            }
        }
    });
});