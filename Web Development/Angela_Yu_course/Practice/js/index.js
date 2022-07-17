
var numberOfDrimButtons = document.querySelectorAll(".drum").length


for (let index = 0; index < numberOfDrimButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        selectSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event) {
    selectSound(event.key);
    buttonAnimation(event.key);

})

function selectSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log(key)
            break;
    }

}


function buttonAnimation(currentKey) {
    console.log(currentKey)
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 200);
}


