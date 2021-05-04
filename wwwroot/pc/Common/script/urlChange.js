$(".m-breadcrumb__list .m-select__view-list__item").click(function (e) {
    var url = $(this).attr("value");
    location.href = url;
});