$(document).ready(function() {
    var online = selfRandom(200, 250);
    $({someValue: 0}).animate({someValue: online}, {
        duration: 1000,
        easing:'swing',
        step: function() {
            $('#online').text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });

    setInterval(function() {
        var online = selfRandom(200, 250);
        var old_online = $("#online").html();
        $({someValue: old_online}).animate({someValue: online}, {
            duration: 1000,
            easing:'swing',
            step: function() {
                $('#online').text(commaSeparateNumber(Math.round(this.someValue)));
            }
        });
    }, 15000);
});

function selfRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$({someValue: 0}).animate({someValue: 23788}, {
    duration: 1000,
    easing:'swing',
    step: function() {
        $('#total-open_num').text(commaSeparateNumber(Math.round(this.someValue)));
    }
});

$({someValue: 0}).animate({someValue: 822}, {
    duration: 1000,
    easing:'swing',
    step: function() {
        $('#today-open_num').text(commaSeparateNumber(Math.round(this.someValue)));
    }
});

$({someValue: 0}).animate({someValue: 782}, {
    duration: 1000,
    easing:'swing',
    step: function() {
        $('#arcana-win_num').text(commaSeparateNumber(Math.round(this.someValue)));
    }
});

$({someValue: 0}).animate({someValue: 2744}, {
    duration: 1000,
    easing:'swing',
    step: function() {
        $('#immortal-win_num').text(commaSeparateNumber(Math.round(this.someValue)));
    }
});

function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
  return val;
}

$("#menu").click(function (e) {
    e.preventDefault();

});

$(document).ready(function () {
    setInterval(function() {
        $("body").fadeIn(400);
        $(".preloader").fadeOut(400);
    }, 3000);
});

$("#chat-close").click(function () {
    $(".chat").css("transform", "translateX(310px)");
});

$("#chat-open").click(function () {
    $(".chat").css("transform", "translateX(0px)");
});

function SendMessage(message, nickname) {
    var messageBlock = $(`
    <div class="chat-message">
        <p class="chat-message_name">${nickname}</p>
        <p class="chat-message_content">${message}</p>
    </div>
    `);
    $(".chat-content").prepend(messageBlock);
}

$("#messageChat").click(function () {
    var message = $("#sendChat").val();
    if(message.length >= 3) {
        $("#sendChat").val('');
        SendMessage(message, "Not Authorized");
    }
});

setInterval(function() {
    var arr = [
        'shov1snavi â€” Cool i get Axie',
        'AnEvilPigeon M â€” I love binance for this site',
        'shov1snavi â€” no',
        'shov1snavi â€” thahs all works',
        'AnEvilPigeon M â€” If axie not come? what i need do?',
        'cooldogeQuicksilvercooldoge â€” thonkeyes',
        'shov1snavi â€” every day i getting here Axie ',
        'shov1snavi â€” wtf',
        'shov1snavi â€” fix the trading system',
        'KarTooN â€” Need 2 guys to join Scolarship pls',
        'cooldogeQuicksilvercooldoge â€” never had one feelsbad',
        'JeyPex â€” hellooo',
        'JeyPex â€” reached lvl 10 grinning',
        'GoLuB â€” can someone deposit something in 50k price range?',
        'AnEvilPigeon M â€” Welcome to the chat pepecat',
        'AnEvilPigeon M â€” We hope you enjoy your stay',
        'Mike â€” eggplantrub',
        'cooldogeQuicksilvercooldoge â€” fak of and go away hehehe',
        'JeyPex â€” fnaticfnaticÃ§',
        'Aphex â€” Easy 25k in ref',
        'cooldogeQuicksilvercooldoge â€” chat is tosic',
        'Blind M â€” and evil',
        'Aphex â€” No thats Just pigeon',
        'putadatuamaede5 â€” I get 25000SLP in refferal xd ',
        'f11 happy â€” wazzup freak',
        'Neko â€” hi',
        'FrE4K â€” sup dude',
        'Neko â€” hey do you get added by randoms alot freak?',
        'Omerfms â€” clour',
        'Mclovin â€” gold ez',
        'Omerfms â€” gold',
        'Mclovin â€” Bait :/',
        'Omerfms â€” 50x50x50x50x50x50x',
        'FrE4K â€” 50x50x50x',
        'FrE4K â€” rolls max',
        'FrE4K â€” buy my item pls pepecat',
        'Omerfms â€” 50x where',
        'GoLuB â€” How accept Axie?',
        'Omerfms â€” aeyes2',
        'Omerfms â€” i love it',
        '999STONJER â€” red',
        'Omerfms â€” suspect',
        'Omerfms â€” 50x 50x',
        'Sektpeporwink ðŸ’Ž cbtw â€” sadrain',
        'Omerfms â€” voteyes',
        'Omerfms â€” again 2x 2x 2x 2x',
        'GoLuB â€” can someone my refferal link?',
        'LucasStrelow â€” why the server error when I claim my daily reward?',
        'LucasStrelow â€” wtf',
        'LucasStrelow â€” gold',
        'AnEvilPigeon M â€” @LucasStrelow please contact support regarding this',
        'yisusR3kt â€” helo',
        'LucasStrelow â€” I alrealy contacted',
        'Omerfms â€” 3x aalll',
        'LucasStrelow â€” srry, my english it"s not good',
        'putadatuamaede5 â€” ohhh i get Axie',
        'Bang Bang â€” 1',
        'Guilhass â€” love this site',
        'Ecneris â€” mhm',
        'Guilhass â€” tried th',
        'pi00tras â€” buy maine dota items pls',
        'christian dior dior â€” guys buy my awp mortis',
        'christian dior dior â€” from market p2p',
        'MICHU â€” whers that gold',
        'Lil Tio â€” hello',
        'N8F8 â€” gg',
        'christian dior dior â€” guys go buy my guns',
        'Rochinhanr1 â€” i need more axies',
        'putadatuamaede5 â€” duel me tho',
        'Bang Bang â€” hpr',
        'Nikki â€” BANG BANG',
        'Gaymer â€” lol easy exi for 0,5 eth',
        'STONJER â€” watafak',
        'Gaymer â€” i was going for a food sad',
        'Bang Bang â€” :O',
        'Poka pojiloy â€” go 3',
        'Bang Bang â€” 3 gold?',
        'Poka pojiloy â€” rly work',
        'Poka pojiloy â€” cooldogeQuicksilvercooldoge',
        'Poka pojiloy â€” pegon my i ask you for something? pepecat',
        'pepo ðŸ’Ž â€” saddj',
        'cooldogeQuicksilvercooldoge â€” ^ hey',
        'putadatuamaede5 â€” sad i just got axi 0.01 eth(',
        'ð•œð•’ð•žð•šð•ð•–ð•œ â€” Go gold',
        'BobbysMother â€” Where i can get my refferal link?',
        'cooldogeQuicksilvercooldoge â€” How i can get Axie for my 2 account?',
        'pepo ðŸ’Ž â€” ^hey',
        'christian dior dior â€” someone buy my 5 Axie?',
        'BobbysMother â€” lol easy win Axie 0.8 eth',
        'pepo ðŸ’Ž â€” pepesad',
        'christian dior dior â€” its 9k',
        'cooldogeQuicksilvercooldoge â€” pepo',
        'christian dior dior â€” good price',
    ];
      
    var chat_length = (arr.length);
    var chat_message = Math.floor((Math.random() * chat_length));
    var message = arr[chat_message].split(" â€” ");

    SendMessage(message[1], message[0]);
    
}, 6000);