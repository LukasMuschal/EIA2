"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Flower1 {
        constructor(_position) {
            this.position = _position;
        }
        drawFlower1(_x, _y) {
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
                crc2.fillStyle = "#a000d1";
                crc2.arc(_x + 2, _y, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 2, _y + 10, 10, 0, 2 * Math.PI);
                crc2.arc(_x - 8, _y, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 2, _y - 10, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 12, _y, 10, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "yellow";
                crc2.arc(_x + 2, _y, 5, 0, 2 * Math.PI);
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
    BlumenwieseAdvanced.Flower1 = Flower1;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=Flower1.js.map