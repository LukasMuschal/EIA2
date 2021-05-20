namespace classesÜbung {

    window.addEventListener("load", init);

    function init(): void {
    class Vector {
        x: number;
        y: number;
    
        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
    
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        set(_x: number, _y: number): void {
            this.x = _x; // Dem Wert der Eigenschaft x wird der Parameter _x zugewiesen.
            this.y = _y;
    }
}

    debugger;

    let v1: Vector = new Vector();
    v1.scale(2); 
    console.log(v1); 

    }
}
