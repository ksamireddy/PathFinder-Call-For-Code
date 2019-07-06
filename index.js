var express = require('express');
var app = express();
var PF = require('pathfinding');
var grid = new PF.Grid(5, 3);
grid.setWalkableAt(0, 1, false);
var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);

var finder = new PF.AStarFinder();

var path = finder.findPath(1, 2, 4, 2, grid);

var gridBackup = grid.clone();
// var path = finder.findPath(1, 2, 4, 2, grid);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
