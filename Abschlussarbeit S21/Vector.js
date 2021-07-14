"use strict";
var soccerGame;
(function (soccerGame) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        // Differenzvector von a und b 
        static differenceVec(_a, _b) {
            let difVec = new Vector(_a.x - _b.x, _a.y - _b.y);
            return difVec;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        //Vector skalieren um Faktor in scale Funktion => UNterschiedliche Geschwindigkeit
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        //Vector an Vector hinzufügen => für gleichbleibende GEschwindigkeit
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    soccerGame.Vector = Vector;
})(soccerGame || (soccerGame = {}));
//# sourceMappingURL=Vector.js.map