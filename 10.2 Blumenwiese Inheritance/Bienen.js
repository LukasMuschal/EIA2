"use strict";
var BlumenwieseInheritance;
(function (BlumenwieseInheritance) {
    class Bienen extends BlumenwieseInheritance.Moveable {
        constructor(_position, _velocity) {
            super(_position = new BlumenwieseInheritance.Vector(0, -900), _velocity = new BlumenwieseInheritance.Vector(0, 0));
            this.velocity.random(100, 200);
        }
        drawBees(_x, _y) {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.ellipse(_x, _y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            crc2.arc(_x + 20, _y - 5, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Auge Biene
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 24, _y - 5, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Flügel Biene
            crc2.beginPath();
            crc2.fillStyle = "lightBlue";
            crc2.ellipse(_x - 5, _y + 5, 5, 20, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            // Stachel Biene
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(_x - 20, _y);
            crc2.lineTo(_x - 20, _y + 6);
            crc2.lineTo(_x - 30, _y + 3);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    BlumenwieseInheritance.Bienen = Bienen;
})(BlumenwieseInheritance || (BlumenwieseInheritance = {}));
//# sourceMappingURL=Bienen.js.map