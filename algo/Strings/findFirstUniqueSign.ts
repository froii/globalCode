export function firstNonRepeatingCharacter(string: string) {
    const hash: {[key: string]: number} = {}

    for (let char of string) {
        hash[char] = (hash[char] ?? 0) + 1
    }

    for (let i = 0; i < string.length; i++) {
        if(hash[string[i]] === 1) return i
    }

    return -1;
}

// find index of first unique sigh ( not repeat more )
console.log(firstNonRepeatingCharacter('abcdab'))


// find same word as pair but with reverse letters
export function semordnilap(words: string[]) {
    const wordsSet = new Set()
    const pairArr = []

    for (let word of words) {
        const reveredWord = word.split('').reverse().join('')
        if(wordsSet.has(reveredWord)) pairArr.push([word, reveredWord])
        else wordsSet.add(word)
    }

    return pairArr;
}
