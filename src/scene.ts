import { RenderView } from '../types';
import { Actor } from './actor';
import { Camera } from './camera';
import { RayTracer } from './raytracer';

export class Scene {
  camera: Camera;
  rayTracer: RayTracer;
  actor: Actor;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.camera = new Camera(ctx, { x: 100, y: 300 }, 0, Math.PI / 11);
    this.rayTracer = new RayTracer();
    this.actor = new Actor({ x: 600, y: 300 }, 50);
    this.ctx = ctx;
  }

  render() {
    const _cameraRays = 51;
    const renderView: RenderView = RenderView.All;

    if (renderView === RenderView.All) {
      this.actor.draw(this.ctx);
      this.camera.draw();
    }

    const animatedRaytracing = (i = 0) => {
      setTimeout(() => {
        this.rayTracer.traceOne(
          this.ctx,
          this.camera.position,
          this.camera.direction +
            (this.camera.fov / 2 - (this.camera.fov / _cameraRays) * i),
          this.actor
        );
        if (i < _cameraRays) animatedRaytracing(i + 1);
      }, 25);
    };

    animatedRaytracing();
  }
}
