// o(n log n )
// O(N), where  is the total number of characters across all strings.
// fast way for common strings ( спільний , поширений , уживаний - common )


export function commonCharacters(strings: string[]) {
    const hash: Set<string> = new Set(strings[0]);

    for (let i = 1; i < strings.length; i++) {
        const compare = new Set(strings[i])
        for (const char of hash) {
            if(!compare.has(char)) hash.delete(char)
        }
    }

    return Array.from(hash)
}

// check if the all signs from characters are in document
export function generateDocument(characters: string, document: string) {
    const hash: {[key: string]: any} = {}

    for (const sign of characters) {
        if(hash[sign]) hash[sign] += 1
        else hash[sign] = 1
    }

    for (const sign of document) {
        if(hash[sign] > 1) hash[sign] -= 1
        else if (hash[sign] === 1) delete hash[sign]
        else return false
    }

    return Object.keys(hash).length === 0;

    // if we need to check only document with all signs from characters
    // for (const sign of document) {
    //     if(hash[sign] > 0) hash[sign] -= 1
    //     else return false
    //   }
    //
    //   return true
}

console.log(generateDocument('Bste!hetsi ogEAxpelrt  ', 'AlgoExpert is the Best!'))

