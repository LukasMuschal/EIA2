namespace soccer {
    export class Player extends Moveable {
        oldPosition: Vector;
        velocity: number = 0;
        precision: number = 0;
        jerseyColor: string;
        jerseyNumber: number;
        team: String;

        constructor(_position: Vector, _jerseyNumber: number) {
            super(_position);
            this.jerseyNumber = _jerseyNumber;
            this.oldPosition = _position.copy();
            this.velocity = Math.random() * (speed - 10) + 10;
            this.precision = Math.random() * (maxPrec - minPrec) + minPrec;

            if (moveables.length <= 10) {
                this.jerseyColor = jerseyColor1.toString();
                this.team = "Team 1";
            } else {
                this.jerseyColor = jerseyColor2.toString();
                this.team = "Team 2";
            }
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = this.jerseyColor;
            crc2.arc(this.position.x, this.position.y, 13, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
            }
        
    }

}