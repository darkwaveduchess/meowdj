//🔊 SOUNDS
var meow = new Audio("./assets/audios/meow.wav");
var meoww = new Audio("./assets/audios/laught.mp3");
var meowww = new Audio("./assets/audios/killbill.mp3");
var meowwww = new Audio("./assets/audios/Reggae_Horn.mp3");

document.addEventListener('keydown', function (event) {

    console.log(event.keyCode);

    //⌨️ KEY EVENTS
    switch (event.keyCode) {
        case 32:
            meow.play();
            break;
        case 65:
            meoww.play();
            break;
        case 66:
            meowww.play();
            break;
        case 67:
            meowwww.play();
            break;
    }
   
})
