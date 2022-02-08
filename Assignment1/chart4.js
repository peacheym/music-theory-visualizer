function generateChart4() {
    var text4 = svgContainer
      .append("svg")
      .attr("width", 220)
      .attr("y", 645)
      .attr("x", 835)
      .attr("height", 250);
    text4
      .append("text")
      .attr("y", 45)
      .attr("x", 13)
      .style("font-weight", "bold")
      .style("font-size", "26px")
      .attr("fill", "white")
      .text("THREAT");
    text4
      .append("text")
      .attr("y", 80)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("The perceived threat");
    text4
      .append("text")
      .attr("y", 100)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("of the virus has");
    text4
      .append("text")
      .attr("y", 120)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("flucuated with the");
    text4
      .append("text")
      .attr("y", 140)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("lockdowns - it is now");
    text4
      .append("text")
      .attr("y", 160)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("finally decreasing");

  }
  