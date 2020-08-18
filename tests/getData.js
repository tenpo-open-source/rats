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
                    return;
                },
                appendFileSync: (fileTmp, lineTmp) => {
                    file = fileTmp
                    line = lineTmp
                    done()
                    return;
                }
            }
        });
    })
    it('should write a file with results', (done) => {
        expect(file).to.equal('results.csv')
        expect(file).to.equal('results.csv');
        expect(line).to.equal('343434;324324\n')
        done();
    }).timeout(10000);

});