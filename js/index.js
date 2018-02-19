$(document).ready(function() {
    $('.picIcon').on('click', clickpicIcon());

    function picIcon() {

    }
    $("#sliderNav .next").on('click', movenext());

    function movenext() {
        $(".photoContainer li:first-child").animate({
            marginLeft: "-430px"
        }, 1000, function() {
            var temp = $(this).clone();
            $(this).remove();
            temp.css({
                marginLeft: "0"
            });
            $(".photoContainer").append(temp);
            console.log(this);
            var index = (this.dataset.index + 1) % 4;
            console.log(index);
            // $('.photoContainer li:eq(2)').css({
            //     marginLeft: "-860px"
            // })
        });




    function moveprev() {
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