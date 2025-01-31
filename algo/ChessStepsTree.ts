
const getKnightMoves = (x: number, y: number): number[][] => {
    return [
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x - 1, y - 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x + 1, y + 2]
    ]
        // .filter(([xi, yi]) => xi >= 0 && xi <= x && yi >= 0 && yi <= y);
};
// O(n)
const findDistance = (x: number, y: number, exit: string = '0,0') => {
    let step = 0;
    let currentCoords = new Set<string>([exit]);
    let visitedCoords = new Set<string>();

    while (!currentCoords.has(`${x},${y}`)) {
        const nextCoords = new Set<string>();

        for (const cord of currentCoords) {
            const [cur_x, cur_y] = cord.split(',').map(Number);

            for (const [next_x, next_y] of getKnightMoves(cur_x, cur_y)) {
                const next_key = `${next_x},${next_y}`;

                if (!visitedCoords.has(next_key)) {
                    nextCoords.add(next_key);
                    visitedCoords.add(next_key);
                }
            }
        }

        step += 1;
        currentCoords = nextCoords;
    }

    return step;
};
console.log(findDistance(0,0))
console.log(findDistance(3,5))
console.log(findDistance(13,15))