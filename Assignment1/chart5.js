function generateChart5() {
    var text5 = svgContainer
      .append("svg")
      .attr("width", 540)
      .attr("height", 250)
      .attr("y", 1000)
      .attr("x", 30)
      .style("border", "1px black solid");
  
    text5
      .append("text")
      .attr("y", 45)
      .attr("x", 13)
      .style("font-weight", "bold")
      .style("font-size", "26px")
      .attr("fill", "white")
      .text("FEELING OF");
    text5
      .append("text")
      .attr("y", 70)
      .attr("x", 13)
      .style("font-weight", "bold")
      .style("font-size", "26px")
      .attr("fill", "white")
      .text("CONTROL");
    text5
      .append("text")
      .attr("y", 110)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("The proportion saying");
    text5
      .append("text")
      .attr("y", 130)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("that things feel out of");
    text5
      .append("text")
      .attr("y", 150)
      .attr("x", 13)
      .style("font-size", "16px")
      .attr("fill", "white")
      .text("control is falling fast.");

  }
  