/* SHREE GANESHAAYA NAMAH */
let baseUrl = "https://swapi.dev/api/people/";
persons = new Array();

for(i = 1; i <= 20; i++){
    persons[i] = baseUrl + i + "/";
    console.log(i + "  " + persons[i]);
}

let P1 = persons[Math.floor(Math.random() * 21)];
let P2, P3, P4, P5, P6;

while(P6 == P1){
    P6 = persons[Math.floor(Math.random() * 21)];
}
while(P3 == P1 || P3 == P2){
    P3 = persons[Math.floor(Math.random() * 21)];
}
while(P4 == P1 || P4 == P2 || P4 == P3){
    P4 = persons[Math.floor(Math.random() * 21)];
}
while(P5 == P1 || P5 == P2 || P5 == P3 || P5 == P4){
    P5 = persons[Math.floor(Math.random() * 21)];
}
while(P2 == P1 || P2 == P3 || P2 == P4 || P2 == P5 || P2 == P6){
    P2 = persons[Math.floor(Math.random() * 21)];
}

console.log(P1);
console.log(P2);
console.log(P3);
console.log(P4);
console.log(P5);

baseUrls = new Array();
baseUrls[0] = P1;
baseUrls[1] = P2;
baseUrls[2] = P3;
baseUrls[3] = P4;
baseUrls[4] = P5;

for(i = 0; i < 5; i++){
    console.log(baseUrls[i]);
}

let cards = document.getElementsByClassName("card");

function starWar(URL, j){
    fetch(URL)
        .then(Response => Response.json())
            .then(star =>{
                character = new Array();
                var a = star.name;
                var b = star.birth_year;
                var c = star.gender;
                var d = star.skin_color;
                character = [a, b, c, d];
                    cards[j].getElementsByTagName("h3")[0].innerHTML = "Name: " + character[0];
                    cards[j].getElementsByTagName("p")[0].innerHTML = "Birth Year: " + character[1];
                    cards[j].getElementsByTagName("p")[1].innerHTML = "Gender: " + character[2];
                    cards[j].getElementsByTagName("p")[2].innerHTML = "Skin Colour: " + character[3];
            })
}

for(i = 0; i < 5; i++){
    starWar(baseUrls[i], i)
}