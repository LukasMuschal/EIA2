namespace soccer {
    export class Player extends Moveable {
        oldPosition: Vector;
        velocity: number = 0;
       // precision: number = 0;
       declare jerseyColor: string;
        jerseyNumber: number;
        
       declare team: String;
      

        constructor(_position: Vector, _jerseyNumber: number) {
            super(_position);
            this.jerseyNumber = _jerseyNumber;
            this.oldPosition = _position.copy();                  // alte Position kopieren für Rückkehr
            this.velocity = Math.random() * (speed - 0.01) + 0.01;    //min von Form => kleiner Wert sonst Spieler zu schnell
            //this.precision = Math.random() * (maxPrec - minPrec) + minPrec;

            if (this.jerseyNumber <= 18) {                        // gibt Spielern Farbe
                this.jerseyColor = jerseyColor1.toString();
                this.team = "Team 1";
            } else if (this.jerseyNumber >= 19) {
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
            crc2.font = "12px Georgia";
            if (this.jerseyNumber <= 11 || this.jerseyNumber >= 12) {
                crc2.strokeText(" " + this.jerseyNumber.toString(), this.position.x - 6, this.position.y + 4);
                crc2.fillText(" " + this.jerseyNumber.toString(), this.position.x - 6, this.position.y + 4);
            }
            }
        
        move(): void {
            let x: number = ball.position.x - this.position.x;  // Differenzvektor bestimmen zu Ball Position
            let y: number = ball.position.y - this.position.y;
            let difVec: Vector = new Vector(x, y);
            if (x <= 0) {                          // damit bleiben Spieler an ihrer Stelle 
                x = x * -1;
            }
            if (y <= 0) {
                y = y * -1;
            }
            if (x <= 60 && y <= 60) {               // wenn x, y kleiner 60, dann renne zu Ball, also Radius von Spielern
               if (x > 2 || y > 2) {             // bleibt stehen bei 2 entfernung von Ball
            
                difVec.scale(this.velocity);
                this.position.add(difVec);
               }
            } else if (x >= 2 || y >= 2) {
                this.backToPosition();
            }
        }
        contactToBall(): boolean {
            let x: number = ball.position.x - this.position.x;
            let y: number = ball.position.x - this.position.y;
            //console.log(x, y);
            if (x <= 0) {
                x = x * (-1);
            }
            if (y <= 0) {
                y = y * (-1);
            }
            if (x >= 2 && y >= 2) {   //wichtig: gleicher Wert wie bei move (entfernung zu Ball) sonst spinnt Anzeige wer Ball hat
                return false;
                
                
            } else {
                return true;
            }
        }
        backToPosition(): void {
            let x: number = this.oldPosition.x - this.position.x;
            let y: number = this.oldPosition.y - this.position.y;
            let difVec: Vector = new Vector(x, y);
            difVec.scale(this.velocity);
            this.position.add(difVec);
        }

       show(): void {
        let infoBox: HTMLElement = document.createElement("div");
        let info: HTMLElement = document.createElement("p");
        info.innerHTML = "Team: " + this.team + "<br>" + "Jerseynumber: " + this.jerseyNumber + "<br>" + "Speed: " + this.velocity + "<br>";
        info.style.fontFamily = "fantasy";
        info.style.fontSize = "12px";
        info.style.backgroundColor = this.jerseyColor;
        infoBox.style.width = "1000px";
        info.style.overflow = "auto";
        info.style.float = "left";
       
    
        document.body.appendChild(infoBox);
        infoBox.appendChild(info);

        setTimeout(function (): void {
            document.body.removeChild(infoBox);
        },         7000);

       }
    }

}