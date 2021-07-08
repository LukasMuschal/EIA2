"use strict";
var soccerGame;
(function (soccerGame) {
    class Field {
        constructor() {
            Field.drawField(0, 0);
            Field.drawLines(25, 25);
        }
        static drawField(_x, _y) {
            soccerGame.crc2.beginPath();
            soccerGame.crc2.fillStyle = "#088A08";
            soccerGame.crc2.fillRect(_x, _y, soccerGame.canvas.width, soccerGame.canvas.height);
            soccerGame.crc2.fill();
            soccerGame.crc2.closePath();
        }
        static drawLines(_x, _y) {
            //Außenlinien
            soccerGame.crc2.beginPath();
            soccerGame.crc2.strokeStyle = "white";
            soccerGame.crc2.strokeRect(_x, _y, soccerGame.canvas.width - 50, soccerGame.canvas.height - 50);
            soccerGame.crc2.stroke();
            soccerGame.crc2.closePath();
            //Tor links
            soccerGame.crc2.beginPath();
            soccerGame.crc2.strokeStyle = "white";
            soccerGame.crc2.strokeRect(_x, _y + 30, 20, 40);
            soccerGame.crc2.stroke();
            soccerGame.crc2.closePath();
            //Tor rechts
            soccerGame.crc2.beginPath();
            soccerGame.crc2.strokeStyle = "white";
            soccerGame.crc2.strokeRect(_x + 230, _y + 30, 20, 40);
            soccerGame.crc2.stroke();
            soccerGame.crc2.closePath();
            //Mittellinie
            soccerGame.crc2.beginPath();
            soccerGame.crc2.strokeStyle = "white";
            soccerGame.crc2.moveTo(_x + 125, _y);
            soccerGame.crc2.lineTo(_x + 125, _y + 100);
            soccerGame.crc2.stroke();
            soccerGame.crc2.closePath();
            //Mittelkreis
            soccerGame.crc2.beginPath();
            soccerGame.crc2.strokeStyle = "white";
            soccerGame.crc2.arc(_x + 125, _y + 50, 20, 0, 2 * Math.PI);
            soccerGame.crc2.stroke();
            soccerGame.crc2.closePath();
            //Mittelpunkt
            soccerGame.crc2.beginPath();
            soccerGame.crc2.fillStyle = "white";
            soccerGame.crc2.arc(_x + 125, _y + 50, 2, 0, 2 * Math.PI);
            soccerGame.crc2.fill();
            soccerGame.crc2.closePath();
        }
    }
    soccerGame.Field = Field;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Field.js.map