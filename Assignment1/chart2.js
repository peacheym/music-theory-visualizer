function generateChart2() {
  var text2 = svgContainer
    .append("svg")
    .attr("width", 800)
    .attr("y", 300)
    .attr("x", 835)
    .attr("height", 350);
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
  chart2
    .append("text")
    .attr("y", 30)
    .attr("fill", "#374faa")
    .text("COVID-19 home testing study over time");

  // Add external SVGs for human outlines.
  chart2
    .append("image")
    .attr("xlink:href", "./images/human.svg")
    .attr("width", 80)
    .attr("height", 80)
    .attr("y", 50);

  chart2
    .append("image")
    .attr("xlink:href", "./images/arrow.svg")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 110)
    .attr("y", 140);

  chart2
    .append("image")
    .attr("xlink:href", "./images/human.svg")
    .attr("width", 80)
    .attr("height", 80)
    .attr("y", 50)
    .attr("x", 170);

    chart2
    .append("image")
    .attr("xlink:href", "./images/arrow.svg")
    .attr("width", 40)
    .attr("height", 40)
    .attr("x", 290)
    .attr("y", 140);

  chart2
    .append("image")
    .attr("xlink:href", "./images/human.svg")
    .attr("width", 110)
    .attr("height", 110)
    .attr("y", 20)
    .attr("x", 350);

  // Text box person 1
  chart2
    .append("text")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 150)
    .text("60 People");
  chart2
    .append("text")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 170)
    .text("Infected in");
  chart2
    .append("text")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 190)
    .text("every 10,000 in");
  chart2
    .append("text")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 210)
    .text("September -");
  chart2
    .append("text")
    .attr("fill", "#374faa")
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 230)
    .text("October 2020");

  //Text Box person 2
  chart2
    .append("text")
    .attr("fill", "#3e9798")
    .attr("font-weight", "bold")
    .attr("x", 170)
    .attr("y", 150)
    .text("157 People in");
  chart2
    .append("text")
    .attr("fill", "#3e9798")
    .attr("font-weight", "bold")
    .attr("x", 170)
    .attr("y", 170)
    .text("every 10,000");
  chart2
    .append("text")
    .attr("fill", "#3e9798")
    .attr("font-weight", "bold")
    .attr("x", 170)
    .attr("y", 190)
    .text("infected in");
  chart2
    .append("text")
    .attr("fill", "#3e9798")
    .attr("font-weight", "bold")
    .attr("x", 170)
    .attr("y", 210)
    .text("January 2021");

  //Text Box person 3
  chart2
    .append("text")
    .attr("fill", "#245172")
    .attr("font-weight", "bold")
    .attr("x", 350)
    .attr("y", 150)
    .text("49 People in");
  chart2
    .append("text")
    .attr("fill", "#245172")
    .attr("font-weight", "bold")
    .attr("x", 350)
    .attr("y", 170)
    .text("every 10,000");
  chart2
    .append("text")
    .attr("fill", "#245172")
    .attr("font-weight", "bold")
    .attr("x", 350)
    .attr("y", 190)
    .text("infected in");
  chart2
    .append("text")
    .attr("fill", "#245172")
    .attr("font-weight", "bold")
    .attr("x", 350)
    .attr("y", 210)
    .text("February 2021");

  // Final text box of chart 2
  text2
    .append("text")
    .attr("fill", "#245172")
    .attr("font-weight", "bold")
    .attr("x", 240)
    .attr("y", 280)
    .attr("font-size", 12)
    .text(
      "165,145 swab results between 4th and 23rd February. 689 tested positive for COVID-19."
    );
}
