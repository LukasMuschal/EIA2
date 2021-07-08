namespace soccerGame {
   // let jerseyColor1: string [] = [];
    //let jerseyColor2: string [] = [];
    let form: HTMLElement;
    let button: HTMLElement;
    export let playerType: string [] = [];

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let imgData: ImageData;

    let pLayerArray: Player [] = [];

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        form = <HTMLElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = <HTMLElement>document.querySelector("button");
        
        button.addEventListener("click", showField);

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;
        

        //Fußballfeld zeichnen
        let feld: Field = new Field;
        console.log(feld);
        // Feld als Bild speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        createPlayer();
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
        pLayerArray.push();
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
            pLayerArray.push();
       }
    }
    
    
  
}

