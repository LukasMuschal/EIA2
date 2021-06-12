"use strict";
var BlumenwieseInheritance;
(function (BlumenwieseInheritance) {
    class Cloud extends BlumenwieseInheritance.Moveable {
        constructor(_position, _size, _velocity, _x, _y) {
            super(_position, _velocity);
            this.size = _size;
            this.x = _x;
            this.y = _y;
        }
        drawCloud() {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            let particleNumber = 23;
            let particleRadius = 30;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            crc2.beginPath();
            gradient.addColorStop(0, "lightgray");
            gradient.addColorStop(1, ("gray"));
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(-30, -30, particleRadius, 0, 2 * Math.PI);
            particle.arc(30, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(60, -30, 30, 0, 2 * Math.PI);
            particle.arc(40, 30, 30, 0, 2 * Math.PI);
            particle.arc(90, 0, 30, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            for (let i = 0; i < particleNumber; i++) {
                crc2.save();
                crc2.translate(this.x, this.y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
    BlumenwieseInheritance.Cloud = Cloud;
})(BlumenwieseInheritance || (BlumenwieseInheritance = {}));
//# sourceMappingURL=Cloud.js.map