import { Graph, Place } from "./classes.ts";
import * as Places from "./places.ts";

console.log()

const map = new Graph

function addPlacesToGraph(graph: Graph) {
  // Iterate over all properties in Places
  Object.values(Places).forEach((place) => {
      if (place instanceof Place) {
          graph.addPlace(place);  // Add each place to the graph
      }
  });
}

addPlacesToGraph(map)



//Route configurations 
map.addEdge(Places.maingate, Places.educationF, 30);
map.addEdge(Places.maingate, Places.shuttleMainGate, 8);
map.addEdge(Places.maingate, Places.wemaB, 50);
map.addEdge(Places.envScience, Places.wemaB,5 );
map.addEdge(Places.wemaB, Places.sportsComplex,20);
map.addEdge(Places.wemaB, Places.jeliliHall, 10);
map.addEdge(Places.sportsComplex, Places.mosque, 60);
map.addEdge(Places.maingate, Places.wemaB, 50);
map.addEdge(Places.shuttleMainGate, Places.envScience, 30);
map.addEdge(Places.envScience, Places.sportsComplex,21);

map.addEdge(Places.mosque, Places.sportsComplex, 50);


//print the graph
map.printGraph()