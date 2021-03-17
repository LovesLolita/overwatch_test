$(function () {
    $(".tab .tab-st").on("click", function () {
        $(this).parents(".tab").find(".speak").show().siblings(".story").hide();
        $(this).parents(".main").find("#v1").show().siblings(".v1-1").hide();
        $(this).css({
            'background-color': '#6b7894',
        });
        $(this).siblings(".tab-story").css({
            'background-color': '#fff',
        });
    });
    $(".tab-story").on("click", function () {
        $(this).parents(".tab").find(".story").show().siblings(".speak").hide();
        $(this).parents(".main").find(".v1-1").show().siblings("#v1").hide();
        $(this).css({
            'background-color': '#324360',
        });
        $(this).siblings(".tab-st").css({
            'background-color': '#fff',
        });
    });
    $(".inner-top-md").on("click", function () {
        $(this).hide().parents(".inner").find(".shows").css({
            'display': 'block'
        })
    });

    // 视频轮播
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,

        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".swiper-pagination1 li").eq(0).html(`<a href="javaScript:;"><img src="loads/1.png" alt=""></a>`);
    $(".swiper-pagination1 li").eq(1).html(`<a href="javaScript:;"><img src="loads/4.png" alt=""></a>`);
    $(".swiper-pagination1 li").eq(2).html(`<a href="javaScript:;"><img src="loads/5.png" alt=""></a>`);
    $(".swiper-pagination1 li").eq(3).html(`<a href="javaScript:;"><img src="loads/6.png" alt=""></a>`);
    $(".swiper-pagination1 li").eq(4).html(`<a href="javaScript:;"><img src="loads/7.png" alt=""></a>`);
    $(".swiper-pagination1 li").eq(5).html(`<a href="javaScript:;"><img src="loads/8.png" alt=""></a>`);
    // 点击显示图片
    $(".inner-box").on("click", function () {
        var tops = $(document).scrollTop();
        $(document).bind("scroll", function () {
            $(document).scrollTop(tops);
        });
        document.documentElement.style.overflowY = 'hidden';

        var l = $(this).index();
        $(this).parents(".inner").siblings(".lightbox-container").show(function () {

            var swiper2 = new Swiper('.swiper-container2', {
                spaceBetween: 30,
                initialSlide: l,
                loop: true,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination2',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });


    });

    // 点击模态框按钮关闭
    $(".lightbox-clo").on("click", function () {
        $(this).parents(".lightbox-container").hide();
        // 滚动条显示并允许运行
        $(document).unbind("scroll");
        $('html').css({
            'overflow': 'auto'
        });
    })
    // 点击*隐藏模态框
    $(".lightbox-container").on("click", function () {
        $(this).hide();
        // 滚动条显示并允许运行
        $(document).unbind("scroll");
        $('html').css({
            'overflow': 'auto'
        });
    })
    $(".lightbox-container .mask").on("click", function (e) {
        $(".lightbox-container").show();
        e.stopPropagation();
    });
});
// 底部点击返回按钮
window.onload = function () {
    var goback = document.querySelector("#goback"); //返回框
    var play = document.querySelector(".play"); //头部
    document.addEventListener('scroll', function () {
        //显示
        if (window.pageYOffset > 300) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    })
    goback.addEventListener("click", function () {
        animate(window, 0)
    })

    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            // obj.style.left = obj.offsetLeft + step + 'px';
            window.scroll(0, window.pageYOffset + step)
        }, 15);
    }

}