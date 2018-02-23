$(document).ready(function() {
    // $('.picIcon').on('click', clickpicIcon());

    // function picIcon() {

    // }
    // $("#sliderNav .next").on('click', movenext());
    $(".sliderNav .next").click = function() {
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
        }
        //定时器，定时进行切换
         
        // $('.photoContainer').hover(function() {    
        //     clearInterval(timer);    
        // }, function() {        
        //     timer = setInterval(function() {        
        //         showPic(index);        
        //         index++;        
        //         if (index == len) { index = 0; }        
        //     }, 3000); 
        // }).trigger('mouseleave');

    $(".sliderNav .prev").onclick = function() {
        console.log(456);
        var temp = $(".photoContainer li:last-child").clone();
        $(".photoContainer li:last-child").remove();
        temp.css({
            marginLeft: "-430px"
        });
        $(".photoContainer").prepend(temp);
        $(".photoContainer li:first-child").animate({
            marginLeft: "0"
        }, 1000);
    }
});