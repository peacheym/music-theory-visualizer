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
        return 30;
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

var myData = ["Hello World!", "Hello D3", "Hello JavaScript"];

var svgContainer = d3
  .select("body")
  .append("svg")
  .attr("width", 1800)
  .attr("height", 1800);

let arcHeight = 60;
let arcWidth = 60;

const root_notes = [1, 2, 3, 4, 5, 6, 7];
const links = [
  { src: 1, dest: 2 },
  { src: 2, dest: 5 },
];

// Add the links
svgContainer
  .selectAll("mylinks")
  .data(links)
  .enter()
  .append("path")
  .attr("d", function (d) {
    start = d.src * 100; // X position of start node on the X axis
    end = d.dest * 100; // X position of end node
    return [
      "M",
      start,
      300, // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
      "A", // This means we're gonna build an elliptical arc
      (start - end) / 2,
      ",", // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
      (start - end) / 2,
      0,
      0,
      ",",
      start < end ? 1 : 0,
      end,
      ",",
      300,
    ] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
      .join(" ");
  })
  .style("fill", "none")
  .attr("stroke-width", 3)
  .attr("stroke", "silver");

svgContainer
  .selectAll("major_root_notes")
  .data(root_notes)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return d * 100;
  })
  .attr("cy", 300)
  .attr("r", (d) => {
    return compute_radius(d, "MAJOR");
  })
  .attr("fill", (d) => {
    return compute_fill(d, "MAJOR");
  });

// Add Labels to the notes, invisible by default.
svgContainer
  .selectAll("major_root_notes")
  .data(root_notes)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return 100 * d;
  })
  .attr("y", 304)
  .attr("visibility", "hidden")
  .attr("font-size", "16px")
  .text(function (d) {
    return d;
  })
  .style("text-anchor", "middle");

// DO MINOR NEXT

svgContainer
  .selectAll("minor_root_notes")
  .data(root_notes)
  .enter()
  .append("circle")
  .attr("cx", (d) => {
    return d * 100;
  })
  .attr("cy", 500)
  .attr("r", (d) => {
    return compute_radius(d, "MINOR");
  })
  .attr("fill", (d) => {
    return compute_fill(d, "MINOR");
  });

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
