$(function () {
    $('#buyitem_box_three li').eq(0).addClass('new_item_class');
    $('#buyitem_box_three').on('click', 'li', function () {
        var index = $(this).index();
        // console.log(index);
        $('#buyitem_box_three li').eq(index).addClass('new_item_class').siblings('li').removeClass('new_item_class');

        $(".buyitem_img_box div").eq(index).stop().fadeIn().siblings().stop().fadeOut();
    })
    $('.nav_three_left li').on('click', function () {
        var current = $('.banner li ').eq($(this).index()).offset().top;
        console.log(current);
        $("html").animate({
            scrollTop: current - '100'
        });
    })

    $('#btn_top').on('click', function () {
        $("html").animate({
            scrollTop: 0
        })

    })

    $(window).on('scroll', function () {
        if ($('html').scrollTop() < 400) {
            $('#btn_top').hide();
        } else {
            $('#btn_top').show();
        }

    })


})