$(document).ready(function() {

    let score = 0;
    let timeLeft = 10;
    let gameActive = true;
    let timer;

    function startTimer() {
        timer = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;
                $("#time").text(timeLeft);
            } else {
                gameActive = false;
                clearInterval(timer);
                $("#clickBtn").text("Game Over!");
            }
        }, 1000);
    }

    startTimer(); // start game when page loads

    $("#clickBtn").click(function() {

        if (!gameActive) return;

        score++;
        $("#score").text(score);

        $("#clickSound")[0].play();
        $(this).fadeOut(100).fadeIn(100);
    });

    $("#resetBtn").click(function() {

        clearInterval(timer); // stop old timer

        score = 0;
        timeLeft = 10;
        gameActive = true;

        $("#score").text(score);
        $("#time").text(timeLeft);
        $("#clickBtn").text("Click Me!");

        startTimer(); // restart timer
    });

});