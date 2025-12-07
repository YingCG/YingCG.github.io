window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  // console.log(ctx);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#38558aff";

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.3;
    }
    draw(context) {
      context.save();
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
      context.scale(1, 1);
      context.rotate(0);
      for (let i = 0; i < 3; i++) {
        this.#drawLine(context);
        context.rotate((Math.PI * 2) / 3);
      }
      this.#drawLine(context);
      context.restore();
    }

    // private method
    #drawLine(context) {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(this.size, 0);
      context.stroke();
    }
  }

  const fractal01 = new Fractal(canvas.width, canvas.height);
  fractal01.draw(ctx);

  class Particle {}

  class Rain {}
});
