function generateChart6() {
  var text6 = svgContainer
    .append("svg")
    .attr("width", 220)
    .attr("y", 1000)
    .attr("x", 835)
    .attr("height", 250);
  text6
    .append("text")
    .attr("y", 45)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("OUTLOOK");
  text6
    .append("text")
    .attr("y", 110)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("One year on, the");
  text6
    .append("text")
    .attr("y", 130)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("public is still divided");
  text6
    .append("text")
    .attr("y", 150)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("on when things will");
  text6
    .append("text")
    .attr("y", 170)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("return to normal.");
}
