namespace soccer {
    export class Moveable {
        position: Vector;
        velocity: number;
        
        constructor(_position: Vector) {
            this.position = _position;
        }

        public draw(): void {
            //draw
        }

    }
}