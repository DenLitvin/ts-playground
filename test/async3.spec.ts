import { expect } from 'chai';

const testObject = {
    get1(){
        return new Promise( (resolve) => {
            setTimeout(function(){
                resolve('yes');
            } , 1000);
        });

    },

    get2(word: string){
        if(word == 'yes')
            return Promise.resolve('got it');

        return Promise.resolve('wrong');
    }
}

describe('Promissed messed up', function(){

    it.only('messed up', function(done){

        testObject.get1()
            .then( (value: any) => {
                return testObject.get2(value)
                    .then( something => { //this is bad. This then should be called right after, in the main chain
                        expect(something).to.be.equal('got it');
                    });
            })
            .then( () => {
                done()
            })
            .catch(done);
    });
});