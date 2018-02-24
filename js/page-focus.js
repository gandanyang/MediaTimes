$(document).ready(function() {
    $('.focusContent:eq(0)').show();
    $('.menuBar li').on('click', function() {
        $(this).addClass("onchoose").siblings().removeClass("onchoose");
        var index = this.dataset.index;
        $('.focusContent').eq(index).show().siblings().hide();
    })
    $('.menuBar a').on('click', function(e) {
        e.preventDefault();
    })
});