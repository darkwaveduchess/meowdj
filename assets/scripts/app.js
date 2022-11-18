
document.addEventListener('keydown', function (event) {

    console.log(event.keyCode);

    //🔊 SOUNDS
    var meow = new Audio("./assets/audios/meow.wav");

    //⌨️ KEY EVENTS
    switch (event.keyCode) {
        case 32:
            meow.play();
            break;
    }
   
})
