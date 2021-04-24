namespace MemoryGame {
    document.addEventListener("load", handleLoad);

    let table: HTMLDivElement  = document.querySelector("#gameContainer");
    let contents: string [] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y"];
    let allCards: HTMLDivElement[];
    let visibleCards: HTMLElement[];
    let turnedCards: number = 0;
    let foundPairs: number = 0;
    let pairsNumber: number = 10;

   // let memoryCards: number;
   // let cardContent: string[] = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y"];
   // let cardArray: HTMLElement[] = [];
    //let cardFront: number = 0;
    //let cardFrontArray: HTMLElement[] = [];
    //let checkRest: HTMLElement[] = [];

    function handleLoad(_event: Event): void {
       let pairsNumber: number = parseInt(prompt("Choose number of pairs you want to play!"));
       let end, start: Date = new Date();
       for (let i: number = 0; i < 1000; i++) {
           Math.sqrt(i);
       }
       end = new Date();
       console.log("You took" + (end.getTime() - start.getTime()) + " msec");



        
       

    }
}