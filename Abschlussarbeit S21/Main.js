"use strict";
var soccerGame;
(function (soccerGame) {
    let SOCCER_EVENT;
    (function (SOCCER_EVENT) {
        SOCCER_EVENT["SHOOT_BALL"] = "shootBAll";
    })(SOCCER_EVENT = soccerGame.SOCCER_EVENT || (soccerGame.SOCCER_EVENT = {}));
    let form;
    let button;
    soccerGame.playerType = [];
    let playerArray = [];
    soccerGame.ballArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = document.querySelector("button");
        button.addEventListener("click", showField);
        soccerGame.canvas = document.getElementsByTagName("canvas")[0];
        soccerGame.crc2 = soccerGame.canvas.getContext("2d");
        // canvas.addEventListener("click", moveBall);
        //Fußballfeld zeichnen
        let feld = new soccerGame.Field;
        console.log(feld);
        // Feld als Bild speichern
        soccerGame.imgData = soccerGame.crc2.getImageData(0, 0, soccerGame.canvas.width, soccerGame.canvas.height);
        createPlayer();
        createBall();
        soccerGame.canvas.addEventListener("click", shootBall);
        soccerGame.imgData = soccerGame.crc2.getImageData(0, 0, soccerGame.crc2.canvas.width, soccerGame.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function shootBall(_event) {
        let rect = soccerGame.canvas.getBoundingClientRect();
        let x = (_event.clientX - rect.left) * 0.35;
        let y = (_event.clientY - rect.top) * 0.25;
        let positionBall = new soccerGame.Vector(x, y);
        let target = new soccerGame.Spot(positionBall);
        soccerGame.ballArray.push(target);
        console.log(x, y);
        // let ball: Ball = new Ball(positionBall, ballVelocity, 30);
        // ballArray.push(ball);
        // ball.draw();
        // console.log(ball);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        soccerGame.playerType = [];
        for (let entry of formData) {
            soccerGame.playerType.push(String(entry[1]));
            console.log(soccerGame.playerType);
        }
    }
    function showField() {
        form.classList.add("invisible");
        button.classList.add("invisible");
        createPlayer();
        showField();
        soccerGame.imgData = soccerGame.crc2.getImageData(0, 0, soccerGame.crc2.canvas.width, soccerGame.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function update() {
        soccerGame.crc2.clearRect(0, 0, soccerGame.canvas.width, soccerGame.canvas.height);
        soccerGame.crc2.putImageData(soccerGame.imgData, 0, 0);
        createPlayer();
        for (let i = 0; i < 20; i++) {
            soccerGame.ballArray[i].draw();
            soccerGame.ballArray[i].move(1 / 50);
        }
    }
    function createPlayer() {
        let positionTeamOne = [
            //Torwart
            new soccerGame.Vector(30, 75),
            //Abwehr
            new soccerGame.Vector(75, 40),
            new soccerGame.Vector(65, 65),
            new soccerGame.Vector(65, 90),
            new soccerGame.Vector(75, 115),
            //Mittelfeld
            new soccerGame.Vector(130, 60),
            new soccerGame.Vector(130, 90),
            new soccerGame.Vector(170, 75),
            //Sturm
            new soccerGame.Vector(220, 45),
            new soccerGame.Vector(210, 75),
            new soccerGame.Vector(220, 110)
        ];
        for (let i = 0; i < positionTeamOne.length; i++) {
            let playerRadius = new soccerGame.Vector(30, 30);
            let player = new soccerGame.Player(positionTeamOne[i], soccerGame.playerType[0], soccerGame.playerType[2], playerRadius);
            player.draw();
            playerArray.push();
        }
        // Team 2
        let positionTeamTwo = [
            //Torwart
            new soccerGame.Vector(270, 75),
            //Abwehr
            new soccerGame.Vector(240, 75),
            new soccerGame.Vector(240, 50),
            new soccerGame.Vector(240, 100),
            //Mittelfeld
            new soccerGame.Vector(165, 40),
            new soccerGame.Vector(185, 60),
            new soccerGame.Vector(185, 90),
            new soccerGame.Vector(165, 110),
            //Stürmer
            new soccerGame.Vector(140, 75),
            new soccerGame.Vector(100, 50),
            new soccerGame.Vector(100, 100)
        ];
        for (let i = 0; i < positionTeamTwo.length; i++) {
            let playerRadius = new soccerGame.Vector(30, 30);
            let player = new soccerGame.Player(positionTeamTwo[i], soccerGame.playerType[1], soccerGame.playerType[2], playerRadius);
            player.draw();
            playerArray.push();
        }
    }
    function createBall() {
        let positionBall = new soccerGame.Vector(40, 75);
        let velocityBall = new soccerGame.Vector(0, 0);
        //let radiusBall: Vector = new Vector(15, 15);
        let ball = new soccerGame.Ball(positionBall, velocityBall, 30);
        ball.draw();
        soccerGame.ballArray.push(ball);
    }
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Main.js.map