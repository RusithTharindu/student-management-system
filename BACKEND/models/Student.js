const mongoose = require("mongoose");
const schema = mongoose.Schema;

//in mongodb, no need to specify a unique id, because mongo will goive a unique id by default

const studentSchema = new schema({

    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;