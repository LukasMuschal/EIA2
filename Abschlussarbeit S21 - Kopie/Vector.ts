namespace soccer {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
    
        }

        set(_x: number, _y: number): void {   // Vektor erstellen
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {  // Vektor skalieren
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {    // vektor addieren
            this.x += _addend.x;
            this.y += _addend.y;
        }

        copy(): Vector {                // Vektor kopieren
            return new Vector(this.x, this.y);
        }

        length(): number {             // länge Vektor berechnen
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }

       public getDifference(_v0: Vector, _v1: Vector): Vector {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
          }
    

       
    }
}

