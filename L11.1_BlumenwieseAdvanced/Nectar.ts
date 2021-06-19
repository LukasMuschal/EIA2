namespace BlumenwieseAdvanced {
   
    
        export class Nectar {
            public velocity: Vector;
            public fillLevel: number;
            public position: Vector;

            constructor(_fillLevel: number, _position: Vector) {
                this.position = _position;
               
                let randomX: number = Math.floor(Math.random() * crc2.canvas.width);
                let randomY: number = crc2.canvas.height + Math.floor(Math.random() * 250);
                if (_position)
                    this.position = _position;
                else
                    this.position = new Vector(randomX, randomY);
    
                let randomFill: number = Math.floor(Math.random() * 50);
               
                if (_fillLevel)
                    this.fillLevel = _fillLevel;
                else
                    this.fillLevel = randomFill;
                
                this.velocity = new Vector(0, 0);
            }
        
            public fill(_timeslice: number): void {
                let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
                let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
                for (let i: number = 0; i < 10; i++) {
                    crc2.beginPath();
                    crc2.fillRect(this.position.x + 15, this.position.y - 5, 4, this.fillLevel);
                    crc2.closePath();
                    crc2.fillStyle = "#1411b8";
                    crc2.strokeStyle = "#1411b8";
                    crc2.fill();
                    crc2.stroke();
                    }
                let offset: Vector = this.velocity.copy();
                offset.scale(_timeslice);
                this.position.add(offset);
        
                if (this.fillLevel < 50)
                        this.fillLevel += 0.03;
                if (this.fillLevel > 50)
                        this.fillLevel -= this.fillLevel;
            }
    }
}
    
