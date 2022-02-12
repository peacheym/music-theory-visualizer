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

  var margin = { top: 80, right: 100, bottom: 30, left: 50 },
    width = 540 - margin.left - margin.right,
    height = 280 - margin.top - margin.bottom;

  var n = 5;

  var xScale = d3
    .scaleLinear()
    .domain([0, n - 1])
    .range([0, width]);
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
    return { y: Math.round(d3.randomUniform(100)()) };
  });

  var chart5 = svgContainer
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("x", 250)
    .attr("y", 1050)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  chart5
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  // chart5.append("g").attr("class", "y axis").call(d3.axisLeft(yScale));

  chart5
    .append("path")
    .datum(dataset) // 10. Binds data to the line
    .attr("class", "line") // Assign a class for styling
    .attr("fill", "none")
    .attr("stroke", "#3e9798")
    .attr("stroke-width", "10")
    .attr("d", line); // 11. Calls the line generator

  chart5
    .append("text")
    .attr("y", -70)
    .attr("fill", "#374faa")
    .style("font-weight", "normal")
    .attr("stroke-width", "0")
    .style("font-size", "14px")
    .text(
      "To what extent do you agree or disagree with each of the following?"
    );

  chart5
    .append("text")
    .attr("y", -50)
    .attr("fill", "#374faa")
    .attr("stroke-width", "0")
    .style("font-size", "14px")
    .text('"I feel like things in my country are out of control right now"');

  chart5
    .append("text")
    .attr("y", -20)
    .attr("x", 80)
    .attr("stroke-width", "0")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .style("font-size", "14px")
    .text("% 'Strongly agree' + 'Somewhat agree'");
  chart5
    .selectAll(".dot")
    .data(dataset)
    .enter()
    .append("text") // Uses the enter().append() method
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d) {
      return yScale(d.y) - 15;
    })
    .attr("fill", "#3e9798")
    .text(function (d) {
      return d.y + " %";
    });
}
