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


function generateCharts() {


  // var chart4 = svgContainer
  //   .append("svg")
  //   .attr("width", 540)
  //   .attr("height", 250)
  //   .attr("y", 665)
  //   .attr("x", 1080)
  //   .style("border", "1px black solid");
  // chart4.append("text").attr("y", 50).text("Chart 4");

  // var chart5 = svgContainer
  //   .append("svg")
  //   .attr("width", 540)
  //   .attr("height", 250)
  //   .attr("y", 1020)
  //   .attr("x", 270)
  //   .style("border", "1px black solid");
  // chart5.append("text").attr("y", 50).text("Chart 5");

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

generateHeader();
generateChart1();
generateChart2();
generateChart3();
generateChart4();
generateChart5();
generateChart6();
generateCharts();
