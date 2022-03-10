function compute_fill(root, KeyTonality) {
  if (KeyTonality === "MAJOR") {
    switch (root) {
      case 1:
        return "cadetblue";
      case 2:
        return "lavender";
      case 3:
        return "lavender";
      case 4:
        return "cadetblue";
      case 5:
        return "cadetblue";
      case 6:
        return "lavender";
      case 7:
        return "salmon";
      default:
        return "black";
    }
  } else if (KeyTonality === "MINOR")
    switch (root) {
      case 1:
        return "lavender";
      case 2:
        return "salmon";
      case 3:
        return "cadetblue";
      case 4:
        return "lavender";
      case 5:
        return "lavender";
      case 6:
        return "cadetblue";
      case 7:
        return "cadetblue";
      default:
        return "black";
    }
}
function compute_radius(root, KeyTonality) {
  if (KeyTonality === "MAJOR") {
    switch (root) {
      case 1:
        return 30;
      case 2:
        return 22;
      case 3:
        return 22;
      case 4:
        return 30;
      case 5:
        return 30;
      case 6:
        return 22;
      case 7:
        return 30;
      default:
        return "black";
    }
  } else if (KeyTonality === "MINOR")
    switch (root) {
      case 1:
        return 22;
      case 2:
        return 30;
      case 3:
        return 30;
      case 4:
        return 22;
      case 5:
        return 22;
      case 6:
        return 30;
      case 7:
        return 30;
      default:
        return "black";
    }
}

function convertToRomanNeumeral(note, KeyTonality) {
  if (KeyTonality === "MAJOR") {
    switch (note) {
      case 1:
        return "I";
      case 2:
        return "ii";
      case 3:
        return "iii";
      case 4:
        return "IV";
      case 5:
        return "V";
      case 6:
        return "vi";
      case 7:
        return "vii";
      default:
        return "black";
    }
  } else if (KeyTonality === "MINOR")
    switch (note) {
      case 1:
        return "i";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "iv";
      case 5:
        return "v";
      case 6:
        return "VI";
      case 7:
        return "vii";
      default:
        return "black";
    }
}

var links = null;
var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 800)
  .style("background", "#fff5e8");

d3.csv("./DataSources/chord-progressions.csv", function (data) {
  // Initialize the button
  var dropdownButton = d3
    .select("body")
    .append("select")
    .attr("x", 10)
    .attr("y", 10);

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
          270, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
          "A", // This means we're gonna build an elliptical arc
          (start - end) / 2,
          ",", // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
          65 * (4 - i),
          0,
          0,
          ",",
          start < end ? 1 : 0,
          end,
          ",",
          270,
        ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
          .join(" ");
      })
      .style("fill", "none")
      .attr("stroke-width", 3)
      .style("stroke", (d, i) => {
        switch (i) {
          case 0:
            return "#1b264f";
          case 1:
            return "#274690";
          case 2:
            return "#576ca8";
          case 3:
            return "#ccd5ff";
        }
      });
    // .append("text")
    // .attr("x", 50)
    // .attr("y", 50)
    // .text("test");
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
    return compute_radius(d.index, "MAJOR");
  })
  .attr("fill", (d) => {
    return compute_fill(d.index, "MAJOR");
  })
  .attr("stroke", "#7F7D7D")
  .style("stroke-width", 3);

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
  // .attr("visibility", "hidden")
  .attr("font-size", "16px")
  .text(function (d) {
    return convertToRomanNeumeral(d.index, "MAJOR");
  })
  .style("text-anchor", "middle");

// Add Chord Labels.
svgContainer
  .selectAll("major_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d.index;
  })
  .attr("y", 305)
  .attr("visibility", "hidden")
  .attr("font-size", "16px")
  .text(function (d) {
    return d.root;
  })
  .style("text-anchor", "middle");

// DO MINOR NEXT

svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return d.index * 100;
  })
  .attr("cy", 500)
  .attr("r", (d) => {
    return compute_radius(d.index, "MINOR");
  })
  .attr("fill", (d) => {
    return compute_fill(d.index, "MINOR");
  })
  .attr("stroke", "#7F7D7D")
  .style("stroke-width", 3);

// Add Labels to the notes, invisible by default.
svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d.index;
  })
  .attr("y", 555)
  // .attr("visibility", "hidden")
  .attr("font-size", "16px")
  .text(function (d) {
    return convertToRomanNeumeral(d.index, "MINOR");
  })
  .style("text-anchor", "middle");

// Add Chord Labels.
svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d.index;
  })
  .attr("y", 505)
  .attr("visibility", "hidden")
  .attr("font-size", "16px")
  .text(function (d) {
    return d.root_minor;
  })
  .style("text-anchor", "middle");

// Add the path using this helper function
// svgContainer
//   .append("circle")
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("r", 50)
//   .attr("fill", compute_fill(7, "MAJOR"));

// var major_key = svgContainer.select()

// totalPoints = 8;

// for (var i = 1; i <= totalPoints; i++) {
//   drawPoint(100, i, totalPoints);
// }

// function drawPoint(r, currentPoint, totalPoints) {
//   var theta = (Math.PI * 2) / totalPoints;
//   var angle = theta * currentPoint;

//   electron.pivot.x = r * Math.cos(angle);
//   electron.pivot.y = r * Math.sin(angle);

//   return electron;
// }
