import { Radian, Vector } from '../types';
import { line, radToVec2 } from './lib';

export class Camera {
  ctx: CanvasRenderingContext2D;
  position: Vector;
  direction: Radian;
  fov: Radian;

  constructor(
    ctx: CanvasRenderingContext2D,
    position: Vector = { x: 0, y: 0 },
    direction: Radian = 0,
    fov: Radian = Math.PI / 5
  ) {
    this.position = position;
    this.direction = direction;
    this.fov = fov;
    this.ctx = ctx;
  }

  draw() {
    line(
      this.ctx,
      this.position,
      radToVec2(this.direction - this.fov / 2),
      800
    );
    line(
      this.ctx,
      this.position,
      radToVec2(this.direction + this.fov / 2),
      800
    );
  }
}
