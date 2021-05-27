"use strict";
var BlumenwieseClasses;
(function (BlumenwieseClasses) {
    class Flower {
        constructor(_position, _stemColor, _flowerColor) {
            this.position = _position;
            this.stemColor = _stemColor;
            this.flowerColor = _flowerColor;
        }
        drawFlower(_x, _y) {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            let max1 = _x;
            let min1 = _y;
            for (let i = 0; i < 5; i++) {
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
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
                // for (let i: number = 0; i < 1; i++) {
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
                //Flower 2
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "yellow";
                crc2.moveTo(_x + 2, _y);
                crc2.lineTo(_x - 25, _y - 25);
                crc2.lineTo(_x + 25, _y - 25);
                crc2.moveTo(_x + 2, _y + 25);
                crc2.lineTo(_x - 15, _y + 15);
                crc2.lineTo(_x + 15, _y + 15);
                crc2.fill();
                crc2.closePath();
                //Flower3
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "#f00000";
                crc2.arc(_x + 2, _y, 20, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.lineWidth = 3;
                crc2.lineCap = "round";
                crc2.lineJoin = "round";
                crc2.shadowColor = "pink";
                crc2.shadowBlur = 30;
                crc2.strokeStyle = "black";
                crc2.fillStyle = "pink";
                crc2.moveTo(_x, _y);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
            }
        }
    }
    BlumenwieseClasses.Flower = Flower;
})(BlumenwieseClasses || (BlumenwieseClasses = {}));
//# sourceMappingURL=Flower.js.map