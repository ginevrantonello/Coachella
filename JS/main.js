$(function(){
    $('#drop').on("click",function(){
//        alert("OK")
        $('nav').toggleClass('showNav');
    
        $("#drop p").eq(0).toggleClass("rot1");
        $("#drop p").eq(1).toggleClass("nascondi");
        $("#drop p").eq(2).toggleClass("rot2");
        
        $('#homewp img').eq(0).toggleClass("homewpblr");
        $('#homewp img').eq(1).toggleClass("homewpblr");
        $('#homewp img').eq(3).toggleClass("homewpblr");
        $('#title').toggleClass("homewpblr");
        
    })
    
    $('.G').eq(0).mouseenter(function(){
        $('#one').show();
              
    })
        $('.G').eq(1).mouseenter(function(){
        $('#two').show();
              
    })
    
        $('.G').eq(2).mouseenter(function(){
        $('#three').show();
              
    })
    
        $('.G').eq(3).mouseenter(function(){
        $('#four').show();
              
    })
    
    
     $('.G').eq(0).mouseleave(function(){
        $('#one').hide();
         
     })
    
         $('.G').eq(1).mouseleave(function(){
        $('#two').hide();
         
     })
         $('.G').eq(2).mouseleave(function(){
        $('#three').hide();
         
     })
         $('.G').eq(3).mouseleave(function(){
        $('#four').hide();
         
     })
    
    $(function(){
            $('.S').eq(0).mouseenter(function(){
$('#one1').show();
    })
         $('.S').eq(1).mouseenter(function(){
$('#two2').show();
    })
         $('.S').eq(2).mouseenter(function(){
$('#three3').show();
    })
         $('.S').eq(3).mouseenter(function(){
$('#four4').show();
    })
    
            $('.S').eq(0).mouseleave(function(){
$('#one1').hide();
    })
         $('.S').eq(1).mouseleave(function(){
$('#two2').hide();
    })
         $('.S').eq(2).mouseleave(function(){
$('#three3').hide();
    })
         $('.S').eq(3).mouseleave(function(){
$('#four4').hide();
    })
        
    })
  

    

    
});



$(function(){
    $(window).on('scroll',function(){
        console.log('dddd');
    });
    
$(function(){
    var scrollo=$(window).scrollTop();
    
$(function(){
    $('#up').hide();
    
    var scrollo=$(window).scrollTop();
    $(window).on("scroll",function(){
        
        scrollo=$(window).scrollTop();
        console.log('bb');
        
if(scrollo>150){
    $('#up').fadeIn(500);
}
else{
    $('#up').fadeOut(500);
}
})
})
})
})

$(function(){
    $('#up').on('click',function(){
        $.scrollTo(0,1500);
    })
        
    });


$(function(){
$('.slider').slick({
  dots: false,
    arrows:false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
autoplay:true    
});
    
})

$(function(){
$('.slidephone').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false
});
    
})

$(function(){
$('.slidephone1').slick({
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false
});
    
})
