namespace soccer {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let imgData: ImageData;

    let form: HTMLElement;
    let button: HTMLElement;
    let button2: HTMLElement;
    let button3: HTMLElement;
    
    
    
    export let jerseyColor1: String = "";
    export let jerseyColor2: String = "";
    export let speed: number = 0.05;
    export let ballControl: number = 20;
  
    export let moveables: Moveable [] = [];
    export let ball: Ball;
    export let ballArray: Ball [] = [];
    export let playerAtBall: Player;

    let positionTeams: number [] [] = [[85, 285], [200, 150], [200, 285], [200, 420], [325, 285], [400, 170], [400, 390], [520, 285], [600, 120], [600, 285], [600, 460], [745, 285], [640, 450], [640, 340], [640, 230], [640, 120], [510, 360], [510, 220], [380, 120], [380, 460], [250, 220], [250, 380]];
    let jerseyNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    let positionRefs: number [] [] = [[340, 300], [610, 40], [190, 550]];
    let refTyp: string [] = ["Ref", "RefOben", "RefUnten"];

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
        if (formData.id == "precision") {
            ballControl = Number(formData.value);
        }
       // if (formData.id == "maxprec") {
          //  maxPrec = Number(formData.value);
       // }
    }

    function showField(_event: Event): void {
        form.classList.add("invisible");     // Nur Feld wird angezeigt
        button.classList.add("invisible");
        
        createPlayer();
        createBall();
        playeronBall();
        
        
        
        
        
        canvas.addEventListener("click", clickBall);
        button2 = <HTMLElement>document.querySelector("#addPlayer");
        button2.addEventListener("click", newPlayer);
        button3 = <HTMLElement>document.querySelector("#addPlayerT2");
        button3.addEventListener("click", newPlayerT2);
        canvas.addEventListener("click", deletePlayer);
        document.addEventListener("keypress", showValues);

       
        

        window.setInterval(update, 50);       // update Funktion wird gestartet
        
    }
    
   function newPlayer(_event: MouseEvent): void {
        for(let i: number = 0; i <= 1; i++) {
            let positionNewPlayer: number [] [] = [[(Math.random() * 500) + 100, (Math.random() * 350) + 100]];
            let playerNew: Player = new Player(new Vector(positionNewPlayer[i][0], positionNewPlayer[i][1]), Math.round((Math.random() * 6) + 12));
            playerNew.draw();
            moveables.push(playerNew);
            console.log("geklickt");
            
        }
        
    }

   function newPlayerT2(_event: MouseEvent): void {
        for(let i: number = 0; i <= 1; i++) {
            let positionNewPlayerT2: number [] [] = [[(Math.random() * 500) + 100, (Math.random() * 350) + 100]];
            let playerNew: Player = new Player(new Vector(positionNewPlayerT2[i][0], positionNewPlayerT2[i][1]),  Math.round((Math.random() * 6) + 30));
            playerNew.draw();
            moveables.push(playerNew);
            console.log("geklickt");
        }
    }

    function deletePlayer(_event: MouseEvent): void {
        let taste: boolean = _event.ctrlKey;

        if (taste == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            
            for(let [i, moveable] of moveables.entries()) {
                if (moveable instanceof Player) {
                    let diffVec: Vector = new Vector(moveable.position.x - x, moveable.position.y - y);
                    let length: number = diffVec.length();
                    if (length <= 20) {          // Bereich für löschen => Notwendig sonst werden viele gelöscht
                    moveables.splice(i,1);
                   
                    }

                }
            }
        
        }
        
    }
    function createPlayer(): void {
        for (let i: number = 0; i <= 21; i++) {
            let player: Player = new Player(new Vector(positionTeams[i][0], positionTeams[i][1]), jerseyNumbers[i]);
            player.draw();
            moveables.push(player);
        }

        for (let i: number = 0; i <= 2; i++) {
            let reff: Referee = new Referee(new Vector(positionRefs[i][0], positionRefs[i][1]), refTyp[i]);
            reff.draw();
            moveables.push(reff);
        }
    }

    function createBall(): void {
        ball = new Ball(new Vector(415, 290));
        ball.draw();
        ballArray.push(ball);
    }

    
    function playeronBall(): boolean {
        for (let player of moveables) {
            if (player.contactToBall() == true) {
                playerAtBall = player;           // ansonsten kommt TYpeError: undefined
                if (playerAtBall.team == "Team 1") {
                let playerNumber: HTMLElement = document.getElementById("PlayerT")!;
                playerNumber.innerHTML = player.jerseyNumber.toString();
                playerNumber.style.fontFamily = "fantasy";
                playerNumber.style.backgroundColor = player.jerseyColor;
                } 
                else {
                    let playerNumber: HTMLElement = document.getElementById("PlayerT")!;
                    playerNumber.innerHTML = player.jerseyNumber.toString();
                    playerNumber.style.fontFamily = "fantasy";
                    playerNumber.style.backgroundColor = player.jerseyColor;
                }
                return true;
            }
            
        }
        return false;
        
    }

    function update(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);                    // Hintergrund als Bild bleibt erhalten
       
       if (ball.ballMove == false && playeronBall() == true) { // wenn ball sich nicht bewegt und ein Spieler am Ball ist => "stoppt" das Spiel
        for (let player of moveables) {
            player.draw();
        }
    }else {
            for (let player of moveables) {
                player.move();
                player.draw();
                
            }
        }
        for (let ball of ballArray) {
            ball.move();  
            ball.draw();
            }

        
    }
    function clickBall(_event: MouseEvent): void {
        let taste: boolean = _event.ctrlKey;
        if (taste == true) {
            return;
        }
        let rect: DOMRect = canvas.getBoundingClientRect();
        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;          // Position des Klicks wird ermittelt
    
        ball.click(new Vector(x, y));                       // position als neuer Vektor gespeichert
        console.log(ball);
    }
    
    function showValues(_event: KeyboardEvent): void {
        let infoKey: string = _event.key;
        
        if (infoKey == "i") {
            for (let player of moveables) {
                player.show()
            }     
        }
        
       

    }



}