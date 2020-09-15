import {createAsyncDeferred} from "../src/promise-helper";
import { expect } from 'chai';

describe('async promise examples', () => {
    beforeEach(async () => {
    });

    afterEach(() => {
    });

    it('it passes', async () => {
        // https://chromium.googlesource.com/v8/v8/+/3.29.45/src/promise.js?autodive=0/
        // resolve() resolves with object
        return Promise.all([{}, {}]);
        //return Promise.all<Promise<void>>([{}, {}]);
    });

    it('it passes with deffers', async () => {
        const testDeffered  = createAsyncDeferred();
        return Promise.all([testDeffered]);
        //return Promise.all<Promise<void>>([testDeffered]);
        //return Promise.all([testDeffered.value]);
    });

    it.only('an expect inside asynchronous code will be ignored', (done) => {
        setTimeout( () => {
            expect(true).to.be.false;
            done();
        }, 2);
    });

});
