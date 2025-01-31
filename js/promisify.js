export function promisify(callback) {
    return function (...args) {
        return new Promise((res, rej) => {
            // callback.apply(this, [...args, (error, value) => {}])
            callback.call(this, ...args, (error, value) => {
                if(!error) res(value)
                else rej(error)
            })
        })
    }
}
