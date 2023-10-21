google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Tests', 'Tests taken'],
  ['Mr. Iftikhar',5],
  ['Mr. Ahmed',4],
  ['Mr. Roshan',14],
  ['Mr. Patrick',17],
  ['Mr. Noman',7]
]);

// Set Options
const options = {
  title:'Tests taken by teachers till date'
};

// Draw
const chart = new google.visualization.BarChart(document.getElementById('myChart'));
chart.draw(data, options);

}