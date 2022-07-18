


//using keypress in jQuery
/* $("input").keypress(function (e) {
    console.log(e.key);
    $("h1").text(e.key);
});

$("h1").mouseover(function () {
    $("h1").css("color", "purple");

});

$("h1").on("mouseover", function () {
    $("h1").css("color", "red");

}); */


$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: .5 });

});
