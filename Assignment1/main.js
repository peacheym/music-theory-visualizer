// D3 Code here

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight * 1.5)
  .style("border", "1px salmon solid");

function generateHeader() {
  var headerText = svgContainer
    .append("text")
    .attr("y", 90)
    .attr("x", 30)
    .style("font-size", "38px")
    .style("fill", "white")
    .text("CORONAVIRUS - ONE YEAR ON");
  var headerSubText = svgContainer
    .append("text")
    .attr("y", 140)
    .attr("x", 30)
    .style("font-size", "48px")
    .style("fill", "white")
    .style("font-weight", "bold")
    .text("TRACKING UK PUBLIC PERCEPTION");

  var brandName = svgContainer
    .append("text")
    .attr("y", 90)
    .attr("x", 1300)
    .style("font-size", "38px")
    .style("fill", "white")
    .style("font-weight", "bold")
    .text("Ipsos MORI");

  var headerP1 = svgContainer
    .append("text")
    .attr("y", 190)
    .attr("x", 30)
    .style("font-size", "20px")
    .style("fill", "white")
    .text(
      "A snapshot of Ipsos MORI's research and analysis related to the COVID-19 coronavirus pandemic, one year after the first UK lockdown was announced."
    );
  var headerDate = svgContainer
    .append("text")
    .attr("y", 220)
    .attr("x", 30)
    .style("font-size", "20px")
    .style("fill", "white")
    .style("font-weight", "bold")
    .text("March 25th, 2021");
  var headerP2 = svgContainer
    .append("text")
    .attr("y", 250)
    .attr("x", 30)
    .style("font-size", "20px")
    .style("fill", "white")
    .text("For more information, visit http://loremipsum.com ...");
}

generateHeader();
generateChart1();
generateChart2();
generateChart3();
generateChart4();
generateChart5();
generateChart6();
