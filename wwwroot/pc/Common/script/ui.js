(function ($) {
    $.fn.imgOnOff = function () {
        $(this).find('img').mouseover(function () {
            var imgSrc = $(this).attr('src');
            if (/_off/.test(imgSrc)) {
                $(this).attr('src', imgSrc.replace('_off', '_on'));
            }
        }).mouseout(function () {
            var imgSrc = $(this).attr('src');
            if (/_on/.test(imgSrc)) {
                $(this).attr('src', imgSrc.replace('_on', '_off'));
            }
        });
    };

    $(document).ready(function () {
        //$('.gnb').imgOnOff();
    });
})(jQuery);

jQuery(function ($) {

    // Frequently Asked Question
    var article = $('.faq>.faqBody>.article');
    article.addClass('hide');
    article.find('.a').hide();
    article.eq(0).removeClass('hide');
    article.eq(0).find('.a').show();
    $('.faq>.faqBody>.article>.q>a').click(function () {
        var myArticle = $(this).parents('.article:first');
        if (myArticle.hasClass('hide')) {
            article.addClass('hide').removeClass('show');
            article.find('.a').slideUp(100);
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else {
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
        return false;
    });
});



(function ($) {
    $.fn.tab = function (pm) {
        var obj = this;
        var list = obj.find('a');

        $.each(list, function (i) {
            var contents = $(this).attr('href');
            var image = $(this).find('img');

            if (i == 0) {
                $(this).addClass('on');
                if ($(this).children().is('img'))
                    image.attr('src', image.attr('src').replace('_off', '_on'));

                $(contents).show();

                if (pm && pm.callback) pm.callback.apply($(contents), [i]);
            } else {
                $(contents).hide();
            }

            $(this).click(function (i) {
                return function (e) {
                    $.each(list, function (index) {
                        var contents = $(this).attr('href');
                        var image = $(this).find('img');
                        if (i == index) {
                            $(this).addClass('on');
                            if ($(this).children().is('img'))
                                image.attr('src', image.attr('src').replace('_off', '_on'));
                            $(contents).show();

                            if (pm && pm.callback) pm.callback.apply($(contents), [index]);
                        } else {
                            $(this).removeClass('on');
                            if ($(this).children().is('img'))
                                image.attr('src', image.attr('src').replace('_on', '_off'));
                            $(contents).hide();
                        }
                    });


                    return false;
                };
            } (i));

            $(this).mouseover(function () {
                $(this).click()
            });
        });
    };


    $.fn.tab1 = function (pm) {
        var obj = this;
        var list = obj.find('a');

        $.each(list, function (i) {
            var contents = $(this).attr('href');
            var image = $(this).find('img');

            if (i == 0) {
                $(this).addClass('on');
                if ($(this).children().is('img'))
                    image.attr('src', image.attr('src').replace('_off', '_on'));

                $(contents).show();

                if (pm && pm.callback) pm.callback.apply($(contents), [i]);
            } else {
                $(contents).hide();
            }

            $(this).click(function (i) {
                return function (e) {
                    $.each(list, function (index) {
                        var contents = $(this).attr('href');
                        var image = $(this).find('img');
                        if (i == index) {
                            $(this).addClass('on');
                            if ($(this).children().is('img'))
                                image.attr('src', image.attr('src').replace('_off', '_on'));
                            $(contents).show();

                            if (pm && pm.callback) pm.callback.apply($(contents), [index]);
                        } else {
                            $(this).removeClass('on');
                            if ($(this).children().is('img'))
                                image.attr('src', image.attr('src').replace('_on', '_off'));
                            $(contents).hide();
                        }
                    });


                    return false;
                };
            } (i));

            $(this).mouseover(function () {
                $(this).click()
            });
        });
    };

    $(document).ready(function () {
        $('.contact_tab').tab();
        $('.contact_tab1').tab1();
    });
})(jQuery);





/**GNB**/
$(document).ready(function () {
    var oldIdx = 0;

    $("#gnbUi > ul > li > a").each(function (index) {
        $(this).click(function () {
            var offImgNameUrl = "/kr/images/common/leftmenu0" + (oldIdx + 1);
            $("#gnbUi > ul > li > a > img").eq(oldIdx).attr("src", offImgNameUrl + "_off.gif");
            var onImgNameUrl = "/kr/images/common/leftmenu0" + (index + 1);
            $(this).find("img").attr("src", onImgNameUrl + "_on.gif");
            $("#gnbUi > ul > li > .subgnb").hide();
            $(this).siblings(".subgnb").fadeIn("slow");
            oldIdx = index;
            return false;
        });
        $(this).siblings(".subgnb").find(".close_btn").click(function () {
            var offImgNameUrl = "/kr/images/common/leftmenu0" + (oldIdx + 1);
            $("#gnbUi > ul > li > a > img").eq(oldIdx).attr("src", offImgNameUrl + "_off.gif");
            $("#gnbUi > ul > li > .subgnb").hide();
            return false;
        });

    });
    // total menu

    $('.showtmenu').click(function () {

        if (navigator.userAgent.match(/Mobile|iPhone|iPad|BlackBerry|Android|Windows CE|Windows Phone|Opera Mini|POLARIS/) != null) {
            $('div.totalwrap').animate({ top: "0px" }, 500);
        }
        else {
            $('#total_menu').animate({ height: "410px" }, 500);
        }
    });
    $('a.btn_tclose').click(function () {
        $('div.totalwrap').animate({ top: "-600px" }, 500);
    });

    $('.bizopen').click(function () {

        if (navigator.userAgent.match(/Mobile|iPhone|iPad|BlackBerry|Android|Windows CE|Windows Phone|Opera Mini|POLARIS/) != null) {0
            $('.bizView').slideDown();
        }
        else {
            $('div.biz_top').animate({ top: "0" }, 500);
        }
    });
});

function businessCloseFn() {
    $('div.biz_top').animate({ top: "-740px" }, 500);
}


function businessCloseFn() {
    $('div.biz_top').animate({ top: "-740px" }, 500);
}


/* Footer 패밀리사이트 on/off */
$(document).ready(function () {
    var on = function () { this.src = this.src.replace("_off", "_on"); }
    var off = function () { this.src = this.src.replace("_on", "_off"); }


    //마우스 오버시 on 이미지를 보이고 마우스 아웃시 다시 off이미지를 보여준다.
    $(".familysite_list li").mouseover(function () {
        $(this).find(">a img").each(on);
    }).mouseleave(function () {
        $(this).find(">a img").each(off);
    });
});
