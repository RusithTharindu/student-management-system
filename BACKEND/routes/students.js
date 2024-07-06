const router = require("express").Router();
let Student = require("../models/Student.js");

//student create function
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age); //casting in to a number
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    //"then" is a javascript promise
    newStudent.save().then(() => {
        res.json("Student Added");
    }).catch((err) => {
        console.log(err);
    })

})

//Viewing students
router.route("/").get((req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    });
});

//Update student (put is used to update)
//The ":id" part in the URL is a route parameter in Express.js, which is used to capture a part of the URL as a variable. This allows the route to match any path that follows the /update/ pattern, with the portion after /update/ being accessible in the route handler as req.params.id. This is useful for creating dynamic routes where the specific part of the URL (in this case, an identifier for a student) can vary.

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {name, age, gender} = req.body; //desturcturing method

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status : "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating user data", error: err.message});
    });
});

//delete student
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    });
});

//get a single student
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    //if you want find by users email => await Student.findOne(userId)
    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({status: "User fetched", student});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching user", error: err.message});
    });
})



module.exports = router;