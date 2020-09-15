import {createAsyncDeferred} from "../src/promise-helper";
import { expect } from 'chai';

const testObject = {
    func1(){
        return new Promise( (resolve) => {
            setTimeout(function(){
                resolve('func1');
            } , 1000);
        });
    },

    func2(){
        return new Promise( function(resolve){
            setTimeout(function(){
                resolve('func2');
            } , 100);
        });
    },

    func3(){
        return new Promise( function(resolve){
            setTimeout(function(){
                resolve('func3');
            } , 100);
        });
    },

    func4(){
        return new Promise( function(resolve){
            setTimeout(function(){
                resolve('func4');
            } , 1000);
        });
    }
}

describe('Promise examples', () => {
    beforeEach(async () => {
    });

    afterEach(() => {
    });

    it('func1 is bad test', () => {
        testObject.func1()
            .then(val => {
                expect(val).to.be.equal('a wrong value ');
            } );// it passes
    });

    it('func 2',  function(done){
        testObject.func2().then( val => {
            expect(val).to.be.equal('func2');
            done();
        })
    });

    it('func 3' , (done) =>{
        testObject.func3().then(val => {
            expect(val).to.be.equal('func3');
            done();//passing done and calling it: everything is ok.
        });
    });

    it('func 4', (done) =>{
        testObject.func4().then(val => {
            expect(val).to.be.equal('func4');
            done();//passing done and calling it: everything is ok.
        });
    });



});
