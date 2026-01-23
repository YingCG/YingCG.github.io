window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas5");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;

  const tree = new TreeFractal({
    width: canvas.width,
    height: canvas.height,
    lineWidth: 10,
    storeColor: "#3BC1A8",
    lineCap: "round",
    size: canvas.width * 0.2,
    sides: 5,
    maxLevel: 5,
  });
  tree.draw(ctx);
});

class TreeFractal {
  constructor(properties) {
    this.properties = properties;
  }

  draw(context) {
    context.save();
    context.translate(this.properties.width / 2, this.properties.height / 2);
    context.scale(1, 1);
    context.lineWidth = this.properties.lineWidth;
    context.strokeStyle = this.properties.storeColor;
    context.lineCap = this.properties.lineCap;
    for (let i = 0; i < this.properties.sides; i++) {
      this.#drawLine(context, 0);
      context.rotate((Math.PI * 2) / this.properties.sides);
    }
    context.restore();
  }

  #drawLine(context, level) {
    if (level > this.properties.maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.properties.size, 0);
    context.stroke();
    context.save();

    context.translate(this.properties.size, 0);
    context.scale(0.7, 0.7);
    context.rotate(0.9);
    this.#drawLine(context, level + 1);
    context.restore();
  }
}
