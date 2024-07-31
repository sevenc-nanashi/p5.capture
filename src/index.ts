import { P5Capture } from "@/p5.capture";

const p5Capture = new P5Capture();

if (typeof window.p5 !== "undefined") {
  p5.prototype.registerMethod("init", function (this: any) {
    const p5 = this;
    p5Capture.initialize.call(p5Capture, p5);
  });
  p5.prototype.registerMethod("post", p5Capture.postDraw.bind(p5Capture));
}

const registerP5Capture = (p5Instance: any) => {
  p5Capture.initialize.call(p5Capture, p5Instance);
  p5Instance.registerMethod("post", p5Capture.postDraw.bind(p5Capture));
}

Object.assign(window, { P5Capture, registerP5Capture });
