window.addEventListener("load", function () {
  const canvas = this.document.getElementById("square-circle");
  const ctx = canvas.getContext("2d");

  // 1. Define your desired display size in CSS pixels
  const displayWidth = 250;
  const displayHeight = 225;

  // 2. Get the device pixel ratio (usually 2 on modern screens)
  const dpr = window.devicePixelRatio || 1;

  // 3. Scale the canvas's internal drawing buffer to match the screen density
  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;

  // 4. Force the element's visual size back to your desired dimensions
  canvas.style.width = displayWidth + "px";
  canvas.style.height = displayHeight + "px";

  // 5. Scale all future drawing context operations by the pixel ratio
  ctx.scale(dpr, dpr);

  // 6. Draw your shapes normally using your original coordinates
  ctx.fillStyle = "#285A48";
  ctx.fillRect(30, 15, 200, 180);

  ctx.beginPath();
  ctx.fillStyle = "#BDA6CE";
  ctx.arc(120, 80, 80, 20, Math.PI * 2);
  ctx.fill();
});
