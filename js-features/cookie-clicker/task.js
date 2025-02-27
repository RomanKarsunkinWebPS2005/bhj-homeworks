const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isEnlarged = false;

cookie.onclick = () => {
    clicks++;
    counter.textContent = clicks;
    
    if (isEnlarged) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
    isEnlarged = !isEnlarged;
};
