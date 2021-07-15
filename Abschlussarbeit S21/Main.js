"use strict";
var soccer;
(function (soccer) {
    window.addEventListener("load", handleLoad);
    let form;
    let button;
    soccer.jerseyColor1 = "";
    soccer.jerseyColor2 = "";
    soccer.speed = 0;
    soccer.minPrec = 0;
    soccer.maxPrec = 0;
    soccer.moveables = [];
    soccer.ballArray = [];
    let positionTeams = [[85, 285], [200, 150], [200, 285], [200, 420], [325, 285], [400, 170], [400, 390], [520, 285], [600, 120], [600, 285], [600, 460], [745, 285], [640, 450], [640, 340], [640, 230], [640, 120], [510, 360], [510, 220], [380, 120], [380, 460], [250, 220], [250, 380]];
    let jerseyNumbers = [1, 2, 3];
    function handleLoad(_event) {
        soccer.canvas = document.getElementsByTagName("canvas")[0];
        soccer.crc2 = soccer.canvas.getContext("2d");
        let feld = new soccer.Field; // Fußballfeld zeichnen
        console.log(feld); //wegen Linter
        // Feld als Bild speichern
        soccer.imgData = soccer.crc2.getImageData(0, 0, soccer.canvas.width, soccer.canvas.height);
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = document.querySelector("button");
        button.addEventListener("click", showField);
    }
    function handleChange(_event) {
        let formData = _event.target;
        if (formData.id == "jerseyColor1") {
            soccer.jerseyColor1 = formData.value;
        }
        if (formData.id == "jerseyColor2") {
            soccer.jerseyColor2 = formData.value;
        }
        if (formData.id == "sliderSpeed") {
            soccer.speed = Number(formData.value);
        }
        if (formData.id == "minprec") {
            soccer.minPrec = Number(formData.value);
        }
        if (formData.id == "maxprec") {
            soccer.maxPrec = Number(formData.value);
        }
    }
    function showField(_event) {
        form.classList.add("invisible"); // Nur Feld wird angezeigt
        button.classList.add("invisible");
        createPlayer();
        createBall();
        soccer.canvas.addEventListener("click", clickBall);
        window.setInterval(update, 50); // update Funktion wird gestartet
    }
    function createPlayer() {
        for (let i = 0; i <= 21; i++) {
            let player = new soccer.Player(new soccer.Vector(positionTeams[i][0], positionTeams[i][1]), jerseyNumbers[i]);
            player.draw();
            soccer.moveables.push(player);
        }
    }
    function createBall() {
        soccer.ball = new soccer.Ball(new soccer.Vector(415, 290));
        soccer.ball.draw();
        soccer.ballArray.push(soccer.ball);
    }
    function clickBall(_event) {
        let rect = soccer.canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top;
        soccer.ball.click(new soccer.Vector(x, y));
        console.log(soccer.ball);
    }
    function update() {
        soccer.crc2.clearRect(0, 0, soccer.crc2.canvas.width, soccer.crc2.canvas.height);
        soccer.crc2.putImageData(soccer.imgData, 0, 0); // Hintergrund als Bild bleibt erhalten
        for (let ball of soccer.ballArray) {
            ball.move();
            ball.draw();
        }
    }
})(soccer || (soccer = {}));
//# sourceMappingURL=main.js.map