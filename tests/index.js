const chai = require('chai');
const proxyquire = require('proxyquire').noCallThru();

const { expect } = chai;

describe('ratQuen', () => {
  let index;
  beforeEach((done)=> {
    index = proxyquire('../index.js', {
        'axios': () => {
            return Promise.resolve()
        },
        './timer':function(){
            this.save = ()=>{return};
        },
        'mongoose': {
            connect: () => {return;}
        }
    });
    done();
  })

  it('should return ok is all is ok', (done) => {
    const req = {
        query: {
            ratsNumber:1,
            loop: 1,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(200)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({'status': 'ok'})
                    done();
                }
            }
        }
    }
    index.ratQueen(req, res);
  });
  it('should return ok if loop not exist', (done) => {
    const req = {
        query: {
            ratsNumber:1,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(200)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({'status': 'ok'})
                    done();
                }
            }
        }
    }
    index.ratQueen(req, res);
  });
  it('should return ok if loop is greater', (done) => {
    const req = {
        query: {
            ratsNumber:1,
            loop: 2,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(200)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({'status': 'ok'})
                    done();
                }
            }
        }
    }
    index.ratQueen(req, res);
  });
  it('should return error if not have options', (done) => {
    const req = {
        query: {
            ratsNumber:1,
            loop: 2,
            interval:1
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(500)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({'error': 'error'})
                    done();
                }
            }
        }
    }
    index.ratQueen(req, res);
  });
  it('should return ok if occurr err in axios', (done) => {
    let indexTmp = proxyquire('../index.js', {
        'axios': () => {
           throw "error"
        },
        './timer':function(){
            this.save = ()=>{return};
        },
        'mongoose': {
            connect: () => {return;}
        }
    });
    const req = {
        query: {
            ratsNumber:1,
            loop: 2,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(200)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({status: 'ok'})
                    done();
                }
            }
        }
    }
    indexTmp.ratQueen(req, res);
  });
  it('should return ok if occurr err in save data', (done) => {
    let indexTmp = proxyquire('../index.js', {
        'axios': () => {
            return Promise.resolve()
        },
        './timer':function(){
            this.save = ()=>{throw "error"};
        },
        'mongoose': {
            connect: () => {return;}
        }
    });
    const req = {
        query: {
            ratsNumber:1,
            loop: 2,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(200)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({status: 'ok'})
                    done();
                }
            }
        }
    }
    indexTmp.ratQueen(req, res);
  });
  it('should return ok if occurr other error', (done) => {
    let indexTmp = proxyquire('../index.js', {
        'axios': () => {
            return Promise.resolve()
        },
        './timer':function(){
            this.save = ()=>{return};
        },
        'mongoose': {
            connect: () => {return;}
        }
    });
    const req = {
        query: {
            ratsNumber:1,
            loop: 2,
            interval:1,
            options: "eyJob2xhIjoiY2hhbyJ9"
        }
    }
    const res = {
        status:(status) => {
            expect(status).to.equal(500)
            return {
                json:(data) => {
                    expect(data).to.deep.equal({'error': 'error'})
                    done();
                }
            }
        }
    }
    Promise.all = () => {throw "error"};
    indexTmp.ratQueen(req, res);
  });
});