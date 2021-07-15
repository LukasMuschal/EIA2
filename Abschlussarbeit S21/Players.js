"use strict";
var soccer;
(function (soccer) {
    class Player extends soccer.Moveable {
        constructor(_position, _jerseyNumber) {
            super(_position);
            this.velocity = 0;
            this.precision = 0;
            this.jerseyNumber = _jerseyNumber;
            this.oldPosition = _position.copy();
            this.velocity = Math.random() * (soccer.speed - 10) + 10;
            this.precision = Math.random() * (soccer.maxPrec - soccer.minPrec) + soccer.minPrec;
            if (soccer.moveables.length <= 10) {
                this.jerseyColor = soccer.jerseyColor1.toString();
                this.team = "Team 1";
            }
            else {
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
        }
    }
    soccer.Player = Player;
})(soccer || (soccer = {}));
//# sourceMappingURL=Players.js.map