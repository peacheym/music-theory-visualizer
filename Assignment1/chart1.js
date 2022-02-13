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

  // Assign a global variable for the chart
  var chart1 = null;

  // Handle measurements for the chart
  var margin = { top: 80, right: 100, bottom: 30, left: 50 },
    width = 540 - margin.left - margin.right,
    height = 280 - margin.top - margin.bottom;

  /**
   *
   * This function allows the line graphs to be updated when the date text is clicked.
   *
   *
   */
  function update(index) {
    // Refresh the view
    d3.select("#all").remove();

    // Get the data we need
    d3.csv("./csv-files/chart1.csv", function (data) {
      var xScale = d3.scaleLinear().domain([0, 11]).range([0, width]);
      var yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

      var line = d3
        .line()
        .x(function (d) {
          return xScale(d.label);
        })
        .y(function (d) {
          if (index > 0) {
            return yScale(d.valueA0);
          } else {
            return yScale(d.valueA1);
          }
        })
        .curve(d3.curveMonotoneX);

      var lineB = d3
        .line()
        .x(function (d) {
          return xScale(d.label);
        })
        .y(function (d) {
          if (index > 0) {
            return yScale(d.valueB0);
          } else {
            return yScale(d.valueB1);
          }
        })
        .curve(d3.curveMonotoneX);

      chart1 = svgContainer
        .append("svg")
        .attr("id", "all")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("x", 250)
        .attr("y", 320)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //Define Y axis labels
      let labels = ["0%", "20%", "40%", "60%", "80%", "100%"];
      let axisGen = d3.axisLeft(yScale);
      axisGen.tickFormat((d, i) => labels[i]);
      axisGen.ticks(4);
      axisGen.tickSize(0);

      // Add Y axis to the chart
      let axis = chart1
        .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(-13,0)")
        .call(axisGen);
      axis.select(".domain").remove();
      axis
        .selectAll(".tick text")
        .attr("font-weight", "bold")
        .attr("fill", "#30469c");

      let XaxisGen = d3.axisBottom(xScale);
      XaxisGen.tickFormat((d, i) => data[i].date); // Get labels for X axis from the CSV file
      XaxisGen.ticks(12);
      XaxisGen.tickSize(0);

      // Add X Axis to the chart
      let Xaxis = chart1
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(XaxisGen);
      Xaxis.select(".domain").remove();

      Xaxis.selectAll(".tick text")
        .attr("transform", "rotate(-90)")
        .attr("font-size", 9)
        .attr("fill", "#30469c");

      var line1 = chart1
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#3e9798")
        .attr("stroke-width", "10")
        .attr("d", line);

      length = line1.node().getTotalLength();
      line1
        .attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .duration(700);
      // .on("end", () => setTimeout(repeat, 1000));

      var line2 = chart1
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "#30469c")
        .attr("stroke-width", "10")
        .attr("d", lineB);

      length = line2.node().getTotalLength();
      line2
        .attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .duration(700);

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
        .text(
          "deal with those who are ill as a result of getting the Coronavirus"
        );

      chart1
        .append("text")
        .attr("y", -10)
        .attr("x", 100)
        .attr("stroke", "black")
        .style("font-size", "16px")
        .text(function (d) {
          if (index > 0) {
            return "Mar 2020 - Feb 2021 (Click here for 2022)";
          } else {
            return "Mar 2021 - Feb 2022 (Click here for 2021)";
          }
        })
        .on("click", function (d, i) {
          update(index * -1);
        });

      // Box 2
      chart1
        .append("rect")
        .attr("x", 430)
        .attr("y", 110)
        .attr("width", 15)
        .attr("height", 50)
        .attr("fill", "#374faa");

      // Box 2
      chart1
        .append("text")
        .attr("x", 450)
        .attr("y", 140)
        .attr("width", 15)
        .attr("height", 50)
        .attr("font-weight", "bold")
        .attr("fill", "#374faa")
        .text(function () {
          if (index > 0) {
            return data[11].valueB0 + " %";
          } else {
            return data[11].valueB1 + " %";
          }
        });

      // Box 1
      chart1
        .append("rect")
        .attr("x", 430)
        .attr("y", 10)
        .attr("width", 15)
        .attr("height", 50)
        .attr("fill", "#3e9798");

      // Box 2
      chart1
        .append("text")
        .attr("x", 450)
        .attr("y", 40)
        .attr("width", 15)
        .attr("height", 50)
        .attr("font-weight", "bold")
        .attr("fill", "#3e9798")
        .text(function () {
          if (index > 0) {
            return data[11].valueA0 + " %";
          } else {
            return data[11].valueA1 + " %";
          }
        });
    });
  }

  // INIT THE CHART
  update(1);
}
