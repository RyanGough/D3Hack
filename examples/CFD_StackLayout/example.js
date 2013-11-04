var data = [
  {name: "backlog", color: "blue", column: [
      {date: 1, tickets: 10},
      {date: 2, tickets: 8},
      {date: 3, tickets: 8},
      {date: 4, tickets: 8},
      {date: 5, tickets: 7},
      {date: 6, tickets: 5},
      {date: 7, tickets: 5},
      {date: 8, tickets: 5},
      {date: 9, tickets: 4},
      {date: 10, tickets: 3},
      {date: 11, tickets: 2}
    ]
  },
  {name: "indev", color: "red", column: [
      {date: 1, tickets: 0},
      {date: 2, tickets: 2},
      {date: 3, tickets: 2},
      {date: 4, tickets: 2},
      {date: 5, tickets: 2},
      {date: 6, tickets: 3},
      {date: 7, tickets: 2},
      {date: 8, tickets: 1},
      {date: 9, tickets: 2},
      {date: 10, tickets: 1},
      {date: 11, tickets: 1}
    ]
  },
  {name: "done", color: "green", column: [
      {date: 1, tickets: 0},
      {date: 2, tickets: 0},
      {date: 3, tickets: 0},
      {date: 4, tickets: 0},
      {date: 5, tickets: 1},
      {date: 6, tickets: 2},
      {date: 7, tickets: 3},
      {date: 8, tickets: 4},
      {date: 9, tickets: 4},
      {date: 10, tickets: 6},
      {date: 11, tickets: 7}
    ]
  }
]

var svg = d3.select("#visualisation")
  .append("svg")
  .attr("width", 800)
  .attr("height", 600)

var stack = d3.layout.stack()
    .values(function(d) { return d.column; })
    .x(function(d){return d.date})
    .y(function(d){return d.tickets})
    .out(function (d, y0, y) { d.x = d.date; d.y0 = y0; d.y = d.tickets; })
    .order("reverse")

var xScale = d3.scale.linear()
    .domain([0, 12])
    .range([0, 800]);

var yScale = d3.scale.linear()
    .domain([0, 20])
    .range([600, 0]);

var area = d3.svg.area()
    .x(function(d) { return xScale(d.x); })
    .y0(function(d) { return yScale(d.y0); })
    .y1(function(d) { return yScale(d.y0 + d.y); });

var chartGroup = svg.append("g");

chartGroup.attr("transform", "translate(0,-300)")

chartGroup.selectAll("path")
    .data(stack(data))
    .enter()
    .append("path")
    .attr("d", function(x){return area(x.column)})
    .style("fill", function(d) { return d.color; });
