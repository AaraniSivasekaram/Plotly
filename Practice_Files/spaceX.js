// API call to SpaceX
const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve only the first station's full name
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Retrieve first station's latitude
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Print lat and long of of each station's coorindates
