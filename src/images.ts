import ballSrc from './img/Soccerball.svg';
import pauseBtnSrc from './img/btn/pause-button.svg';
import stopBtnSrc from './img/btn/stop-button.svg';
import playBtnSrc from './img/btn/play-button.svg';

const width = 50;
const height = 50;

export default {
    ball: setImage(ballSrc, 'ball'), 
    pauseBtn: setImage(pauseBtnSrc, 'pauseBtn'), 
    stopBtn: setImage(stopBtnSrc, 'stopBtn'), 
    playBtn: setImage(playBtnSrc, 'playBtn')
}

function setImage (src:string, id:string = null) {
    const img = new Image(width, height);
    img.src = src;
    if (id) {
        img.id = id;
    }
    return img;
}