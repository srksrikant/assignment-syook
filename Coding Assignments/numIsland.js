let numIslands = function(grid) {
  if (grid === null || grid.length === 0) {
      return 0;
  }
  
  var numIslands = function(grid) {
    if(grid.length === 0)
        return 0;
    
    var countIslands = 0;
    const rowsCount = grid.length;
    const columnsCount = grid[0].length;
    for(var i = 0; i < rowsCount; i++) {
      for(var j = 0; j < columnsCount; j++) {
        if(grid[i][j] == 1) {
          countIslands++;
          colorIsland(grid, i, j, rowsCount, columnsCount);
        }
      }
    }
    
    return countIslands;
  };
  
  var colorIsland = function(grid, i, j, rowsCount, columnsCount) {
    if(i < 0 || j < 0 || i >= rowsCount || j >= columnsCount || grid[i][j] == 0)
        return;
    
    grid[i][j] = 0;
    
    colorIsland(grid, i - 1, j, rowsCount, columnsCount);
    colorIsland(grid, i + 1, j, rowsCount, columnsCount);
    colorIsland(grid, i, j - 1, rowsCount, columnsCount);
    colorIsland(grid, i, j + 1, rowsCount, columnsCount);
  }
  
  module.exports.numIslands = numIslands;