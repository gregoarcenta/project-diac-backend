const Course = require("../models/Course");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");
const Teacher = require("../models/Teacher");

//Una materia tiene muchas destrezas y objetivos
Course.hasMany(Destreza)
Course.hasMany(Objective)
//Un objetivo solo pertenece a una materia
Objective.belongsTo(Course)
Destreza.belongsTo(Course)

//Una Materia solo puede ser impartida por un docente y un docentes solo imparte una materia
Course.hasOne(Teacher)
Teacher.belongsTo(Course)
