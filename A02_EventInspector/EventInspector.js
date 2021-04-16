"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let x = _event.clientX;
    let y = _event.clientY;
    var span = document.querySelector("span");
    let position = span;
    position.style.left = x + "px";
    position.style.top = y + "px";
    position.textContent = "Koordinaten der Maus(px): " + "  x-Koordinate = " + x + "px" + "  y-Koordinate = " + y + "px"
        + _event.target;
}
function logInfo(_event) {
    let eventsType = _event.type;
    let eventsTarget = _event.target;
    let currentTarget = _event.currentTarget;
    let wholeEvent = _event;
    console.log("Log Events-Type:" + _event.type);
    console.log("Log Events-Target" + eventsTarget);
    console.log("Curent Target:" + currentTarget);
    console.log("Whole Event" + wholeEvent);
}
//# sourceMappingURL=EventInspector.js.map