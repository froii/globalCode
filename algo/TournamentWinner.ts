const competitions = [['HTML', 'C'], ['C', 'Python'], ['Python', 'HTML']]
const results = [0, 0, 1]
let t = 0

export function tournamentWinner(competitions: string[][], results: number[]): string {
    const scores: Record<string, number> = {}
    const leader: {name: string, point: number} = {name: '', point: 0}

    for (let i = 0; i < competitions.length; i++) {
        const winI = results[i] === 0 ? 1 : 0
        const winner: string = competitions[i][winI]

        if (scores[winner]) scores[winner] += 3
        else scores[winner] = 3

        if(scores[winner] > leader.point) {
            leader.name = winner
            leader.point = scores[winner]
        }
    }

    return leader.name
}

const result = tournamentWinner(competitions, results)
console.log(result)
console.log(t)