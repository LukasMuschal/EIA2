namespace soccer {
    export class Ball {
        position: Vector;
        velocity: number = 0.06;  // Hier möglichst kleine Zahl weil Bewegung sonst zu schnell
        precision: Vector;
        ballMove: boolean = false;
        newPos: Vector;
        movementBegin: number = 2;

        constructor(_position: Vector) {
            this.position = _position.copy();
            this.newPos = _position.copy();
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        click(_position: Vector): void {
            this.newPos = _position.copy();
        }

        move(): void {
            let x: number = this.newPos.x - this.position.x;  // Differenzvektor berechnen
            let y: number = this.newPos.y - this.position.y;
            let diffVec: Vector = new Vector(x, y);
            diffVec.length();                                 // seine Länge bestimmen
            diffVec.scale(this.velocity);                     // Vektor skalieren
            this.position.add(diffVec);                       // Vektor auf P1 addieren

        }
    }

}