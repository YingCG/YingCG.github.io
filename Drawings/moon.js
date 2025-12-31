const canvas = d3.select(".shapescanvas");
const svg = canvas.append("svg").attr("height", 250).attr("width", "100%");

// full moon

svg
  .append("circle")
  .attr("r", 40)
  .attr("cx", "30%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");

svg
  .append("text")
  .text("Full Moon")
  .attr("x", "30%")
  .attr("y", 250)
  .style("fill", "white")
  .style("font-size", "14px");

// gibbous
const leftcircle = svg
  .append("ellipse")
  .attr("rx", 40)
  .attr("ry", 30)
  .attr("cx", "40%")
  .attr("cy", "50%")
  .attr("fill", "#222222");

const rightcircle = svg
  .append("ellipse")
  .attr("rx", 30)
  .attr("ry", 40)
  .attr("cx", "40%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");

// # half moon
svg
  .append("circle")
  .attr("r", 38)
  .attr("cx", "50%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("rect")
  .attr("width", 40)
  .attr("height", "50%")
  .attr("x", "50%")
  .attr("y", "34%")
  .attr("fill", "#222222");

//Waxing Crescent

svg
  .append("circle")
  .attr("r", 40)
  .attr("cx", "60%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("circle")
  .attr("r", 30)
  .attr("cx", "59%")
  .attr("cy", "50%")
  .attr("fill", "#222222");

//New Moon
svg
  .append("circle")
  .attr("r", 40)
  .attr("cx", "70%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("circle")
  .attr("r", 38)
  .attr("cx", "70%")
  .attr("cy", "50%")
  .attr("fill", "#222222");
