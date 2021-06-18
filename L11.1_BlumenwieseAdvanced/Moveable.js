"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Moveable {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let canvas = document.querySelector("#board");
            let crc2 = canvas.getContext("2d");
            let offset = new BlumenwieseAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
    BlumenwieseAdvanced.Moveable = Moveable;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=Moveable.js.map