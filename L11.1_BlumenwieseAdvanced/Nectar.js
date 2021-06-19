"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Nectar {
        constructor(_fillLevel, _position) {
            this.position = _position;
            let randomX = Math.floor(Math.random() * BlumenwieseAdvanced.crc2.canvas.width);
            let randomY = BlumenwieseAdvanced.crc2.canvas.height + Math.floor(Math.random() * 250);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseAdvanced.Vector(randomX, randomY);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new BlumenwieseAdvanced.Vector(0, 0);
        }
        fill(_timeslice) {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            for (let i = 0; i < 10; i++) {
                crc2.beginPath();
                crc2.fillRect(this.position.x + 15, this.position.y - 5, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "#1411b8";
                crc2.strokeStyle = "#1411b8";
                crc2.fill();
                crc2.stroke();
            }
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.fillLevel < 50)
                this.fillLevel += 0.03;
            if (this.fillLevel > 50)
                this.fillLevel -= this.fillLevel;
        }
    }
    BlumenwieseAdvanced.Nectar = Nectar;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=Nectar.js.map