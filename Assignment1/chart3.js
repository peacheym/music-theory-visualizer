function generateChart3() {
  /**
   *
   * FIRST STEP IS TO ADD TEXT
   */

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

  // Create Donut Chart Data
  var data = { a: 8, b: 9, c: 18, d: 63 };

  // Create the color scale
  var color = d3
    .scaleOrdinal()
    .domain(data)
    .range(["#002454", "#2f459b", "#317372", "#214d4e"]);

  // Compute the position of each group on the pie:
  var pie = d3.pie().value(function (d) {
    return d.value;
  });
  var data_ready = pie(d3.entries(data));

  // Keep a reference to the donut generator for use with labels
  donutChartBuilder = d3.arc().innerRadius(80).outerRadius(radius);

  // Create donut chart
  chart3
    .append("g")
    .attr("transform", "translate(" + 220 + "," + 150 + ")")
    .selectAll("whatever")
    .data(data_ready)
    .enter()
    .append("path")
    .attr("d", donutChartBuilder)
    .attr("fill", function (d) {
      return color(d.data.key);
    });

  // Add text labels to donut chart
  chart3
    .selectAll("mySlices")
    .data(data_ready)
    .enter()
    .append("text")
    .attr("fill", "#FFFFFF")
    .attr("font-weight", "bold")
    .text(function (d) {
      return d.data.value + "%";
    })
    .attr("font-size", "18")
    .attr("transform", function (d) {
      translate = donutChartBuilder.centroid(d);
      return (
        "translate(" + (translate[0] + 220) + "," + (translate[1] + 151) + ")"
      );
    })
    .style("text-anchor", "middle")
    .style("font-size", 17);

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

  chart3
    .append("text")
    .attr("x", 430)
    .attr("y", 60)
    .style("font-size", "16px")
    .attr("font-weight", "bold")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("52% 'strongly agreed'");

  chart3
    .append("text")
    .attr("x", 430)
    .attr("y", 80)
    .style("font-size", "16px")
    .attr("font-weight", "bold")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("in Aug 2020");

  chart3
    .append("text")
    .attr("x", 430)
    .attr("y", 120)
    .style("font-size", "16px")
    .style("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("fill", "#214d4e")
    .text("48% 'strongly agreed'");

  chart3
    .append("text")
    .attr("x", 430)
    .attr("y", 140)
    .style("font-size", "16px")
    .attr("font-weight", "bold")
    .style("text-anchor", "middle")
    .attr("fill", "#214d4e")
    .text("in Dec 2020");

  // Add Legend for Donut Chart here
  chart3
    .append("text")
    .attr("x", 400)
    .attr("y", 200)
    .style("font-size", "12px")
    .attr("fill", "#214d4e")
    .text("Strongly Agree");

  chart3
    .append("rect")
    .attr("x", 385)
    .attr("y", 190)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "#214d4e");

  chart3
    .append("text")
    .attr("x", 400)
    .attr("y", 220)
    .style("font-size", "12px")
    .attr("fill", "#317372")
    .text("Somewhat Agree");

  chart3
    .append("rect")
    .attr("x", 385)
    .attr("y", 210)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "#317372");

  chart3
    .append("text")
    .attr("x", 400)
    .attr("y", 240)
    .style("font-size", "12px")
    .attr("fill", "#2f459b")
    .text("Somewhat disagree");

  chart3
    .append("rect")
    .attr("x", 385)
    .attr("y", 230)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "#2f459b");

  chart3
    .append("text")
    .attr("x", 400)
    .attr("y", 260)
    .style("font-size", "12px")
    .attr("fill", "#002454")
    .text("Strongly disagree");

  chart3
    .append("rect")
    .attr("x", 385)
    .attr("y", 250)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "#002454");
}

// END FILE
