// // Daniel Shiffman
// // http://codingtra.in
// // http://patreon.com/codingtrain
// // Fractal Spirograph
// // Video: https://youtu.be/0dwJ-bkJwDI

// import React from "react";
// import { ReactP5Wrapper } from "@p5-wrapper/react";

// var k = -4;
// let resolution = 50;

// function Orbital (x_, y_, r_, n, p) {
//     this.x = x_;
//     this.y = y_;
//     this.r = r_;
//     this.parent = p;
//     this.child = null;
//     this.speed = p5.radians(p5.pow(k, n - 1)) / resolution;
//     this.angle = -p5.PI / 2;

//     this.addChild = function() {
//         var newr = this.r / 3.0;
//         var newx = this.x + this.r + newr;
//         var newy = this.y;
//         this.child = new Orbital(newx, newy, newr, n + 1, this);
//         return this.child;
//     };

//     this.update = function() {
//         var parent = this.parent;
//         if (parent != null) {
//             this.angle += this.speed;
//             var rsum = this.r + parent.r;
//             this.x = parent.x + rsum * p5.cos(this.angle);
//             this.y = parent.y + rsum * p5.sin(this.angle);
//         }
//     };

//     this.show = function() {
//         p5.stroke(255, 100);
//         p5.strokeWeight(1);
//         p5.noFill();
//         p5.ellipse(this.x, this.y, this.r * 2, this.r * 2);
//     };
// }

// export default Orbital;