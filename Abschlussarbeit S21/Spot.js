"use strict";
var soccerGame;
(function (soccerGame) {
    class Spot extends soccerGame.Ball {
        constructor(_position) {
            super(_position, new soccerGame.Vector(0, 0), 30);
        }
    }
    soccerGame.Spot = Spot;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Spot.js.map