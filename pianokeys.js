let whitekeys = [
  "C4",
  " D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
  "C5",
  " D5",
  "E5",
  "F5",
  "G5",
  "A5",
  "B5",
];
let blackkeys = [
  "C#4",
  "D#4",
  "F#4",
  "G#4",
  "A#4",
  "C#5",
  "D#5",
  "F#5",
  "G#5",
  "A#5",
];

let pianosvg = d3
  .select("body")
  .append("svg")
  .attr("width", 1600)
  .attr("height", 200)
  .style("background", "#F3F5F8")
  .style("border-radius", "15px");

let whitekeywidth = 65;
let blackkeywidth = 40;

pianosvg
  .selectAll("whitekeys")
  .data(whitekeys)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    console.log(whitekeywidth * (i + 1));
    return whitekeywidth * (i + 1);
  })
  .attr("y", 20)
  .attr("width", whitekeywidth)
  .attr("height", 2.5 * whitekeywidth)
  .attr("stroke", "black")
  .attr("fill", "white");

pianosvg
  .selectAll("blackkeys")
  .data(blackkeys)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    /** Consider refactoring the code below. */
    if (i < 2) {
      return whitekeywidth - 0.5 * blackkeywidth + whitekeywidth * (i + 1);
    } else if (i < 5) {
      return whitekeywidth - 0.5 * blackkeywidth + whitekeywidth * (i + 2);
    } else if (i < 7) {
      return whitekeywidth - 0.5 * blackkeywidth + whitekeywidth * (i + 3);
    } else {
      return whitekeywidth - 0.5 * blackkeywidth + whitekeywidth * (i + 4);
    }
  })
  .attr("y", 20)
  .attr("width", blackkeywidth)
  .attr("height", 2.5 * blackkeywidth)
  .attr("stroke", "black")
  .attr("fill", "black");
