function generateChart2() {
  var text2 = svgContainer
    .append("svg")
    .attr("width", 220)
    .attr("y", 300)
    .attr("x", 835)
    .attr("height", 250);
  text2
    .append("text")
    .attr("y", 45)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("HOME TESTING");
  text2
    .append("text")
    .attr("y", 70)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("STUDY");
  text2
    .append("text")
    .attr("y", 110)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("The largest testing");
  text2
    .append("text")
    .attr("y", 130)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("programme for");
  text2
    .append("text")
    .attr("y", 150)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("coronavirus shows a");
  text2
    .append("text")
    .attr("y", 170)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("decline in prevalence");
  text2
    .append("text")
    .attr("y", 190)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("of the virus");
  text2
    .append("text")
    .attr("y", 210)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("Since June 2020");

  var chart2 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 300)
    .attr("x", 1080)
    .style("border", "1px black solid");
  chart2.append("text").attr("y", 50).text("Chart 2");
}
