window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#FF6969";
  // console.log(ctx);
  const fractal02 = new Fractal(canvas.width, canvas.height);
  fractal02.draw(ctx);
});

class Fractal {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = canvasWidth * 0.2;
    this.sides = 5;
    this.maxLevel = 5;
  }

  draw(context) {
    context.save();
    context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    context.scale(1, 1);
    context.rotate(0);
    // this.#drawLine(context);
    for (let i = 0; i < this.sides; i++) {
      this.#drawLine(context, 0);
      context.rotate((Math.PI * 2) / this.sides);
    }
    context.restore();
  }

  #drawLine(context, level) {
    if (level > this.maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.size, 0);
    context.stroke();
    context.save();
    context.rotate(0.3);
    context.translate(this.size, 0);
    context.scale(0.6, 0.6);
    this.#drawLine(context, level + 1);
    context.restore();
  }
}
