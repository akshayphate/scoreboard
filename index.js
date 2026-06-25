let homeScore = 0;
let guestScore = 0;

function updateScore(team, incr) {
    if (team === 'home') {
        homeScore += incr;
        document.getElementById('home-score').textContent = homeScore;
    } else {
        guestScore += incr;
        document.getElementById('guest-score').textContent = guestScore;
    }
}