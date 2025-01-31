// normal js logic but - https://usehooks.com/usethrottle

export function throttle(callback, delay) {
    let timerId
    let lastCalledTime = 0

    const throttledFunction = function (...args) {
        const currTime = Date.now()
        const timeSInceLastCall = currTime - lastCalledTime
        const delayRmaining = delay - timeSInceLastCall

        if(delayRmaining <= 0) {
            lastCalledTime = currTime
            callback.apply(this, args)
        } else {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                lastCalledTime = Date.now()
                callback.apply(this, args)
            }, delayRmaining)
        }
    }

    throttledFunction.cancel = () => clearTimeout(timerId)

    return throttledFunction
}
