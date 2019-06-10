var button = document.getElementById("generate");

        button.addEventListener("click", function () {

            //get random numbers

            var numbers = [];
            var ball = document.getElementsByClassName("ball");

            while (numbers.length < 6) {

                var random = Math.floor(Math.random() * 49) + 1;

                if (numbers.indexOf(random) == -1) {
                    numbers.push(random);
                }
            }

            //sort numbers in array

            numbers.sort(function (a, b) {
                return a - b;
            });

            //color balls

            for (var i = 0; i < ball.length; i++) {

                ball[i].style.backgroundColor = "#3D3C3A";
                ball[i].style.color = "white";

                for (var j = 0; j < numbers.length; j++) {
                    if (numbers[j] == parseInt(ball[i].innerHTML)) {
                        ball[i].style.backgroundColor = "#ffc41d";
                        ball[i].style.color = "#3D3C3A";
                    }
                }
            }

            //add numbers to history

            // var history = [];
            // var historyDiv = document.getElementById("history");
            // var para = document.createElement("p");
            // history.push(numbers.join(", "));
            //
            // for (var k in history) {
            //
            //     var node = document.createTextNode(history[k]);
            //     para.appendChild(node);
            //     historyDiv.appendChild(para);
            //
            // }

        });
        function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 3,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
