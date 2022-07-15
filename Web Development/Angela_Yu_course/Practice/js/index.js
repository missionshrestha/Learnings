
var numberOfDrimButtons = document.querySelectorAll(".drum").length


for (let index = 0; index < numberOfDrimButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
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
                console.log(buttonInnerHtml)
                break;
        }

        document.addEventListener("keypress", function (event) {
            console.log(event);
            alert("Key was pressed");
        })
    });

}


