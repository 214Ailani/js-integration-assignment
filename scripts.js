$(document).ready(function () {

    // ====== GET DATE ======
    // 👉 Change date here to test different months if needed
    let today = new Date();
    // let today = new Date("December 15, 2024"); // <-- testing line

    let monthNum = today.getMonth(); // 0–11
    let year = today.getFullYear();

    // ====== ARRAYS ======
    let months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    let specials = [
        "<p>New Year Deals!</p>",
        "<p>Valentine Specials!</p>",
        "<p>Spring Discounts!</p>",
        "<p>April Offers!</p>",
        "<p>May Madness!</p>",
        "<p>Summer Kickoff!</p>",
        "<p>July Savings!</p>",
        "<p>Back to School!</p>",
        "<p>Fall Specials!</p>",
        "<p>October Deals!</p>",
        "<p>November Discounts!</p>",
        "<p>Holiday Specials!</p>"
    ];

    let tips = [
        "<p>Stay warm this winter!</p>",
        "<p>Enjoy the blooming flowers!</p>",
        "<p>Stay cool this summer!</p>",
        "<p>Enjoy the fall colors!</p>"
    ];

    let monthName = months[monthNum];

    // ====== DISPLAY DATE ======
    $("#currentDate").text(today.toLocaleString());

    // ====== DECEMBER MESSAGE ======
    if (monthNum === 11) {
        $("#greeting").after("<h3>Happy Holidays!</h3>");
    }

    // ====== UPDATE MONTH TITLE ======
    $("#month").text("Tips for " + monthName);

    // ====== FOOTER YEAR ======
    $("#copyright").append(" " + year);

    // ====== SPECIALS ======
    $("#specials").html(specials[monthNum]);

    // ====== SEASON LOGIC ======
    let season, bgImage, color, seasonIndex;

    switch (monthNum) {
        case 11:
        case 0:
        case 1:
            season = "Winter";
            bgImage = "winterbg.jpg";
            color = "#00f";
            seasonIndex = 0;
            break;

        case 2:
        case 3:
        case 4:
            season = "Spring";
            bgImage = "springbg.jpg";
            color = "#d7d";
            seasonIndex = 1;
            break;

        case 5:
        case 6:
        case 7:
            season = "Summer";
            bgImage = "summerbg.jpg";
            color = "#006400";
            seasonIndex = 2;
            break;

        case 8:
        case 9:
        case 10:
            season = "Fall";
            bgImage = "fallbg.jpg";
            color = "#930";
            seasonIndex = 3;
            break;
    }

    // ====== BACKGROUND IMAGE ======
    $("body").css({
        "background-image": "url('images/" + bgImage + "')",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center"
    });

    // ====== SEASONAL TIPS ======
    $("#seasontips").html(tips[seasonIndex]);

    // ====== TEXT COLOR ======
    $("strong, h1, h2, h3").css("color", color);

    // ====== ADD SEASON CLASS ======
    $("#specials").removeClass("Winter Spring Summer Fall"); // prevents stacking
    $("#specials").addClass(season);

});