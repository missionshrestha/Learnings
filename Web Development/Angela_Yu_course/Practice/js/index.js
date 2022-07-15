
var numberOfDrimButtons = document.querySelectorAll(".drum").length


for (let index = 0; index < numberOfDrimButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
       console.log(this);
       console.log(this.innerHTML);
       console.log(this.style.color='red');
    });

}

/* var audio = new Audio('/Web Development/Angela_Yu_course/Practice/assets/sounds/kick-bass.mp3');

audio.play();
 */
