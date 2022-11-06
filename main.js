function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, game) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${game}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard("22/11", "terça", 
        createGame("argentina", "07:00", "saudiArabia") + 
        createGame("denmark", "10:00", "tunisia") + 
        createGame("mexico", "13:00", "poland") + 
        createGame("france", "16:00", "australia")) +
    createCard("23/11", "quarta", 
        createGame("morocco", "07:00", "croatia") + 
        createGame("germany", "10:00", "japan") + 
        createGame("spain", "13:00", "costaRica") + 
        createGame("belgium", "16:00", "canada")) +
    createCard("24/12", "quinta", 
        createGame("switzerland", "07:00", "cameroon") + 
        createGame("uruguay", "10:00", "southKorea") + 
        createGame("portugal", "13:00", "ghana") + 
        createGame("brazil", "16:00", "serbia")) +
    createCard("25/12", "sexta", 
        createGame("wales", "07:00", "iran") + 
        createGame("qatar", "10:00", "senegal") + 
        createGame("netherlands", "13:00", "ecuador") + 
        createGame("england", "16:00", "usa"))