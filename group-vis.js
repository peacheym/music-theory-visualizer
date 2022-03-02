d3.csv("./DataSources/chord-structure.csv", function (data) {
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
  var node = svg
    .append("g")
    .selectAll("circle")
    .data(groupedData)
    .enter()
    .append("circle")
    .attr("r", 25)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .style("fill", (d) => {
      console.log(d.key);
      return "#752bb5";
    })
    .style("fill-opacity", 0.3)
    .attr("stroke", "#b3a2c8")
    .style("stroke-width", 4)
    .call(
      d3
        .drag() // call specific function when circle is dragged
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  // Features of the forces applied to the nodes:
  var simulation = d3
    .forceSimulation()
    .force(
      "center",
      d3
        .forceCenter()
        .x(width / 2)
        .y(height / 2)
    ) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(0.1).radius(30).iterations(1)); // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation.nodes(groupedData).on("tick", function (d) {
    node
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
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
});
