namespace soccer {
    export class Referee extends Moveable {
         declare position: Vector;
         declare velocity: number;
         refType: string;

         constructor(_position: Vector, _refType: string) {
             super(_position);
             this.velocity = 0.03;
             this.refType = _refType;
         }

         draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.arc(this.position.x, this.position.y, 13, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
         }

         move(): void {
             if (this.refType == "Ref") {
                 let directionX: number = ball.position.x - this.position.x + 100;
                 let directionY: number = ball.position.y - this.position.y + 60;
                 let difVec: Vector = new Vector(directionX, directionY);
                 difVec.scale(this.velocity);
                 this.position.add(difVec);
             }
             if (this.refType == "RefOben") {
                let direction: number = ball.position.x - this.position.x;
                direction *= this.velocity;
                this.position.x += direction;
             }
             if (this.refType == "RefUnten") {
                 let direction: number = ball.position.x - this.position.x;
                 direction *= this.velocity;
                 this.position.x += direction;
             }

         }
    }


}