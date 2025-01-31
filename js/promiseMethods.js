Promise.myRace = function (promises) {
    return new Promise((res, rej) => {
        promises.forEach(prom => prom.then(res).catch(rej))
    })
};

Promise.myAny = function (promises) {
    return new Promise((res, rej) => {
        let rejectedCount = 0
        promises.forEach(prom => prom.then(res).catch(() => {
            rejectedCount++
            if(rejectedCount === promises.length) rej('all promises rejected')
        }))
    })
};

Promise.myAll = function (promises) {
    return new Promise((res, rej) => {
        const result = []
        let resolvedCount = 0
        let hasRejected = false

        promises.forEach((prom, i) => {
            prom.then(r => {
                if(hasRejected) return

                result[i] = r
                resolvedCount++

                if(resolvedCount === promises.length) res(result)
            }).catch((err) => {
                if (!hasRejected) {
                    hasRejected = true;
                    rej(err);
                }
            });
        })
    })
};

Promise.myAllSettled = function (promises) {
    return new Promise((res) => {
        const result = []
        let settledCount = 0

        promises.forEach((prom, i) => {
            prom
                .then(value => result[i] = {status: 'fulfilled', value})
                .catch(error => result[i] = {status: 'rejected', error})
                .finally(()=> {
                    settledCount++
                    if(settledCount === promises.length) res(result)
                })
        });
    })
};
