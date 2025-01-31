Array.prototype.myMap = function (callback) {
    const result = []

    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index], index, this))
    }

    return result
};

Array.prototype.myFilter = function (callback) {
    const result = []

    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this) === true) result.push(this[index])
    }

    return result
};

Array.prototype.myReduce = function (callback, initialValue) {
    const begin = initialValue === undefined ? 1 : 0
    let result = initialValue ?? this[0]

    for (let index = begin; index < this.length; index++) {
        result = callback(result, this[index], index, this)
    }

    return result
};
