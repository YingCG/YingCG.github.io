window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas6");
  const ctx = canvas.getContext("2d");

  canvas.width = 300;
  canvas.height = 300;

  const fractalTree = new FractalTree({
    height: canvas.height,
    width: canvas.width,
    storeColor: "#0C7779",
    lineWidth: 20,
    lineCap: "round",
    size: canvas.width * 0.2,
    sides: 5,
    maxLevel: 7,
    scale: 0.7,
    spread: 0.5,
  });

  fractalTree.draw(ctx);
});

class FractalTree {
  constructor(properties) {
    this.properties = properties;
  }

  draw(context) {
    // draw a line
    context.save();

    context.translate(this.properties.height / 2, this.properties.width / 2);
    context.scale(0.7, 0.7);
    context.lineWidth = this.properties.lineWidth;
    context.lineCap = this.properties.lineCap;
    context.rotate(0);
    context.strokeStyle = this.properties.storeColor;

    [...new Array(this.properties.sides)].forEach(() => {
      this.#drawLine(context, 0);
      context.rotate((Math.PI * 2) / this.properties.sides);
    });

    // for (let i = 0; i < this.properties.sides; i++) {
    //   this.#drawLine(context, 0);
    //   context.rotate((Math.PI * 2) / this.properties.sides);
    // }

    context.restore();
  }

  #drawLine(context, level) {
    const { maxLevel, size, scale, spread } = this.properties;

    if (level > maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(size, 0);
    context.stroke();

    context.save();
    context.translate(size, 0);
    context.scale(scale, scale);

    context.save();
    context.rotate(spread);
    this.#drawLine(context, level + 1);
    context.restore();

    context.save();
    context.rotate(-spread);
    this.#drawLine(context, level + 1);
    context.restore();

    context.restore();
  }
}
