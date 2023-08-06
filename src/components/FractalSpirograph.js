import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalSpirograph.css";
//import Orbital from "./Orbital";

let path = [];
let sun;
let end;
let resolution = 8;
let k = 8;

const Sketch = p5 => {

  function Orbital (x_, y_, r_, n, p) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
    this.parent = p;
    this.child = null;
    this.speed = p5.radians(p5.pow(k, n - 1)) / resolution;
    this.angle = -p5.PI / 2;

    this.addChild = function() {
        var newr = this.r / 3.0;
        var newx = this.x + this.r + newr;
        var newy = this.y;
        this.child = new Orbital(newx, newy, newr, n + 1, this);
        return this.child;
    };

    this.update = function() {
        var parent = this.parent;
        if (parent != null) {
            this.angle += this.speed;
            var rsum = this.r + parent.r;
            this.x = parent.x + rsum * p5.cos(this.angle);
            this.y = parent.y + rsum * p5.sin(this.angle);
        }
    };

    this.show = function() {
        p5.stroke(255, 100);
        p5.strokeWeight(1);
        p5.noFill();
        p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
}


  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    sun = new Orbital(p5.width / 2, p5.height / 2, p5.width / 4, 0);
    var next = sun;
    for (var i = 0; i < 10; i++) {
        next = next.addChild();
    }
    end = next;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();

    for (var i = 0; i < resolution; i++) {
        var next = sun;
        while (next != null) {
            next.update();
            next = next.child;
        }
        path.push(p5.createVector(end.x, end.y));
    }

    var next = sun;
    while (next != null) {
        next.show();
        next = next.child;
    }

    p5.beginShape();
    p5.stroke(255, 0, 255);
    p5.noFill();
    for (var pos of path) {
        p5.vertex(pos.x, pos.y);
    }
    p5.endShape();
  };
};

const FractalSpirograph = () => (
  <div id="fractal-spirograph">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalSpirograph;