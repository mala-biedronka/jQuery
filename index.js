//
// $("h1").click(function () {
//     $("h1").css("color", "yellowgreen")
// })
//
// $("input").keypress(function (event) {
//     $("h1").text(event.key);
// })
//
// $("h1").on("mouseover", function () {
//     $("h1").addClass("purple-heading");
// })
//
// $("button").click(function () {
//     $("h1").addClass("purple-heading");
// })

//Animation with jQuery
// $("button").click(function () {
//     $("h1").hide();
// })
// $("button").click(function () {
//     $("h1").show();
// })

// $("button").click(function () {
//     $("h1").toggle();
// })

// $("button").click(function () {
//     $("h1").fadeOut();
// })
//
// $("button").click(function () {
//     $("h1").fadeIn();
// })

// $("button").click(function () {
//     $("h1").fadeToggle();
// })


// $("button").click(function () {
//     $("h1").slideUp();
//     $("h1").slideDown();
// })

// $("button").click(function () {
//     $("h1").slideToggle();
// })

// $("button").on("click", (function () {
//         $("h1").animate({opacity: 0.5});
//     }))

$("button").on("click", (function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
}))