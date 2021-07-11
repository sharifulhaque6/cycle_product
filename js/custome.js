
//video add - venobox activation code
    $('.venobox').venobox(); 


//navbar add
$(window).scroll(function(){

var scrolling = $(this).scrollTop();
if(scrolling > 200){
    $(".navbar").addClass('navbg');
}else{
    $(".navbar").removeClass('navbg');
}

})


// wow js
new WOW().init();


