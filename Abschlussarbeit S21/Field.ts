namespace soccerGame {
    export class Field {
        constructor() {
            Field.drawField(0, 0);
            Field.drawLines(25, 25);
        }


        private static drawField(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#088A08";
            crc2.fillRect(_x, _y , canvas.width, canvas.height);
            crc2.fill();
            crc2.closePath();
        }

        private static drawLines(_x: number, _y: number): void {
            //Außenlinien
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.strokeRect(_x, _y, canvas.width - 50, canvas.height - 50);
            crc2.stroke();
            crc2.closePath();

            //Tor links
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.strokeRect(_x, _y + 30, 20, 40 );
            crc2.stroke();
            crc2.closePath();
            //Tor rechts
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.strokeRect(_x + 230, _y + 30, 20, 40);
            crc2.stroke();
            crc2.closePath();
            //Mittellinie
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.moveTo(_x + 125, _y);
            crc2.lineTo(_x + 125, _y + 100);
            crc2.stroke();
            crc2.closePath();
            //Mittelkreis
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.arc(_x + 125, _y + 50, 20, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            //Mittelpunkt
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(_x + 125, _y + 50, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

        }
    }

}