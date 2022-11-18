
window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");

    if (reloading) {
        
        // Player 1:
        var randomNumber1 = 1 + Math.floor(Math.random() * 6);
        document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

        // Player 2:
        var randomNumber2 = 1 + Math.floor(Math.random() * 6);
        document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


        var winnerText = [];

        if(randomNumber1 > randomNumber2) winnerText = "&#128681 Player 1 Wins";
        else if(randomNumber2 > randomNumber1) winnerText = "Player 2 Wins &#128681";
        else winnerText = "Draw!";

        document.getElementsByTagName("h1")[0].innerHTML = winnerText;
    }
    else {
        
        sessionStorage.setItem("reloading", true);
    }
}


