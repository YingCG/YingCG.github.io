window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas7");
  const ctx = canvas.getContext("2d");

  canvas.width = 250;
  canvas.height = 250;

  const snowflake = new Snowflake({
    height: canvas.height,
    width: canvas.width,
    storeColor: "#7cb344",
    lineWidth: 10,
    lineCap: "round",
    size: canvas.width * 0.2,
    sides: 6,
    maxLevel: 3,
    scale: 0.7,
    spread: 0.5,
    branches: 2,
  });

  snowflake.draw(ctx);
});

class Snowflake {
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
    const { maxLevel, size, scale, spread, branches } = this.properties;

    if (level > maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(size, 0);
    context.stroke();

    for (let i = 0; i < branches; i++) {
      context.save();
      context.translate(size - (size / branches) * i, 0);
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
}
