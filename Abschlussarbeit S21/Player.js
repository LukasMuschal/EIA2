"use strict";
var soccerGame;
(function (soccerGame) {
    class Player {
        constructor(_position, _jerseyColor, _velocity, _radius) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.velocity = _velocity;
            this.radius = _radius;
        }
        draw() {
            soccerGame.crc2.save();
            soccerGame.crc2.beginPath();
            soccerGame.crc2.fillStyle = this.jerseyColor;
            soccerGame.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            soccerGame.crc2.fill();
            soccerGame.crc2.restore();
        }
    }
    soccerGame.Player = Player;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Player.js.map