namespace CanvasÜbung {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(50, 50, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.strokeStyle = "#FFFFFF";
    crc2.arc(100, 120, 40, 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();
  //  crc2.beginPath();
    crc2.strokeStyle = "#0000FF";
    //crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    //crc2.stroke();
    //crc2.closePath();
    crc2.beginPath();
    crc2.fillStyle = "#0000FF";
    crc2.moveTo(0, 0);
    crc2.lineTo(200, 0);
    crc2.lineTo(100, 100);
    crc2.fill();
    crc2.closePath();
    let path: Path2D = new Path2D();
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    crc2.fillStyle = "#000000";
    crc2.stroke(path);
    crc2.fill(path);
    crc2.beginPath();
    crc2.moveTo(2.1, 1);
    crc2.lineTo(2.1, 10);
    crc2.moveTo(4.5, 1);
    crc2.lineTo(4.5, 10);
    crc2.moveTo(7.5, 1);
    crc2.lineTo(10.5, 10);
    crc2.stroke();
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

    gradient.addColorStop(0, "black");
    gradient.addColorStop(.25, "black");
    gradient.addColorStop(.4, "red");
    gradient.addColorStop(.75, "red");
    gradient.addColorStop(.8, "gold");
    gradient.addColorStop(1, "gold");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 200, 100);

    //let pattern: CanvasRenderingContext = <CanvasRenderingContext2D> document.createElement("canvas").getContext("2d");
   // pattern.canvas.width = 40;
    //pattern.canvas.height = 20;

    //pattern.fillStyle = "#fec";
    //pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    //pattern.moveTo(0, 10);
    //pattern.lineTo(10, 10);
    //pattern.lineTo(20, 0);
    //pattern.lineTo(30, 0);
    //pattern.lineTo(40, 10);
    //pattern.lineTo(30, 20);
    //pattern.lineTo(20, 20);
    //pattern.lineTo(10, 10);
    //pattern.stroke();

    //crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
    //crc2.fillRect(0, 0, canvas.width, canvas.height);
}