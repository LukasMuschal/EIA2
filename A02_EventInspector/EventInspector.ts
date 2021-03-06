window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
}

function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    var span: HTMLElement = <HTMLElement> document.querySelector("span");

    let position: HTMLElement = span;
    position.style.left = x + "px";
    position.style.top = y + "px";
    position.textContent = "Koordinaten der Maus(px): " + "  x-Koordinate = " + x + "px" + "  y-Koordinate = " + y + "px"
    + _event.target;
}

function logInfo (_event: Event): void {
    let eventsType: string = _event.type;
    let eventsTarget: HTMLElement = <HTMLElement>_event.target;
    let currentTarget: HTMLElement = <HTMLElement>_event.currentTarget;
    let wholeEvent: Event = <Event>_event;
    console.log("Log Events-Type:" + _event.type);
    console.log("Log Events-Target" + eventsTarget);
    console.log("Curent Target:" + currentTarget);
    console.log("Whole Event" + wholeEvent);
    
}