"use strict";
var MemoryGame;
(function (MemoryGame) {
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let memoryCards;
    let cardArray = [];
    let cardFront = 0;
    let cardFrontArray = [];
    let gamingTable;
    let form;
    let button;
    let gameBoard;
    let cardType = [];
    let count = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        button = document.querySelector("button");
        button.addEventListener("click", showCards);
        gameBoard = document.querySelector("#gameContainer");
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        cardType = [];
        for (let entry of formData) {
            cardType.push(String(entry[1]));
            console.log(cardType);
        }
    }
    function showCards() {
        setInterval(function () {
            count += 1;
            //console.log(count);     
        }, 1000);
        form.classList.add("invisible");
        button.classList.add("invisible");
        memoryCards = Number(cardType[0]);
        for (let i = 0; i < 2; i++) {
            for (let x = 0; x < memoryCards; x++) {
                cardArray.push(cardContent[x]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        gamingTable = document.querySelector("#gameContainer");
        document.body.style.background = cardType[2];
        document.body.style.fontFamily = cardType[5];
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("div");
            card.style.width = cardType[1] + "px";
            card.style.height = cardType[1] + "px";
            card.style.background = cardType[3];
            card.style.color = cardType[4];
            card.innerHTML = "<span>" + cardArray[i] + "</span>";
            gamingTable.appendChild(card);
            card.addEventListener("click", clickCard);
            console.log(card);
            let allSpans = document.querySelectorAll("span");
            allSpans[i].classList.add("visibility");
        }
    }
    function clickCard(_event) {
        let target = _event.target;
        cardFrontArray.push(target);
        cardFrontArray[0].style.background = "white";
        cardFrontArray[0].querySelector("span")?.classList.remove("visibility");
        if (cardFrontArray.length == 2) {
            cardFrontArray[1].style.background = "white";
            cardFrontArray[1].querySelector("span")?.classList.remove("visibility");
            setTimeout(compareCards, 2000);
        }
    }
    function compareCards() {
        let span0 = cardFrontArray[0].querySelector("span")?.innerHTML;
        let span1 = cardFrontArray[1].querySelector("span")?.innerHTML;
        if (span0 == span1) {
            cardFrontArray[0].classList.add("visibility");
            cardFrontArray[1].classList.add("visibility");
            cardFrontArray = [];
            cardFront++;
            checkWin();
        }
        else {
            cardFrontArray[0].style.background = cardType[3];
            cardFrontArray[1].style.background = cardType[3];
            cardFrontArray[0].querySelector("span")?.classList.add("visibility");
            cardFrontArray[1].querySelector("span")?.classList.add("visibility");
            cardFrontArray = [];
        }
    }
    function checkWin() {
        if (cardFront == memoryCards) {
            window.alert("Perfect! " + "Time you needed: " + count + " sec");
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map