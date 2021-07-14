"use strict";
var soccerGame;
(function (soccerGame) {
    class Moveable {
        constructor(_position) {
            this.radius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new soccerGame.Vector(0, 0);
            this.velocity = new soccerGame.Vector(0, 0);
        }
    }
    soccerGame.Moveable = Moveable;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Moveable.js.map