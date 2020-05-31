import { elements } from './base';
import Beam from './model/beam';
import Point from './model/point';
import Images from './images';

const canvas = elements.canvas;
const ctx = elements.ctx;
const audio = elements.audio;
const offset = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;

export class Controller {
    private static timeLimit:number = 10;
    private static keepOnRunning:boolean;
    private static counter:number;
    private static raf: number;

    constructor() {
        elements.playBtn.addEventListener('click', Controller.start);
        elements.stopBtn.addEventListener('click', Controller.stop);
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2;
        })

        // Initial values
        elements.parP.value = '10.0';
        elements.parL.value = '30.0';
        elements.parE.value = '210000000.0';
        elements.parI.value = '0.00000171';
    }

    private static initAnimation() {
        Controller.counter = 0;
        window.requestAnimationFrame(Controller.animate);
    }

    private static start () {
        console.log('start')

        // Cancel animation loop if user starts this method
        window.cancelAnimationFrame(Controller.raf);

        // Reset flag
        Controller.keepOnRunning = true;

        // Get data from form: P, E, I, L
        const params = View.getParams();

        // Create Beam object from data aquired from user (P, E, I, L)
        Model.setBeam(params);

        // Start animation. loops from i = 0 to 1 until keepRunning = false
        Controller.initAnimation();

        // Start audio
        audio.play();
    }

    private static stop () {
        audio.pause();
        Controller.keepOnRunning = false;
    }

    private static getFrameLimit():number {
        return Controller.timeLimit * 60;
    }

    private static animate () {

        if (Controller.counter < Controller.getFrameLimit() && Controller.keepOnRunning) {
            Controller.raf = window.requestAnimationFrame(Controller.animate);
        } else {
            audio.pause();
        }
        
        // Calculate shape (i)
        Model.getBeam().calcShape(Controller.counter / Controller.getFrameLimit())
        Model.getBeam().scale(canvas.width - 2*offset, (canvas.height - 2*offset))
        // Get shape
        const shape = Model.getBeam().shape
        const loadPosition = [new Point(Model.getBeam().loadPosition.x, Model.getBeam().loadPosition.y)]
        
        // Draw here
        console.log(new Date().getSeconds()) // for animation loop testing
        
        // Render shape
        Render.prepare();
        Render.renderLoad(loadPosition[0]);
        Render.renderSurrounding();
        Render.renderLine(shape);
        Render.renderNodes(shape);
        // Render.renderNodes(loadPosition);
        
        Controller.counter++;
    }
}

class View {

    static getParams () {
        return [
            parseFloat(elements.parP.value) as number,
            parseFloat(elements.parL.value) as number,
            parseFloat(elements.parE.value) as number,
            parseFloat(elements.parI.value) as number
        ];
    }
}

class Model {

    private static beam: Beam;

    static getBeam () {
        return Model.beam;
    }

    static setBeam (arr:number[]) {
        const [parP, parL, parE, parI] = arr;
        Model.beam = new Beam(parP, parL, parE, parI, 15);
    }
}

class Render {
    
    static angle = (() => {
        let angle = 0;
        const speed = 1/20;
        return () => {
            angle += speed;
            return angle;
        }
    })();

    static prepare () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
    }

    static renderLine (line: Point[]) {
        ctx.beginPath();
        ctx.moveTo(offset, offset);
        line.forEach(point => {
            point = point.translate(offset, offset);
            ctx.lineTo(point.x, point.y);
        })
        ctx.stroke();
    }

    static renderNodes(nodes: Point[]) {
        ctx.beginPath();
		ctx.save()
		ctx.lineWidth = 2;
		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'red';
		const r = 5;

		nodes.forEach(node => {
			node = node.translate(offset, offset);
			ctx.moveTo(node.x + r, node.y);
			ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
		})
		ctx.fill();
		ctx.stroke();
		ctx.restore()
    }

    static renderSurrounding() {
        ctx.beginPath();
        ctx.moveTo(0, offset);
        ctx.lineTo(offset, offset);
        ctx.lineTo(offset + 50, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(canvas.width, offset);
        ctx.lineTo(canvas.width - offset, offset);
        ctx.lineTo(canvas.width - offset - 50, canvas.height);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fill();
    }

    static renderLoad(point: Point) {
        // Render.angle += 1/50;

        ctx.save()
        ctx.translate(50, 0);
        ctx.translate(point.x +50, point.y+50);
        ctx.rotate(Render.angle());
        ctx.translate(-point.x -50, -point.y-50);
        
        ctx.drawImage(Images.ball, point.x, point.y);
        
        ctx.restore();
    }
}



// audio.stop
// window.addEventListener('keyup', e => {
//     audio.setAttribute('autoplay', 'true');
//     console.log(audio);
// })

// class Animation {

// 	private fps: number;
// 	private time: number;
// 	private currFrame: number = 0;
// 	private shape: Point[];

// 	constructor (fps: number, time: number) {
// 		this.fps = fps;
// 		this.time = time;
// 	} 

// 	private sleep(ms: number) {
// 		return new Promise(resolve => setTimeout(resolve, ms));
// 	}

// 	public async animate () {
        
// 		const frameLimit = this.fps * this.time;

// 		// draw here
		
// 		// Frame.drawFrame(this.currFrame/frameLimit, shape);
// 		// wait for next frame
// 		await this.sleep(1000 / this.fps);
// 		this.currFrame++;

// 		// run this method until reach frame limit
// 		if(this.currFrame < frameLimit) {
// 			this.animate()
// 		};
// 	}
// }