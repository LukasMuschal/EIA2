namespace Blumenwiese {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
        let letters: string = "";
        let color: string = "";
        let radius: number = 0;
        let angle: number = 0;
       
        drawSky(0, 0, "#88d1CF");
        getRandomColor();
        randomStars(0, 0, 0);
        drawField(0, 0);
        drawMoon(180, 100, "#f7fae1");
        drawMountain(0, 350, "#575554", "#000000");
        drawTrees(0, 350, "#7a2900", "#7a2900");
        drawFlowers1(450, 1000);
        drawFlowers2(450, 1000);
        drawFlowers3(450, 1000);
        
        

        function getRandomColor(): string {
            letters = "0123456789ABCDEF";
            color = "#";
            for (let i: number = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                //console.log(color);
            }
            return color;
        }

        function drawSky(_x: number , _y: number, _strokeColor: string): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
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
        function drawField (_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y + 350);
            crc2.lineTo(_x + 1200, _y + 350);
            crc2.lineTo(_x + 1200, _y + 900);
            crc2.lineTo(_x - 1200, _y + 900);

            let gradient2: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 900);
            gradient2.addColorStop(.5, "#014a2f"); 
            gradient2.addColorStop(.7, "#038c5a");
            gradient2.addColorStop(1, "#02ad6e");

            crc2.fillStyle = gradient2;
            crc2.fill();
            crc2.closePath();
        }
        function randomStars(_x: number, _y: number, _radius: number): void {
        let max: number = 1200;
        let min: number = 0;
        for (let i: number = 0; i <= 300; i++) {
                crc2.beginPath();
                _x = (Math.random() * (max - min)) + min;   // x-Koordinate
                _y = (Math.random() * (max - min)) + min;
                if (i <= 30) {
                    _radius = 4;
                } else if (i >= 250) {
                    _radius = 3;
                } else {
                    _radius = 2;
                }
                
                crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
                crc2.fill();
                crc2.fillStyle = "#FFFACD";
                crc2.lineWidth = 1;
                crc2.stroke();
                crc2.strokeStyle = getRandomColor();
                crc2.closePath();
                }
            }
        crc2.restore();
        crc2.save();

        function drawMoon(_x: number, _y: number, _fillColor: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 65, 0, 2 * Math.PI);
            crc2.fillStyle = _fillColor;
            crc2.shadowColor = _fillColor;
            crc2.shadowBlur = 110;
            crc2.fill();
            crc2.closePath();
        }
    
        function drawMountain(_x: number, _y: number, _fillColor: string, _strokeColor: string): void {
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

        function drawTrees (_x: number, _y: number, _fillColor: string, _strokeColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            // ganz kleienr Baum
            crc2.fillRect(_x + 75, _y + 20, 6, 20);
            //Kleiner Baum
            crc2.fillRect(_x + 400, _y + 50, 10, 60);
            //Baum rechts
            crc2.fillRect(_x + 900, _y + 70,  14, 80);
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
            //baum rechts
            crc2.moveTo(_x + 850, _y + 70);
            crc2.lineTo(_x + 907, _y + 10);
            crc2.lineTo(_x + 957, _y + 70);

            crc2.moveTo(_x + 860, _y + 40);
            crc2.lineTo(_x + 907, _y - 20);
            crc2.lineTo(_x + 947, _y + 40);

            crc2.moveTo(_x + 870, _y + 10);
            crc2.lineTo(_x + 907, _y - 50);
            crc2.lineTo(_x + 937, _y + 10);
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

        function drawFlowers1(_x: number, _y: number): void {
            let max1: number = _x;
            let min1: number = _y;
            for (let i: number = 0; i < 5; i++) {
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
            
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y , 4, 70);
                crc2.fillStyle = "#a000d1";
                crc2.arc(_x + 2, _y , 10, 0, 2 * Math.PI);
                crc2.arc(_x + 2, _y + 10, 10, 0, 2 * Math.PI );
                crc2.arc(_x - 8, _y, 10, 0, 2 * Math.PI );
                crc2.arc(_x + 2, _y - 10, 10, 0, 2 * Math.PI );
                crc2.arc(_x + 12, _y , 10, 0, 2 * Math.PI );
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "yellow";
                crc2.arc(_x + 2, _y , 5, 0, 2 * Math.PI);

                crc2.fill();
                crc2.closePath();
            }
        }
        function drawFlowers2 (_x: number, _y: number): void {
            let max1: number = _x;
            let min1: number = _y;
            for (let i: number = 0; i < 4; i++) {
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
            
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y , 4, 70);

                crc2.fillStyle = "#f00000";
                crc2.arc(_x + 2, _y , 20, 0, 2 * Math.PI);
                crc2.fill();

                crc2.beginPath();
                crc2.lineWidth = 3;
                crc2.lineCap = "round";
                crc2.lineJoin = "round";
                crc2.shadowColor = getRandomColor();
                crc2.shadowBlur = 30;
                crc2.strokeStyle = getRandomColor();
                crc2.fillStyle = getRandomColor();
                crc2.moveTo(_x, _y);
                    
                for (let i: number = 0; i < 150; i++) {
                    radius += 0.008;
                    angle += (Math.PI * 2) / 50;
                    let x1: number = _x + 2 + radius * Math.cos(angle);
                    let y1: number = _y + radius * Math.sin(angle);
                    crc2.lineTo(x1, y1);
                }
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
            }
        }
        function drawFlowers3(_x: number, _y: number): void {
            let max1: number = _x;
            let min1: number = _y;
            for (let i: number = 0; i < 4; i++) {
                _x = (Math.random() * (max1 - min1)) + min1;
                _y = (Math.random() * (max1 - min1)) + min1;
            
                crc2.beginPath();
                crc2.fillStyle = "#447a3e";
                crc2.fillRect(_x, _y , 4, 70);
                crc2.fillStyle = getRandomColor();
               
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
}


}