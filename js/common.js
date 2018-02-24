$(document).ready(function() {
    /**图片id */
    $(".photoContainer li").eq(0).show();

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
    // $(".sliderNav .next").click(moveNext);
    // $(".sliderNav .prev").click(movePrev);
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
        // $(this).addClass("active").siblings("span").removeClass("active");
        // $(".photoContainer li:first-child").animate({
        //     marginLeft: "-430px"
        // }, 1000, function() {
        //     var temp = $(this).clone();
        //     $(this).remove();
        //     temp.css({
        //         marginLeft: "0"
        //     });
        //     $(".photoContainer").append(temp);
        //     // console.log(this);
        //     // var index = (this.dataset.index + 1) % 4;
        //     // console.log(index);
        //     // $('.photoContainer li:eq(2)').css({
        //     //     marginLeft: "-860px"
        //     // })
        // });
    }
});