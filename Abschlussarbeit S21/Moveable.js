"use strict";
var soccer;
(function (soccer) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            //draw
        }
        move() {
            //
        }
        backToPosition() {
            //
        }
        contactToBall() {
            return false;
        }
        show() {
            //
        }
    }
    soccer.Moveable = Moveable;
})(soccer || (soccer = {}));
//# sourceMappingURL=Moveable.js.map