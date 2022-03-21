let whitekeysData = [
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
  "C5",
  "D5",
  "E5",
  "F5",
  "G5",
  "A5",
  "B5",
];
let blackkeysData = [
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

var whitekeys = pianosvg
  .selectAll("whitekeys")
  .data(whitekeysData)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return whitekeywidth * (i + 1);
  })
  .attr("y", 20)
  .attr("width", whitekeywidth)
  .attr("height", 2.5 * whitekeywidth)
  .attr("stroke", "black")
  .attr("fill", "white");

var blackkeys = pianosvg
  .selectAll("blackkeys")
  .data(blackkeysData)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    /** Consider refactoring the code below. */
    if (i < 2) {
      return -0.5 * blackkeywidth + whitekeywidth * (i + 2);
    } else if (i < 5) {
      return -0.5 * blackkeywidth + whitekeywidth * (i + 3);
    } else if (i < 7) {
      return -0.5 * blackkeywidth + whitekeywidth * (i + 4);
    } else {
      return -0.5 * blackkeywidth + whitekeywidth * (i + 5);
    }
  })
  .attr("y", 20)
  .attr("width", blackkeywidth)
  .attr("height", 2.5 * blackkeywidth)
  .attr("stroke", "black")
  .attr("fill", "black");

/** Build the white key labels below this line */
pianosvg
  .selectAll("whitekeysLabels")
  .data(whitekeysData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    return whitekeywidth * (i + 1) + 0.5 * whitekeywidth;
  })
  .attr("cy", (d, i) => {
    return whitekeywidth * 2.45;
  })
  .attr("r", 17)
  .style("fill", "green")
  .style("fill-opacity", 0.3)
  .style("stroke-width", 2)
  .style("stroke", "black")
  .attr("visibility", "hidden");

pianosvg
  .selectAll("minor_root_notes")
  .data(whitekeysData)
  .enter()
  .append("text")
  .attr("x", function (d, i) {
    return whitekeywidth * (i + 1) + 0.5 * whitekeywidth;
  })
  .attr("y", (d, i) => {
    return whitekeywidth * 2.5;
  })
  .attr("font-size", "16px")
  .text(function (d) {
    return d.substring(0, 1);
  })
  .style("text-anchor", "middle");

/** Build the black key labels below this line */
pianosvg
  .selectAll("blackkeylabels")
  .data(blackkeysData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    if (i < 2) {
      return whitekeywidth * (i + 2);
    } else if (i < 5) {
      return whitekeywidth * (i + 3);
    } else if (i < 7) {
      return whitekeywidth * (i + 4);
    } else {
      return whitekeywidth * (i + 5);
    }
  })
  .attr("cy", (d, i) => {
    return blackkeywidth * 2.45;
  })
  .attr("r", 15)
  .style("fill", "white")
  .style("stroke-width", 3)
  .style("stroke", "white")
  .attr("visibility", "hidden");

pianosvg
  .selectAll("blackkeylabels")
  .data(blackkeysData)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    if (i < 2) {
      return whitekeywidth * (i + 2);
    } else if (i < 5) {
      return whitekeywidth * (i + 3);
    } else if (i < 7) {
      return whitekeywidth * (i + 4);
    } else {
      return whitekeywidth * (i + 5);
    }
  })
  .attr("cy", (d, i) => {
    return blackkeywidth * 2.45;
  })
  .attr("r", 15)
  .style("fill", "green")
  .style("fill-opacity", 0.3);

pianosvg
  .selectAll("blackkeylabels")
  .data(blackkeysData)
  .enter()
  .append("text")
  .attr("x", function (d, i) {
    if (i < 2) {
      return whitekeywidth * (i + 2);
    } else if (i < 5) {
      return whitekeywidth * (i + 3);
    } else if (i < 7) {
      return whitekeywidth * (i + 4);
    } else {
      return whitekeywidth * (i + 5);
    }
  })
  .attr("y", (d, i) => {
    return blackkeywidth * 2.55;
  })
  .attr("font-size", "16px")
  .text(function (d) {
    return d.substring(0, 2);
  })
  .style("text-anchor", "middle")
  .style("fill", "white");
