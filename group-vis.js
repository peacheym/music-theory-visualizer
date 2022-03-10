function formatNoteName(note) {
  console.log("Formatting " + note);
  // if (note.includes("bb")) {
  //   switch (note) {
  //     case "Abb":
  //       return "G";
  //     case "Bbb":
  //       return "A";
  //     case "Cbb":
  //       return "Bb";
  //     case "Dbb":
  //       return "C";
  //     case "Ebb":
  //       return "D";
  //     case "Fbb":
  //       return "Eb";
  //     case "Gbb":
  //       return "F";
  //     default:
  //       return "ERROR";
  //   }
  // }
  // if (note.includes("##")) {
  //   switch (note) {
  //     case "A##":
  //       return "B";
  //     case "B##":
  //       return "C#";
  //     case "C##":
  //       return "D";
  //     case "D##":
  //       return "E";
  //     case "E##":
  //       return "F#";
  //     case "F##":
  //       return "G";
  //     case "G##":
  //       return "A";
  //     default:
  //       return note;
  //   }
  // }
}

function generateChordsOfKey(root_note){
  majorChords = []
  minorChords = []

  majorChords.push(root_note)
  majorChords.push(root_note )

  console.log(majorChords)
}

d3.csv("./DataSources/chord-structure.csv", function (data) {
  function findNotes(root_note) {
    let unparsed;
    console.log("Searching for notes associated with: " + root_note);

    // Find the data needed.
    for (i in groupedData) {
      if (groupedData[i].key == root_note) {
        unparsed = groupedData[i];
        break;
      }
    }

    return [
      ...new Set(
        unparsed.values
          .map((v) => {
            return v.notes.split("$");
          })
          .flat()
      ),
    ];
  }

  var groupedData = d3
    .nest()
    .key(function (d) {
      return d.chord_root;
    })
    .entries(data);

  // set the dimensions and margins of the graph
  var width = 600;
  var height = 600;

  // append the svg object to the body of the page
  var svg = d3
    .select("body")
    .append("svg")
    .style("background", "#fff5e8")
    .attr("width", width)
    .attr("height", height);

  // Initialize the circle: all located at the center of the svg area
  var notes = svg
    .append("g")
    .selectAll("notes")
    .data(groupedData)
    .enter()
    .append("circle")
    .attr("r", 30)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("group", function (d, i) {
      //console.log(i);
      return i;
    })
    .style("fill", (d) => {
      return "#752bb5";
    })
    .style("fill-opacity", 0.3)
    .attr("stroke", "#7F7D7D")
    .style("stroke-width", 4)
    .call(
      d3
        .drag() // call specific function when circle is dragged
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("click", function (d, i) {
      clickNode(d.key);
    });

  // Features of the forces applied to the nodes:
  var simulation = d3
    .forceSimulation()
    .force(
      "x",
      d3
        .forceX()
        .strength((d) => {
          //console.log(d);
          return 0.1;
        })
        .x(function (d) {
          //console.log(d);
          return width / 2;
        })
    )
    .force(
      "y",
      d3
        .forceY()
        .strength(0.1)
        .y(height / 2)
    )
    .force(
      "center",
      d3
        .forceCenter()
        .x(width / 2)
        .y(height / 2)
    ) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(0.5).radius(35).iterations(1)); // Force that avoids circle overlapping

  notes_labels = svg
    .selectAll("mylabels")
    .data(groupedData)
    .enter()
    .append("text")
    // .style("pointer-events", none)
    .attr("x", function (d) {
      return d.x ? d.x : 0;
    })
    .attr("y", function (d) {
      return d.y ? d.y : 0;
    })
    .text(function (d) {
      return d.key;
    })
    .style("text-anchor", "middle");

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation.nodes(groupedData).on("tick", function (d) {
    notes
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });

    notes_labels
      .attr("x", function (d) {
        // console.log(d.x)
        return d.x;
      })
      .attr("y", function (d) {
        return d.y + 4;
      });
  });

  // What happens when a circle is dragged?
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.03).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0.03);
    d.fx = null;
    d.fy = null;
  }

  function clickNode(note) {
    associated_notes = findNotes(note);
    associated_notes.shift(); // Removes first element

    // Format Notes that need formatting
    for (i in associated_notes) {
      if (
        associated_notes[i].includes("bb") ||
        associated_notes[i].includes("##")
      ) {
        associated_notes[i] = formatNoteName(associated_notes[i]);
      }
    }

    generateChordsOfKey(note)

    // Update Styles
    //console.log(associated_notes);
    notes.style("fill", (d) => {
      if (note == d.key) {
        return "red";
      } else if (associated_notes.includes(d.key)) {
        //console.log(note);
        return "green";
      } else {
        return "#752bb5";
      }
    });
  }
});
