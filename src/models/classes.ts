export class Place {
  name: string;
  latitude: number;
  longitude: number;
  description: string;

  constructor(name: string, latitude: number, longitude: number, description: string) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.description = description;
  }
  getCoordinates(): [number, number] {
    return [this.latitude, this.longitude];
  }
  getName():string{
    return this.name
  }
  
}

export class Graph {
  adjacencyList: Map<Place, Map<Place, number>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Method to add a place (node) to the graph
  addPlace(place: Place): void {
    if (!this.adjacencyList.has(place)) {
      this.adjacencyList.set(place, new Map());
    }
  }

  // Method to add a weighted edge (distance) between two places
  addEdge(place1: Place, place2: Place, distance: number): void {
    if (this.adjacencyList.has(place1) && this.adjacencyList.has(place2)) {
      this.adjacencyList.get(place1)?.set(place2, distance);
      this.adjacencyList.get(place2)?.set(place1, distance); // Assuming it's an undirected graph
    }
  }

  // Method to get neighbors of a place
  getNeighbors(place: Place): Map<Place, number> | undefined {
    return this.adjacencyList.get(place);
  }

  // Method to get the distance between two places
  getDistance(place1: Place, place2: Place): number | undefined {
    return this.adjacencyList.get(place1)?.get(place2);
  }

  // Print the graph for debugging purposes
  printGraph(): void {
    this.adjacencyList.forEach((neighbors, place) => {
      const neighborList = Array.from(neighbors.entries()).map(([neighbor, distance]) => {
        return `${neighbor.getName()} (${distance} m)`;
      });
      console.log(`${place.getName()} -> ${neighborList.join(', ')}`);
    });
  }
}






