namespace soccerGame {
    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
          // Differenzvector von a und b 
        public static differenceVec(_a: Vector, _b: Vector): Vector {
            let difVec: Vector = new Vector (_a.x - _b.x, _a.y - _b.y);
            return difVec;
        }
      
      
       public get length(): number {
           return Math.hypot(this.x, this.y);
       }
        //Vector skalieren um Faktor in scale Funktion => UNterschiedliche Geschwindigkeit
        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }


        //Vector an Vector hinzufügen => für gleichbleibende GEschwindigkeit
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }

        
      
    }
}