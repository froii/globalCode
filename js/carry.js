// good thing if first if function () => do smth..   curry(function callback{})
// and after can be a lot events with different length of arguments - sum(10)(1,2,3)(129)(22,3) ...
// good for observable events !

export function curry(callback) {
    return function (...args) {
        if(!args.length) return callback()
        return curry(callback.bind(this, ...args))
    }
}
