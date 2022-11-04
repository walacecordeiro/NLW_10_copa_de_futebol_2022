function creatGame(player1, hour, player2) {
  return `
    <li>        
                   <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}">
                    <strong>${hour}</strong>
                    <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
                </li>
  `
}

let delay = -0.4
function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s;">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>

            </div>
  `
}

document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    creatGame("switzerland", "07:00", "cameroon") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGame("cameroon", "07:00", "serbia") +
      creatGame("southKorea", "10:00", "ghana") +
      creatGame("switzerland", "13:00", "brazil") +
      creatGame("portugal", "16:00", "uruguay")
  ) +
  creatCard(
    "02/12",
    "sexta",
    creatGame("southKorea", "12:00", "portugal") +
      creatGame("ghana", "12:00", "uruguay") +
      creatGame("serbia", "16:00", "switzerland") +
      creatGame("brazil", "16:00", "cameroon")
  )
