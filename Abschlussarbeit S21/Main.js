"use strict";
var soccer;
(function (soccer) {
    window.addEventListener("load", handleLoad);
    let form;
    let button;
    let button2;
    let button3;
    soccer.jerseyColor1 = "";
    soccer.jerseyColor2 = "";
    soccer.speed = 0.05;
    soccer.ballControl = 20;
    // export let minPrec: number = 0.4;
    // export let maxPrec: number = 1.2;
    soccer.moveables = [];
    soccer.ballArray = [];
    let positionTeams = [[85, 285], [200, 150], [200, 285], [200, 420], [325, 285], [400, 170], [400, 390], [520, 285], [600, 120], [600, 285], [600, 460], [745, 285], [640, 450], [640, 340], [640, 230], [640, 120], [510, 360], [510, 220], [380, 120], [380, 460], [250, 220], [250, 380]];
    let jerseyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    //let newJerseyNumber: number [] = [12, 13, 14, 15, 16, 17];
    //let newjerseyNumberT2: number [] = [18, 19, 20, 21, 22, 23];
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
        if (formData.id == "precision") {
            soccer.ballControl = Number(formData.value);
        }
        // if (formData.id == "maxprec") {
        //  maxPrec = Number(formData.value);
        // }
    }
    function showField(_event) {
        form.classList.add("invisible"); // Nur Feld wird angezeigt
        button.classList.add("invisible");
        createPlayer();
        createBall();
        playeronBall();
        soccer.canvas.addEventListener("click", clickBall);
        button2 = document.querySelector("#addPlayer");
        button2.addEventListener("click", newPlayer);
        button3 = document.querySelector("#addPlayerT2");
        button3.addEventListener("click", newPlayerT2);
        soccer.canvas.addEventListener("click", deletePlayer);
        window.setInterval(update, 50); // update Funktion wird gestartet
    }
    function newPlayer(_event) {
        for (let i = 0; i <= 1; i++) {
            let positionNewPlayer = [[(Math.random() * 500) + 100, (Math.random() * 350) + 100]];
            let playerNew = new soccer.Player(new soccer.Vector(positionNewPlayer[i][0], positionNewPlayer[i][1]), Math.round((Math.random() * 6) + 12));
            playerNew.draw();
            soccer.moveables.push(playerNew);
            console.log("geklickt");
        }
    }
    function newPlayerT2(_event) {
        for (let i = 0; i <= 1; i++) {
            let positionNewPlayerT2 = [[(Math.random() * 500) + 100, (Math.random() * 350) + 100]];
            let playerNew = new soccer.Player(new soccer.Vector(positionNewPlayerT2[i][0], positionNewPlayerT2[i][1]), Math.round((Math.random() * 6) + 30));
            playerNew.draw();
            soccer.moveables.push(playerNew);
            console.log("geklickt");
        }
    }
    function deletePlayer(_event) {
        let taste = _event.ctrlKey;
        if (taste == true) {
            let rect = soccer.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            for (let [i, moveable] of soccer.moveables.entries()) {
                if (moveable instanceof soccer.Player) {
                    //let v1: Vector = new Vector(moveable.position.x, moveable.position.y);
                    //let v2: Vector = new Vector(x, y);
                    let diffVec = new soccer.Vector(moveable.position.x - x, moveable.position.y - y);
                    let length = diffVec.length();
                    if (length <= 20) { // Bereich für löschen => Notwendig sonst werden viele gelöscht
                        soccer.moveables.splice(i, 1);
                    }
                }
            }
        }
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
    function playeronBall() {
        for (let player of soccer.moveables) {
            if (player.contactToBall() == true) {
                soccer.playerAtBall = player; // ansonsten kommt TYpeError: undefined
                if (soccer.playerAtBall.team == "Team 1") {
                    let playerNumber = document.getElementById("PlayerT");
                    playerNumber.innerHTML = player.jerseyNumber.toString();
                    playerNumber.style.fontFamily = "fantasy";
                    playerNumber.style.backgroundColor = player.jerseyColor;
                }
                else {
                    let playerNumber = document.getElementById("PlayerT");
                    playerNumber.innerHTML = player.jerseyNumber.toString();
                    playerNumber.style.fontFamily = "fantasy";
                    playerNumber.style.backgroundColor = player.jerseyColor;
                }
                return true;
            }
        }
        return false;
    }
    function update() {
        soccer.crc2.clearRect(0, 0, soccer.crc2.canvas.width, soccer.crc2.canvas.height);
        soccer.crc2.putImageData(soccer.imgData, 0, 0); // Hintergrund als Bild bleibt erhalten
        if (soccer.ball.ballMove == false && playeronBall() == true) { // wenn ball sich nicht bewegt und ein Spieler am Ball ist => "stoppt" das Spiel
            for (let player of soccer.moveables) {
                //console.log("Spiel stoppt")
                player.draw();
            }
        }
        else {
            for (let player of soccer.moveables) {
                player.move();
                player.draw();
            }
        }
        for (let ball of soccer.ballArray) {
            ball.move();
            ball.draw();
        }
    }
    function clickBall(_event) {
        let taste = _event.ctrlKey;
        if (taste == true) {
            return;
        }
        let rect = soccer.canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top; // Position des Klicks wird ermittelt
        soccer.ball.click(new soccer.Vector(x, y)); // position als neuer Vektor gespeichert
        console.log(soccer.ball);
    }
})(soccer || (soccer = {}));
//# sourceMappingURL=main.js.map