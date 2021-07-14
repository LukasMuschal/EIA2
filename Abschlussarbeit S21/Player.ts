namespace soccerGame {
    export class Player {
        public position: Vector;
        public jerseyColor: string;
        public velocity: string;
        public radius: Vector; 

        constructor(_position: Vector, _jerseyColor: string, _velocity: string, _radius: Vector) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.velocity = _velocity;
            this.radius = _radius;
        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = this.jerseyColor;
            crc2.arc(this.position.x, this.position.y, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
}