$(function() {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".tab_list li").click(function() {
        // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");

        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
        // 让上一张英雄图片向左移动 
        $(".hero-left div").eq(index).siblings().stop().animate({
            left: -1040
        });
        // 让点击的对应英雄图片向右滑动
        $(".hero-left div").eq(index).stop().animate({
            left: 0
        });

    });
    // 当鼠标经过li的时候 给其添加com 显示其对应效果
    $(".tab_list li").on('mouseenter', function() {
            $(this).addClass("com").siblings().removeClass("com");
        })
        // 当鼠标离开li的时候 给其删除com 
    $(".tab_list li").on('mouseleave', function() {
            $(this).removeClass("com")
        })
        // 当点击视屏播放按钮的时候 模态框显示 视频显示 关闭按钮显示 停止页面滚动 隐藏页面滚动条
    var myVideo = document.querySelector("#video1")

    $('.vd .vd-btn').click(function() {
            $(this).siblings().show();
            // 每次点开播放按钮的时候 视频总是从0开始
            myVideo.currentTime = 0
            myVideo.pause();
            // 停止页面滚动
            $('html').css({ 'overflow': 'hidden' });

            var tops = $(document).scrollTop();
            $(document).bind("scroll", function() {

                $(document).scrollTop(tops);
            });

        })
        // 当点击视频关闭按钮时 视频 、视频按钮 、模态框消失
    $('.vd .btn-close').click(function() {
            $(this).hide().siblings().hide();
            $('.vd-btn').show();
            // 视频停止
            myVideo.pause();

            // 滚动条显示并允许运行
            $(document).unbind("scroll");
            $('html').css({ 'overflow': 'auto' });
        })
        // 当鼠标滑过视频关闭按钮时 显示close—bl 的效果 （给其添加close-bl选择器）
    $('.vd .btn-close').on('mouseenter', function() {
            $(this).addClass('close-bl')
        })
        // 当鼠标移出视频关闭按钮时 消除close—bl 选择器 
    $('.vd .btn-close').on('mouseleave', function() {
            $(this).removeClass('close-bl')
        })
        // 当点击模态框的时候 视频 、视频按钮 、模态框消失 视频播放按钮显示
    $('.vd .mask').click(function() {
        $(this).hide().siblings().hide();
        $('.vd-btn').show();


        // 滚动条显示并允许运行 
        $(document).unbind("scroll");
        $('html').css({ 'overflow': 'auto' });
        // 视频停止
        myVideo.pause();

    })
})