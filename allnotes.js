d3.csv("./DataSources/chord-structure.csv", function (data) {
  let selectedChordType = null;
  let selectedNote = null;
  /* Build the Select / Options here*/
  chordTypeDropdown = d3
    .select("#typeDropdown")
    .append("select")
    .attr("disabled", true);

  let uniqueChordTypes = [...new Set(data.map((item) => item.chord_type))];

  // add the options to the button
  chordTypeDropdown // Add a button
    .selectAll("myOptions") // Next 4 lines add 6 options = 6 colors
    .data(uniqueChordTypes)
    .enter()
    .append("option")
    .text(function (d) {
      return d;
    }) // text showed in the menu
    .attr("value", function (d) {
      return d;
    }); // corresponding value returned by the button

  /* -- Define the onchange function for the selection operations */
  chordTypeDropdown.on("change", function (d) {
    var selectedOption = d3.select(this).property("value");
    selectedChordType = selectedOption;

    pianoLabel.text(() => {
      return (
        "Notes Associated with " + selectedNote + selectedChordType + " chord."
      );
    });

    for (i in data) {
      if (data[i].chord_root != selectedNote) {
        continue;
      }
      if (data[i].chord_type == selectedOption) {
        associated_notes = data[i].notes.split("$");
      }
    }

    /** Update the piano key highlights */
    updateKeyHighlights();

    /** Update the radius of the associated notes */
    notes.attr("r", (d) => {
      if (associated_notes.includes(d.key)) {
        return 30;
      } else {
        return 20;
      }
    });

    // This should reset the force simulation
    simulation.force("x").initialize(groupedData);
  });

  function findNotes(root_note) {
    let unparsed;

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
  var width = 650;
  var height = 850;

  // append the svg object to the body of the page
  var svg = d3
    .select("#mainSVG")
    .append("svg")
    .style("background", "#F3F5F8")
    .attr("width", width)
    .attr("height", height)
    .style("border-radius", "15px");
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
      chordTypeDropdown.attr("disabled", null);
      progressionDropdown.attr("disabled", null)
    });

  // Features of the forces applied to the nodes:
  var simulation = d3
    .forceSimulation()
    .force(
      "x",
      d3
        .forceX()
        .strength((d) => {
          return 1;
        })
        .x(function (d) {
          return getGroup(d.key, selectedChordType);
        })
    )
    .force(
      "y",
      d3
        .forceY()
        .strength(0.5)
        .y(height / 2)
    )
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

  /** HERE IS THE PSEUDO GLOBAL */
  var associated_notes = null;

  function updateKeyHighlights() {
    whiteKeyCircles.attr("visibility", (d) => {
      if (associated_notes.includes(d.substring(0, 1))) {
        return "visible";
      } else {
        return "hidden";
      }
    });

    blackKeyCircles.attr("visibility", (d) => {
      if (
        associated_notes.includes(d.substring(0, 2)) ||
        associated_notes.includes(sharpToFlat(d.substring(0, 2)))
      ) {
        return "visible";
      } else {
        return "hidden";
      }
    });
    blackKeyCircles2.attr("visibility", (d) => {
      if (
        associated_notes.includes(d.substring(0, 2)) ||
        associated_notes.includes(sharpToFlat(d.substring(0, 2)))
      ) {
        return "visible";
      } else {
        return "hidden";
      }
    });
  }

  function clickNode(note) {
    d3.select("#chordDropdown").attr("disabled", false);

    selectedNote = note;
    selectedChordType = null;
    associated_notes = findNotes(note);
    // associated_notes.shift(); // Removes first element (IS THIS NECESSARY?!?!?!)
    // Format Notes that need formatting
    for (i in associated_notes) {
      if (
        associated_notes[i].includes("bb") ||
        associated_notes[i].includes("##")
      ) {
        associated_notes[i] = formatNoteName(associated_notes[i]);
      }
    }

    var labels = generateChordsOfKey(note);

    // Update major chord labels
    if (majorChordLables) majorChordLables.remove();

    majorChordLables = svgContainer
      .selectAll("major_chord_labels")
      .data(labels)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return 100 * (i + 1);
      })
      .attr("y", 305)
      // .attr("visibility", "hidden")
      .attr("font-size", "16px")
      .text(function (d) {
        return d.major;
      })
      .style("text-anchor", "middle");

    // Update minor chord labels
    if (minorChordLables) minorChordLables.remove();

    minorChordLables = svgContainer
      .selectAll("major_chord_labels")
      .data(labels)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return 100 * (i + 1);
      })
      .attr("y", 655)
      .attr("font-size", "16px")
      .text(function (d) {
        return d.minor;
      })
      .style("text-anchor", "middle");

    /** Update the highlights on the piano keyboard */

    updateKeyHighlights();

    pianoLabel.text(() => {
      return "Notes Associated with all of the " + note + " chords.";
    });

    /* Style each of the nodes based on whether or not they are associated with the current key. */
    notes.style("fill", (d) => {
      if (note == d.key) {
        return "red";
      } else if (associated_notes.includes(d.key)) {
        return "green";
      } else {
        return "#752bb5";
      }
    });

    notes.attr("r", (d) => {
      if (note == d.key || associated_notes.includes(d.key)) {
        return 30;
      } else {
        return 20;
      }
    });

    /** RESTART THE SIMULATION -- FORCE THE NODES TO UPDATE */
    simulation.force("x").initialize(groupedData);
  }

  function getGroup(note, chord_type) {
    // if (chord_type == null) {
    if (associated_notes) {
      if (associated_notes.includes(note)) {
        return 2 * (width / 4) - 100;
      } else {
        return 3 * (width / 4);
      }
    } else {
      return 2 * (width / 4);
    }
  }
});
