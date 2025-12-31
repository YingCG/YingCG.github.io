window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas0");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;

  //const line1 = new LineAcrossCanvasDependent();
  const line1 = new LineAcrossUsingProperties({
    height: canvas.height,
    width: canvas.width,
    color: "#0000ff",
  });

  line1.draw(ctx);
});

class LineAcrossUsingProperties {
  constructor(properties) {
    this.properties = properties;
  }

  draw(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.strokeStyle = this.properties.color;
    context.lineTo(this.properties.width, this.properties.height);
    context.stroke();
  }
}

class LineAcrossCanvas {
  constructor(canvas) {
    this.canvas = canvas;
  }

  draw(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.strokeStyle = "#00ff00";
    context.lineTo(this.canvas.width, this.canvas.height);
    context.stroke();
  }
}

// class LineAcrossCanvasDependent {
//   draw(context) {
//     context.beginPath();
//     context.moveTo(0, 0);
//     context.strokeStyle = "#ff0000";
//     context.lineTo(canvas.width, canvas.height);
//     context.stroke();
//   }
// }

class LineAcross {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.canvasWidth, this.canvasHeight);
    context.stroke();
  }
}
