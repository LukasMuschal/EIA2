namespace soccerGame {
    export class Spot extends Ball {
        

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0), 30);
           
        }
    }
}