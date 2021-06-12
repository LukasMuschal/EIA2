"use strict";
var BlumenwieseInheritance;
(function (BlumenwieseInheritance) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let letters = "";
    let color = "";
    let beeArray = [];
    let cloudArray = [];
    let xCloudArray = [];
    let yCloudArray = [];
    let cloudSize = new BlumenwieseInheritance.Vector(10, 5);
    function handleLoad(_event) {
        let canvas = document.querySelector("#board");
        let crc2 = canvas.getContext("2d");
        createCloud();
        createCloudxy(20, cloudSize);
        createBees(10);
        function getRandomColor() {
            letters = "0123456789ABCDEF";
            color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                //console.log(color);
            }
            return color;
        }
        function drawSky(_x, _y, _strokeColor) {
            let gradient = crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#003952");
            gradient.addColorStop(.2, "#032d40");
            gradient.addColorStop(.5, "#062430");
            gradient.addColorStop(1, "#0f0f0f");
            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1200, _y);
            crc2.lineTo(_x + 1200, _y + 350);
            crc2.lineTo(_x - 1200, _y + 350);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        function drawField(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y + 350);
            crc2.lineTo(_x + 1200, _y + 350);
            crc2.lineTo(_x + 1200, _y + 900);
            crc2.lineTo(_x - 1200, _y + 900);
            let gradient2 = crc2.createLinearGradient(0, 0, 0, 900);
            gradient2.addColorStop(.5, "#014a2f");
            gradient2.addColorStop(.7, "#038c5a");
            gradient2.addColorStop(1, "#02ad6e");
            crc2.fillStyle = gradient2;
            crc2.fill();
            crc2.closePath();
        }
        function drawMoon(_x, _y, _fillColor) {
            crc2.beginPath();
            crc2.arc(_x, _y, 65, 0, 2 * Math.PI);
            crc2.fillStyle = _fillColor;
            crc2.shadowColor = _fillColor;
            crc2.shadowBlur = 110;
            crc2.fill();
            crc2.closePath();
        }
        function drawMountain(_x, _y, _fillColor, _strokeColor) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 60, _y - 90);
            crc2.lineTo(_x + 80, _y - 90);
            crc2.lineTo(_x + 100, _y - 110);
            crc2.lineTo(_x + 140, _y - 150);
            crc2.lineTo(_x + 180, _y - 100);
            crc2.lineTo(_x + 220, _y - 160);
            crc2.lineTo(_x + 300, _y - 170);
            crc2.lineTo(_x + 340, _y - 180);
            crc2.lineTo(_x + 380, _y - 200);
            crc2.lineTo(_x + 450, _y - 150);
            crc2.lineTo(_x + 520, _y - 220);
            crc2.lineTo(_x + 560, _y - 140);
            crc2.lineTo(_x + 600, _y - 180);
            crc2.lineTo(_x + 650, _y - 140);
            crc2.lineTo(_x + 700, _y - 200);
            crc2.lineTo(_x + 770, _y - 150);
            crc2.lineTo(_x + 850, _y - 130);
            crc2.lineTo(_x + 910, _y - 160);
            crc2.lineTo(_x + 970, _y - 110);
            crc2.lineTo(_x + 1030, _y - 150);
            crc2.lineTo(_x + 1110, _y - 100);
            crc2.lineTo(_x + 1200, _y);
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.shadowColor = "";
            crc2.shadowBlur = 0;
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        function drawTrees(_x, _y, _fillColor, _strokeColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            // ganz kleienr Baum
            crc2.fillRect(_x + 75, _y + 20, 6, 20);
            //Kleiner Baum
            crc2.fillRect(_x + 400, _y + 50, 10, 60);
            //Baum rechts
            //Großer Baum
            crc2.fillRect(_x + 235, _y + 100, 30, 200);
            crc2.fill();
            crc2.stroke();
            crc2.fillStyle = "#005400";
            // ganz kleiner Baum
            crc2.moveTo(_x + 55, _y + 20);
            crc2.lineTo(_x + 78, _y);
            crc2.lineTo(_x + 101, _y + 20);
            crc2.moveTo(_x + 65, _y + 5);
            crc2.lineTo(_x + 78, _y - 15);
            crc2.lineTo(_x + 91, _y + 5);
            crc2.moveTo(_x + 70, _y - 10);
            crc2.lineTo(_x + 78, _y - 25);
            crc2.lineTo(_x + 86, _y - 10);
            //kleiner Baum
            crc2.moveTo(_x + 360, _y + 60);
            crc2.lineTo(_x + 405, _y + 10);
            crc2.lineTo(_x + 450, _y + 60);
            crc2.moveTo(_x + 370, _y + 30);
            crc2.lineTo(_x + 405, _y - 20);
            crc2.lineTo(_x + 440, _y + 30);
            crc2.moveTo(_x + 380, _y);
            crc2.lineTo(_x + 405, _y - 50);
            crc2.lineTo(_x + 430, _y);
            //Großer Baum
            crc2.moveTo(_x + 400, _y + 120);
            crc2.lineTo(_x + 100, _y + 120);
            crc2.lineTo(_x + 250, _y);
            crc2.moveTo(_x + 350, _y + 50);
            crc2.lineTo(_x + 150, _y + 50);
            crc2.lineTo(_x + 250, _y - 50);
            crc2.moveTo(_x + 300, _y - 20);
            crc2.lineTo(_x + 200, _y - 20);
            crc2.lineTo(_x + 250, _y - 120);
            crc2.fill();
            crc2.closePath();
        }
        function drawFlower1(_x, _y) {
            for (let i = 0; i < 8; i++) {
                if (i <= 4)
                    _y += 50;
                if (i >= 4)
                    _x += 50;
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "#a000d1";
                crc2.arc(_x + 2, _y, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 2, _y + 10, 10, 0, 2 * Math.PI);
                crc2.arc(_x - 8, _y, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 2, _y - 10, 10, 0, 2 * Math.PI);
                crc2.arc(_x + 12, _y, 10, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "yellow";
                crc2.arc(_x + 2, _y, 5, 0, 2 * Math.PI);
                crc2.fill();
                crc2.closePath();
            }
        }
        function drawFlower2(_x, _y) {
            for (let i = 0; i < 8; i++) {
                if (i <= 4)
                    _y += 50;
                if (i >= 4)
                    _x += 50;
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "#f00000";
                crc2.arc(_x + 2, _y, 20, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.strokeStyle = getRandomColor();
                crc2.fillStyle = getRandomColor();
                crc2.moveTo(_x, _y);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
            }
        }
        function drawFlower3(_x, _y) {
            for (let i = 0; i < 8; i++) {
                if (i <= 4)
                    _y += 50;
                if (i >= 4)
                    _x += 50;
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y, 4, 70);
                crc2.fillStyle = "pink";
                crc2.moveTo(_x + 2, _y);
                crc2.lineTo(_x - 25, _y - 25);
                crc2.lineTo(_x + 25, _y - 25);
                crc2.moveTo(_x + 2, _y + 25);
                crc2.lineTo(_x - 15, _y + 15);
                crc2.lineTo(_x + 15, _y + 15);
                crc2.fill();
                crc2.closePath();
            }
        }
        function createCloudxy(_particleNumber, _size) {
            for (let i = 0; i < _particleNumber; i++) {
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                xCloudArray.push(x);
                yCloudArray.push(y);
            }
        }
        function createCloud() {
            let xCloud = 0;
            let yCloud = 150;
            let cloudPosition = new BlumenwieseInheritance.Vector(xCloud, yCloud);
            let cloudSize = new BlumenwieseInheritance.Vector(100, 50);
            let velocityCloud = new BlumenwieseInheritance.Vector(4, 0);
            for (let i = 0; i < 20; i++) {
                let cloud = new BlumenwieseInheritance.Cloud(cloudPosition, cloudSize, velocityCloud, xCloudArray[i], yCloudArray[i]);
                cloud.drawCloud();
                cloudArray.push(cloud);
            }
        }
        function createBees(_nBees) {
            console.log("Create Bees");
            for (let i = 0; i < _nBees; i++) {
                let randomXBee = Math.random() * (crc2.canvas.width);
                let randomYBee = Math.random() * (crc2.canvas.height);
                let beePosition = new BlumenwieseInheritance.Vector(randomXBee, randomYBee);
                let beeVelocity = new BlumenwieseInheritance.Vector(20, 0);
                let bee = new BlumenwieseInheritance.Bienen(beePosition, beeVelocity);
                beeArray.push(bee);
            }
        }
        function update() {
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.save();
            drawSky(0, 0, "#88d1CF");
            crc2.restore();
            crc2.save();
            getRandomColor();
            crc2.restore();
            crc2.save();
            crc2.restore();
            crc2.save();
            drawField(0, 0);
            crc2.restore();
            crc2.save();
            drawMoon(180, 100, "#f7fae1");
            crc2.restore();
            crc2.save();
            drawMountain(0, 350, "#575554", "#000000");
            crc2.restore();
            crc2.save();
            drawTrees(0, 350, "#7a2900", "#7a2900");
            crc2.restore();
            crc2.save();
            drawFlower1(800, 450);
            drawFlower2(700, 550);
            drawFlower3(900, 350);
            for (let bee of beeArray) {
                bee.move(1 / 30);
                bee.drawBees(0, 0);
            }
            for (let i = 0; i < 20; i++) {
                cloudArray[i].drawCloud();
                cloudArray[i].move(1 / 50);
            }
        }
        window.setInterval(update, 20);
    }
})(BlumenwieseInheritance || (BlumenwieseInheritance = {}));
//# sourceMappingURL=Main.js.map