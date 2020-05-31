import {vw, vh} from '../utility';
import Point from './point';

export default class Frame {

	static drawFrame (step: number, shape: Point[]) {
		canvas.width = vw(90);
		canvas.height = vh(50);
	
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		Frame.drawBeam(step, shape);
		Frame.drawLeftSupport();
		Frame.drawRightSupport();
		// Frame.drawNodes(step);
		// Frame.drawBall(step);
	}

	private static drawBeam (step: number, shape: Point[]) {
		ctx.beginPath();
		ctx.moveTo(margin, margin);
		shape.forEach(point => {
			point = point.translate(margin, margin);
			ctx.lineTo(point.x, point.y);
		})
		ctx.stroke();
	}

	private static drawNodes (step: number, shape: Point[]) {
		// ctx.beginPath();
		// ctx.save()
		// ctx.lineWidth = 2;
		// ctx.fillStyle = 'white';
		// ctx.strokeStyle = 'red';
		// const r = 5;
		// beam.calcShape(step);
		// console.log(beam.loadPosition);
		// beam.scale(canvas.width - 2*margin, 10000);
		// const shape = beam.shape;
		// let load = beam.loadPosition;
		
		// load = load.translate(margin, margin);
		// ctx.moveTo(load.x + r, load.y);
		// ctx.arc(load.x, load.y, r, 0, 2 * Math.PI);
		// console.log(load);
		// shape.forEach(point => {
		// 	point = point.translate(margin, margin);
		// 	ctx.moveTo(point.x + r, point.y);
		// 	ctx.arc(point.x, point.y, r, 0, 2 * Math.PI);
		// })
		// ctx.fill();
		// ctx.stroke();
		// ctx.restore()
	}

	private static drawLeftSupport () {
		ctx.beginPath();
		ctx.moveTo(margin, margin);
		ctx.lineTo(margin + 25, margin + 50);
		ctx.lineTo(margin - 25, margin + 50);
		ctx.closePath();
		ctx.stroke();
	}

	private static drawRightSupport () {
		ctx.beginPath();
		ctx.moveTo(canvas.width - margin, margin)
		ctx.lineTo(canvas.width - margin + 25, margin + 50)
		ctx.lineTo(canvas.width - margin - 25, margin + 50)
		ctx.closePath();
		ctx.stroke();
	}

	private static drawBall (step: number) {

	}
}