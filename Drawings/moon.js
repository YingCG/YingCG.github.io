const canvas = d3.select(".shapescanvas");
const svg = canvas
  .append("svg")
  .attr("width", "250px")
  .attr("height", "auto")
  .attr("object-fit", "contain");

// full moon

svg
  .append("circle")
  .attr("r", 20)
  .attr("cx", "15%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");

// svg
//   .append("text")
//   .text("Full Moon")
//   .attr("x", "1%")
//   .attr("y", 150)
//   .style("fill", "white")
//   .style("font-size", "8px");

// gibbous

const defs = svg.append("defs");
const mask = defs.append("mask").attr("id", "gibbousMask");

// white = visible
mask
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "#222222");

// black = hidden (cuts the moon)
mask
  .append("circle")
  .attr("r", 20)
  .attr("cx", "30%") // offset creates gibbous shape
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");

svg
  .append("circle")
  .attr("r", 20)
  .attr("cx", "35%") // controls gibbous amount
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A")
  .attr("mask", "url(#gibbousMask)");
// svg
//   .append("text")
//   .text("Gibbous Moon")
//   .attr("x", "20%")
//   .attr("y", 150)
//   .style("fill", "white")
//   .style("font-size", "8px");

// # half moon
svg
  .append("circle")
  .attr("r", 18)
  .attr("cx", "55%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("rect")
  .attr("width", 18)
  .attr("height", "50%")
  .attr("x", "55%")
  .attr("y", "34%")
  .attr("fill", "#222222");
// svg
//   .append("text")
//   .text("Half Moon")
//   .attr("x", "50%")
//   .attr("y", 150)
//   .style("fill", "white")
//   .style("font-size", "8px");

//Waxing Crescent

svg
  .append("circle")
  .attr("r", 20)
  .attr("cx", "70%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("circle")
  .attr("r", 17)
  .attr("cx", "68%")
  .attr("cy", "50%")
  .attr("fill", "#222222");
// svg
//   .append("text")
//   .text("Crescent Moon")
//   .attr("x", "58.5%")
//   .attr("y", 150)
//   .style("fill", "white")
//   .style("font-size", "8px");

//New Moon
svg
  .append("circle")
  .attr("r", 20)
  .attr("cx", "90%")
  .attr("cy", "50%")
  .attr("fill", "#F3CF7A");
svg
  .append("circle")
  .attr("r", 18)
  .attr("cx", "90%")
  .attr("cy", "50%")
  .attr("fill", "#222222");
// svg
//   .append("text")
//   .text("New Moon")
//   .attr("x", "85%")
//   .attr("y", 150)
//   .style("fill", "white")
//   .style("font-size", "8px");
