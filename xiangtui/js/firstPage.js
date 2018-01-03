/**
 * Created by Frank on 2017/7/27.
 */
/**
 * 700
 * 0 400 800
 *
 * 0
 * */
function one() {
    $('#say .content ul li').eq(0);//不考虑
    $('#say .content ul li').eq(1).stop(true).animate({left: 700});
    $('#say .content ul li').eq(2).stop(true).animate({left: 950});
}
function two() {
    $('#say .content ul li').eq(0);//不考虑
    $('#say .content ul li').eq(1).stop(true).animate({left: 250});
    $('#say .content ul li').eq(2).stop(true).animate({left: 950});
}
function three() {
    $('#say .content ul li').eq(0);//不考虑
    $('#say .content ul li').eq(1).stop(true).animate({left: 250});
    $('#say .content ul li').eq(2).stop(true).animate({left: 500});
}
//重置所有元素位置
function reset() {
    $('#say .content ul li').eq(1).stop(true).animate({left: 400});
    $('#say .content ul li').eq(2).stop(true).animate({left: 800});
}

$('#say .content ul li').each(function (i) {
    $(this).hover(function () {
        if (i == 0) {
            one();
        } else if (i == 1) {
            two();
        } else if (i == 2) {
            three();
        }
    }, function () {
        reset();
    });
});


$(function () {
    /**
     * 初始化: Swiper插件
     * */
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: 4000,
        onInit: function(swiper){
            $('.swiper-slide .animated').each(function(){//获取所有的动画元素
                $(this).attr('an',$(this).attr('class'))//获取动画的class类
                    .attr('class','');//清除元素自带的动画类
            });
            $('.swiper-slide').eq(1).find('[an]').each(function(){//获取第一个swiper
                $(this).attr('class',$(this).attr('an'));//添加动画类开始执行动画
            });
        },
        onSlideChangeStart: function (swiper) {
            //指定swiper里面的元素,添加动画类,开始执行动画
            $('.swiper-slide').eq(swiper.activeIndex).find('[an]').each(function(){
                $(this).attr('class',$(this).attr('an'));
            });
            setTimeout(function(){
                $('.swiper-slide').eq(swiper.activeIndex).find('[an]')
                    .attr('class','');//清除class
            },this.autoplay);
        }
    });

    // 返回顶部
    $(window).scroll(function () {
        goScroll();
    });
    function goScroll() {
        var topHeight = $(window).scrollTop();
        if(topHeight>80){
            $("#aside").show();
        }else{
            $("#aside").hide();
        }

    }
    goScroll();
    // 返回顶部绑定click事件
    $("#aside ul li").eq(0).click(function () {
        // var tmp = setInterval(function () {
        //     var top = $(window).scrollTop() - 100 > 0? $(window).scrollTop() - 100 : 0;
        //     $(window).scrollTop(top);
        //     if(top == 0){
        //         clearInterval(tmp);
        //     }
        // }, 50);
        $("body").animate({scrollTop:0},1000);
    });



    // // 动态显示合作企业数

        var flag= true;

        function numAnimate() {
            if(!flag){return}

            var enterpriseNum = setInterval(function () {
                var number = Number($("#enterprise p .num").html());
                if(number >= 238){
                    clearInterval(enterpriseNum);
                    return;
                }
                $("#enterprise p .num").html(number+1);

            },1);
            // setTimeout(function () {
            //     clearInterval(enterpriseNum);
            // },10*2)
        }

        // 当滚动条滚动到数字的时候，数字开始变化，需要判断什么时候滚动到数字
       $(window).scroll(function () {
           var scrollTop = $(window).scrollTop();
           var height = $(window).height();
           var numTop = $("#enterprise p .num").offset().top;
           if(scrollTop+height>=numTop){
               numAnimate();
               flag = false
           }
       })












});



