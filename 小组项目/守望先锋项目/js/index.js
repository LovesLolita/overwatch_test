$(function () {
    // 鼠标移入移出高亮、取消高亮显示
    $(".nav li").hover(function () {
        $(this).toggleClass("nav_bgc2")
    });
    $(".nav li").click(function () {
        $(this).addClass("nav_bgc1").siblings().removeClass("nav_bgc1");
        var index = $(this).index();
        if (index === 1 || index === 0) {
            $(".inner").addClass("zhongzhuang");
            // if ($(".inner dva")) {
            //     $(".inner").removeClass("zhongzhuang");
            // }
            $(".inner .rou").addClass("shadow").removeClass("unshadow").siblings(".gj,.zl").addClass("unshadow").removeClass("shadow");
        } else {
            $(".inner").removeClass("zhongzhuang");
        }

        if (index === 0) {
            $(".inner .portrait").removeClass("shadow unshadow");
            // $(".inner .zl").addClass("shadow").removeClass("unshadow").siblings(".rou,.gj").addClass("unshadow").removeClass("shadow");
        }





        if (index === 2) {
            $(".inner").addClass("shuchu");
            $(".inner .gj").addClass("shadow").removeClass("unshadow").siblings(".rou,.zl").addClass("unshadow").removeClass("shadow");
        } else {
            $(".inner").removeClass("shuchu");
        }





        if (index === 3) {
            $(".inner").addClass("zhiliao");
            $(".inner .zl").addClass("shadow").removeClass("unshadow").siblings(".rou,.gj").addClass("unshadow").removeClass("shadow");
        } else {
            $(".inner").removeClass("zhiliao");
        }


    });
    // 跳转对应英雄
    $(".portrait").on("click", function () {
        window.location.href = "list.html";
    })
})