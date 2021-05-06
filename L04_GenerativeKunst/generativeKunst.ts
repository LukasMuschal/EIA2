namespace generativeKunst {
    
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    let letters: string = "";
    let color: string = "";
    let x: number = 0;
    let y: number = 0;
    let radius: number = 0;
    let radius1: number = 0;
    let startAngle: number = 0;
    let endAngle: number = 0;
    let min: number = 1;
    let max: number = 900;

    function getRandomColor(): string {
        letters = "0123456789ABCDEF";
        color = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            console.log(color);
        }
        return color;
    }
    //canvas schwarz
    crc2.fillStyle = "#000000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    // Random Sterne
    for (let i: number = 0; i <= 300; i++) {
            crc2.beginPath();
            x = (Math.random() * (max - min)) + min;   // x-Koordinate
            y = (Math.random() * (max - min)) + min;
            if (i <= 30) {
                radius = 4;
            } else if (i >= 250) {
                radius = 3;
            } else {
                radius = 2;
            }
            console.log(radius);
            startAngle = 0;
            endAngle = 2 * Math.PI;
            crc2.arc(x, y, radius, startAngle, endAngle);
            crc2.fill();
            crc2.fillStyle = "#FFFACD";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.strokeStyle = getRandomColor();
            crc2.closePath();
            }
     //Dreieck flügel links
    crc2.beginPath();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(450, 300);
    crc2.lineTo(320, 390);
    crc2.lineTo(580, 390);
    crc2.fill();
    crc2.closePath();
       //Körper
    crc2.beginPath();
    crc2.fillRect(390, 200, 120, 190);
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.stroke();
    crc2.lineWidth = 20;
    crc2.fill();
    crc2.closePath();

      // Dreieck
    crc2.beginPath();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(450, 100);
    crc2.lineTo(390, 200);
    crc2.lineTo(510, 200);
    crc2.fill();
    crc2.closePath();
    //Fenster
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(450, 245, 20, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    
   //Planet 1
    crc2.beginPath();
    let gradient2: CanvasGradient = crc2.createRadialGradient(110, 90, 5, 100, 100, 80);
    gradient2.addColorStop(0, getRandomColor());
    gradient2.addColorStop(.1, getRandomColor());
    gradient2.addColorStop(.2, getRandomColor());
    gradient2.addColorStop(.3, getRandomColor());
    gradient2.addColorStop(.4, getRandomColor());
    gradient2.addColorStop(.5, getRandomColor());
    gradient2.addColorStop(.6, getRandomColor());
    gradient2.addColorStop(.7, getRandomColor());
    gradient2.addColorStop(1, "#000000");
    crc2.fillStyle = gradient2;
    crc2.fillRect(20, 20, 160, 160);
    crc2.closePath();

  
}

 
    
    
   
    //Kreis 2
    //crc2.beginPath();
    //crc2.strokeStyle = getRandomColor();
    //crc2.fillStyle = getRandomColor();
    //crc2.arc(500, 200, 60, 0, 2 * Math.PI);
    //crc2.stroke();
    //crc2.fill();
    //crc2.closePath();

    //Pupille 1
    //crc2.beginPath();
    //crc2.strokeStyle = getRandomColor();
    //crc2.fillStyle = getRandomColor();
    //crc2.arc(300, 200, 20, 0, 2 * Math.PI);
    //crc2.stroke();
    //crc2.fill();
    //crc2.closePath();

    //Pupille 2
    //crc2.beginPath();
    //crc2.strokeStyle = getRandomColor();
    //crc2.fillStyle = getRandomColor();
    //crc2.arc(500, 200, 20, 0, 2 * Math.PI);
    //crc2.stroke();
    //crc2.fill();
    //crc2.closePath();

    
