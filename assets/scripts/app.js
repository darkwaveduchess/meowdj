//🔊 SOUNDS
var meow = new Audio("./assets/audios/meow.wav");
var laught = new Audio("./assets/audios/laught.mp3");
var killbill = new Audio("./assets/audios/killbill.mp3");
var Reggae_Horn = new Audio("./assets/audios/Reggae_Horn.mp3");

var interval, audioDuration;

function playSound(keyCode) {

    if (typeof keyCode === "object")
        keyCode = keyCode.keyCode;

    //⌨️ KEY EVENTS
    switch (keyCode) {
        case 32:
            meow.play();
            audioDuration = meow.duration;
            break;
        case 65:
            laught.play();
            audioDuration = laught.duration
            break;
        case 66:
            killbill.play();
            audioDuration = killbill.duration;
            break;
        case 67:
            Reggae_Horn.play();
            audioDuration = Reggae_Horn.duration;
            break;
    }

    if ([32, 65, 66, 67].indexOf(keyCode) > -1) {
        catvibing.style.opacity = "1";
        catpiano.style.opacity = "1";
    }

    clearInterval(interval);
    interval = setInterval(() => {
        catvibing.style.opacity = "0";
        catpiano.style.opacity = "0";
    }, audioDuration * 1000);

}

document.addEventListener('keydown', playSound)
