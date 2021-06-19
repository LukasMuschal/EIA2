namespace BlumenwieseAdvanced {
    export class Flower2 {
            public position: Vector;

            constructor(_position: Vector) {
                this.position = _position;
            }

            drawFlower2(_x: number, _y: number): void {
                let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
                let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
                for (let i: number = 0; i < 8; i++) {
                    if (i <= 4) 
                    _y += 50;
                    if (i >= 4)
                    _x += 50;
                    crc2.beginPath();
                    crc2.fillStyle = "#447a3e";
                    crc2.fillRect(_x, _y , 4, 70);
    
                    crc2.fillStyle = "#f00000";
                    crc2.arc(_x + 2, _y , 20, 0, 2 * Math.PI);
                    crc2.fill();
    
                    crc2.beginPath();
                    
                    crc2.strokeStyle = "#000000";
                    crc2.fillStyle = "#000000";
                    crc2.moveTo(_x, _y);
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();

                    crc2.beginPath();
                    crc2.fillRect(_x - 30, _y + 30, 8, 40);
                    crc2.strokeStyle = "#000000";
                    crc2.lineWidth = 10;
                    crc2.stroke();
                    crc2.closePath();
            }
        }
    }
}