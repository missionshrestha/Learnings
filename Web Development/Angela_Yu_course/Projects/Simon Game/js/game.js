gamePattern = [];


buttonColors = ["red", "blue", "green", "yellow"];
userClickedPattern = [];

var gameStarted = false;
var level = 0;
function nextSequence() {
    gameStarted = true;
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var randomChoosenColor = buttonColors[randomNumber - 1];
    gamePattern.push(randomChoosenColor);
    console.log(gamePattern);


    // console.log($("button #green"))
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // media.muted = true; // without this line it's not working although I have "muted" in HTML
    var colorAudio = new Audio('/Web Development/Angela_Yu_course/Projects/Simon Game/assets/sounds/' + randomChoosenColor + '.mp3');
    colorAudio.play();

    $("#level-title").text("LEVEL " + level);

}



function patternHandler() {

    //getting attributes of clicked class
    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        var clickedColorAudio = new Audio('/Web Development/Angela_Yu_course/Projects/Simon Game/assets/sounds/' + userChosenColour + '.mp3');
        clickedColorAudio.play();
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length);
    });
}

//this function can be used to add a class & remove a class after some time
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");

    }, 150);

}

function checkAnswer(currentLevel) {
    console.log(currentLevel);
    $("#level-title").text("LEVEL " + currentLevel);

    
}



//this can be used to detect when a keyboard key has been pressed
$(document).keypress(function (e) {
    if (gameStarted === false) {
        nextSequence();
    }

    else {
        console.log("Game has already started")
    }
});
//this should execute all the time
patternHandler();





