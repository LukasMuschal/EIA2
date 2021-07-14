namespace soccerGame {
    export class Ball extends Moveable {
       
        public radius: number;

        constructor(_position: Vector, _velocity: Vector, _radius: number) {
           super(_position);

           this.velocity = _velocity.copy();
           this.radius = _radius;
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.position.x, this.position.y, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        

        move(_timeslice: number): void {
            //super.move(_timeslice);
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            
            offset.scale(_timeslice);
            this.position.add(offset);
            
        }
   
    

    
    }
}