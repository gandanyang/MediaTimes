$(document).ready(function() {
    $('.picIcon').click(function() {
            var iconIndex = this.dataset.index;
            $('.picIcon').removeClass("onshow");
            $(this).addClass("onshow");
            var temp = $(".photoContainer li:eq(1)").clone();
        })
        // $("#sliderNav .next").on('click', movenext());
    $(".sliderNav .next").click(moveNext);
    //定时器，定时进行切换
    $('.img-slider-content').hover(function() {    
        clearInterval(timer);    
    }, function() {        
        timer = setInterval(function() {       
            moveNext();
            // showPic(index);        
            // index++;        
            // if (index == len) { index = 0; }        
        }, 4000); 
    }).trigger('mouseleave');
    $(".sliderNav .prev").click(movePrev);

    function movePrev() {
        var temp = $(".photoContainer li:last-child").clone();
        $(".photoContainer li:last-child").remove();
        temp.css({
            marginLeft: "-430px"
        });
        $(".photoContainer").prepend(temp);
        $(".photoContainer li:first-child").animate({
            marginLeft: "0"
        }, 1000);
        var index = $(".photoContainer li:last-child img").attr("data-index");
        console.log(index);

        $('.picIcon').removeClass("onshow");
        $('').addClass("onshow");
    }

    function moveNext() {
        console.log(123);
        // $(this).addClass("active").siblings("span").removeClass("active");
        $(".photoContainer li:first-child").animate({
            marginLeft: "-430px"
        }, 1000, function() {
            var temp = $(this).clone();
            $(this).remove();
            temp.css({
                marginLeft: "0"
            });
            $(".photoContainer").append(temp);
            // console.log(this);
            // var index = (this.dataset.index + 1) % 4;
            // console.log(index);
            // $('.photoContainer li:eq(2)').css({
            //     marginLeft: "-860px"
            // })
        });
        var index = $(".photoContainer li img").attr("data-index");
        console.log(index);
    }
});