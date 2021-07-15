"use strict";
var soccer;
(function (soccer) {
    class Field {
        constructor() {
            Field.drawField(0, 0);
            Field.drawLines(65, 65);
        }
        static drawField(_x, _y) {
            soccer.crc2.beginPath();
            soccer.crc2.fillStyle = "#088A08";
            soccer.crc2.fillRect(_x, _y, soccer.canvas.width, soccer.canvas.height);
            soccer.crc2.fill();
            soccer.crc2.closePath();
        }
        static drawLines(_x, _y) {
            //Außenlinien
            soccer.crc2.beginPath();
            soccer.crc2.strokeStyle = "white";
            soccer.crc2.strokeRect(_x, _y, soccer.canvas.width - 150, soccer.canvas.height - 150);
            soccer.crc2.stroke();
            soccer.crc2.closePath();
            //Tor links
            soccer.crc2.beginPath();
            soccer.crc2.strokeStyle = "white";
            soccer.crc2.strokeRect(_x, _y + 125, 100, 200);
            soccer.crc2.stroke();
            soccer.crc2.closePath();
            //Tor rechts
            soccer.crc2.beginPath();
            soccer.crc2.strokeStyle = "white";
            soccer.crc2.strokeRect(_x + 600, _y + 125, 100, 200);
            soccer.crc2.stroke();
            soccer.crc2.closePath();
            //Mittellinie
            soccer.crc2.beginPath();
            soccer.crc2.strokeStyle = "white";
            soccer.crc2.moveTo(_x + 350, _y);
            soccer.crc2.lineTo(_x + 350, _y + 450);
            soccer.crc2.stroke();
            soccer.crc2.closePath();
            //Mittelkreis
            soccer.crc2.beginPath();
            soccer.crc2.strokeStyle = "white";
            soccer.crc2.arc(_x + 350, _y + 225, 30, 0, 2 * Math.PI);
            soccer.crc2.stroke();
            soccer.crc2.closePath();
            //Mittelpunkt
            soccer.crc2.beginPath();
            soccer.crc2.fillStyle = "white";
            soccer.crc2.arc(_x + 350, _y + 225, 3, 0, 2 * Math.PI);
            soccer.crc2.fill();
            soccer.crc2.closePath();
        }
    }
    soccer.Field = Field;
})(soccer || (soccer = {}));
//# sourceMappingURL=Field.js.map