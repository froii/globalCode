// one of debounce version
// but i like more hooks version - https://usehooks.com/usedebounce

export function debounce(callback, delay, immediate = false) {
    let tmd
    let canBeRun = immediate

    return function (...args) {
        clearTimeout(tmd)

        if(canBeRun && immediate) {
            callback.apply(this, args)
            canBeRun = false
        }

        tmd = setTimeout(() => {
            if(!immediate) callback.apply(this, args)
            canBeRun = true
        }, delay)
    }
}
