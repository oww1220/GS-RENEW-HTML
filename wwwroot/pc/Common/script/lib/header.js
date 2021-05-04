$(document).ready(function(){
    var bodyOffset = $('body').offset(),
        currentOffset = $(document).scrollTop(),
        windowsize = $(window).width();

        //currentHeight();
        widthCheck (windowsize);

        $(window).resize(function() {
            windowsize = $(window).width();
            widthCheck (windowsize);
        });
        function widthCheck (windowsize){
            if (windowsize < 900) {
                $('.c-header__menu-sub-list__item').removeClass('on');
            }else if (windowsize < 640) {
                $('.c-header').removeClass('all-menu-active');
                $('.c-header__all-menu__wrap').removeClass('active');
            }else {
                $('.c-header').removeClass('mobile-menu-active');
                $('.c-header__hambuger-item-mobile-menu').removeClass('active');
                $('.c-header__menu-list__item').removeClass('active');

            }
        }
        $('.c-header__menu-list__item-tit').click (function(){

            if (windowsize < 640) {
                if ($(this).parents('.c-header__menu-list__item').hasClass('active')){
                    $(this).parents('.c-header__menu-list__item').removeClass('active');
                }else {
                    $(this).parents('.c-header__menu-list__item').siblings().removeClass('active');
                    $(this).parents('.c-header__menu-list__item').addClass('active');
                }
            }
        });



        $('.c-header__item, .c-header__item').hover (
            function(){
                $('.c-header').addClass('active');
                $(this).addClass('active');
            },function(){
                $('.c-header').removeClass('active');
                $(this).removeClass('active');
        });


        $('.c-header__menu-utility-list__item').on('click',function(e){
            var __this =$(this),
                __item = __this.siblings();

                if (__item.hasClass('active')){
                    __item.removeClass('active');
                    $('#c-header').removeClass('lang-active');
                }else {
                    e.stopPropagation();
                    __item.addClass('active');
                    $('#c-header').addClass('lang-active');
                    documentEvent(__item);
                }
        });
        function resetActive(__item){
            __item.removeClass('active');
            $('#c-header').removeClass('lang-active');
            $(document).off();
        };
        function documentEvent(__item){
            $(document).on({
                'click' : function(e){
                    resetActive(__item);
                },
                'scroll' : function(e){
                    resetActive(__item);
                }
            });
        };


        $('.c-header__hambuger-item--all-menu').click(function(){
            var __this =$(this),
                __item = $('.c-header__all-menu__wrap');
                if (__item.hasClass('active')){
                    __item.removeClass('active');
                    $('#c-header').removeClass('all-menu-active');
                    $('body').removeClass('all-menu');

                }else {
                    __item.addClass('active');
                    $('#c-header').addClass('all-menu-active');
                    $('body').addClass('all-menu');
                }
        });
        $('.c-header__hambuger-item-mobile-menu').click(function(){
            var __this =$(this);
                if (__this.hasClass('active')){
                    if($('.mobile-menu-active .c-header__menu-list__item').hasClass('active')){
                        $('.mobile-menu-active .c-header__menu-list__item').removeClass('active');
                    }
                    __this.removeClass('active');
                    $('#c-header').removeClass('mobile-menu-active');
                }else {
                    __this.addClass('active');
                    $('#c-header').addClass('mobile-menu-active');
                }
        });

        $('.c-header__menu-sub-list__depth-btn').click(function(){
            var __this =$(this),
            __parent =__this.parents('.c-header__menu-sub-list__item');

            if(__parent.hasClass('on')){
                __parent.removeClass('on');
            }else {
                __parent.siblings().removeClass('on');
                __parent.addClass('on');
            }

        });
        $('.c-footer__site-wrap__list-button').click(function(){
            var __this = $(this),
                __parent =__this.parents('.c-footer__site-wrap');
            if(__parent.hasClass('active')){
                __parent.removeClass('active');
            }else {
                __parent.addClass('active');
            }
            $('.gs-main .c-footer__site-wrap__list').on('mouseenter', function(){
                fullpage_api.setAllowScrolling(false);
            });
            $('.gs-main .c-footer__site-wrap__list').on('mouseleave', function(){
                fullpage_api.setAllowScrolling(true);

            })
        });

        $(window).scroll(function(){
            if (windowsize>640){
                if ($('.c-footer__site-wrap').hasClass('active')){
                    $('.c-footer__site-wrap').removeClass('active');
                }
            }
            if($(document).scrollTop()>70){
                $('#c-header').addClass('scroll');
            }else {
                $('#c-header').removeClass('scroll');
            }
        });

});

function showPopup(id_check) {
    var id_value = id_check+ '_popup';
    $('#'+ id_value).css('display','block');

    if($('body').hasClass('.gs-main')){
        $('#'+ id_value).on('mouseenter', function(){
            fullpage_api.setAllowScrolling(false);
        });
        $('#'+ id_value).on('mouseleave', function(){
            fullpage_api.setAllowScrolling(true);
        });
    }
}
function popupClose() {
    $(".l-popup").css('display','none');
}