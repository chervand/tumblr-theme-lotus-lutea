$(document).ready(function(){

    /* Initial height of the tweets block */
    var twitHeight = $("div#twitter").height();

    /* Initial height of the header block */
    var headHeight = $("div.topbar").height();

    /* Initial height of the container */
    var contWidth = $('div.container').width();

    /* Initial width of the QR Code block */
    var qrWidth = $('div#qrcode').width();

    /* Initial padding-top of the body */
    var bodyPad = parseInt($('body').css('padding-top'));

    /*if (window.console) {
     console.log(contWidth+(qrWidth*3));
     }*/

    /*jQuery('div#cloud').tumblrTagCloud({
     url: 'http://chervand.tumblr.com',
     sortBy: 'alpha'
     });*/

    /* Change padding-top for the body on the widow width change */
    function fitBody() {
        if ($(window).width() < contWidth+(qrWidth*3) && $('body').css('padding-top') === bodyPad + 'px') {
            $('body').animate({
                paddingTop: qrWidth + bodyPad
            });
        } else if ($(window).width() >= contWidth+(qrWidth*3) && $('body').css('padding-top') === bodyPad + qrWidth + 'px') {
            $('body').animate({
                paddingTop: bodyPad
            });

        }
    }
    fitBody();
    $(window).resize(fitBody);

    /**
     * Extend tweets block to the auto height and back
     */
    $("#go").click(function(){
        if ($("div#twitter").css("height") === twitHeight + "px") {
            $("div#twitter").animate({
                height: $('div#tweets').height()
            }, 1000 );
            $('#show-tweets-icon').animate({  marginTop: 180 }, {
                step: function(now,fx) {
                    $(this).css('-o-transform','rotate('+now+'deg)');
                    $(this).css('-ms-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                },
                duration: 1000
            },'linear');
        } else {
            $("div#twitter").animate({
                height: twitHeight + "px"
            }, 1000 );
            $('#show-tweets-icon').animate({  marginTop: 0 }, {
                step: function(now,fx) {
                    $(this).css('-o-transform','rotate('+now+'deg)');
                    $(this).css('-ms-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                },
                duration: 1000
            },'linear');
        }
    });

    /**
     * Show/hide "Show more tweets" button on hover
     */
    $("div#twitter").hover( /* Read about hover method */
        function(){
            $("div#go").fadeIn("fast");
        },
        function(){
            $("div#go").fadeOut("fast");
        }
    );

    /* Show topbar on mouse enter the QR */

    /*$("div#qrcode").mouseenter(function(){
     $("div.topbar").fadeIn();
     });*/

    /* Hide topbar on mouse leave */
    $("div.topbar").mouseleave(function(){
        $("div.topbar").fadeOut();
    });

    /* Show/hide topbar on click */
    $("div#qrcode").click(function(){
        $("div.topbar").fadeToggle();
    });

    /* Show header on scroll and hide on the top */
    $(window).scroll(function(){
        if ($(window).scrollTop() > headHeight*3) {
            $("div.topbar").fadeIn("slow");
        } else {
            $("div.topbar").fadeOut("slow");
        }
    });

    $('a#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $('a#infoLink').click(function(){

        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);


    });

});