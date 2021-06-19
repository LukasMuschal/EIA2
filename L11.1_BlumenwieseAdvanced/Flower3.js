"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Flower3 {
        constructor(_position) {
            this.position = _position;
        }
        drawFlower3(_x, _y) {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            for (let i = 0; i < 8; i++) {
                if (i <= 4)
                    _y += 50;
                if (i >= 4)
                    _x += 50;
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "pink";
                crc2.moveTo(_x + 2, _y);
                crc2.lineTo(_x - 25, _y - 25);
                crc2.lineTo(_x + 25, _y - 25);
                crc2.moveTo(_x + 2, _y + 25);
                crc2.lineTo(_x - 15, _y + 15);
                crc2.lineTo(_x + 15, _y + 15);
                crc2.fill();
                crc2.closePath();
                //Nectar
                crc2.beginPath();
                crc2.fillRect(_x - 30, _y + 30, 8, 40);
                crc2.strokeStyle = "#000000";
                crc2.lineWidth = 10;
                crc2.stroke();
                crc2.closePath();
            }
        }
    }
    BlumenwieseAdvanced.Flower3 = Flower3;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=Flower3.js.map