
var knapparSynliga = true;

document.getElementById("text-knapp").addEventListener('click', function () 
{
    var textElement = document.getElementsByClassName("time-text");

    console.log(textElement);

    for (element of textElement)
    {
        if (knapparSynliga)
        {
            element.style.display = "none";
        }
        else
        {
            element.style.display = "inline-block";
        }
    }

    knapparSynliga = !knapparSynliga;
}, false);

(() => {

    var countDownDate = new Date("Sep 28, 2023 11:37:10").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() 
    {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var hoursF = hours.toString();
        var minutesF = minutes.toString();
        var secondsF = seconds.toString();

        if (hoursF.length === 1) hoursF = "0" + hoursF;
        if (minutesF.length === 1) minutesF = "0" + minutesF;
        if (secondsF.length === 1) secondsF = "0" + secondsF;

        // Display the result in the elements
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hoursF;
        document.getElementById("minutes").textContent = minutesF;
        document.getElementById("seconds").textContent = secondsF;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("container").innerHTML = "LUNCH";
        }
    }, 1000);


})()