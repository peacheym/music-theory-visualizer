// Use this as a validation for connecting d3 components.

data = ["It works"];

svgContainer
  .selectAll("network")
  .data(data)
  .enter()
  .append("text")
  .attr("x", 50)
  .attr("y", 50)
  .text(data);
