function generateChart3() {
  var text3 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 650)
    .attr("x", 30)
    .style("border", "1px black solid");

  text3
    .append("text")
    .attr("y", 45)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("VACCINATION");
  text3
    .append("text")
    .attr("y", 70)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("INTENT");
  text3
    .append("text")
    .attr("y", 110)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("Intention among the");
  text3
    .append("text")
    .attr("y", 130)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("UK public to get the");
  text3
    .append("text")
    .attr("y", 150)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("COVID-19 vaccine has");
  text3
    .append("text")
    .attr("y", 170)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("increased.");

  /* Handle the data entry next */
  var chart3 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 350)
    .attr("y", 665)
    .attr("x", 270)
    .style("border", "1px black solid");
  var radius = 120;

  // Create dummy data
  var data = { a: 8, b: 9, c: 18, d: 63 };

  // set the color scale
  var color = d3
    .scaleOrdinal()
    .domain(data)
    .range(["#002454", "#2f459b", "#317372", "#214d4e"]);

  // Compute the position of each group on the pie:
  var pie = d3.pie().value(function (d) {
    return d.value;
  });
  var data_ready = pie(d3.entries(data));

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  chart3
    .append("g")
    .attr("transform", "translate(" + 220 + "," + 150 + ")")
    .selectAll("whatever")
    .data(data_ready)
    .enter()
    .append("path")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(80) // This is the size of the donut hole
        .outerRadius(radius)
    )
    .attr("fill", function (d) {
      return color(d.data.key);
    })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

  // Add above pie chart text
  chart3
    .append("text")
    .attr("y", 15)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("If a vaccine for COVID-19 were avaliable to me, I would get it");

  // Add inner pie chart text
  chart3
    .append("text")
    .attr("y", 115)
    .attr("x", 220)
    .style("font-size", "24px")
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .attr("fill", "#214d4e")
    .text("83%");
  chart3
    .append("text")
    .attr("y", 140)
    .attr("x", 220)
    .style("font-size", "16px")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("in the UK agree");
  chart3
    .append("text")
    .attr("y", 160)
    .attr("x", 220)
    .style("font-size", "16px")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("they would get");
  chart3
    .append("text")
    .attr("y", 180)
    .attr("x", 220)
    .style("font-size", "16px")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("a vaccine");
}
