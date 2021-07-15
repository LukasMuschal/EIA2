namespace soccer {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let imgData: ImageData;

    let form: HTMLElement;
    let button: HTMLElement;
    
    export let jerseyColor1: String = "";
    export let jerseyColor2: String = "";
    export let speed: number = 0;
    export let minPrec: number = 0;
    export let maxPrec: number = 0;

    export let moveables: Moveable [] = [];
    export let ball: Ball;
    export let ballArray: Ball [] = [];

    let positionTeams: number [] [] = [[85, 285], [200, 150], [200, 285], [200, 420], [325, 285], [400, 170], [400, 390], [520, 285], [600, 120], [600, 285], [600, 460], [745, 285], [640, 450], [640, 340], [640, 230], [640, 120], [510, 360], [510, 220], [380, 120], [380, 460], [250, 220], [250, 380]];
    let jerseyNumbers: number [] = [1, 2, 3];


    function handleLoad(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        let feld: Field = new Field;  // Fußballfeld zeichnen
        console.log(feld);  //wegen Linter

         // Feld als Bild speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        form = <HTMLElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = <HTMLElement>document.querySelector("button");
        button.addEventListener("click", showField);
    }

    function handleChange(_event: Event): void {
        let formData: HTMLInputElement = <HTMLInputElement>_event.target;
        if (formData.id == "jerseyColor1") {
            jerseyColor1 = formData.value;
        }
        if (formData.id == "jerseyColor2") {
            jerseyColor2 = formData.value;
        }
        if (formData.id == "sliderSpeed") {
            speed = Number(formData.value);
        }
        if (formData.id == "minprec") {
            minPrec = Number(formData.value);
        }
        if (formData.id == "maxprec") {
            maxPrec = Number(formData.value);
        }
    }

    function showField(_event: Event): void {
        form.classList.add("invisible");     // Nur Feld wird angezeigt
        button.classList.add("invisible");

        createPlayer();
        createBall();

        canvas.addEventListener("click", clickBall);

        window.setInterval(update, 50);       // update Funktion wird gestartet
    }


    function createPlayer(): void {
        for (let i: number = 0; i <= 21; i++) {
            let player: Player = new Player(new Vector(positionTeams[i][0], positionTeams[i][1]), jerseyNumbers[i]);
            player.draw();
            moveables.push(player);
        }
    }

    function createBall(): void {
        ball = new Ball(new Vector(415, 290));
        ball.draw();
        ballArray.push(ball);
    }

    function clickBall(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;
        ball.click(new Vector(x, y));
        console.log(ball);

    }

    function update(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);                    // Hintergrund als Bild bleibt erhalten
        for (let ball of ballArray) {
        ball.move();  
        ball.draw();
        }
    }

}