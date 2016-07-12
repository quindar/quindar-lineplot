# quindar-lineplot
Updated: Jul 12, 2016 by Masaki Kakoi

## SUmmary
Line plot directive to display spacecraft vehicle's sensors, temperature, battery, etc.  Idea inspired by angular-flot.

## Dependencies
Once you download the quindar-lineplot folder, you need to run buildme.sh in the example folder to install required modules. 

```
./buildme.sh
```

If you run on Windows, you can do:
```
npm install
```


## How to Run the Demo
Go to the /example folder and run server.js to open the local host port: 

```  
node server.js
```

Open a Web browser with the URL http://localhost:3000. You should see a Web page with a line plot graph.
You can click "Stream" to start streaming satellite telemetry data at real time.
If you can click "Load" and then "Plot", you can render historic satellite telemtry data.

From the top left corner, you can select the satellite spacecraft (e.g. Audacy1, Audacy2) and the telemetry data types (e.g. x, y, z are position telemetry data points).

## How to Integrate with Quindar
Quindar (https://github.com/audacyDevOps/quindar-angular) is a real-time mission operations application produced by Audacy. You can add this widget in grid-like window of Quindar as per the following steps:

1. Copy all files except index.html to appropriate Quindar folders.
1. Modify the Quindar index.html to add necessary source links.
1. Totally remove dependencies in app-lineplot.js by removing [] from the module definition line, 
  1. e.g., var app = angular.module('app')
1. Add 'app' as a dependency to angular-lineplot.js.
1. Comment out scopes from angular-lineplot.js.
1. Add controller: 'lineplotCtr', to angular-lineplot.js.
1. Modify widgetDefinitions and $scope.dashboard so that line plot widgets are available. 
