import Point from './point';

/** @class Represents a mechanical beam model loaded with concentrated force */
export default class Beam {
  private _shape: Point[] = [];
  private _loadPosition: Point;
  private _parP: number;
  private _parL: number;
  private _parE: number;
  private _parI: number;
  private _parN: number;
  private _absResults: boolean;

/**
 * @constructor
 * @param {number} parP - concentrated force P [kN]
 * @param {number} parL - beam length [m]
 * @param {number} parE - Young's modulus E [kPa]
 * @param {number} parI - moment of inertia I [m4]
 * @param {number} parN - the number of elements into which the beam is divided N
 * @param {boolean} absResults - if parameter is set to true, results will have absolute and not relative dimensions 
 */
  constructor (parP: number, parL: number, parE: number, parI: number, parN: number, absResults = false) {
    this._parP = parP;
    this._parL = parL;
    this._parE = parE;
    this._parI = parI;
    this._parN = parN;
    this._absResults = absResults;
  }

  /** Returs current shape of the beam or an empty array if shape hasn't been calculated yet */
  public get shape () {
    return !this._absResults ? this._shape : this._shape.map(point => {
      return new Point(point.x * this._parL, point.y * this._parL);
    }, this);
  }

  public get loadPosition(): Point {
    return !this._absResults ? this._loadPosition : new Point(this._loadPosition.x * this._parL, this._loadPosition.y * this._parL);
  }

  /**
   * Calculates a new shape of the beam loaded by concentrated force
   * @param a - number beetwen 0 and beam length which represents position of the load relative to the beginning of the beam
   */
  public calcShape (a: number) {
    this._shape = [];
    a *= this._parL;
    const b = this._parL - a;
    const presets = {
      factor1: this._parP / (6 * this._parL * this._parL * this._parE * this._parI),
      factor2: a * (a + 2 * b),
      factor3: b * (b + 2 * a)
    }

    for(let i = 0; i <= this._parN; i++){
      const z = i / this._parN;
      this._loadPosition = this.calcPoint(a, a / this._parL, presets);
      this._shape.push(this.calcPoint(a, z, presets))
    }
  }
  
  public scale(scaleX: number, scaleY: number) {
    this._shape = this._shape.map(point => {
      return new Point(point.x * scaleX, point.y * scaleY)
    })
    this._loadPosition = new Point (this._loadPosition.x * scaleX, this._loadPosition.y * scaleY);
  }

  public calcPoint (a: number, z: number, presets: {factor1:number, factor2:number, factor3:number}) {
    const {factor1, factor2, factor3} = presets;
    const b = this._parL - a;
    z *= this._parL;
    if(z <= a){
      return new Point(z / this._parL, (factor2 - z * z) * factor1 * b * z);
    } else {
      const z2 = this._parL - z;
      return new Point(z / this._parL, (factor3 - z2 * z2) * factor1 * a * z2);
    }
  }
}

const audio = document.getElementsByTagName('audio');
console.log(audio);