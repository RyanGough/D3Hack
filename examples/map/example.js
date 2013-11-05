var width = 960,
    height = 1160;

var projection = d3.geo.albers()
    .center([0, 55.4])
    .rotate([4.4, 0])
    .parallels([50, 60])
    .scale(1200 * 5)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#visualisation").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll(".subunit")
    .data(topojson.feature(uk, uk.objects.subunits).features)
  .enter().append("path")
    .attr("class", function(d) { return "subunit " + d.id; })
    .attr("d", path);

svg.append("path")
    .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a !== b && a.id !== "IRL"; }))
    .attr("d", path)
    .attr("class", "subunit-boundary");

svg.append("path")
    .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a === b && a.id === "IRL"; }))
    .attr("d", path)
    .attr("class", "subunit-boundary IRL");




var pointsOfInterest = [
  {name: "Manchester", lat: 53.4667 , lon: -2.2333},
  {name: "London", lat: 51.5072 , lon: -0.1275}
]
svg.selectAll("circle")
  .data(pointsOfInterest)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
   return projection([d.lon, d.lat])[0];
  })
  .attr("cy", function(d) {
   return projection([d.lon, d.lat])[1];
  })
  .attr("r", 5)
  .style("fill", "red");