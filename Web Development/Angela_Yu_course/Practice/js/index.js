// Method 1

function RandomDiceGenerator() {
    var ranNum1 = Math.random();
    var ranNum2 = Math.random();
    ranNum1 = Math.floor(ranNum1 * 6 + 1);
    ranNum2 = Math.floor(ranNum2 * 6 + 1);

    console.log(ranNum1);
    console.log(ranNum2);

    // document.querySelector(".Dice-Image-1").innerHTML = (` <img src="/assets/Images/dice${ranNum1}.png" alt="" />`);
    // document.querySelector(".Dice-Image-1").innerHTML = ' <img src="/assets/Images/dice${ranNum1}.png" alt="" />';

    // document.querySelector(".Dice-Image-2").innerHTML = (` <img src="/assets/Images/dice${ranNum2}.png" alt="" />`);

    document.querySelector(".Dice-Image-1 img").setAttribute("src", (`/assets/Images/dice${ranNum1}.png`));
    // document.querySelector(".Dice-Image-1 img").setAttribute("src", '/assets/Images/dice${ranNum1}.png');

    document.querySelector(".Dice-Image-2 img").setAttribute("src", (`/assets/Images/dice${ranNum2}.png`));


    if (ranNum1 > ranNum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if (ranNum1 === ranNum2) {
        document.querySelector("h1").innerHTML = "It's a Draw";

    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 wins";


    }

}
RandomDiceGenerator();


// Methods 2;
/* 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "/assets/Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];//0 for 1st image

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "/assets/Images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];//1 for 2nd image

image2.setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw";

}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins";


}


 */