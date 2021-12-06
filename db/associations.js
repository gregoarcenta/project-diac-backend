const Course = require("../models/Course");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");


Course.hasMany(Destreza)
Course.hasMany(Objective)

Objective.belongsTo(Course)
Destreza.belongsTo(Course)

//Student.belongsToMany(Course, { through: 'student_course' });
//Course.belongsToMany(Student, { through: 'student_course' });