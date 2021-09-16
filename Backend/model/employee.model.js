let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({    
    _id:{type:Number, require:true},
    email:{type:String, unique:true},
    fname:{type:String},
    mname:{type:String},
    lname:{type:String},
    password:{type:String, require:true, select:false},
    items:{type:String, unique:true},
    productquantity:{type:String, unique:true},

    
})
let employeeDetails = mongoose.Schema({
    password:{type:String}
    
    
})

let employeeModel = mongoose.model("Employee",employeeSchema);
let employeepass = mongoose.model("Employee-editpass",employeeDetails);
module.exports = employeeModel,employeepass