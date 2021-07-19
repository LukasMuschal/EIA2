namespace soccer {
    export class Moveable {
        position: Vector;
        velocity: number;
        oldPosition: Vector;
        precision: number;
        jerseyNumber: number;
        jerseyColor: string;
        team: String;
        
        constructor(_position: Vector) {
            this.position = _position;
        }

        public draw(): void {
            //draw
        }

        public move(): void {
            //
        }

        public backToPosition(): void {
            //
        }

        public contactToBall(): boolean {
            return false;
        }

        public show(): void {
            //
        }

    }
}