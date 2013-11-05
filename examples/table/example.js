function makeTable(tableData, containerId) {

  var headers = [];
  for(var key in tableData[0]) {
    headers.push(key);
  }

  // create table
  d3.select(containerId)
    .append("table")
    .append("tbody")
    .attr("id", "tableBody");

  // make header row
  d3.select("#tableBody")
    .append("tr")
    .attr("id", "tableHeaderRow");

  // insert headers
  d3.select("#tableHeaderRow")
    .selectAll("th")
    .data(headers)
    .enter()
    .append("th")
    .text(function(d){return d;});

  // make value rows  
  var rows = [];
  for(var index = 0; index < tableData.length; index++) {
    var newRow = headers.map(function(key){
      return tableData[index][key];
    });
    rows.push(newRow);
  }

  // insert value rows
  d3.select("#tableBody")
    .selectAll(".dataRow")
    .data(rows)
    .enter()
    .append("tr")
    .attr("class", "dataRow")

  // insert values
  d3.selectAll(".dataRow")
    .selectAll("td")
    .data(function(d) { return d; })
    .enter().append("td")
    .html(function(d) { return d; });
}

makeTable(californiaUnemploymentData, "#visualisation");


