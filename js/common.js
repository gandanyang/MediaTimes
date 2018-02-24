$(document).ready(function() {

    $(".photoContainer li").eq(0).show();
    $('.focusContent:eq(0)').show();
    $('.menuBar li').on('click', function() {
        $(this).addClass("onchoose").siblings().removeClass("onchoose");
        var index = this.dataset.index;
        $('.focusContent').eq(index).show().siblings().hide();
    })
    $('.menuBar a').on('click', function(e) {
        e.preventDefault();
    })
    $('.picIcon').click(function(e) {
        index = this.dataset.index;
        picIonshow(index);
        e.preventDefault();
    })

    function picIonshow(i) {
        $('.picIcon:eq(' + i + ')').addClass("onshow").siblings().removeClass("onshow");
        $('.sliderSlogan:eq(' + i + ')').fadeIn(600).siblings().fadeOut(400);
        var $temp = $('.photoContainer li:eq(' + i + ')');
        // $temp.addClass("onShow").siblings().removeClass("onShow");
        $temp.fadeIn(600).siblings().fadeOut(400);
    }
    //定时器，定时进行切换
    // $('.img-slider-content').hover(function() {
    //     clearInterval(timer);
    // }, function() {
    //     timer = setInterval(function() {
    //         moveNext();
    //         // showPic(index);
    //         // index++;
    //         // if (index == len) { index = 0; }
    //     }, 4000); 
    // }).trigger('mouseleave');
    /**图片id */
    var index = 0;

    function movePrev() {
        index--;
        index = index < 0 ? 3 : index;
        picIonshow(index);
    }
    $(".sliderNav .next").on('click', moveNext);
    $(".sliderNav .prev").on('click', movePrev);

    function moveNext() {
        index++;
        index = index > 3 ? 0 : index;
        picIonshow(index);
    }
});