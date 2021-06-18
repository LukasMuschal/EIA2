namespace BlumenwieseAdvanced {
    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }

        move(_timeslice: number): void {
            let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
            
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
     
            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
     
            if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
     
            if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
     
            if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
     
            }
        }
     }
    