// Use this as a validation for connecting d3 components.

d3.csv("./DataSources/chord-structure.csv", function (data) {
  unique_data = d3
    .map(data, function (d) {
      return d.chord_root;
    })
    .keys();


  var groupedData = d3
    .nest()
    .key(function (d) {
      return d.chord_root;
    })
    .entries(data);

  console.log(groupedData)

  svgContainer
    .selectAll("root_notes")
    .data(unique_data)
    .enter()
    .append("text")
    .text(function (d) {
      return d.chord_root;
    });
});
