namespace soccerGame {

    export enum SOCCER_EVENT {
        SHOOT_BALL = "shootBAll"
    }
   
    let form: HTMLElement;
    let button: HTMLElement;
    export let playerType: string [] = [];
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let imgData: ImageData;



    let playerArray: Player [] = [];
    export let ballArray: Ball [] = [];

    window.addEventListener("load", handleLoad);
    
    


    function handleLoad(_event: Event): void {
        form = <HTMLElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = <HTMLElement>document.querySelector("button");
        
        button.addEventListener("click", showField);
        

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;
       // canvas.addEventListener("click", moveBall);

        //Fußballfeld zeichnen
        let feld: Field = new Field;
        console.log(feld);
        // Feld als Bild speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        createPlayer();
        createBall();
        
        canvas.addEventListener("click", shootBall);

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
        
    }

    function shootBall(_event: MouseEvent):  void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let x: number = (_event.clientX - rect.left) * 0.35;
        let y: number = (_event.clientY - rect.top) * 0.25;
        let positionBall: Vector = new Vector(x, y);
        
        let target: Spot = new Spot(positionBall);
        ballArray.push(target);
        console.log(x, y);
 
       // let ball: Ball = new Ball(positionBall, ballVelocity, 30);
        
       // ballArray.push(ball);
       // ball.draw();
       // console.log(ball);
 
     }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        playerType = [];
        for (let entry of formData) {
            playerType.push(String(entry[1]));
            console.log(playerType);
        }
    }

    function showField(): void {
        form.classList.add("invisible");
        button.classList.add("invisible");
        createPlayer();
        showField();
    
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
            
        
    }
    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(imgData, 0, 0);
        createPlayer();
        for (let i: number = 0; i < 20; i++) {
            ballArray[i].draw();
            ballArray[i].move(1 / 50);
        }
       
        
        
    }
  

    function createPlayer(): void {
        let positionTeamOne: Vector[] = [
            //Torwart
            new Vector(30, 75),
            //Abwehr
            new Vector(75, 40),
            new Vector(65, 65),
            new Vector(65, 90),
            new Vector(75, 115),
            //Mittelfeld
            new Vector(130, 60),
            new Vector(130, 90),
            new Vector(170, 75),
            //Sturm
            new Vector(220, 45),
            new Vector(210, 75),
            new Vector(220, 110)
        ];
        for (let i: number = 0; i < positionTeamOne.length; i++) {
       
        let playerRadius: Vector = new Vector(30, 30);
        
        let player: Player = new Player(positionTeamOne[i], playerType[0], playerType[2], playerRadius);
        player.draw();
        playerArray.push();
        }

        // Team 2
        let positionTeamTwo: Vector[] = [
            //Torwart
        new Vector(270, 75),
        //Abwehr
        new Vector(240, 75),
        new Vector(240, 50),
        new Vector(240, 100),
        //Mittelfeld
        new Vector(165, 40),
        new Vector(185, 60),
        new Vector(185, 90),
        new Vector(165, 110),
        //Stürmer
        new Vector(140, 75),
        new Vector(100, 50),
        new Vector(100, 100)


    ];
        for (let i: number = 0; i < positionTeamTwo.length; i++) {
            let playerRadius: Vector = new Vector(30, 30);
            let player: Player = new Player(positionTeamTwo[i], playerType[1], playerType[2], playerRadius);
            player.draw();
            playerArray.push();
       }
    }
    
    function createBall(): void {
        
        let positionBall: Vector = new Vector(40, 75);
        let velocityBall: Vector = new Vector(0, 0);
        //let radiusBall: Vector = new Vector(15, 15);

        let ball: Ball = new Ball(positionBall, velocityBall, 30);
        ball.draw();
        ballArray.push(ball);
        
    }
    
    
        
    
  
}

