/**
 * Created by Frank on 2017/7/28.
 */
$(function () {
    $("#header .top ul li").click(function () {
        $("#header .top ul li").removeClass('on');
        $(this).addClass('on');
        $.ajax({
            url:$(this).attr("index"),
            dataType: 'html',
            method: 'get',
            success: function (data) {
                $("#section-wrap").html(data);
            }
        })
        // $("#section-wrap").load($(this).attr("index"));
    });
});

// 导航吸顶效果
$(function () {
    $(window).scroll(function () {
        var topHeight = $(window).scrollTop();
        if(topHeight>80){
            $("#header").addClass('scroll')
        }else{
            $("#header").removeClass('scroll')
        }
    });
});