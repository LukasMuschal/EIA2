"use strict";
var soccerGame;
(function (soccerGame) {
    class Ball extends soccerGame.Moveable {
        constructor(_position, _velocity, _radius) {
            super(_position);
            this.velocity = _velocity.copy();
            this.radius = _radius;
        }
        draw() {
            soccerGame.crc2.save();
            soccerGame.crc2.beginPath();
            soccerGame.crc2.fillStyle = "black";
            soccerGame.crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            soccerGame.crc2.fill();
            soccerGame.crc2.closePath();
            soccerGame.crc2.restore();
        }
        move(_timeslice) {
            //super.move(_timeslice);
            let offset = new soccerGame.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    soccerGame.Ball = Ball;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Ball.js.map