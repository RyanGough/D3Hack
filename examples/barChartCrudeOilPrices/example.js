var pointsToReturn = 1;

var fullDataSet = crudeOilData.map(function(x){
  return { date: d3.time.format("%x").parse(x.date), price: x.price, adjustedPrice: x.adjustedPrice};
});

function drawBarChart(data) {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var barWidth = width / data.length;

  var formatPercent = d3.format(".0%");

  var x = d3.time.scale()
      .domain([data[0].date, data[data.length - 1].date])
      .range([barWidth / 2, width - (barWidth / 2)]);

  var y = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return d.price; })])
      .range([height, 20]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")

  var svg = d3.select("#visualisationGoesInHere").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price");

    var color = d3.scale.category10();

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.date) - barWidth / 2; })
        .attr("width", barWidth)
        .attr("y", function(d) { return y(d.price); })
        .attr("height", function(d) { return height - y(d.price); })
        .attr("fill", function(d,i){return color(i);}); 
}

drawBarChart(fullDataSet.splice(0,10));
