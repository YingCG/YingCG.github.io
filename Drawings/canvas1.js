window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  // console.log(ctx);
  ctx.lineWidth = 50;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#f09292ff";
  ctx.fillStyle = "#38558aff";

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.4;
    }
    draw(context) {
      context.fillRect(50, 50, this.canvasWidth, this.canvasHeight);
      context.save();
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
      context.scale(1, 1);
      context.rotate(0.8);

      context.restore();
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(this.size, 200);
      context.stroke();
    }
  }

  const fractal01 = new Fractal(canvas.width, canvas.height);
  fractal01.draw(ctx);

  class Particle {}

  class Rain {}
});
