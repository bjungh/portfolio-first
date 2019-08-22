$(function(){ 
    
   
    $('.top-menu> ul> li').click(function(e){
        e.preventDefault();
        // var menu = $('.top-menu> ul> li');
        var target = $(this);
        var num = target.index();
       $('.main-contents ul li').removeClass('show');
       $('.main-contents ul li').eq(num).addClass('show');
    //    $('.top-menu> ul> li').removeClass('on');
    //    $('.top-menu> ul> li').eq(num).addClass('on');
    })

    $('.top-menu> ul> li').click(function(e){
        e.preventDefault();
        // var menu = $('.top-menu> ul> li');
        var target = $(this);
        var num = target.index();
        $('.top-menu> ul> li').removeClass('on');
        $('.top-menu> ul> li').eq(num).addClass('on');
    })
});