import { Vector } from '../types';

export class Actor {
  position: Vector;
  radius: number;

  constructor(position: Vector, radius: number) {
    this.position = position;
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
}
