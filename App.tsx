import * as React from 'react';
import ExampleOne from './examples/exampleOne';
import './style.css';

export default function App() {
  const ref = React.useRef();
  return (
    <div>
      <h1>Raytracing examples</h1>
      <p>Here are some examples about the RayTracing topics.</p>
      <ExampleOne />
    </div>
  );
}
