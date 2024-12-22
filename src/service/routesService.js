const RoutesRepository = require('../repository/routesRepository');

class RoutesServices{
    async detectAllAvailableRoutes(){
        try{
            const routes = await RoutesRepository.ditectAllRoutes();
            return routes;
        }
        
        catch (error){
            throw new Error(`error popup while fetching all route information Error :${error.message}`);
        }
    }
}

module.exports = new RoutesServices();