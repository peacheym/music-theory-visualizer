function generateChart4() {
  /**
   *
   * FIRST STEP IS TO ADD TEXT
   */

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

  var margin = { top: 80, right: 30, bottom: 50, left: 50 },
    width = 540 - margin.left - margin.right,
    height = 280 - margin.top - margin.bottom;

  // Get data from CSV file
  d3.csv("./csv-files/chart4.csv", function (data) {
    var xScale = d3.scaleLinear().domain([0, 30]).range([0, width]);
    var yScale = d3.scaleLinear().domain([0, 65]).range([height, 0]);

    // Compute line 1
    var line = d3
      .line()
      .x(function (d) {
        return xScale(d.label);
      })
      .y(function (d) {
        return yScale(d.valueA);
      });

    // Compute line 2
    var lineB = d3
      .line()
      .x(function (d) {
        return xScale(d.label);
      })
      .y(function (d) {
        return yScale(d.valueB);
      });

    // Init the chart container
    var chart4 = svgContainer
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("x", 1050)
      .attr("y", 670)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define the labels for this axis
    let labels = [
      "Feb 7-9",
      "Apr 16-19",
      "Jun 11-14",
      "Aug 27-30",
      "Oct 22-25",
      "Dec 17-20",
      "Mar 11-14",
    ];

    // Create axis
    let axisGen = d3.axisBottom(xScale);
    axisGen.tickFormat((d, i) => labels[i]);
    axisGen.ticks(5);
    axisGen.tickSize(0); // No ticks, only text
    let axis = chart4
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(axisGen);
    axis.select(".domain").remove();

    axis
      .selectAll(".tick text")
      .attr("font-weight", "bold")
      .attr("font-size", 11)
      .attr("fill", "#30469c");

    // Add Dashed Line sections & Tooltips
    // Note: This section is long and not the most efficient code I've ever written
    var vis1 = true;
    var tooltip1 = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("top", "850px")
      .style("left", "1140px")
      .style("font-size", "11px")
      .style("font-weight", "bold")
      .html("UK First<br/>Lockdown Announced<br/>(March 23rd)");
    chart4
      .append("line")
      .style("stroke", "black")
      .style("stroke-width", 3)
      .attr("stroke-dasharray", "3")
      .attr("opacity", 0.5)
      .attr("x1", 30)
      .attr("y1", -50)
      .attr("x2", 30)
      .attr("y2", 140)
      .on("click", function () {
        return tooltip1.style("visibility", () => {
          if (vis1) {
            vis1 = !vis1;
            return "visible";
          } else {
            vis1 = !vis1;
            return "hidden";
          }
        });
      });

    // Line 2 & Tooltip
    var vis2 = false;
    var tooltip2 = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("top", "770px")
      .style("left", "1210px")
      .style("font-size", "11px")
      .style("font-weight", "bold")
      .html("3 Step Lockdown <br/> easing plan <br/> Announced (May 10th)");
    chart4
      .append("line")
      .style("stroke", "black")
      .style("stroke-width", 3)
      .attr("stroke-dasharray", "3")
      .attr("opacity", 0.5)
      .attr("x1", 100)
      .attr("y1", -50)
      .attr("x2", 100)
      .attr("y2", 140)
      .on("click", function () {
        return tooltip2.style("visibility", () => {
          if (vis2) {
            vis2 = !vis2;
            return "visible";
          } else {
            vis2 = !vis2;
            return "hidden";
          }
        });
      });

    // Line 3 & Tooltip
    var vis3 = false;
    var tooltip3 = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("top", "700px")
      .style("left", "1410px")
      .style("font-size", "11px")
      .style("font-weight", "bold")
      .html("3-tier system<br/>introduced<br/>(October 12th)");
    chart4
      .append("line")
      .style("stroke", "black")
      .style("stroke-width", 3)
      .attr("stroke-dasharray", "3")
      .attr("opacity", 0.5)
      .attr("x1", 300)
      .attr("y1", -50)
      .attr("x2", 300)
      .attr("y2", 140)
      .on("click", function () {
        return tooltip3.style("visibility", () => {
          if (vis3) {
            vis3 = !vis3;
            return "visible";
          } else {
            vis3 = !vis3;
            return "hidden";
          }
        });
      });

    // Line 4 & Tooltip
    var vis4 = false;
    var tooltip4 = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("top", "780px")
      .style("left", "1490px")
      .style("font-size", "11px")
      .style("font-weight", "bold")
      .html("Third Lockdown<br/>introduced<br/>(January 6th)");
    chart4
      .append("line")
      .style("stroke", "black")
      .style("stroke-width", 3)
      .attr("stroke-dasharray", "3")
      .attr("opacity", 0.5)
      .attr("x1", 380)
      .attr("y1", -50)
      .attr("x2", 380)
      .attr("y2", 140)
      .on("click", function () {
        return tooltip4.style("visibility", () => {
          if (vis4) {
            vis4 = !vis4;
            return "visible";
          } else {
            vis4 = !vis4;
            return "hidden";
          }
        });
      });

    // Add the line 1 to the chart
    chart4
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#30469c")
      .attr("stroke-width", "3")
      .attr("d", line);

    // Add the line 2 to the chart
    chart4
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#3e9798")
      .attr("stroke-width", "3")
      .attr("d", lineB);

    // Add the labels to the first and last elements of the graph
    chart4
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d) {
        return xScale(d.label) - 30;
      })
      .attr("y", function (d) {
        return yScale(d.valueA);
      })
      .attr("fill", "#30469c")
      .attr("font-weight", "bold")
      .text(function (d) {
        // Only add to first and last elements of graph
        if (d.label == 0 || d.label == data.length - 1) {
          return d.valueA + " %";
        }
        return;
      });

    chart4
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("text") // Uses the enter().append() method
      .attr("x", function (d) {
        return xScale(d.label) - 35;
      })
      .attr("y", function (d) {
        return yScale(d.valueB);
      })
      .attr("fill", "#3e9798")
      .attr("font-weight", "bold")
      .text(function (d) {
        if (d.label == 0 || d.label == data.length - 1) {
          return d.valueB + " %";
        }
        return;
      });

    chart4
      .append("text")
      .attr("y", -67)
      .attr("fill", "#374faa")
      .style("font-weight", "normal")
      .style("font-size", "14px")
      .attr("stroke-width", "0")
      .text("What level of threat do you think the coronavirus poses to ...");

    // Add Legend below in snippet below
    chart4
      .append("rect")
      .attr("x", 50)
      .attr("y", 180)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "#374faa");

    chart4
      .append("text")
      .attr("x", 70)
      .attr("y", 189)
      .attr("fill", "#374faa")
      .attr("font-size", 12)
      .text("Your Country");

    chart4
      .append("rect")
      .attr("x", 250)
      .attr("y", 180)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "#3e9798");

    chart4
      .append("text")
      .attr("x", 270)
      .attr("y", 189)
      .attr("fill", "#3e9798")
      .attr("font-size", 12)
      .text("You Personally");
  });
}

// END FILE