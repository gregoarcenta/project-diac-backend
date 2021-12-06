const Course = require("../models/Course");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");
const Institution = require("../models/Institution");
const Teacher = require("../models/Teacher");

//Una materia tiene muchas destrezas y objetivos
Course.hasMany(Destreza)
Course.hasMany(Objective)
//Un objetivo solo pertenece a una materia
Objective.belongsTo(Course)
Destreza.belongsTo(Course)

//Una institucion tiene muchos docentes y un docente solo pertenece a una institucion
//Institution.hasMany(Teacher)
//Teacher.belongsTo(Institution)

Course.hasOne(Teacher)
Teacher.belongsTo(Course)

//Student.belongsToMany(Course, { through: 'student_course' });
//Course.belongsToMany(Student, { through: 'student_course' });