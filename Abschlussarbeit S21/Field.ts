namespace soccer {
   
        export class Field {
            constructor() {
                Field.drawField(0, 0);
                Field.drawLines(65, 65);
            }
    
    
            public static drawField(_x: number, _y: number): void {
                crc2.beginPath();
                crc2.fillStyle = "#088A08";
                crc2.fillRect(_x, _y , canvas.width, canvas.height);
                crc2.fill();
                crc2.closePath();
            }
    
            public static drawLines(_x: number, _y: number): void {
                //Außenlinien
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.strokeRect(_x, _y, canvas.width - 150, canvas.height - 150);
                crc2.stroke();
                crc2.closePath();
    
                //Strafraum links
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.strokeRect(_x, _y + 125, 100, 200 );
                crc2.stroke();
                crc2.closePath();
                //Strafraum rechts
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.strokeRect(_x + 600, _y + 125, 100, 200);
                crc2.stroke();
                crc2.closePath();
                // Tor links
                crc2.save();
                crc2.beginPath();
                crc2.globalAlpha = 0.5;
                crc2.fillStyle = "white";
                crc2.fillRect(_x - 50, _y + 175, 50, 100);
                crc2.fill();
                crc2.closePath();
                // Tor rechts
                crc2.beginPath();
                crc2.globalAlpha = 0.5;
                crc2.fillStyle = "white";
                crc2.fillRect(_x + 700, _y + 175, 50, 100);
                crc2.fill();
                crc2.closePath();
                crc2.restore();
                //Mittellinie
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.moveTo(_x + 350, _y);
                crc2.lineTo(_x + 350, _y + 450);
                crc2.stroke();
                crc2.closePath();
                //Mittelkreis
                crc2.beginPath();
                crc2.strokeStyle = "white";
                crc2.arc(_x + 350, _y + 225, 30, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                //Mittelpunkt
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.arc(_x + 350, _y + 225, 3, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
    
            }
        }
    
}