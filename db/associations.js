const Course = require("../models/Course");
const Curricular = require("../models/Curricular");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Institution = require("../models/Institution");


//Una materia tiene muchas destrezas y objetivos
Course.hasMany(Destreza)
Course.hasMany(Objective)
//Un objetivo solo pertenece a una materia
Objective.belongsTo(Course)
Destreza.belongsTo(Course)

//Una Materia solo puede ser impartida por un docente y un docentes solo imparte una materia
Course.hasOne(Teacher)
Teacher.belongsTo(Course)

//Una estudiente solo puede ser tener por un documento curricular y un documento solo tiene un estudiante
Student.hasOne(Curricular)
Curricular.belongsTo(Student)

//Una institucion tiene muchos documentos curriculares y un documento solo tiene una institucion
Institution.hasMany(Curricular)
Curricular.belongsTo(Institution)

//Un documento curricular tiene muchas materias varias materias pueden estar en muchos documentos
Course.belongsToMany(Curricular, { through: 'curricularCourses' })
Curricular.belongsToMany(Course, { through: 'curricularCourses' })

//Losd Docentes pueden estar en muchos documentos y los documentos tiene varios docentes 
Teacher.belongsToMany(Curricular, { through: 'curricularTeachers' })
Curricular.belongsToMany(Teacher, { through: 'curricularTeachers' })
