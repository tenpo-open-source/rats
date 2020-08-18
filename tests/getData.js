const chai = require('chai');
const proxyquire = require('proxyquire');

const { expect } = chai;

describe('getData', () => {
  it('should write a file with results', (done) => {
    let getData = proxyquire('../getData.js', {
        'mongoose': {
            connect: () => {return;},
            model:() => {
                return {
                    find: () => {return Promise.resolve([{timestamp:"343434", serviceTime:"324324"}])}
                }
            }
        },
        'fs': {
            writeFileSync: (file) => {
                expect(file).to.equal('results.csv')
                done();
            },
            appendFileSync: (file, line) => {
                expect(file).to.equal('results.csv');
                expect(line).to.equal('343434;324324\n')
            }
        }
    });
  });

});