// Plotly.newPlot("plotArea", [{x: [1, 2, 3,4,5,6,7,8], y: [10, 20, 30, 40, 30, 20,10, 40]}]);

// Create bar chart
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

//  Plotly.newPlot("plotArea", [trace], layout);

// Drinks bar chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
//     };

// var data = [trace];

// var layout = {
//     title: "Pie Chart of Drinks",
// };

//     Plotly.newPlot("plotArea", data, layout);

// Scatterplot
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: "markers",
//     type: "scatter",
//     marker: { size: 12}
//     };

// var data = [trace];

// var layout = {
//     title: "Drinks Preferences",
// };

//     Plotly.newPlot("plotArea", data, layout);

// Map practice
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num + 5;
});
console.log(doubled);

// Extracting properties in arrays with map
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);