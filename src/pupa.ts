/* eslint-disable */
// @ts-nocheck
type Initialize<T> = (
    thenCallback: ((value: T) => void),
    catchCallback: ((reason: any) => void)
) => void

class MyPromise<T> {
    thenCallbacks: ((value: T) => void)[] = []
    catchCallbacks: ((reason: any) => void)[] = []

    constructor(initialize: Initialize<T>) {
        initialize(this.resolve, this.reject)
    }

    then = (thenCallback: (value: T) => void) => {
        this.thenCallbacks.push(thenCallback)
        return new MyPromise(((resolve, reject) => {
        }))
    }

    catch = (catchCallback: (reason: any) => void) => {
        this.catchCallbacks.push(catchCallback)
        return new MyPromise(((resolve, reject) => {
        }))
    }

    private resolve = (value: T) => {
        this.thenCallbacks.forEach((cb) => cb(value))
    }

    private reject = (reason?: any) => {
        this.catchCallbacks.forEach((cb) => cb(reason))
    }
}
