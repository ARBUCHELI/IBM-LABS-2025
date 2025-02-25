const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:5I0iIDLJfnI06PZcMmatnEOZ@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })