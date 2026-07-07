const canvas = d3.select(".canvas");

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

// gibbous

const defs = svg.append("defs");
const mask = defs.append("mask").attr("id", "gibbousMask");

// white = visible
mask
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "#070f2b");

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
  .attr("fill", "#070f2b");

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
  .attr("fill", "#070f2b");

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
  .attr("fill", "#070f2b");
