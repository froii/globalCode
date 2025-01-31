// good example how we can create own Observable just in function
// good with carry.js logic - for avoiding extra errors.

function createObservable<T>(value: T) {
    let _value = value;
    const observers = new Set<(value: T) => void>();
    return {
        get value() {
            return _value;
        },
        set value(newValue: T) {
            _value = newValue;
            observers.forEach(observer => observer(newValue));
        },
        subscribe(observer: (value: T) => void) {
            observers.add(observer);
        },
        unsubscribe(observer: (value: T) => void) {
            observers.delete(observer);
        }
    }
}

const observer1 = (value: number) => console.log(`Observer 1: ${value}`);
const observer2 = (value: number) => console.log(`Observer 2: ${value}`);

const observable = createObservable(10);
observable.subscribe(observer1);
observable.subscribe(observer2);
observable.value = 20;

observable.unsubscribe(observer1);
observable.value = 30;
observable.value = 50;