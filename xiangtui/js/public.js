/**
 * Created by pc on 2017/7/26.
 */

$(function(){
    $(window).scroll(function () {
        var topHeight = $(window).scrollTop();
        if(topHeight>108){
            $(".header").addClass('totop');
        }else{
            $(".header").removeClass('totop');
        }
    });
});

