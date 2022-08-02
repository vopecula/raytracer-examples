import * as React from 'react';
import { Scene } from '../src/scene';

export default function ExampleOne() {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  const [scene, setScene] = React.useState<Scene | null>(null);

  const handleRender = () => {
    scene.render();
  };

  React.useEffect(() => {
    if (ref.current && !scene)
      setScene(new Scene(ref.current.getContext('2d')));
  }, [ref, scene]);

  return (
    <div>
      <h1>Example One</h1>
      <p>Camera, Target circle and Rays</p>
      <button onClick={() => handleRender()}>Render</button>
      <canvas
        ref={ref}
        width="800"
        height="600"
        style={{ border: '4px solid lightgray' }}
      ></canvas>
    </div>
  );
}
