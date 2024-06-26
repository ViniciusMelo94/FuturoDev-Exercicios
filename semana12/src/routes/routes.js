const { Router } = require("express")
const alunoRoutes = require("./alunos.route")
const cursoRoutes = require("./cursos.route")
const professorRoutes = require("./professores.route")
const loginRoutes = require("./login.route")

const routes = Router()

routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/professores', professorRoutes)
routes.use('/login', loginRoutes)

module.exports = routes