$(window).on("load", function(){
    // home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen - 1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }

    slideShow();
})

$(document).ready(function(){

    // family filter
    familyFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
            familyFilter($(this).attr("data-target"))
        }
    })
    function familyFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".family-item").hide();
        $(".family-item[data-category='"+target+"']").fadeIn();
    }

    // gallery pop up
    // const wHeight = $(window).height();
    // $(".gallery-popup img").css("max-height", wHeight + "px")

    // let gpIndex = 0;
    // const totalGalleryItems = $(".gallery-item").length;
})