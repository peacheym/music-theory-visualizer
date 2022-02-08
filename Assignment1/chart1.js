function generateChart1() {
  /* Handle Chart Section 1 */

  var text1 = svgContainer
    .append("svg")
    .attr("width", 540)
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

  var chart1 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 300)
    .attr("y", 300)
    .attr("x", 270);
  chart1.append("text").attr("y", 50).text("Chart 1");

  var margin = { top: 20, right: 30, bottom: 40, left: 90 },
    width = 540 - margin.left - margin.right,
    height = 340 - margin.top - margin.bottom;

  //Read the data
  d3.csv(
    "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

    // When reading the csv, I must format variables:
    function (d) {
      return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value };
    },

    // Now I can use this dataset:
    function (data) {
      // Add X axis --> it is a date format
      var x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.date;
          })
        )
        .range([0, width]);
      chart1.append("g").attr("transform", "translate(0," + height + ")");
      // .call(d3.axisBottom(x));

      // Add Y axis
      var y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.value;
          }),
        ])
        .range([height, 0]);
      // chart1.append("g").call(d3.axisLeft(y));

      // Add the line
      chart1
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#30469c")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.date);
            })
            .y(function (d) {
              return y(d.value);
            })
        );

      // Add the line
      chart1
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#41999a")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.date);
            })
            .y(function (d) {
              return y(d.value * 2);
            })
        );
    }
  );
}
