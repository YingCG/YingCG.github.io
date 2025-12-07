window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas3");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#9169ffff";
  // console.log(ctx);
  const fractal03 = new FractalPattern(canvas.width, canvas.height);
  fractal03.draw(ctx);
});

class FractalPattern {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = canvasWidth * 0.3;
    this.sides = 5;
    this.maxLevel = 3;
  }

  draw(context) {
    context.save();
    context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    context.scale(1, 1);
    context.rotate(0);
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
    context.rotate(1);
    this.#drawLine(context, level + 1);
    context.restore();
  }
}
