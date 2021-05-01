namespace MemoryGame {
    window.addEventListener("load", handleLoad);

    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let memoryCards: number;
    let cardArray: string[] = [];
    let cardFront: number = 0;
    let cardFrontArray: HTMLElement[] = [];
    let gamingTable: HTMLElement;
    let form: HTMLElement;
    let button: HTMLElement;
    let gameBoard: HTMLDivElement;
    let cardType: string[] = [];
    let count: number =  0;

   

    function handleLoad(): void {
        form = <HTMLElement>document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = <HTMLElement>document.querySelector("button");
        button.addEventListener("click", showCards);
        gameBoard = <HTMLDivElement>document.querySelector("#gameContainer");  
    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        cardType = [];
        for (let entry of formData) {
            cardType.push(String(entry[1]));
            console.log(cardType);
        }
    }

    function showCards(): void {
        setInterval(function (): void {
            count += 1;
            //console.log(count);     

         },         1000);
        form.classList.add("invisible");
        button.classList.add("invisible");
        memoryCards = Number(cardType[0]);

        for (let i: number = 0; i < 2; i++) {
            for (let x: number = 0; x < memoryCards; x++) {
                cardArray.push(cardContent[x]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        gamingTable = <HTMLElement>document.querySelector("#gameContainer");
        document.body.style.background = cardType[2];
        document.body.style.fontFamily = cardType[5];

        for (let i: number = 0; i < cardArray.length; i++) {
            let card: HTMLElement = <HTMLElement>document.createElement("div");
            card.style.width = cardType[1] + "px";
            card.style.height = cardType[1] + "px";
            card.style.background = cardType[3];
            card.style.color = cardType[4];
            card.innerHTML = "<span>" + cardArray[i] + "</span>";
            gamingTable.appendChild(card);
            card.addEventListener("click", clickCard);
            console.log(card);
            let allSpans: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            allSpans[i].classList.add("visibility");
           
        }
       
    
    }
    
   
    

    function clickCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        cardFrontArray.push(target);
        cardFrontArray[0].style.background = "white";
        cardFrontArray[0].querySelector("span")?.classList.remove("visibility");
        if (cardFrontArray.length == 2) {
            cardFrontArray[1].style.background = "white";
            cardFrontArray[1].querySelector("span")?.classList.remove("visibility");
            setTimeout(compareCards, 2000);
        }
       
    }
    function compareCards(): void {
        let span0: string = <string> cardFrontArray[0].querySelector("span")?.innerHTML;
        let span1: string = <string> cardFrontArray[1].querySelector("span")?.innerHTML;
        if (span0 == span1) {
            cardFrontArray[0].classList.add("visibility");
            cardFrontArray[1].classList.add("visibility");
            cardFrontArray = [];
            cardFront++;
            checkWin();
        } else {
            cardFrontArray[0].style.background = cardType[3];
            cardFrontArray[1].style.background = cardType[3];
            cardFrontArray[0].querySelector("span")?.classList.add("visibility");
            cardFrontArray[1].querySelector("span")?.classList.add("visibility");
            cardFrontArray = [];
        }
    }
    function checkWin(): void {
        if (cardFront == memoryCards) {
            window.alert("Perfect! " + "Time you needed: " + count + " sec" );
        }
    }
      
    
}

   


