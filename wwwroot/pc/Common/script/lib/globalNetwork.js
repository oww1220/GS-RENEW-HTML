$(document).ready(function () {
    $('.section__content__item').on('click',function(e){
        var _this = $(this);
        if (_this.hasClass('item__name-korea')){
            return ;
        }else {

            e.stopPropagation();
            _this.addClass('active');
            documentEvent(_this);
        }
    });

    function resetActive(_this){
        _this.removeClass('active');
        $(document).off();
    };
    function documentEvent(_this){
        $(document).on({
            'click' : function(e){
                resetActive(_this);
            },
            'scroll' : function(e){
                resetActive(_this);
            }
        });
    };
});

