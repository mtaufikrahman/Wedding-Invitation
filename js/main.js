$(window).on("load", function(){
    /************************* home section slideshow *************************/
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
    /************************* family filter *************************/
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
    
    /************************* gallery pop-up *************************/
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height", wHeight + "px")

    let gpIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })

    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems - 1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex == 0){
            itemIndex = totalGalleryItems - 1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
        $(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
    }

    /************************* close gallery pop-up *************************/
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })
})