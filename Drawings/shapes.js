// const shapes1 = document.querySelectorAll("shapes-canvas");
// console.log(shapes1);

const canvas = d3.select(".shapescanvas");
const svg = canvas
  .append("svg")
  .attr("height", "calc(100vh - 90px)")
  .attr("width", "100%");

// append shapes to svg container
// svg
//   .append("rect")
//   .attr("width", 200)
//   .attr("height", 200)
//   .attr("fill", "#5A7863")
//   .attr("x", 50)
//   .attr("y", 50);

// svg
//   .append("circle")
//   .attr("r", 50)
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("fill", "#FCF9EA");

// svg
//   .append("line")
//   .attr("x1", 300)
//   .attr("x2", 500)
//   .attr("y1", 50)
//   .attr("y2", 220)
//   .attr("stroke", "#C5D89D")
//   .attr("stroke-width", 5);

// svg
//   .append("text")
//   .attr("x", 50)
//   .attr("x", 20)
//   .attr("y", 200)
//   .attr("fill", "#005461")
//   .text("kia ora");
