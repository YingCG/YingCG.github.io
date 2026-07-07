window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 250;
  canvas.height = 250;
  // console.log(ctx);

  const pattern = new Crumb({
    height: canvas.height,
    width: canvas.width,
    color: "#ff0000",
    strokeColor: "#ffff00",
    background: "#5A7ACD",
  });
  pattern.draw(ctx);
});

class Crumb {
  constructor(properties) {
    this.properties = properties;
  }

  draw(context) {
    context.save();

    context.translate(this.properties.width / 2, this.properties.height / 2);
    context.rotate(0.8);
    context.fillStyle = this.properties.background;
    context.fillRect(0, 0, this.properties.width, this.properties.height);
    context.restore();

    context.translate(12, 12);
    context.rotate(0.2);
    context.fillStyle = this.properties.color;
    context.fillRect(
      0,
      0,
      this.properties.width / 2,
      this.properties.height / 2,
    );

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(this.properties.width / 2, this.properties.height / 2);
    context.strokeStyle = this.properties.strokeColor;
    context.stroke();
    context.restore();
  }
}
