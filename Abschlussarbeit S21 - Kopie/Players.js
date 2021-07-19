"use strict";
var soccer;
(function (soccer) {
    class Player extends soccer.Moveable {
        constructor(_position, _jerseyNumber) {
            super(_position);
            this.velocity = 0;
            this.jerseyNumber = _jerseyNumber;
            this.oldPosition = _position.copy(); // alte Position kopieren für Rückkehr
            this.velocity = Math.random() * (soccer.speed - 0.01) + 0.01; //min von Form => kleiner Wert sonst Spieler zu schnell
            //this.precision = Math.random() * (maxPrec - minPrec) + minPrec;
            if (this.jerseyNumber <= 18) { // gibt Spielern Farbe
                this.jerseyColor = soccer.jerseyColor1.toString();
                this.team = "Team 1";
            }
            else if (this.jerseyNumber >= 19) {
                this.jerseyColor = soccer.jerseyColor2.toString();
                this.team = "Team 2";
            }
        }
        draw() {
            soccer.crc2.save();
            soccer.crc2.beginPath();
            soccer.crc2.fillStyle = this.jerseyColor;
            soccer.crc2.arc(this.position.x, this.position.y, 13, 0, 2 * Math.PI);
            soccer.crc2.fill();
            soccer.crc2.restore();
            soccer.crc2.font = "12px Georgia";
            if (this.jerseyNumber <= 11 || this.jerseyNumber >= 12) {
                soccer.crc2.strokeText(" " + this.jerseyNumber.toString(), this.position.x - 6, this.position.y + 4);
                soccer.crc2.fillText(" " + this.jerseyNumber.toString(), this.position.x - 6, this.position.y + 4);
            }
        }
        move() {
            let x = soccer.ball.position.x - this.position.x; // Differenzvektor bestimmen zu Ball Position
            let y = soccer.ball.position.y - this.position.y;
            let difVec = new soccer.Vector(x, y);
            if (x <= 0) { // damit bleiben Spieler an ihrer Stelle 
                x = x * -1;
            }
            if (y <= 0) {
                y = y * -1;
            }
            if (x <= 60 && y <= 60) { // wenn x, y kleiner 60, dann renne zu Ball, also Radius von Spielern
                if (x > 2 || y > 2) { // bleibt stehen bei 2 entfernung von Ball
                    difVec.scale(this.velocity);
                    this.position.add(difVec);
                }
            }
            else if (x >= 2 || y >= 2) {
                this.backToPosition();
            }
        }
        contactToBall() {
            let x = soccer.ball.position.x - this.position.x;
            let y = soccer.ball.position.x - this.position.y;
            //console.log(x, y);
            if (x <= 0) {
                x = x * (-1);
            }
            if (y <= 0) {
                y = y * (-1);
            }
            if (x >= 2 && y >= 2) { //wichtig: gleicher Wert wie bei move (entfernung zu Ball) sonst spinnt Anzeige wer Ball hat
                return false;
            }
            else {
                return true;
            }
        }
        backToPosition() {
            let x = this.oldPosition.x - this.position.x;
            let y = this.oldPosition.y - this.position.y;
            let difVec = new soccer.Vector(x, y);
            difVec.scale(this.velocity);
            this.position.add(difVec);
        }
        show() {
            let infoBox = document.createElement("div");
            let info = document.createElement("p");
            info.innerHTML = "Team: " + this.team + "<br>" + "Jerseynumber: " + this.jerseyNumber + "<br>" + "Speed: " + this.velocity + "<br>";
            info.style.fontFamily = "fantasy";
            info.style.fontSize = "12px";
            info.style.backgroundColor = this.jerseyColor;
            infoBox.style.width = "1000px";
            info.style.overflow = "auto";
            info.style.float = "left";
            document.body.appendChild(infoBox);
            infoBox.appendChild(info);
            setTimeout(function () {
                document.body.removeChild(infoBox);
            }, 7000);
        }
    }
    soccer.Player = Player;
})(soccer || (soccer = {}));
//# sourceMappingURL=Players.js.map