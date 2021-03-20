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

// Second bar chart of 7 largest cities by population

// sort cities by population in descending order
var sortedCities2 = cityGrowths.sort((a,b) => a.population - b.population).reverse();

//capture top 7 cities by population
var topSevenCities = sortedCities2.slice(0,7);

// map top 7 cities into 2 arrays, city names and city populations
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.population));

// create bar chart with arrays using Plotly
var trace2 = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data2 = [trace2];
  var layout2 = {
    title: "Top 7 Largest Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population, 2016-2017"}
  };
  Plotly.newPlot("bar-plot2", data2, layout2);