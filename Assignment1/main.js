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

function generateChart1() {
  /* Handle Chart Section 1 */

  var text1 = svgContainer
    .append("svg")
    .attr("width", 220)
    .attr("y", 300)
    .attr("x", 30)
    .attr("height", 250);
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

  var chart1 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 300)
    .attr("x", 270);
  chart1.append("text").attr("y", 50).text("Chart 1");
}

function generateChart2() {
    
  var text2 = svgContainer
  .append("svg")
  .attr("width", 220)
  .attr("y", 300)
  .attr("x", 835)
  .attr("height", 250);
text2
  .append("text")
  .attr("y", 45)
  .attr("x", 13)
  .style("font-weight", "bold")
  .style("font-size", "26px")
  .attr("fill", "white")
  .text("HOME TESTING");
text2
  .append("text")
  .attr("y", 70)
  .attr("x", 13)
  .style("font-weight", "bold")
  .style("font-size", "26px")
  .attr("fill", "white")
  .text("STUDY");
text2
  .append("text")
  .attr("y", 110)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("The largest testing");
text2
  .append("text")
  .attr("y", 130)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("programme for");
text2
  .append("text")
  .attr("y", 150)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("coronavirus shows a");
  text2
  .append("text")
  .attr("y", 170)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("decline in prevalence");
text2
  .append("text")
  .attr("y", 190)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("of the virus");
text2
  .append("text")
  .attr("y", 210)
  .attr("x", 13)
  .style("font-size", "16px")
  .attr("fill", "white")
  .text("Since June 2020");


  var chart2 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 300)
    .attr("x", 1080)
    .style("border", "1px black solid");
  chart2.append("text").attr("y", 50).text("Chart 2");
}

function generateCharts() {
  var chart3 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 665)
    .attr("x", 270)
    .style("border", "1px black solid");

  var chart4 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 665)
    .attr("x", 1080)
    .style("border", "1px black solid");
  chart4.append("text").attr("y", 50).text("Chart 4");

  var chart5 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 1020)
    .attr("x", 270)
    .style("border", "1px black solid");
  chart5.append("text").attr("y", 50).text("Chart 5");

  var chart6 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 1020)
    .attr("x", 1080)
    .style("border", "1px black solid");
  chart6.append("text").attr("y", 50).text("Chart 6");

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
    .attr("transform", "translate(" + 220 + "," + 125 + ")")
    .selectAll("whatever")
    .data(data_ready)
    .enter()
    .append("path")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(70) // This is the size of the donut hole
        .outerRadius(radius)
    )
    .attr("fill", function (d) {
      return color(d.data.key);
    })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

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

generateHeader();
generateChart1();
generateChart2();
generateCharts();
