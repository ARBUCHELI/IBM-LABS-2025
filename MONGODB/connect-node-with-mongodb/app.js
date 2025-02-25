const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./employee');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/bookstore',{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


     
      
      
      
    
        
       