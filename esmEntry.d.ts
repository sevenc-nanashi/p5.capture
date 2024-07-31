import type p5 from "p5";

declare module "p5.capture" {
  export class P5Capture {
    initialize(p5: p5): void;
    postDraw(): void;
  }

  export function registerP5Capture(p5: p5): void;
}
