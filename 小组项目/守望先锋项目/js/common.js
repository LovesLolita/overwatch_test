$(function () {
    $(".navbars ul li").on("click", function () {
        console.log(111);
        $(this).addClass("active1").siblings().removeClass("active1")
    })
})