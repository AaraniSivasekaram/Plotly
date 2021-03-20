console.log(cityGrowths);

// sort cities in descending order
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

//capture top 5 cities of city growth
var topFiveCities = sortedCities.slice(0,5);

// map top 5 cities into 2 arrays, city names and city growths
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// create bar chart with arrays using Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);