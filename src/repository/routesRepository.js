const routesModel = require('../model/routesModel')

class RoutesRepository {
    async ditectAllRoutes(){
        return await routesModel.findAll()
    }
}
module.exports = new RoutesRepository();