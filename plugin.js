(function ($) {

    $.fn.slider = function () {

        var $sliderUl = $("#slider-ul"),
            $slider = $("#slider"),
            $prev = $("#slider .prev"),
            $next = $("#slider .next"),
            liList = $slider.find('li'),
            liLength = liList.length,
            liWidth = $(liList).width(),
            ulLength = liWidth * liLength,
            indexNow = 0,
            timer = null;
        
        //设置ul的宽度为li宽度的总和
        $("#slider-ul").css({
            width: ulLength
        })

        //执行轮播图切换
        function tab() {

            if (indexNow === 0) {


                $sliderUl.animate({
                    left: 0
                })


            } else if (indexNow === liLength - 1) {


                $sliderUl.animate({
                    left: -indexNow * liWidth
                })

            } else {

                $sliderUl.animate({
                    left: -indexNow * liWidth
                })

            }

        }

        //采用setTimeout循环目的是避免setIntervial因js阻塞而不能够按照间隔时间执行
        function sliderLoop() {

            tab();

            if (indexNow === liLength - 1) {
                indexNow = 0;
            } else {
                indexNow++;
            }

            timer = setTimeout(sliderLoop, 2000);
        }

        
        
    function event(){

        $("#slider-ul, #slider .prev, #slider .next").on('mouseover', function () {   

            clearInterval(timer);

        })

        $("#slider-ul").on('mouseout', function () {
            
            sliderLoop();
        })

        $prev.on('click', function () {

            if (indexNow === 0) {
                indexNow = liLength;
            }

            indexNow--;
            tab();
        })

        $next.on('click', function () {

            indexNow++;

            if (indexNow === liLength) {
                indexNow = 0;
            }

            tab();
        })

    }
        

        event();
        sliderLoop();



    }

}(jQuery))