function makeTable(tableData, containerId) {

  var headers = [];
  for(var key in tableData[0]) {
    headers.push(key);
  }

  var rows = [];
  for(var index = 0; index < tableData.length; index++) {
    var newRow = headers.map(function(key){
      return tableData[index][key];
    });
    rows.push(newRow);
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
    .text(function(d) { return d; });

  // add click listener to the headers for sorting
  var toggle = false;
  d3.selectAll("th").on("click", function(d,i){
    d3.selectAll(".dataRow").sort(function(a,b){
      if (toggle) {
        console.log("sort descending");
        return d3.descending(a[i], b[i]);
      } else {
        console.log("sort ascending");
        return d3.ascending(a[i], b[i]);
      }
    });
    toggle = !toggle;
  });
}

makeTable(dataset.data, "#visualisationGoesInHere");
