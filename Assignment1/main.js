      // d3.select("#header").attr('width', 500).attr('height', 500)
      // .style("border", "1px white solid")
      // .style("color", "white").style("font-size", "42px")
      // .text("Coronavirus - One Year On");

      var svgContainer = d3
        .select("body")
        .append("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight * 1.5)
        .style("border", "1px salmon solid");

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

      //  var chart1 = svgContainer.append('svg').attr('width', 540).attr('height', 250).attr("y", 300).attr("x", 270).style("border", "1px black solid")
      //  var headerP2 = svgContainer.append("text").attr("y", 0).attr("x", 0).style("fill", "black").text("Chart 1");

      var chart1 = svgContainer
        .append("svg")
        .attr("width", 540)
        .attr("height", 250)
        .attr("y", 300)
        .attr("x", 270)
        .style("border", "1px black solid");
      chart1.append("text").attr("y", 50).text("Chart 1");

      var chart2 = svgContainer
        .append("svg")
        .attr("width", 540)
        .attr("height", 250)
        .attr("y", 300)
        .attr("x", 1080)
        .style("border", "1px black solid");
      chart2.append("text").attr("y", 50).text("Chart 2");

      var chart3 = svgContainer
        .append("svg")
        .attr("width", 540)
        .attr("height", 250)
        .attr("y", 665)
        .attr("x", 270)
        .style("border", "1px black solid");
      // chart3.append("text")
      // .attr("y", 50)
      // .text("Chart 3");

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
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

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

      var margin = { top: 20, right: 30, bottom: 40, left: 90 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      // var svg = d3.select("#my_dataviz")
      //   .append("svg")
      //     .attr("width", width + margin.left + margin.right)
      //     .attr("height", height + margin.top + margin.bottom)
      //   .append("g")
      //     .attr("transform",
      //           "translate(" + margin.left + "," + margin.top + ")");

      // Parse the Data
      d3.csv(
        "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
        function (data) {
          // Add X axis
          var x = d3.scaleLinear().domain([0, 13000]).range([0, width]);
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
                return d.Country;
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
              return y(d.Country);
            })
            .attr("width", function (d) {
              return x(d.Value);
            })
            .attr("height", y.bandwidth())
            .attr("fill", "#69b3a2");
        }
      );