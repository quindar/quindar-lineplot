# quindar-lineplot
Line plot directive to display spacecraft vehicle's sensors, temperature, battery, etc.  Idea inspired by angular-flot.

# How to Run 
1. Running buildme file will set up the environment for quindar-lineplot
2. Run server.js by node server.js.

# How to Integrate the Stand Alone Version to Quindar
1. Copy all files except index.html to appropriate Quindar folders.
1. Modify the Quindar index.html to add necessary source links.
1. Totally remove dependencies in app-lineplot.js by removing [] from the module definition line, 
  1. e.g., var app = angular.module('app')
1. Add 'app' as a dependency to angular-lineplot.js.
1. Comment out scopes from angular-lineplot.js.
1. Add controller: 'lineplotCtr', to angular-lineplot.js.
1. Modify widgetDefinitions and $scope.dashboard so that line plot widgets are available. 
