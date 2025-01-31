// It checks if the input value is an object or an array.
// If the value is not an object or is null, the value will be returned as is without modification.
// If the value is an array, it will be "flattened" using the flattenArray function.
// If this is an object, it will be "flattened" using the flattenObject function.

// Вона перевіряє, чи є вхідне значення об'єктом або масивом.
// Якщо значення не є об'єктом або воно дорівнює null, значення буде повернуто, як є без змін.
// Якщо значення є масивом, його буде "сплощено" за допомогою функції flattenArray.
// Якщо це об'єкт, його буде "сплощено" за допомогою функції flattenObject.

function flatten(value) {
    if(typeof value !== 'object' || value === null) return value
    if(Array.isArray(value)) return flattenArray(value)
    return flattenObject(value)
}

function flattenObject(obj) {
    const flattenObj = {}

    for(const [k,v] of Object.entries(obj)) {
        const flattenVal = flatten(v)

        if(typeof v === 'object' && v !== null && !Array.isArray(v)) {
            Object.assign(flattenObj, flattenVal)
        } else {
            flattenObj[k] = flattenVal
        }
    }

    return flattenObj
}

function flattenArray(array) {
    return array.reduce((sum,cur) => sum.concat(flatten(cur)), [])
}

// Do not edit the line below.
exports.flatten = flatten;
