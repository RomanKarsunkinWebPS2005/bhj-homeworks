(() => {
    let deadCount = 0;
    let lostCount = 0;
    
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    
    const getHole = index => document.getElementById(`hole${index}`);
    
    function handleClick(event) {
        if (event.target.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
            
            if (deadCount >= 10) {
                alert('Победа!');
                resetGame();
            }
        } else {
            lostCount++;
            lost.textContent = lostCount;
            
            if (lostCount >= 5) {
                alert('Игра окончена! Вы проиграли.');
                resetGame();
            }
        }
    }
    
    function resetGame() {
        deadCount = 0;
        lostCount = 0;
        dead.textContent = '0';
        lost.textContent = '0';
    }
    
    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', handleClick);
    }
})();
