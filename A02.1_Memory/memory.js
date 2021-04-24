"use strict";
var MemoryGame;
(function (MemoryGame) {
    window.addEventListener("load", handleLoad);
    let memoryCards;
    let cardContent = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y"];
    let cardArray = [];
    let cardFront = 0;
    let cardFrontArray = [];
    let checkRest = [];
    function handleLoad() {
        for (let i = cardContent.length - 1; i >= 0; i--) {
            let min = 0;
            let max = i;
            let randomCards = Math.floor(Math.random() * (max - min + 1)) + min;
            let memoryCards = HTMLElement = document.createElement("div");
            memoryCards.setAttribute("class", "card");
            document.getElementById("gameContainer")?.appendChild(memoryCards);
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map