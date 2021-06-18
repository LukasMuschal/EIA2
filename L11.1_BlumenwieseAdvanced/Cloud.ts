namespace BlumenwieseAdvanced {
    export class Cloud extends Moveable {
        
        size: Vector;
        x: number;
        y: number;

        constructor(_position: Vector, _size: Vector, _velocity: Vector, _x: number, _y: number) {
           super(_position, _velocity);
           this.size = _size;
           this.x = _x;
           this.y = _y;
            
        }
        public drawCloud(): void {
            let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
            let particleNumber: number = 23;
            let particleRadius: number = 30;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            crc2.beginPath();
            gradient.addColorStop(0, "lightgray");
            gradient.addColorStop(1, ("gray"));
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(-30, -30, particleRadius, 0,  2 * Math.PI);
            particle.arc(30, 0, particleRadius, 0,  2 * Math.PI);
            particle.arc(60, -30, 30, 0,  2 * Math.PI);
            particle.arc(40, 30, 30, 0,  2 * Math.PI);
            particle.arc(90, 0, 30, 0,  2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
            
            
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let i: number = 0; i < particleNumber; i++) {
                crc2.save();
                crc2.translate(this.x, this.y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();
        }
       
        }
    }