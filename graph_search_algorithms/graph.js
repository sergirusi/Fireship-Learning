const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));



console.log(adjacencyList);

function bfs(start, dest) {
    console.log('BFS start = ', start)
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {

        const airport = queue.shift();

        const destinations = adjacencyList.get(airport);
        for (const destination of destinations) {

            if (destination === dest) {
                console.log('Found '+ dest +'!');
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log('destination = ', destination);
            }
        }
    }
    console.log('--------------------------------')
}

bfs('PHX', 'BKK');

function dfs(start, dest, visited) {
    console.log('DFS start = ', start);
    visited.add(start)
    console.log('visited = ', visited);
    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        
        if(destination === dest) {
            console.log('Found '+ dest +'!');
            return;
        }

        if(!visited.has(destination)) {
            dfs(destination, dest, visited);
        }


    }
    
}

dfs('PHX', 'BKK', new Set());