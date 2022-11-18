//🔊 SOUNDS
var meow = new Audio("./assets/audios/meow.wav");
var laught = new Audio("./assets/audios/laught.mp3");
var killbill = new Audio("./assets/audios/killbill.mp3");
var Reggae_Horn = new Audio("./assets/audios/Reggae_Horn.mp3");

document.addEventListener('keydown', function (event) {

    console.log(event.keyCode);

    //⌨️ KEY EVENTS
    switch (event.keyCode) {
        case 32:
            meow.play();
            break;
        case 65:
            laught.play();
            break;
        case 66:
            killbill.play();
            break;
        case 67:
            Reggae_Horn.play();
            break;
    }

    if ([32, 65, 66, 67].indexOf(event.keyCode) > -1) {
        catvibing.style.opacity = "1";
        catpiano.style.opacity = "1";
    }

})
