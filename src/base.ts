import Images from './images';

let elementsInitialized = false;
export const elements = (() => {
    if (!elementsInitialized) {
        const controls = document.querySelector('.controls');
        controls.insertAdjacentElement('beforeend', Images.playBtn);
        controls.insertAdjacentElement('beforeend', Images.stopBtn);
        elementsInitialized = true;
    }
    return {
        playBtn: document.getElementById('playBtn'),
        stopBtn: document.getElementById('stopBtn'),
        pauseBtn: document.getElementById('pauseBtn'),

        audio: document.getElementById('audio') as HTMLAudioElement,

        parP: document.getElementById('parP') as HTMLInputElement,
        parL: document.getElementById('parL') as HTMLInputElement,
        parE: document.getElementById('parE') as HTMLInputElement,
        parI: document.getElementById('parI') as HTMLInputElement,
        
        canvas: document.getElementById('canvas') as HTMLCanvasElement,
        ctx: (document.getElementById('canvas') as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D
    }
})();
