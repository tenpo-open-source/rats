const chai = require('chai');
const proxyquire = require('proxyquire');

const { expect } = chai;

describe('getData', () => {
    let getData;
    let file;
    let line;
    before((done) => {
        getData = proxyquire('../getData.js', {
            'mongoose': {
                connect: () => {return;},
                model:() => {
                    return {
                        find: () => {return Promise.resolve([{timestamp:"343434", serviceTime:"324324"}])}
                    }
                }
            },
            'fs': {
                writeFileSync: (fileTmp) => {
                    file = fileTmp
                    done()
                }
            }
        });
    })
    it('should write a file with results', (done) => {
        expect(file).to.equal('results.csv')
        done();
    });

});