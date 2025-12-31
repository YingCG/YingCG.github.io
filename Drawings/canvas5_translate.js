window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas5");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  console.log(ctx);

  const snowflake1 = new Snowflake({
    height: canvas.height,
    width: canvas.width,
    color: "#ff0000",
    strokeColor: "#ffff00",
    background: "#5A7ACD",
  });
  snowflake1.draw(ctx);
});

class Snowflake {
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
      this.properties.height / 2
    );

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(this.properties.width / 2, this.properties.height / 2);
    context.strokeStyle = this.properties.strokeColor;
    context.stroke();
    context.restore();
  }
}
