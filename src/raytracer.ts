import { Radian, Vector } from '../types';
import { Actor } from './actor';
import { circle, distance, hit, line, pointAtDir, radToVec2 } from './lib';

export class RayTracer {
  maxTreshold = 600;
  hitTreshold = 1;
  maxSteps = 100;

  constructor(
    maxTreshold: number = 600,
    hitTreshold: number = 1,
    maxSteps: number = 100
  ) {
    this.maxTreshold = maxTreshold;
    this.hitTreshold = hitTreshold;
    this.maxSteps = maxSteps;
  }

  traceOne(
    ctx: CanvasRenderingContext2D,
    startPos: Vector,
    direction: Radian,
    actor: Actor
  ) {
    let lastDistance = this.maxTreshold;
    let position = { ...startPos };
    let smallestDistancePoint = null;
    let isHit = false;
    for (let i = 0; i < this.maxSteps; i++) {
      const dist = distance(actor.position, position) - actor.radius;
      const p = pointAtDir(position, radToVec2(direction), dist);
      if (dist <= this.maxTreshold && dist > 0) {
        line(ctx, position, radToVec2(direction), dist);
        circle(ctx, position, dist);
        circle(ctx, p, 4);
        position = p;
        if (lastDistance > dist) {
          lastDistance = dist;
          smallestDistancePoint = p;
        }
        if (dist < this.hitTreshold) isHit = true;
      }
    }
    if (isHit) hit(ctx, smallestDistancePoint);
  }
}
