"use strict";
var generativeKunst;
(function (generativeKunst) {
    let canvas = document.querySelector("#board");
    let crc2 = canvas.getContext("2d");
    let letters = "";
    let color = "";
    let x = 0;
    let y = 0;
    let radius = 0;
    let radius1 = 0;
    let startAngle = 0;
    let endAngle = 0;
    let min = 1;
    let max = 1200;
    let min1 = 500;
    let max1 = 1100;
    let angle = 0;
    function getRandomColor() {
        letters = "0123456789ABCDEF";
        color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            //console.log(color);
        }
        return color;
    }
    //canvas schwarz
    crc2.save();
    crc2.fillStyle = "#000000";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.restore();
    // Random Sterne
    crc2.save();
    for (let i = 0; i <= 300; i++) {
        crc2.beginPath();
        x = (Math.random() * (max - min)) + min; // x-Koordinate
        y = (Math.random() * (max - min)) + min;
        if (i <= 30) {
            radius = 4;
        }
        else if (i >= 250) {
            radius = 3;
        }
        else {
            radius = 2;
        }
        //console.log(radius);
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
    crc2.restore();
    //Planet 1
    crc2.save();
    crc2.beginPath();
    let gradient2 = crc2.createRadialGradient(110, 90, 5, 100, 100, 80);
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
    crc2.restore();
    // Spirale 1 
    crc2.save();
    for (let i = 0; i <= 300; i++) {
        crc2.beginPath();
        x = (Math.random() * (max1 - min1)) + min1;
        y = (Math.random() * (max1 - min1)) + min1;
    }
    crc2.beginPath();
    crc2.lineWidth = 10;
    crc2.lineCap = "round";
    crc2.lineJoin = "round";
    crc2.shadowColor = getRandomColor();
    crc2.shadowBlur = 30;
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(x, y);
    for (let i = 0; i < 150; i++) {
        radius += 0.5;
        angle += (Math.PI * 2) / 50;
        let x1 = x + radius * Math.cos(angle);
        let y1 = y + radius * Math.sin(angle);
        crc2.lineTo(x1, y1);
    }
    crc2.fill();
    crc2.stroke();
    crc2.closePath();
    crc2.restore();
    // SPirale 2
    crc2.save();
    for (let i = 0; i <= 300; i++) {
        crc2.beginPath();
        x = (Math.random() * (max1 - min1)) + min1; // x-Koordinate
        y = (Math.random() * (max1 - min1)) + min1;
    }
    crc2.beginPath();
    crc2.lineWidth = 10;
    crc2.lineCap = "round";
    crc2.lineJoin = "round";
    crc2.shadowColor = getRandomColor();
    crc2.shadowBlur = 30;
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(x, y);
    for (let i = 0; i < 150; i++) {
        radius1 += 0.3;
        angle += (Math.PI * 2) / 50;
        let x1 = x + radius1 * Math.cos(angle);
        let y1 = y + radius1 * Math.sin(angle);
        crc2.lineTo(x1, y1);
    }
    crc2.fill();
    crc2.stroke();
    crc2.closePath();
    crc2.restore();
    // ANtrieb
    crc2.save();
    let lineCap = "miter";
    for (let i = 0; i < lineCap.length; i++) {
        lineCap = "miter";
        crc2.beginPath();
        crc2.moveTo(365, 390 + i * 30);
        crc2.lineTo(405, 435 + i * 30);
        crc2.lineTo(445, 390 + i * 30);
        crc2.lineTo(485, 435 + i * 30);
        crc2.lineTo(525, 390 + i * 30);
        crc2.shadowColor = getRandomColor();
        crc2.shadowBlur = 20;
        crc2.strokeStyle = "red";
        crc2.fillStyle = "orange";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    crc2.restore();
    //Dreieck flügel 
    crc2.save();
    crc2.beginPath();
    crc2.shadowColor = getRandomColor();
    crc2.shadowBlur = 30;
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
    crc2.restore();
    // Dreieck
    crc2.save();
    crc2.beginPath();
    crc2.fillStyle = getRandomColor();
    crc2.moveTo(450, 100);
    crc2.lineTo(390, 200);
    crc2.lineTo(510, 200);
    crc2.fill();
    crc2.closePath();
    crc2.restore();
    //Fenster
    crc2.save();
    crc2.beginPath();
    crc2.strokeStyle = getRandomColor();
    crc2.fillStyle = getRandomColor();
    crc2.arc(450, 245, 20, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fill();
    crc2.closePath();
    crc2.restore();
    //Text
    crc2.font = " 40px fantasy";
    crc2.fillText("Spaceship", 400, 315, 100);
    crc2.fillStyle = getRandomColor();
    // PLanet 2
    crc2.save();
    function getColor() {
        let colors = ["blue", "gray"];
        let light = "light";
        for (let i = 0; i < 1; i++) {
            light += colors[Math.floor(Math.random() * 2)];
            console.log(light);
        }
        return light;
    }
    crc2.beginPath();
    crc2.strokeStyle = getColor();
    crc2.fillStyle = crc2.strokeStyle;
    crc2.shadowColor = "pink";
    crc2.shadowBlur = 60;
    if (getColor() == "lightblue") {
        crc2.arc(755, 200, 60, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.ellipse(755, 200, 25, 100, Math.PI / 2.2, 0, 2 * Math.PI);
        crc2.stroke();
    }
    else {
        crc2.arc(755, 370, 60, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.ellipse(755, 370, 25, 100, Math.PI / 2.6, 0, 2 * Math.PI);
        crc2.stroke();
    }
    crc2.closePath();
    crc2.restore();
    let newCanvas = document.querySelector("button");
    newCanvas.addEventListener("click", function () {
        location.reload();
    });
})(generativeKunst || (generativeKunst = {}));
//# sourceMappingURL=generativeKunst.js.map