"use strict";
let subjekte = ["Fabian", "Sebastian", "Florian", "Max", "Jannis", "Batuhan"];
let praedikate = ["liebt", "hasst", "zerstört", "schlägt", "studiert", "riecht"];
let objekte = ["Tomaten", "Fallen", "sein Bett", "Notre-Dame", "seinen Körper", "Tiere"];
//console.log(subjekte, praedikate, objekte);
function getVerse(_subjekte, _praedikate, _objekte) {
    let result = "";
    let zSubjekte = Math.floor(Math.random() * _subjekte.length);
    result += _subjekte.splice(zSubjekte, 1) + " ";
    let zPraedikate = Math.floor(Math.random() * _praedikate.length);
    result += _praedikate.splice(zPraedikate, 1) + " ";
    let zObjekte = Math.floor(Math.random() * _objekte.length);
    result += _objekte.splice(zObjekte, 1) + " ";
    console.log(result);
    return result;
}
for (var i = 6; i <= subjekte.length; i--) {
    if (i == 0) {
        break;
    }
    //console.log(i); 
    getVerse(subjekte, praedikate, objekte);
}
//# sourceMappingURL=RandomPoem.js.map