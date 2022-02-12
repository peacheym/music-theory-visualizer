function generateChart6() {
  var text6 = svgContainer
    .append("svg")
    .attr("width", 800)
    .attr("y", 1000)
    .attr("x", 835)
    .attr("height", 350);
  text6
    .append("text")
    .attr("y", 45)
    .attr("x", 13)
    .style("font-weight", "bold")
    .style("font-size", "26px")
    .attr("fill", "white")
    .text("OUTLOOK");
  text6
    .append("text")
    .attr("y", 110)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("One year on, the");
  text6
    .append("text")
    .attr("y", 130)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("public is still divided");
  text6
    .append("text")
    .attr("y", 150)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("on when things will");
  text6
    .append("text")
    .attr("y", 170)
    .attr("x", 13)
    .style("font-size", "16px")
    .attr("fill", "white")
    .text("return to normal.");

  var chart6 = svgContainer
    .append("svg")
    .attr("width", 540)
    .attr("height", 250)
    .attr("y", 1120)
    .attr("x", 1200)
    .style("border", "1px black solid");

  text6
    .append("text")
    .attr("y", 30)
    .attr("x", 240)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text(
      "How long do you think it will take before things feel like they are getting"
    );
  text6
    .append("text")
    .attr("y", 50)
    .attr("x", 240)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("back to normal?");

  text6
    .append("text")
    .attr("y", 150)
    .attr("x", 380)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("1-5 Months");

  text6
    .append("text")
    .attr("y", 185)
    .attr("x", 380)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("6 months");

  text6
    .append("text")
    .attr("y", 205)
    .attr("x", 380)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("to a year");

  text6
    .append("text")
    .attr("y", 240)
    .attr("x", 380)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("Over one year");

  text6
    .append("text")
    .attr("y", 285)
    .attr("x", 330)
    .style("font-size", "16px")
    .attr("fill", "#374faa")
    .text("Never / I have no idea");

  d3.csv("./bargraph.csv", function (data) {
    var bars = chart6.selectAll(".myBars").data(data).enter().append("rect");
    bars
      .attr("x", 150)
      .attr("y", function (d) {
        return d.Label * 50;
      })
      .attr("width", function (d) {
        return d.Value * 5;
      })
      .attr("height", 40)
      .attr("fill", "#30469c")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    var texts = chart6.selectAll(".myTexts").data(data).enter().append("text");

    texts
      .attr("x", function (d) {
        return 150 + d.Value * 5 + 16;
      })
      .attr("y", function (d) {
        return 30 + d.Label * 50;
      })
      .attr("fill", "#30469c")
      .attr("font-size", 18)
      .attr("font-weight", "bold")
      .text(function (d) {
        return d.Value + " %";
      });

    function handleMouseOver(d) {

      // Use D3 to select element, change color and size
      d3.select(this).attr("fill", "#17255e");

      // // Specify where to put label of text
      // chart6
      //   .append("text")
      //   .attr({
      //     id: d.Label, // Create an id for text so we can select it later for removing on mouseout
      //     x: function () {
      //       return 150 + d.Value * 5 + 16;
      //     },
      //     y: function () {
      //       return 30 + d.Label * 50;
      //     },
      //   })
      //   .attr("fill", "#30469c")
      //   .attr("font-size", 18)
      //   .attr("font-weight", "bold")
      //   .text(function () {
      //     return d.Value + " %";
      //   });
    }

    function handleMouseOut(d, i) {
      console.log("out bar");
      // Use D3 to select element, change color back to normal
      d3.select(this).attr("fill", "#30469c");

      // Select text by id and then remove
      // d3.select("#t" + d.x + "-" + d.y + "-" + i).remove(); // Remove text location
    }
  });

  text6
    .append("image")
    .attr("xlink:href", "./clock.svg")
    .attr("width", 140)
    .attr("height", 140)
    .attr("x", 225)
    .attr("y", 120);
}