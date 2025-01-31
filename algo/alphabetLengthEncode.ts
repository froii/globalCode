
// Run-Length Encoding (RLE) O(n) — AAAABBBCCDAA to 4A3B2C1D2A   ( can be max number 9 )
// зменшує розмір даних за рахунок заміни послідовних однакових елементів на їх кількість та значення.
export function runLengthEncoding(string: string) {
    if(!string) return ''
    let encoded = "";
    let count = 1;

    for (let i = 1; i <= string.length; i++) {
        if (string[i] === string[i - 1] && count < 9) count++;
        else {
            encoded += count + string[i - 1];
            count = 1;
        }
    }

    return encoded;
}

const res1 = runLengthEncoding( "AAAABBBCCDAA");
console.log(res1); // "4A3B2C1D2A"

// Рядки в JavaScript/TypeScript є незмінними, тому конкатенація кожного разу створює новий рядок, що може сповільнювати виконання.
// У масиві ми можемо просто додавати елементи, а наприкінці об'єднати їх в один рядок.
function alphabetLengthEncode(str: string): string {
    if(!str) return ''
    const encoded: string[] = [];
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1] && count < 9) {
            count++;
        } else {
            encoded.push(`${count}${str[i - 1]}`);
            count = 1;
        }
    }

    return encoded.join("");
}

const res2 = runLengthEncoding( "AAAAaaaaaaaaaaaaaBBBCCDAA");
console.log(res2); // "4A9a4a3B2C1D2A"

// decoding
function runLengthDecode(encoded: string): string {
    let decoded = "";
    let i = 0;

    while (i < encoded.length) {
        const count = parseInt(encoded[i]);
        const char = encoded[i + 1];
        decoded += char.repeat(count);
        i += 2;
    }

    return decoded;
}

const decoded = runLengthDecode("4A3B2C1D2A");
console.log(decoded); // "AAAABBBCCDAA"