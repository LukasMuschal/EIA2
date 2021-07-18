"use strict";
var soccer;
(function (soccer) {
    class Ball {
        constructor(_position) {
            this.velocity = 0.06; // Hier relativ kleine Zahl weil Bewegung sonst zu schnell
            this.precision = 0;
            this.ballMove = false;
            this.scoreT1 = 0;
            this.scoreT2 = 0;
            this.threshhold = 2;
            this.position = _position.copy();
            this.newPos = _position.copy();
            this.precision = Math.random() * (soccer.ballControl - 10) + 10;
        }
        draw() {
            soccer.crc2.save();
            soccer.crc2.beginPath();
            soccer.crc2.fillStyle = "black";
            soccer.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            soccer.crc2.fill();
            soccer.crc2.closePath();
            soccer.crc2.restore();
        }
        click(_position) {
            this.newPos = _position.copy(); // position von click wird kopiert für move Funktion
        }
        move() {
            let x = (this.newPos.x + this.precision) - this.position.x; // Differenzvektor berechnen
            let y = (this.newPos.y + this.precision) - this.position.y;
            let diffVec = new soccer.Vector(x, y);
            diffVec.length(); // seine Länge bestimmen
            if (diffVec.length() < this.threshhold) { // Wert ab dem der Ball als stehend gilt
                this.ballMove = false; // wenn Ball steht => false
            }
            else {
                this.ballMove = true;
            }
            diffVec.scale(this.velocity); // Vektor skalieren
            this.position.add(diffVec); // Vektor auf P1 addieren
            let goal1 = document.getElementById("ScoreT1");
            let goal2 = document.getElementById("ScoreT2");
            //Tor links
            if (this.position.x <= 60 && this.position.y >= 250 && this.position.x <= 60 && this.position.y <= 335) {
                this.scoreT2++;
                goal2.innerHTML = this.scoreT2.toString();
                alert("TOOOOOOR! Team2 hat getroffen!");
                this.newPos = new soccer.Vector(415 - this.precision, 290 - this.precision);
            }
            //Tor rechts
            if (this.position.x >= 770 && this.position.y >= 250 && this.position.x >= 770 && this.position.y <= 335) {
                this.scoreT1++;
                goal1.innerHTML = this.scoreT1.toString();
                alert("TOOOOOOR! Team1 hat getroffen!");
                this.newPos = new soccer.Vector(415 - this.precision, 290 - this.precision);
            }
            // Ball im Aus bei Tor links oben => Eckball
            if (this.position.x <= 60 && this.position.y >= 63 && this.position.x <= 60 && this.position.y <= 240) {
                alert("Eckball!");
                this.newPos = new soccer.Vector(70 - this.precision, 70 - this.precision);
            }
            //Ball im Aus bei Tor links unten => Eckball
            if (this.position.x <= 60 && this.position.y >= 350 && this.position.x <= 60 && this.position.y <= 515) {
                alert("Eckball!");
                this.newPos = new soccer.Vector(70 - this.precision, 510 - this.precision);
            }
            //Ball im Aus bei Tor rechts oben => Eckball
            if (this.position.x >= 775 && this.position.y >= 63 && this.position.x >= 775 && this.position.y <= 240) {
                alert("Eckball!");
                this.newPos = new soccer.Vector(760 - this.precision, 70 - this.precision);
            }
            //Ball im Aus bei Tor rechts unten => Eckball
            if (this.position.x >= 775 && this.position.y >= 350 && this.position.x >= 775 && this.position.y <= 515) {
                alert("Eckball!");
                this.newPos = new soccer.Vector(760 - this.precision, 510 - this.precision);
            }
            //Ball im Aus Feldlinie oben => Einwurf
            if (this.position.x >= 70 && this.position.y <= 57 && this.position.x <= 770 && this.position.y <= 57) {
                alert("Einwurf!");
                this.newPos = new soccer.Vector(this.position.x - this.precision, this.position.y - this.precision + 20);
            }
            //Ball im Aus Feldlinie unten => Einwurf
            if (this.position.x >= 70 && this.position.y >= 520 && this.position.x <= 770 && this.position.y >= 520) {
                alert("Einwurf!");
                this.newPos = new soccer.Vector(this.position.x - this.precision, (this.position.y - this.precision) - 20);
            }
        }
    }
    soccer.Ball = Ball;
})(soccer || (soccer = {}));
//# sourceMappingURL=Ball.js.map