function createGame(player1, hour, player2){
    return`
    <li>
    <img src="img/icon-${player1}.png" alt="bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="img/icon-${player2}.png" alt="bandeira do ${player2}"/>
    `
}
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = 
createCard("05/07", "Quarta-Feira", createGame
("Corinthians", "20:00", "Palmeiras"))+createCard("07/07", "Quarta-Feira", createGame
("sp", "21:00", "Vasco"))+createCard("10/07", "Quarta-Feira", createGame
("Atletico", "17:00", "Bahia"))+createCard("12/07", "Quarta-Feira", createGame
("Bota", "20:30", "Flamengo"))+createCard("14/07", "Quarta-Feira", createGame
("Inter", "16:30", "Santos"))+createCard("16/07", "Quarta-Feira", createGame
("Cruzeiro", "15:00", "Gremio"))





