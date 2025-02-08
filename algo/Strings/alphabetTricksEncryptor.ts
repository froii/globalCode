// O(n)
const LETTERS = 26;
const A_VAL = "a".charCodeAt(0);

const encipher = (charCode: number, key: number) => {
    return String.fromCharCode(A_VAL + (charCode - A_VAL + key) % LETTERS);
}
export function caesarCipherEncryptor(string: string, key: number) {
    return string.split("").map((char) => encipher(char.charCodeAt(0), key)).join("");
}
// шифр цезаря - коли рухається всі бувкви в певну сторону
const res = caesarCipherEncryptor('abcd', 2);
console.log(res); // "cdef" + 2 to abcd
