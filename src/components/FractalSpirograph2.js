import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalSpirograph2.css";
//import Orbital from "./Orbital";

let r1 = 50;
let r2 = 50;

let a1 = 0;
let a2 = 0;

var a1Inc;
var a2Inc;

var prevX;
var prevY;

const Sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    //p5.background(30);
    p5.angleMode(p5.DEGREES);
    
    r1 = p5.random(50, 100);
    r2 = p5.random(50, 100);

    a1Inc = p5.random(0.1, 5);
    a2Inc = p5.random(0.1, 5);
  };

  p5.draw = () => {
    //p5.clear();
    p5.translate(p5.width / 2, p5.height / 2);

    for (var i = 0; i < 100; i++)
    {
        var x1 = r1 * p5.cos(a1);
        var y1 = r1 * p5.sin(a1);

        var x2 = x1 + r2 * p5.cos(a2);
        var y2 = y1 + r2 * p5.sin(a2);

        var r = p5.map(p5.sin(p5.frameCount), -1, 1, 100, 200);
        var g = p5.map(p5.cos(p5.frameCount), -1, 1, 100, 200);
        var b = p5.map(p5.sin(p5.frameCount), -1, 1, 200, 100);

        p5.stroke(r, g, b);

        p5.line(prevX, prevY, x2, y2);

        prevX = x2;
        prevY = y2;

        a1 += a1Inc;
        a2 += a2Inc;
    }
  };
};

const FractalSpirograph = () => (
  <div id="fractal-spirograph2">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalSpirograph;