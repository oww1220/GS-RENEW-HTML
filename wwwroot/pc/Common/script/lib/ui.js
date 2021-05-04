$(document).ready(function () {

    $('.m-accordion__head').click(function () {
        var $__this = $(this),
            parent = $__this.parent();
        if (parent.hasClass('on')) {
            parent.removeClass('on');
        } else {
            parent.addClass('on').siblings().removeClass('on');
        }
    });

    (function(){
        // 브레드 크럼
        var $breadcrumbWrap = $('.m-breadcrumb__item'),
            $breadcrumbList = $('.m-select__view-list'),
            $breadcrumbAnchor = $('.m-select__view'),
            breadcrumbBool  = false;


        function resetBreadcrumb(){
            $breadcrumbList.removeClass('active');
            $(document).off();
            breadcrumbBool = false;
        };
        function documentEvent(){
            $(document).on({
                'click' : function(e){
                    resetBreadcrumb();
                },
                'scroll' : function(e){
                    resetBreadcrumb();
                }
            });
        };
        $breadcrumbAnchor.on('click', function(e){
            var _this = $(this),
                $breadcrumbWrap = _this.closest('.m-breadcrumb__item'),
                $breadcrumbList = _this.next('.m-select__view-list');

            if($breadcrumbWrap.length !== 0){
                //있다
                $breadcrumbWrap.siblings().find('.m-select__view-list').removeClass('active');
                breadcrumbBool = false;
            }else{
                //없다
                return;
            }
            if(!breadcrumbBool){
                if($breadcrumbList.hasClass('active')){
                    resetBreadcrumb();
                    documentEvent();
                }else{
                    e.stopPropagation();
                    $breadcrumbList.addClass('active');
                    breadcrumbBool = true;
                    documentEvent();
                }
            }else{
                resetBreadcrumb();
                documentEvent();
            }
        });
        $('.section__content__info-list-mo .m-select__view').on('click', function(e){
            var select__view__this = $(this),
            select__view__list = select__view__this.next();

            if (select__view__list.hasClass('active')) {
                select__view__list.removeClass('active');
            }else {
                e.stopPropagation();
                select__view__list.addClass('active');
                documentEvent();
            }
        });

        // $(' .m-select__view').click(function () {
        //     var select__view__this = $(this),
        //     select__view__list = select__view__this.next();

        //     if (select__view__list.hasClass('active')) {
        //         select__view__list.removeClass('active');
        //     }else {
        //         select__view__list.addClass('active');
        //     }
        // });

        $('.m-subtab__mo .m-select__view').click(function () {
            var select__view__this = $(this),
                select__view__list = select__view__this.next(),
                $list__item = select__view__list.find('.m-select__view-list__item');

                if (select__view__list.hasClass('active')) {
                    select__view__list.removeClass('active');
                }else {
                    select__view__list.addClass('active');
                }

            $list__item.click(function () {
                var __this = $(this),
                    __item = __this.siblings(),
                    __value = __this.html(),
                    select__label = select__view__this.children('span');

                if (__item.hasClass('selected')) {
                    __item.removeClass('selected');
                }
                __this.addClass('selected');
                select__label.text(__value);
                $('.m-select__view-list').removeClass('active');
            });
        });
        $('.l-popup__wrap .m-select__view').click(function () {
            var select__view__this = $(this),
                select__view__list = select__view__this.next(),
                $list__item = select__view__list.find('.m-select__view-list__item');

                if (select__view__list.hasClass('active')) {
                    select__view__list.removeClass('active');
                }else {
                    select__view__list.addClass('active');
                }

            $list__item.click(function () {
                var __this = $(this),
                    __item = __this.siblings(),
                    __value = __this.html(),
                    select__label = select__view__this.children('span');

                if (__item.hasClass('selected')) {
                    __item.removeClass('selected');
                }
                __this.addClass('selected');
                select__label.text(__value);
                $('.m-select__view-list').removeClass('active');
            });
        });
    })();

    function subtab() {
        var $nav = $('.m-tab__head-list'),
            $navItem = $nav.find('a'),
            _dataType = $nav.data('type');

        if (_dataType == 'tab') {
            $navItem.on('click', function (event) {
                var $this = $(this),
                    $target = $($this.attr('href').replace('#', '.'));
                event.preventDefault();

                function actives(that) {
                    var $that = $(that);
                    $that.addClass('active').siblings().removeClass('active');
                }

                actives($this);
                actives($target);
            });
        }
    }
    $(function () {
        subtab();
    });
    $('.c-header__item, .c-header__item').hover(
        function () {
            $('.c-header').addClass('active');
            $(this).addClass('active');
        }, function () {
            $('.c-header').removeClass('active');
            $(this).removeClass('active');
        }
    );

    $(".section__content__item").click(function () {
        var _this = $(this);
        if (_this.hasClass('item__name-korea')){
            return ;
        }else {
            _this.toggleClass('active').siblings().removeClass('active');
        }

    });
    document.body.addEventListener('touchmove',
    function(event) {
        if($(document).height() <= $(window).height()){
            event.preventDefault();
        }
    }, false);

});

