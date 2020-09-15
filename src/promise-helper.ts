export interface AsyncDeferred<T, E = Error> {
    resolve(value: T): void;
    reject(error: T | E): void;
    value: Promise<T>;
}

export const createAsyncDeferred = <T = void, E = Error>(): AsyncDeferred<T, E> => {
    let resolve: (value: T) => void;
    let reject: (error: E) => void;
    const value = new Promise<T>((pResolve, pReject) => {
        resolve = (t: T) => {
            pResolve(t);
        };
        reject = (e: E) => {
            pReject(e);
        };
    });
    return { resolve: resolve!, reject: reject!, value };
};
