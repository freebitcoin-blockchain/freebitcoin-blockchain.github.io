var stoping = false;
var itemSelected = 0;
var LocalitemSelected = localStorage.getItem('itemSelected');

jQuery(function ($) {
    var $owl = $('.owl-carousel');
    
    // Initialize Owl
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

    // Click in button Jump
    $('#js-btn-jump').click(function (e) {
        if (LocalitemSelected == null) {
            e.preventDefault();
            stoping = false;
            // Random between 1 and 10
            itemSelected = Math.floor((Math.random() * 10) + 1);

            localStorage.setItem('itemSelected', itemSelected);

            var $jump = $(this);
            $jump.html('Roll...');
            $jump.attr('disabled', 'disabled');
            $("#spin-left").html('0');
            // Trigger autoplay owl
            $owl.trigger('play.owl.autoplay', [100]);
            // Slow speed by step
            setTimeout(slowSpeed, 2000, $owl, 200);
            setTimeout(slowSpeed, 4000, $owl, 250);
            setTimeout(slowSpeed, 5000, $owl, 300);
            setTimeout(stopAutoplay, 6000);
            
            setTimeout(Prize, 9000);

            return false;
        }
    });

    // Event changed Owl
    $owl.on('changed.owl.carousel', function (e) {
        if (stoping) {
            // Examine only if roulette stop
            var index = e.item.index;
            var element = $(e.target).find(".owl-item").eq(index).find('.element-roulette');
            var item = element.data('item');
            if (item == itemSelected) {
                $owl.trigger('stop.owl.autoplay');
                $('#js-btn-jump').html('Roll');
            }
        }
    });

    if (LocalitemSelected == null) {
    // Showcase
        slowSpeed($owl, 1400);
    }

});

/**
 * Reduce speed roulette
 * @param {type} $owl
 * @param {type} speed
 * @returns {undefined}
 */
function slowSpeed($owl, speed) {
    $owl.trigger('play.owl.autoplay', [speed]);
}

/**
 * Stop autoplay roulette
 * @returns {undefined}
 */
function stopAutoplay() {
    stoping = true;
}


function Prize() {
    var search = $(".owl-item").children(".item.element-roulette[data-item="+itemSelected+"]:first");
    var price = search.find(".owl-item-name").data("price");
    var name = search.find(".owl-item-name").text();
    var image = search.find("img").attr('src');

    $(".roulette_prize-content").append('<img src='+image+' alt=""><p>'+price+'</p><br><p>'+name+'</p>');
    $(".roulette_prize-block").fadeIn(400);
    $(".roulette_block-info").fadeOut(400);
}

$(document).ready(function() {
    if (LocalitemSelected != null) {
        var $owl = $('.owl-carousel');
        stoping = false;
        // Random between 1 and 10
        itemSelected = LocalitemSelected;

        localStorage.setItem('itemSelected', itemSelected);

        var $jump = $(this);
        $jump.html('Roll...');
        $jump.attr('disabled', 'disabled');
        $("#spin-left").html('0');
        // Trigger autoplay owl
        $owl.trigger('play.owl.autoplay', [100]);
        // Slow speed by step
        setTimeout(stopAutoplay, 1000);



        $("#spin-left").html('0');

        var search = $(".owl-item").children(".item.element-roulette[data-item="+LocalitemSelected+"]:first");
        var price = search.find(".owl-item-name").data("price");
        var name = search.find(".owl-item-name").text();
        var image = search.find("img").attr('src');

        $(".roulette_prize-content").append('<img src='+image+' alt=""><p>'+price+'</p><br><p>'+name+'</p>');
        $(".roulette_prize-block").fadeIn(400);
        $(".roulette_block-info").css("display", "none");
    }
});