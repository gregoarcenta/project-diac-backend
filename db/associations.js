const Course = require("../models/Course");
const Destreza = require("../models/Destreza");
const Objective = require("../models/Objective");
const Criteria = require("../models/Criteria");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Institution = require("../models/Institution");
const User = require("../models/User");
const Role = require("../models/Role");
const Curricular = require("../models/Curricular");
const DestrezaCurricular = require("../models/DestrezaCurricular");
const ObjectiveCurricular = require("../models/ObjectiveCurricular");
const MetodologiaCurricular = require("../models/MetodologiaCurricular");
const CriteriaCurricular = require("../models/CriteriaCurricular");

/***Asociaciones con el modelo course con sus destrezas y objetivos***/
//Una materia tiene muchas destrezas, objetivos y criterios de evaluacion
Course.hasMany(Destreza)
Course.hasMany(Objective)
Course.hasMany(Criteria)
//Un objetivo solo pertenece a una materia
Destreza.belongsTo(Course)
Objective.belongsTo(Course)
Criteria.belongsTo(Course)


/***Asociaciones del modelo course con las destrezas y objetivos del documento curricular***/
//Una materia tiene muchas destrezas y objetivos
Course.hasMany(DestrezaCurricular)
Course.hasMany(ObjectiveCurricular)
//Un objetivo solo pertenece a una materia
ObjectiveCurricular.belongsTo(Course)
DestrezaCurricular.belongsTo(Course)


/***Asociaciones del modelo course con los criterios de evluacion del documento curricular***/
//Una materia tiene muchos criterios de evluacion
Course.hasMany(CriteriaCurricular)
//Un criterios de evluacion solo pertenece a una materia
CriteriaCurricular.belongsTo(Course)


/***Asociaciones del modelo course con las matodologias del documento curricular***/
//Una materia tiene muchas metodologias
Course.hasMany(MetodologiaCurricular)
//Un metodologias solo pertenece a una materia
MetodologiaCurricular.belongsTo(Course)


/***Asociaciones con el modelo Docentes y roles***/
//relaciones con usuarios con docentes y roles
Role.hasMany(User)
User.belongsTo(Role)

Teacher.hasMany(User)
User.belongsTo(Teacher)

//Una Materia solo puede ser impartida por un docente y un docentes solo imparte una materia
Course.hasOne(Teacher)
Teacher.belongsTo(Course)


/***Asociaciones con el modelo Curricular***/
//Una estudiente solo puede ser tener por un documento curricular y un documento solo tiene un estudiante
Student.hasOne(Curricular)
Curricular.belongsTo(Student)

//Una institucion tiene muchos documentos curriculares y un documento solo tiene una institucion
Institution.hasMany(Curricular)
Curricular.belongsTo(Institution)

//Los Docentes pueden estar en muchos documentos y los documentos tiene varios docentes 
Teacher.belongsToMany(Curricular, { through: 'curricular_teachers' })
Curricular.belongsToMany(Teacher, { through: 'curricular_teachers' })

//Un documento curricular tiene muchas materias varias materias pueden estar en muchos documentos
Course.belongsToMany(Curricular, { through: 'curricular_courses' })
Curricular.belongsToMany(Course, { through: 'curricular_courses' })

//Un documento curricular tiene muchas destrezas, varias destrezas pueden estar en muchos documentos
DestrezaCurricular.belongsToMany(Curricular, { through: 'curricular_destrezas' })
Curricular.belongsToMany(DestrezaCurricular, { through: 'curricular_destrezas' })

//Un documento curricular tiene muchas Objetivos, varias Objetivos pueden estar en muchos documentos
ObjectiveCurricular.belongsToMany(Curricular, { through: 'curricular_objectives' })
Curricular.belongsToMany(ObjectiveCurricular, { through: 'curricular_objectives' })

//Un documento curricular tiene muchos criterios de evaluacion, varias criterios de evaluacion pueden estar en muchos documentos
CriteriaCurricular.belongsToMany(Curricular, { through: 'curricular_criteria' })
Curricular.belongsToMany(CriteriaCurricular, { through: 'curricular_criteria' })

//Un documento curricular tiene muchas Metodologias, varias Metodologias pueden estar en muchos documentos
MetodologiaCurricular.belongsToMany(Curricular, { through: 'curricular_metodologia' })
Curricular.belongsToMany(MetodologiaCurricular, { through: 'curricular_metodologia' })


