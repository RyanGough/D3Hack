var premBetting = [
{team: "man city", traded: 2223550, price: 3.4, position: 5, colour: "light blue"},
{team: "chelsea", traded: 2592514, price: 3.95, position: 3, colour: "yellow"},
{team: "arsenal",traded: 1143269, price: 7.4, position: 1, colour: "orange"},
];

var premBetting2 = [
{team: "man city", traded: 2223550, price: 33.4, position: 15, colour: "light blue"},
{team: "stoke", traded: 2592514, price: 3.95, position: 13, colour: "purple"},
{team: "man united", traded: 2592514, price: 2.95, position: 1, colour: "red"}
];


var xScale = d3.scale.linear()
        .domain([1,50])
        .range([25,775])

var yScale = d3.scale.linear()
        .domain([20,0])
        .range([275,25])


var svg = d3.select("div")
	.append("svg")
	.attr("height", 300)
	.attr("width", 800)

var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")

var yAxis = d3.svg.axis()
				.scale(yScale)
				.orient("left")

svg.append("g")
	.attr("transform", "translate(0,275)")
	.attr("class", "axis")
	.call(xAxis)

svg.append("g")
	.attr("transform", "translate(275,0)")
	.attr("class", "axis")
	.style("line", "1px")
	.call(xAxis)

function draw(data){
	var bind = svg.selectAll("circle")
	.data(data, function(x){return x.team});

	bind
	.enter()
	.append("circle")
	.style("fill", function(x){return x.colour})
	.attr("r", 10)

	bind
	.transition()
	.duration(1000)	
	.attr("cx", function(x){return xScale(x.price)})
	.attr("cy", function(x){return yScale(x.position)})

	bind
	.exit()
	.remove()
}

setInterval(function(){
	draw(premBetting);
	premBetting = premBetting2;
}, 1000)