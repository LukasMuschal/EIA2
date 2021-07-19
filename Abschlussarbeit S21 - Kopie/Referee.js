"use strict";
var soccer;
(function (soccer) {
    class Referee extends soccer.Moveable {
        constructor(_position, _refType) {
            super(_position);
            this.velocity = 0.03;
            this.refType = _refType;
        }
        draw() {
            soccer.crc2.save();
            soccer.crc2.beginPath();
            soccer.crc2.fillStyle = "#FFFF00";
            soccer.crc2.arc(this.position.x, this.position.y, 13, 0, 2 * Math.PI);
            soccer.crc2.fill();
            soccer.crc2.restore();
        }
        move() {
            if (this.refType == "Ref") {
                let directionX = soccer.ball.position.x - this.position.x + 100;
                let directionY = soccer.ball.position.y - this.position.y + 60;
                let difVec = new soccer.Vector(directionX, directionY);
                difVec.scale(this.velocity);
                this.position.add(difVec);
            }
            if (this.refType == "RefOben") {
                let direction = soccer.ball.position.x - this.position.x;
                direction *= this.velocity;
                this.position.x += direction;
            }
            if (this.refType == "RefUnten") {
                let direction = soccer.ball.position.x - this.position.x;
                direction *= this.velocity;
                this.position.x += direction;
            }
        }
    }
    soccer.Referee = Referee;
})(soccer || (soccer = {}));
//# sourceMappingURL=Referee.js.map