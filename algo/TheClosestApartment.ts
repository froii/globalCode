const blocks= [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school": false,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": true,
    },
]
const reqs = ["gym", "school", "store"]

// The goal is to find the block that is most optimal, meaning it has the shortest distance to all the requisite facilities.
// The Time Complexity of this code is O(br) and Space Complexity is O(br). where b is the total number of blocks and r is the number of requirements.
// This is because the code is iterating over each block for each requirement in order to find the closest blocks that fulfill each requirement.

// Мета - знайти блок, який є найоптимальнішим, тобто має найкоротшу відстань до всіх необхідних зручностей.
// Часова складність цього коду становить O(br), а просторова складність - O(br). де b - це загальна кількість блоків, а r - кількість вимог.
// Це тому, що код ітерує кожен блок для кожної вимоги, щоб знайти найближчі блоки, які виконують кожну вимогу.

interface IBlock {
    [key: string]: boolean;
}

let t = 0
function findStepsToReq(blocks: IBlock[], req: string): number[] {
    const steps: number[] = new Array(blocks.length)
    let closestStep: number = Infinity

    for (let i = 0; i < blocks.length; i++) {
        if(blocks[i][req]) closestStep = i
        steps[i] = Math.abs(i - closestStep)
        t++
    }

    for (let i = blocks.length - 1; i >= 0; i--) {
        if(blocks[i][req]) closestStep = i
        steps[i] = Math.min(steps[i], Math.abs(i - closestStep))
    }

    return steps
}

function findMaxStepPerIndex(minSteps: number[][]): number[] {
    const maxSteps: number[] = []

    for (let i = 0; i < minSteps[0].length; i++) {
        t++
        maxSteps.push( Math.max( ...minSteps.map(s => s[i] )))
    }

    return maxSteps
}

function getIndexOfMinValue (steps: number[]) {
    const minValue = Math.min(...steps);
    return steps.indexOf(minValue)
}

export function apartmentHunting(blocks: IBlock[], reqs: string[]) {
    const minSteps: number[][] = reqs.map(r=>findStepsToReq(blocks, r))
    const maxSteps: number[] = findMaxStepPerIndex(minSteps)
    return getIndexOfMinValue(maxSteps)
}

const result = apartmentHunting(blocks, reqs)
console.log(result)
console.log(t)