
$(document).ready(function () {

// initialize sal.js 

    sal({
       threshold: 0.5,
       once: false,
     });
     
// Handle pack & details selections

     $("#pack-classique").click( function(event) {
          
          var cursor = $(".active-pack");
          var currentDetails = $(".active-pack-details");
          event.preventDefault();
          currentDetails.addClass("pack-details");
          cursor.removeClass("active-pack");

          $("#pack-classique").children("div").addClass("active-pack");
          $("#pack-classique-details").addClass("active-pack-details");
          $("#pack-classique-details").removeClass("pack-details");
     })

     $("#pack-xeweul").click( function(event) {
          
          var cursor = $(".active-pack");
          var currentDetails = $(".active-pack-details");
          event.preventDefault();
          currentDetails.addClass("pack-details");
          cursor.removeClass("active-pack");

          $("#pack-xeweul").children("div").addClass("active-pack");
          $("#pack-xeweul-details").addClass("active-pack-details");
          $("#pack-xeweul-details").removeClass("pack-details");
     })
     $("#pack-medium").click( function(event) {
          
          var cursor = $(".active-pack");
          var currentDetails = $(".active-pack-details");
          event.preventDefault();
          currentDetails.addClass("pack-details");
          cursor.removeClass("active-pack");

          $("#pack-medium").children("div").addClass("active-pack");
          $("#pack-medium-details").addClass("active-pack-details");
          $("#pack-medium-details").removeClass("pack-details");
     })
     $("#pack-confort").click( function(event) {
          
          var cursor = $(".active-pack");
          var currentDetails = $(".active-pack-details");
          event.preventDefault();
          currentDetails.addClass("pack-details");
          cursor.removeClass("active-pack");

          $("#pack-confort").children("div").addClass("active-pack");
          $("#pack-confort-details").addClass("active-pack-details");
          $("#pack-confort-details").removeClass("pack-details");
     })
     $("#pack-prestige").click( function(event) {
          
          var cursor = $(".active-pack");
          var currentDetails = $(".active-pack-details");
          event.preventDefault();
          currentDetails.addClass("pack-details");
          cursor.removeClass("active-pack");

          $("#pack-prestige").children("div").addClass("active-pack");
          $("#pack-prestige-details").addClass("active-pack-details");
          $("#pack-prestige-details").removeClass("pack-details");
     })

     // Initialize headlines caroussel 

    
       $('.headlines').slick({
         infinite: true,
         autoplay:true,
         arrows:false,
         fade:true,
         mobileFirst:true,
         autoplaySpeed: 2500
        //  slidesToShow: 1,
        // slidesToScroll: 1
       });
    
}) 

// adding smooth scrolling

$("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });

