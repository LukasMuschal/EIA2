"use strict";
var classesÜbung;
(function (classesÜbung) {
    window.addEventListener("load", init);
    function init() {
        class Vector {
            scale(_factor) {
                this.x *= _factor;
                this.y *= _factor;
            }
            add(_addend) {
                this.x += _addend.x;
                this.y += _addend.y;
            }
            set(_x, _y) {
                this.x = _x; // Dem Wert der Eigenschaft x wird der Parameter _x zugewiesen.
                this.y = _y;
            }
        }
        debugger;
        let v1 = new Vector();
        v1.scale(2);
        console.log(v1);
    }
})(classesÜbung || (classesÜbung = {}));
//# sourceMappingURL=classes.js.map