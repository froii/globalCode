class EventTarget {
    constructor() {
        this.events = {}
    }

    addEventListener(name, callback) {
        if (!this.events[name]) this.events[name] = new Set([callback])
        else this.events[name].add(callback)
    }

    removeEventListener(name, callback) {
        this.events[name]?.delete(callback)
    }

    dispatchEvent(name) {
        this.events[name]?.forEach(cal=>cal())
    }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
