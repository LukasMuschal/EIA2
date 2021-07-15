"use strict";
var soccer;
(function (soccer) {
    class Ball {
        constructor(_position) {
            this.velocity = 0.06; // Hier möglichst kleine Zahl weil Bewegung sonst zu schnell
            this.ballMove = false;
            this.movementBegin = 2;
            this.position = _position.copy();
            this.newPos = _position.copy();
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
            this.newPos = _position.copy();
        }
        move() {
            let x = this.newPos.x - this.position.x; // Differenzvektor berechnen
            let y = this.newPos.y - this.position.y;
            let diffVec = new soccer.Vector(x, y);
            diffVec.length(); // seine Länge bestimmen
            diffVec.scale(this.velocity); // Vektor skalieren
            this.position.add(diffVec); // Vektor auf P1 addieren
        }
    }
    soccer.Ball = Ball;
})(soccer || (soccer = {}));
//# sourceMappingURL=Ball.js.map