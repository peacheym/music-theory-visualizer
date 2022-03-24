// var dropdownButtonChordTypes = d3.select("#btns").append("select");

// dropdownButtonChordTypes // Add a button
//   .append("option")
//   .text(function (d) {
//     return "test";
//   }) // text showed in the menu
//   .attr("value", function (d) {
//     return "test";
//   }); // corresponding value returned by the button

var links = null;
var linksMinor = null;
var svgContainer = d3
  .select("#mainSVG")
  .append("svg")
  .attr("width", 950)
  .attr("height", 850)
  .style("background", "#F3F5F8")
  .style("border-radius", "15px");

d3.csv("./DataSources/chord-progressions.csv", function (data) {
  d3.select("body").append("br");
  var dropdownButton = d3.select("#chordDropdown").append("select");

  
  // add the options to the button
  dropdownButton // Add a button
    .selectAll("myOptions") // Next 4 lines add 6 options = 6 colors
    .data(data)
    .enter()
    .append("option")
    .text(function (d) {
      return d.Progression;
    }) // text showed in the menu
    .attr("value", function (d) {
      return d.Progression;
    }); // corresponding value returned by the button
  
    /* -- Define the onchange function for the selection operations */
  dropdownButton.on("change", function (d) {
    var selectedOption = d3.select(this).property("value");
    var thisProgression = null;
    for (i in data) {
      if (data[i].Progression == selectedOption) {
        thisProgression = data[i];
        break;
      }
    }
    newLinks = [
      {
        src: parseInt(thisProgression.first),
        dest: parseInt(thisProgression.second),
      },
      {
        src: parseInt(thisProgression.second),
        dest: parseInt(thisProgression.third),
      },
      {
        src: parseInt(thisProgression.third),
        dest: parseInt(thisProgression.fourth),
      },
      {
        src: parseInt(thisProgression.fourth),
        dest: parseInt(thisProgression.first),
      },
    ];

    // Remove existing arcs
    if (links) links.remove();

    // Generate new ones
    links = svgContainer
      .selectAll("mylinks")
      .data(newLinks)
      .enter()
      .append("path")
      .attr("d", function (d, i) {
        start = d.src * 100; // X position of start node on the X axis
        end = d.dest * 100; // X position of end node
        return [
          "M",
          start,
          268, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
          "A", // This means we're gonna build an elliptical arc
          (start - end) / 2,
          ",", // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
          55 * (4 - i),
          0,
          0,
          ",",
          start < end ? 1 : 0,
          end,
          ",",
          268,
        ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
          .join(" ");
      })
      .style("fill", "none")
      .attr("stroke-width", 3)
      .style("stroke", (d, i) => {
        switch (i) {
          case 0:
            return "#191923";
          case 1:
            return "#bf1363";
          case 2:
            return "#09bc8a";
          case 3:
            return "#23c9ff";
        }
      });

    // Remove existing arcs
    if (linksMinor) linksMinor.remove();

    // Generate new ones
    linksMinor = svgContainer
      .selectAll("mylinks")
      .data(newLinks)
      .enter()
      .append("path")
      .attr("d", function (d, i) {
        start = d.src * 100; // X position of start node on the X axis
        end = d.dest * 100; // X position of end node
        return [
          "M",
          start,
          618, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
          "A", // This means we're gonna build an elliptical arc
          (start - end) / 2,
          ",", // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
          55 * (4 - i),
          0,
          0,
          ",",
          start < end ? 1 : 0,
          end,
          ",",
          618,
        ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
          .join(" ");
      })
      .style("fill", "none")
      .attr("stroke-width", 3)
      .style("stroke", (d, i) => {
        switch (i) {
          case 0:
            return "#191923";
          case 1:
            return "#bf1363";
          case 2:
            return "#09bc8a";
          case 3:
            return "#23c9ff";
        }
      });
  });
});

let arcHeight = 60;
let arcWidth = 60;

const root_notes = [
  { index: 1, root: "C", root_minor: "C" },
  { index: 2, root: "D", root_minor: "D" },
  { index: 3, root: "E", root_minor: "Eb" },
  { index: 4, root: "F", root_minor: "F" },
  { index: 5, root: "G", root_minor: "G" },
  { index: 6, root: "A", root_minor: "Ab" },
  { index: 7, root: "B", root_minor: "Bb" },
];

svgContainer
  .selectAll("major_root_notes")
  .data(root_notes)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return d.index * 100;
  })
  .attr("cy", 300)
  .attr("r", (d) => {
    return computeNoteInfo(d.index, "MAJOR").radius;
  })
  .attr("fill", (d) => {
    return computeNoteInfo(d.index, "MAJOR").fill;
  })
  .attr("stroke", "#7F7D7D")
  .style("stroke-width", 3);

svgContainer
  .append("text")
  .attr("x", 800)
  .attr("y", 310)
  .style("font-weight", "bold")
  .text("Major Key");
svgContainer
  .append("text")
  .attr("x", 800)
  .attr("y", 660)
  .style("font-weight", "bold")
  .text("Minor Key");

// Add Labels to the notes, invisible by default.
svgContainer
  .selectAll("major_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d.index;
  })
  .attr("y", 355)
  .attr("font-size", "16px")
  .text(function (d) {
    return computeNoteInfo(d.index, "MAJOR").romanNum;
  })
  .style("text-anchor", "middle");

/* --- MINOR NEXT --- */

svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return d.index * 100;
  })
  .attr("cy", 650)
  .attr("r", (d) => {
    return computeNoteInfo(d.index, "MINOR").radius;
  })
  .attr("fill", (d) => {
    return computeNoteInfo(d.index, "MINOR").fill;
  })
  .attr("stroke", "#7F7D7D")
  .style("stroke-width", 3);

// Add Labels to the notes (number in Key)
svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d.index;
  })
  .attr("y", 705)
  .attr("font-size", "16px")
  .text(function (d) {
    return computeNoteInfo(d.index, "MINOR").romanNum;
  })
  .style("text-anchor", "middle");
