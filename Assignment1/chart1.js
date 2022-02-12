function generateChart1() {
  /* Handle Chart Section 1 */

  var text1 = svgContainer
    .append("svg")
    .attr("width", 220)
    .attr("height", 250)
    .attr("y", 300)
    .attr("x", 30)
    .style("border", "1px black solid");

  text1
    .append("text")
    .attr("y", 45)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("PLANNING NHS");
  text1
    .append("text")
    .attr("y", 70)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("RESPONSE");
  text1
    .append("text")
    .attr("y", 110)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("Confidence in the");
  text1
    .append("text")
    .attr("y", 130)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("NHS is at its heighest");
  text1
    .append("text")
    .attr("y", 150)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("Since June 2020");

  var margin = { top: 80, right: 100, bottom: 30, left: 50 },
    width = 540 - margin.left - margin.right,
    height = 280 - margin.top - margin.bottom;

  var n = 10;

  var xScale = d3.scaleLinear().domain([0, 9]).range([0, width]);
  var yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  var line = d3
    .line()
    .x(function (d, i) {
      return xScale(i);
    })
    .y(function (d) {
      return yScale(d.y);
    })
    .curve(d3.curveMonotoneX);

  var dataset = d3.range(n).map(function (d) {
    return { y: d3.randomUniform(100)() };
  });

  var dataset2 = d3.range(n).map(function (d) {
    return { y: d3.randomUniform(100)() };
  });

  var chart1 = svgContainer
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("x", 250)
    .attr("y", 320)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // chart1
  //   .append("g")
  //   .attr("class", "x axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(d3.axisBottom(xScale));

  // chart1.append("g").attr("class", "y axis").call(d3.axisLeft(yScale));

  chart1
    .append("path")
    .datum(dataset) // 10. Binds data to the line
    .attr("class", "line") // Assign a class for styling
    .attr("fill", "none")
    .attr("stroke", "#3e9798")
    .attr("stroke-width", "10")
    .attr("d", line); // 11. Calls the line generator
  chart1
    .append("path")
    .datum(dataset2) // 10. Binds data to the line
    .attr("class", "line") // Assign a class for styling
    .attr("fill", "none")
    .attr("stroke", "#30469c")
    .attr("stroke-width", "10")
    .attr("d", line); // 11. Calls the line generator

  chart1
    .append("text")
    .attr("y", -67)
    .attr("fill", "#374faa")
    .style("font-weight", "normal")
    .style("font-size", "14px")
    .attr("stroke-width", "0")
    .text(
      "How confident, if at all, would you say you are in the ability of the NHS to"
    );

  chart1
    .append("text")
    .attr("y", -47)
    .attr("fill", "#374faa")
    .attr("stroke-width", "0")
    .style("font-size", "14px")
    .text("deal with those who are ill as a result of getting the Coronavirus");

  chart1
    .append("text")
    .attr("y", -10)
    .attr("x", 150)
    .attr("stroke", "black")
    .style("font-size", "16px")
    .text("Mar 2020 - Feb 2021");
}
