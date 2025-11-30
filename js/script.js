$(function($){

    //serach bar//
    $('.search_icon').click(function(){
        $('.search_bar').slideDown(1000);
    });
    $('.close_icon').click(function(){
        $('.search_bar').slideUp(1000);
    });

    //menu
    let mainMenu = $('.main_menu').offset().top;

    $(window).scroll(function(){
 
        let ScrollWin = $(window).scrollTop();

        if(ScrollWin > mainMenu){
            $('.main_menu').addClass('menu_fixed');
        }
        else{
            $('.main_menu').removeClass('menu_fixed');
        }


        //back top
        if(ScrollWin > 300){
        $('.back_top').fadeIn(1000);
        }
        else{
        $('.back_top').fadeOut(1000); 
        }

    });

        //back top
        $('.back_top').click(function(){
        $('body,html').animate({
         scrollTop: 0
         },100);
        });

        //banner js
        $('#banner').slick({
            autoplay :true,
            arrows :false,
            autoplaySpeed :3000,
            speed:300,
        });

        //service slider
        $('.service_slider').slick({
             autoplay:true,
             slidesToShow: 3,
             arrows :false,
             autoplaySpeed :5000,
             speed:300,
        });

        //venu box video
        new VenoBox({
            selector: '.icon',
            autoplay: true,
        });

        //progress bar
        $('.blue').LineProgressbar({
            percentage: 90,
            fillBackgroundColor:'#2a4896 ',
            radius:'20px',
        });

        $('.red').LineProgressbar({
            percentage: 85,
            fillBackgroundColor:'#5d3b15 ',
            radius:'20px',
        });

        $('.green').LineProgressbar({
            percentage: 75,
            fillBackgroundColor:'#344a1f',
            radius:'20px',
        });

        $('.violate').LineProgressbar({
            percentage: 80,
            fillBackgroundColor:'#39295f ',
            radius:'20px',
        });

        //portfolio
        $('.port_slick').slick({
            autoplay:true,
            slidesToShow: 3,
            arrows :false,
            autoplaySpeed :5000,
            speed:300,
       });

       //testimonial
         $('.testimonial_slider').slick({
        autoplay:true,
        slidesToShow: 2,
        arrows :false,
        autoplaySpeed :5000,
        speed:300,
        });
        
        //latest blog
        $('.latest_blog_slider').slick({
            autoplay:true,
            slidesToShow: 3,
            arrows :false,
            autoplaySpeed :5000,
            speed:300,
            });

        //venubox footer img
         new VenoBox({
            selector:'.filckr_photo',
            autoplay:true,
            spinner:circle,
         });

}); 
