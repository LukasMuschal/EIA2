"use strict";
var soccerGame;
(function (soccerGame) {
    // let jerseyColor1: string [] = [];
    //let jerseyColor2: string [] = [];
    let form;
    let button;
    soccerGame.playerType = [];
    let pLayerArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = document.querySelector("button");
        button.addEventListener("click", showField);
        soccerGame.canvas = document.getElementsByTagName("canvas")[0];
        soccerGame.crc2 = soccerGame.canvas.getContext("2d");
        //Fußballfeld zeichnen
        let feld = new soccerGame.Field;
        console.log(feld);
        // Feld als Bild speichern
        soccerGame.imgData = soccerGame.crc2.getImageData(0, 0, soccerGame.canvas.width, soccerGame.canvas.height);
        createPlayer();
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
            pLayerArray.push();
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
            pLayerArray.push();
        }
    }
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Main.js.map