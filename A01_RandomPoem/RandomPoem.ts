namespace RandomPoem {

let subjekte: string[] = ["Fabian", "Sebastian", "Florian", "Max", "Jannis", "Batuhan" ];

let praedikate: string[] = ["liebt", "hasst", "zerstört", "schlägt", "studiert", "riecht"];

let objekte: string[] = ["Tomaten", "Fallen", "sein Bett", "Notre-Dame", "seinen Körper", "Tiere"];

//console.log(subjekte, praedikate, objekte);


function getVerse (_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
    let result: string = "";
    let zSubjekte: number = Math.floor(Math.random() * _subjekte.length);
    result += _subjekte.splice(zSubjekte, 1) + " ";

    let zPraedikate: number = Math.floor(Math.random() * _praedikate.length);
    result += _praedikate.splice(zPraedikate, 1) + " ";

    let zObjekte: number = Math.floor(Math.random() * _objekte.length);
    result += _objekte.splice(zObjekte, 1) + " ";
   
    console.log(result);
    return result;
    
}

for (var i: number = 6; i <= subjekte.length; i--) {
    if (i == 0) {
        break;
    }
    //console.log(i); 
    getVerse(subjekte, praedikate, objekte)  ;
}
}
