$(function () {
    $(".hero-heads li").mouseenter(function () {
        //自己添加类样式，取消兄弟的类样式
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        //英雄大图切换
        $(".hero-imgs li").eq(index).addClass('block').siblings().removeClass('block');
        //英雄描述文字切换
        $(".hero-word div").eq(index).addClass('block').siblings().removeClass('block');
    })
    //点击按钮弹出模态框
    $(".introduce").click(function () {

        $('#myModal').modal()
    });

    // 鼠标移入取消静音
    $('#myModal').mouseenter(function () {

        setTimeout(function () {
            document.querySelector(".introduce-video").muted = false;
        })
    });

    //点击关闭模态框
    $("#close").click(function () {

        $("#myModal").modal('hide');

    });

    //监听模态框关闭事件 视频静音 
    $('#myModal').on('hidden.bs.modal', function () {
        $(".introduce-video").prop("muted", true);
    });

    // 跳转对应英雄
    $(".hero-heads-ul").on("click", "li", function () {
        window.location.href = "list.html";
    })
    //返回顶部
    $(window).scroll(function () {

        var top = $(this).scrollTop(); //获取相对滚动条顶部的偏移

        if (top > 200) { //当卷入距离大于200px时让图标淡入

            $(".gotop").stop().fadeIn();

        } else {
            //卷入距离小于200px时让图标淡出
            $(".gotop").stop().fadeOut();
        }
    });

    //   鼠标点击返回顶部
    $(".gotop").click(function () {
        console.log(11);
        $("body , html").animate({
            scrollTop: 0
        }, 1000);
    });

})