const fs = require('fs')
const mongoose = require('mongoose');
const mongoURI = 'YOURMLABURI';

mongoose.connect(mongoURI, {
    auth: {
        user: 'YOURMLABUSER',
        password: 'YOURMLABPASSWORD'
    },
    useNewUrlParser: true, 
    useUnifiedTopology: true});
    
const getData = async() => {
    var timers = mongoose.model('timers', {
        timestamp: String , 
        serviceTime: String
    });
    const data =  await timers.find()
    fs.writeFileSync('results.csv', "")
    data.forEach((ratResponse) => {
        fs.appendFileSync('results.csv', `${ratResponse.timestamp};${ratResponse.serviceTime}\n`);
    })
}

getData()
