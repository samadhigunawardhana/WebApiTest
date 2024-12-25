const routeModel = require('../model/routesModel')

class RoutesRepository {
    async ditectAllRoutes(){
        return await routeModel.findAll()
    }
}
module.exports = new RoutesRepository();