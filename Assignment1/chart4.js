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

  var margin = { top: 80, right: 30, bottom: 50, left: 50 },
    width = 540 - margin.left - margin.right,
    height = 280 - margin.top - margin.bottom;

  d3.csv("./chart4.csv", function (data) {
    var xScale = d3.scaleLinear().domain([0, 30]).range([0, width]);
    var yScale = d3.scaleLinear().domain([0, 65]).range([height, 0]);

    var line = d3
      .line()
      .x(function (d) {
        return xScale(d.label);
      })
      .y(function (d) {
        return yScale(d.valueA);
      });

    var lineB = d3
      .line()
      .x(function (d) {
        return xScale(d.label);
      })
      .y(function (d) {
        return yScale(d.valueB);
      });

    var chart1 = svgContainer
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("x", 1050)
      .attr("y", 670)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // chart1
    //   .append("g")
    //   .attr("class", "x axis")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(d3.axisBottom(xScale));

    let labels = [
      "Feb 7-9",
      "Apr 16-19",
      "Jun 11-14",
      "Aug 27-30",
      "Oct 22-25",
      "Dec 17-20",
      "Mar 11-14",
    ];
    let axisGen = d3.axisBottom(xScale);
    axisGen.tickFormat((d, i) => labels[i]);
    axisGen.ticks(5);
    axisGen.tickSize(0);
    let axis = chart1
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

    // chart1.append("g").attr("class", "y axis").call(d3.axisLeft(yScale));

    chart1
      .append("path")
      .datum(data) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("fill", "none")
      .attr("stroke", "#30469c")
      .attr("stroke-width", "3")
      .attr("d", line)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    chart1
      .append("path")
      .datum(data) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("fill", "none")
      .attr("stroke", "#3e9798")
      .attr("stroke-width", "3")
      .attr("d", lineB)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    chart1
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("text") // Uses the enter().append() method
      .attr("x", function (d) {
        return xScale(d.label) - 30;
      })
      .attr("y", function (d) {
        return yScale(d.valueA);
      })
      .attr("fill", "#30469c")
      .attr("font-weight", "bold")
      .text(function (d) {
        if (d.label == 0 || d.label == 30) {
          return d.valueA + " %";
        }
        return;
      });

    chart1
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
        if (d.label == 0 || d.label == 30) {
          return d.valueB + " %";
        }
        return;
      });

    chart1
      .append("text")
      .attr("y", -67)
      .attr("fill", "#374faa")
      .style("font-weight", "normal")
      .style("font-size", "14px")
      .attr("stroke-width", "0")
      .text("What level of threat do you think the coronavirus poses to ...");

    // Add Legend below in snippet below
    chart1
      .append("rect")
      .attr("x", 50)
      .attr("y", 180)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "#374faa");

    chart1
      .append("text")
      .attr("x", 70)
      .attr("y", 189)
      .attr("fill", "#374faa")
      .attr("font-size", 12)
      .text("Your Country");

    chart1
      .append("rect")
      .attr("x", 250)
      .attr("y", 180)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", "#3e9798");

    chart1
      .append("text")
      .attr("x", 270)
      .attr("y", 189)
      .attr("fill", "#3e9798")
      .attr("font-size", 12)
      .text("You Personally");

    function handleMouseOver(d) {
      // Use D3 to select element, change color and size
      length = d3.select(this).node().getTotalLength();
      d3.select(this)
        .attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .duration(2000)
        .on("end", () => setTimeout(repeat, 1000));
    }

    function handleMouseOut(d, i) {
      d3.select(this).attr("stroke-width", 3);
    }
  });
}
