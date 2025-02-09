
// default - if you know how many
export function findThreeLargestNumbers(array: number[]) {
    let [n1, n2, n3] = [-Infinity, -Infinity, -Infinity]

    for (const v of array) {
        if(v > n1) {
            if (v > n2) {
                if(v > n3) {
                    [n1, n2, n3] = [n2,n3,v]
                }  else [n1, n2] = [n2,v]
            } else  n1 = v
        }
    }
    return [n1, n2, n3];
}
//////////////////////
// but much more batter to have dynamic logic -
export function findNLargestNumbers(array: number[], count: number = 3): number[] {
    const largest = Array(count).fill(-Infinity);

    for (const v of array) {
        for (let i = count - 1; i >= 0; i--) {
            if (v > largest[i]) {
                // Зсуваємо всі більші елементи вправо
                for (let j = 0; j < i; j++) {
                    largest[j] = largest[j + 1];
                }
                largest[i] = v;
                break;
            }
        }
    }
    return largest;
}
/////////////////////
// middleNode just show the easiest idea of searching 2x time - for getting middle :)
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function middleNode(linkedList: LinkedList) {
    let slowNode: LinkedList | null = linkedList
    let fastNode: LinkedList | null = linkedList

    while(fastNode?.next) {
        slowNode = slowNode?.next || null
        fastNode = fastNode?.next?.next || null
    }

    return slowNode
}
