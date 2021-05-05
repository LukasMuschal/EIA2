"use strict";
var generativeKunst;
(function (generativeKunst) {
    let canvas = document.querySelector("#board");
    let crc2 = canvas.getContext("2d");
    let letters = "";
    let color = "";
    let x = 0;
    let y = 0;
    let x1 = 0;
    let y1 = 0;
    let radius = 0;
    let radius1 = 0;
    let startAngle = 0;
    let endAngle = 0;
    let min = 1;
    let max = 500;
    function getRandomColor() {
        letters = "0123456789ABCDEF";
        color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            console.log(color);
        }
        return color;
    }
    //canvas mit random color
    crc2.fillStyle = getRandomColor();
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    //crc2.fillStyle = gradient;
    //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    // Random Kreise
    for (let i = 0; i <= 3; i++) {
        crc2.beginPath();
        x = (Math.random() * (max - min)) + min; // x-Koordinate
        y = (Math.random() * (max - min)) + min;
        x1 = (Math.random() * (max - min)) + min; // x-Koordinate
        y1 = (Math.random() * (max - min)) + min; // y- Koordinate
        console.log(x, y);
        radius = (Math.random() * (max - min)) + min;
        radius1 = (Math.random() * (max - min)) + min;
        startAngle = 0;
        endAngle = 2 * Math.PI;
        let gradient = crc2.createRadialGradient(x, y, radius, x1, y1, radius1);
        gradient.addColorStop(0, getRandomColor());
        gradient.addColorStop(.1, getRandomColor());
        gradient.addColorStop(.2, getRandomColor());
        gradient.addColorStop(.3, getRandomColor());
        gradient.addColorStop(.4, getRandomColor());
        gradient.addColorStop(.5, getRandomColor());
        gradient.addColorStop(.6, getRandomColor());
        gradient.addColorStop(.7, getRandomColor());
        gradient.addColorStop(.8, getRandomColor());
        gradient.addColorStop(.9, getRandomColor());
        gradient.addColorStop(1, getRandomColor());
        crc2.arc(x, y, radius, startAngle, endAngle);
        crc2.fill("nonzero");
        crc2.fillStyle = gradient;
        crc2.stroke();
        crc2.strokeStyle = getRandomColor();
    }
    crc2.closePath();
    // Kreis 1
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(300, 200, 60, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    //Kreis 2
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(500, 200, 60, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    //Pupille 1
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(300, 200, 20, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    //Pupille 2
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(500, 200, 20, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    //Dreieck(nase)
    crc2.beginPath();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(400, 300);
    crc2.lineTo(320, 380);
    crc2.lineTo(480, 380);
    crc2.fill();
    crc2.closePath();
    // gradient
})(generativeKunst || (generativeKunst = {}));
//# sourceMappingURL=generativeKunst.js.map