$(function () {
    /* 鼠标移入视频 图片放大 */
    $(".img-box").on("mouseenter", function () {
        $(this).css({
            'border': '3px solid #fff',
            'transform': 'scale(1.1)'
        })
    })

    /*  鼠标移出视频 图片还原*/
    $(".img-box").on("mouseleave", function () {
        $(this).css({
            'border': '3px solid #818288',
            'transform': 'scale(1)'
        })
    })

    /* 点击播放按钮 展示模态框 开启声音 播放视频   */
    $(".img-box").on("click", function () {
        $(this).hide();
        $('#myModal').modal();

        setTimeout(function () {
            $("#ele-video").prop("muted", false); //开启声音
        }, 500)

        $("#ele-video").get(0).play(); //播放

    })

    /* 点击关闭按钮，隐藏模态框 静音*/
    $(".close-video").on("click", function () {
        $("#myModal").modal('hide');

    })

    /* 监听模态框关闭事件 显示图片 视频暂停播放 */
    $('#myModal').on('hidden.bs.modal', function () {
        $(".img-box").show();
        $("#ele-video").get(0).pause(); //暂停
    })
})


/* 手风琴效果 */
$(function () {
    // 默认第一个li下面小盒子的图标隐藏
    $("li:nth-child(1) .small i").hide();

    $("#pathtopro").on("mouseenter", "li", function () {
        // 小盒子图标
        $(this).siblings().find(".small i").removeClass("i-active").show();
        $(this).find(".small i").addClass("i-active");

        // 鼠标经过li，其余兄弟 宽度变小 大盒子隐藏
        $(this).siblings().stop().animate({
            width: 200
        }).removeClass("li-active").find(".small").removeClass("small-active");

        // 当前小li 宽度变大  大盒子显示
        $(this).stop().animate({
            width: 700
        }).find('.big').stop().fadeIn(1500).siblings(".small").addClass("small-active").parents("li").addClass("li-active");

    })
})


/* 倒计时效果 */
$(function () {
    // function countDown(dtStr) {
    //     // 当前时间的时间戳
    //     var nowTime = +new Date();
    //     // 目标时间的时间戳
    //     var inputTime = +new Date(dtStr);
    //     // 相差的总秒数
    //     var times = (inputTime - nowTime) / 1000;
    //     // 把秒换算成天时分秒
    //     var d = Math.floor(times / 60 / 60 / 24);
    //     d = d < 10 ? '0' + d : d;
    //     var h = Math.floor(times / 60 / 60 % 24);
    //     h = h < 10 ? '0' + h : h;
    //     var m = Math.floor(times / 60 % 60);
    //     m = m < 10 ? '0' + m : m;
    //     var s = Math.floor(times % 60);
    //     s = s < 10 ? '0' + s : s;
    //     return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒 ';
    // }

    // // 页面加载完先调用一次
    // $("#countDown").html(countDown('2021-04-01 00:00:00'));

    // setInterval(function () {
    //     $("#countDown").html(countDown('2021-04-01 00:00:00'));
    // }, 1000);

    // $('#countdown').timeTo(new Date('<span id="date-str"></span>'));
    $('#countdown').timeTo(new Date('2021-03-31T16:00:00.159Z'));

})



/* 返回顶部 */
$(function () {
    // 默认隐藏
    $(".top").hide();

    $(window).on("scroll", function () {
        if ($(document).scrollTop() > 300) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
    })


    $(".top").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        })
    })
})