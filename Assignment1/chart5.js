function generateChart5() {
  /**
   *
   * FIRST STEP IS TO ADD TEXT
   */

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

  // Get data from CSV file
  d3.csv("./csv-files/chart5.csv", function (data) {
    var xScale = d3.scaleLinear().domain([0, 4]).range([0, width]);
    var yScale = d3.scaleLinear().domain([40, 100]).range([height, 0]); // Only show from 40% to 100%

    // Compute the line
    var line = d3
      .line()
      .x(function (d) {
        return xScale(d.label);
      })
      .y(function (d) {
        return yScale(d.value);
      })
      .curve(d3.curveMonotoneX);

    // Init the chart container
    var chart5 = svgContainer
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("x", 250)
      .attr("y", 1050)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define and create the X Axis
    let labels = ["Aug", "Oct", "Nov", "Dec", "Jan", "Feb"];
    let axisGen = d3.axisBottom(xScale);
    axisGen.tickFormat((d, i) => labels[i]);
    axisGen.ticks(4);
    axisGen.tickSize(0); //  No ticks, only text
    let axis = chart5
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(axisGen);
    axis.select(".domain").remove();
    axis
      .selectAll(".tick text")
      .attr("font-weight", "bold")
      .attr("font-size", 14)
      .attr("fill", "#30469c");

    // Create the line within the container
    chart5
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#3e9798")
      .attr("stroke-width", "5")
      .attr("d", line);

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

    // Add text labels to every point in the CSV file
    chart5
      .selectAll()
      .data(data)
      .enter()
      .append("text") // Uses the enter().append() method
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("y", function (d) {
        return yScale(d.value) - 20;
      })
      .attr("fill", "#3e9798")
      .attr("font-weight", "bold")
      .text(function (d) {
        return d.value + " %";
      });
  });
}

// END FILE
