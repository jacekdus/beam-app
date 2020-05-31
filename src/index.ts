import './style.scss';
import { Controller } from './controller';

new Controller();

// document.getElementById('playBtn').addEventListener('click', ctrl.start)
// document.getElementById('stopBtn').addEventListener('click', ctrl.stop)
// document.getElementById('pauseBtn').addEventListener('click', ctrl.pause)

// import Beam from './model/beam';
// import Point from './model/point';
// import Images from './images';
// import { vw, vh } from './utility';
// let c = 0;


// function draw(shape: Point[]) {

// 	canvas.width = vw(90);
// 	canvas.height = vh(50);

// 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// 	// Left support
// 	ctx.beginPath();
// 	ctx.moveTo(margin, margin);
// 	ctx.lineTo(margin + 25, margin + 50);
// 	ctx.lineTo(margin - 25, margin + 50);
// 	ctx.closePath();
// 	ctx.stroke();

// 	// Right support
// 	ctx.beginPath();
// 	ctx.moveTo(canvas.width - margin, margin)
// 	ctx.lineTo(canvas.width - margin + 25, margin + 50)
// 	ctx.lineTo(canvas.width - margin - 25, margin + 50)
// 	ctx.closePath();
// 	ctx.stroke();
	
// 	// Beam
// 	ctx.beginPath();
// 	ctx.moveTo(margin, margin);
// 	shape.forEach(point => {
// 		point = point.translate(margin, margin);
// 		ctx.lineTo(point.x, point.y);
// 	})
// 	ctx.stroke();

// 	const img = Images.ball;
// 	ctx.moveTo(c, 0);
// 	ctx.drawImage(img, c, 0);
// 	ctx.save();
// 	ctx.rotate(c * Math.PI / 180);
// 	ctx.restore();
// 	// console.log(c++);
	
// 	// Points
// 	ctx.beginPath();
// 	// ctx.save();
// 	ctx.lineWidth = 2;
// 	ctx.fillStyle = 'white';
// 	ctx.strokeStyle = 'red';
// 	const r = 5;
// 	shape.forEach(point => {
// 		point = point.translate(margin, margin);
// 		ctx.moveTo(point.x + r, point.y);
// 		ctx.arc(point.x, point.y, r, 0, 2 * Math.PI);
// 	})
	
// 	ctx.fill();
// 	ctx.stroke();
// 	ctx.restore();
// }



