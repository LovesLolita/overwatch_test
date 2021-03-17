$(function () {
    var data2 = {
        // 占领要点
        point: [{
            img1: "images/map5.jpg",
            mapName: "釜山",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower'],
        }, {
            img1: "images/map14.jpg",
            mapName: "伊利奥斯",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map17.jpg",
            mapName: "漓江塔",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map19.jpg",
            mapName: "尼泊尔",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map21.jpg",
            mapName: "绿洲城",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }],
        // 攻防作战
        attack: [{
            img1: "images/map10.jpg",
            mapName: "花村",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-screenshot'],
        }, {
            img1: "images/map13.jpg",
            mapName: "地平线月球极低",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-screenshot'],
        }, {
            img1: "images/map22.jpg",
            mapName: "巴黎",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-screenshot'],
        }, {
            img1: "images/map26.jpg",
            mapName: "阿里比斯神庙",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-screenshot'],
        }, {
            img1: "images/map27.jpg",
            mapName: "沃斯卡娅工业区",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-screenshot'],
        }],
        // 运载目标
        carry: [{
            img1: "images/map7.jpg",
            mapName: "多拉多",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-send', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map11.jpg",
            mapName: "哈瓦那",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-send'],
        }, {
            img1: "images/map15.jpg",
            mapName: "渣客镇",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-send'],
        }, {
            img1: "images/map24.jpg",
            mapName: "里阿尔托",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-send'],
        }, {
            img1: "images/map25.jpg",
            mapName: "666号公路",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-send'],
        }, {
            img1: "images/map28.jpg",
            mapName: "监测站: 直布罗陀",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-send'],
        }],
        // 勇夺锦旗
        pennants: [{
            img1: "images/map1.jpg",
            mapName: "阿育陀耶",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-grain'],
        }, {
            img1: "images/map14.jpg",
            mapName: "伊利奥斯",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map17.jpg",
            mapName: "漓江塔",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map19.jpg",
            mapName: "尼泊尔",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }, {
            img1: "images/map21.jpg",
            mapName: "绿洲城",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-tower', 'glyphicon glyphicon-grain'],
        }],
        // 攻击/护送
        escort: [{
            img1: "images/map3.jpg",
            mapName: "暴雪世界",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-knight'],
        }, {
            img1: "images/map9.jpg",
            mapName: "艾兴瓦尔德",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map12.jpg",
            mapName: "好莱坞",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map16.jpg",
            mapName: "国王大道",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map20.jpg",
            mapName: "绿洲城",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-knight'],
        }],
        // 决斗先锋
        duel: [{
            img1: "images/map2.jpg",
            mapName: "黑森林",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map5.jpg",
            mapName: "城堡",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map8.jpg",
            mapName: "生态监测站: 南极洲",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map18.jpg",
            mapName: "墓园",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }],
        // 死斗
        deathMatch: [{
            img1: "images/map6.jpg",
            mapName: "吉拉德堡",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map7.jpg",
            mapName: "多拉多",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-send', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map9.jpg",
            mapName: "艾兴瓦尔德",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map12.jpg",
            mapName: "好莱坞",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map16.jpg",
            mapName: "国王大道",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map23.jpg",
            mapName: "佩特拉",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }],
        // 团队死斗
        team: [{
            img1: "images/map2.jpg",
            mapName: "黑森林",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map5.jpg",
            mapName: "城堡",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map6.jpg",
            mapName: "吉拉德堡",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map7.jpg",
            mapName: "多拉多",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-send', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map8.jpg",
            mapName: "生态监测站: 南极洲",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map9.jpg",
            mapName: "艾兴瓦尔德",
            img2: "images/country2.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map12.jpg",
            mapName: "好莱坞",
            img2: "images/country3.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map16.jpg",
            mapName: "国王大道",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-knight', 'glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map18.jpg",
            mapName: "墓园",
            img2: "images/country4.png",
            spanClass: ['glyphicon glyphicon-exclamation-sign', 'glyphicon glyphicon-fire'],
        }, {
            img1: "images/map23.jpg",
            mapName: "佩特拉",
            img2: "images/country1.png",
            spanClass: ['glyphicon glyphicon-warning-sign', 'glyphicon glyphicon-fire'],
        }],
    }
    data = [{
        attribute: 'all',
        name: '全部地图',
        introduce: '在《守望先锋》中，英雄们在世界各个地区作战。从努巴尼的科技奇观到沃斯卡娅的工业中枢，每张地图都有独特的布局和胜利条件，你必须完成这些要求才能获得胜利。',
        children: data2
    }, {
        attribute: 'point',
        name: '占领要点',
        introduce: '两支队伍必须争夺并守住同一个目标点；第一支赢得两个回合的队伍即可获胜。',
        children: data2.point
    }, {
        attribute: 'attack',
        name: '攻防作战',
        introduce: '进攻方必须占领一系列目标点；防守方必须阻止进攻方，直至时间耗尽。',
        children: data2.attack
    }, {
        attribute: 'carry',
        name: '运载目标',
        introduce: '进攻方必须将运载目标护送至目的地，而防守方必须在时间耗尽之前，阻止进攻方护送。',
        children: data2.carry
    }, {
        attribute: 'pennants',
        name: '勇夺锦旗',
        introduce: '两支伍必须夺取敌方的旗帜，同时还得守住自己的旗帜。',
        children: data2.pennants
    }, {
        attribute: 'escort',
        name: '攻击/护送',
        introduce: '进攻方必须首先夺取运载目标，随后将其护送至目的地；防守方则必须阻止进攻方。',
        children: data2.escort

    }, {
        attribute: 'duel',
        name: '决斗先锋',
        introduce: '两支队伍必须在1v1、3v3或6v6情况下消灭所有对手。',
        children: data2.duel

    }, {
        attribute: 'deathMatch',
        name: '死斗',
        introduce: '自由混战，玩家必须尽快地消灭尽可能多的敌人。',
        children: data2.deathMatch

    }, {
        attribute: 'team',
        name: '团队死斗',
        introduce: '两支队伍必须尽快地消灭尽可能多的敌人。',
        children: data2.team

    }];


    $(".mapTitle ul").on("click", "li", function () {
        //清空地图盒子, 遮罩层盒子
        $(".mapContent").empty();
        $(".swiper-wrapper").empty();
        // 创建一个空字符串
        var content = ""
        var maskContent = "";
        // 获取当前索引
        var index = $(this).index();
        // 设置被点击li的默认样式
        $(this).addClass("active").siblings("li").removeClass("active");
        // 显示对应的文字
        $(this).parent().siblings("h3").html(data[index].name).siblings("p").html(data[index].introduce);
        // console.log($(this).attr("data-type"));
        // 获取被点击li的data-type属性
        var type = $(this).attr("data-type");
        console.log(type);

        // 对data中的数据进行遍历
        $(data).each(function (i, e) {
            // console.log(e.attribute);
            if (e.attribute === 'all') {
                // 创建一个空数组临时存放所有item的值
                var arr = [];
                // 对data2数组进行遍历
                $(e.children).each(function (i, e) {
                    // 遍历对象获取属性名
                    for (var k in e) {
                        // console.log(k);
                        // console.log(e[k]);
                        // 对每个属性名对应的属性值(具体地图信息)进行遍历
                        $(e[k]).each(function (i, e) {
                            // console.log(e);

                            var span = '';
                            // 对spanClass数组进行遍历, 拿到字体图标
                            $(e.spanClass).each(function (i, e) {
                                span += `<span class="${e}"></span>`;
                            })
                            // 将每个地图信息放到item中
                            var item = `<div class="item">
                            <a href="#">
                                <div class="tipimg">
                                    <img src="${e.img1}" alt="">
                                </div>
    
                                <div class="tip">
                                    <h3><img src="${e.img2}" alt=""> ${e.mapName}</h3>
                                    ${span}
                                </div>
                            </a>
                        </div>`;
                            // 利用some方法对arr数组进行遍历 
                            var flag = arr.some(function (value) {
                                // console.log(value);
                                return value == item;
                            })
                            // 如果返回值是false就将item信息加入arr中, 并将具体地图信息加入content字符串中
                            if (!flag) {
                                arr.push(item);
                                content += item;
                                // 将遮罩层对应的图片加载进去
                                maskContent += `<div class="swiper-slide"><img src="${e.img1}" alt=""></div>`;
                            }
                            // content += item;
                        })
                        // console.log(content);
                    }
                })
                // 将对应的信息赋值给mapContent和遮罩层轮播图
                $(".mapContent").html(content);
                $(".swiper-wrapper").html(maskContent);
                // 将content的值清空
                content = '';
                maskContent = '';
            } else if (e.attribute === type) {
                $(data2[type]).each(function (i, e) {
                    var span = '';
                    // 显示字体图标的盒子
                    $(e.spanClass).each(function (i, e) {
                        span += `<span class="${e}"></span>`
                    })
                    content += `<div class="item">
                        <a href="#">
                            <div class="tipimg">
                                <img src="${e.img1}" alt="">
                            </div>

                            <div class="tip">
                                <h3><img src="${e.img2}" alt=""> ${e.mapName}</h3>
                                ${span}
                            </div>
                        </a>
                    </div>`;
                    maskContent += `<div class="swiper-slide"><img src="${e.img1}" alt=""></div>`;
                })
                $(".mapContent").html(content);
                $(".swiper-wrapper").html(maskContent);
                // 将content的值清空
                content = '';
                maskContent = '';
            }
        })

    });
    // 加载页面时先触发一次all的点击事件,将全部地图信息渲染到页面
    $(".mapTitle ul li:first-child").click();
    // 点击显示图片
    $(".mapContent ").on("click", '.item', function () {
        var tops = $(document).scrollTop();
        $(document).bind("scroll", function () {
            $(document).scrollTop(tops);
        });
        document.documentElement.style.overflowY = 'hidden';
        // 获取当前点击索引
        var l = $(this).index();
        console.log(l);
        $(this).parents(".contentBox").find(".lightbox-container").show(function () {

            var swiper2 = new Swiper('.swiper-container2', {
                spaceBetween: 0,
                // 默认显示轮播图中对应索引的图片
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