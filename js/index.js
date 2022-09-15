const marioElement = document.querySelector('.mario');
const pipeElement = document.querySelector('.pipe');
const scoreElement = document.getElementById('score');

let state = 0
scoreElement.innerHTML=state;

const addScore = () => {
    state = state +1;
    scoreElement.innerHTML=state;
}


const jump = () => {
    marioElement.classList.add('jump');
    
    setTimeout(() => {
        marioElement.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    //console.log(loop);
   
    const pipePostion = pipeElement.offsetLeft;
    const marioPosition = +window.getComputedStyle(marioElement).bottom.replace('px', '');
    // console.log(marioPosition);

    if(pipePostion <= 120 && pipePostion > 0 && marioPosition < 105) {
        pipeElement.style.animation = 'none';
        pipeElement.style.left = `${pipePostion}px`;
        
        marioElement.style.animation = 'none';
        marioElement.style.bottom = `${marioPosition}px`;

        marioElement.src = './imgs/game-over.png';
        marioElement.style.width = '75px';
        marioElement.style.marginLeft = '50px';

        clearInterval(loop);
    } else {
        //console.log('[STATE]:', state);
        addScore();
    }

}, 10)


//document.addEventListener('keypress', jump);
document.addEventListener('pointerDown', jump);
