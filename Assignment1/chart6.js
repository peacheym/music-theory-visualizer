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

  var chart6 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 1020)
    .attr("x", 1080)
    .style("border", "1px black solid");
  chart6.append("text").attr("y", 50).text("Chart 6");

  // Create the Bar Chart
  var margin = { top: 20, right: 30, bottom: 40, left: 90 },
    width = 540 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  d3.csv("./bargraph.csv", function (data) {
    // Add X axis
    var x = d3.scaleLinear().domain([0, 50]).range([0, width]);
    chart6
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    var y = d3
      .scaleBand()
      .range([0, height])
      .domain(
        data.map(function (d) {
          return d.Label;
        })
      )
      .padding(0.1);
    chart6.append("g").call(d3.axisLeft(y));

    //Bars
    chart6
      .selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", function (d) {
        return y(d.Label);
      })
      .attr("width", function (d) {
        return x(d.Value);
      })
      .attr("height", y.bandwidth())
      .attr("fill", "#30469c");
  });
}
