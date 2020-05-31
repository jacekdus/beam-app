export default class Point {
    readonly x: number;
    readonly y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public translate(x: number, y:number) {
        return new Point(this.x + x, this.y + y);
    }
}