const RoutesServices = require('../service/routesService');

class routeController {
    async getAllRoutes(req, res){
        try{
            const getAllRoutes = await RoutesServices.detectAllAvailableRoutes();
            res.status(200).json({getAllRoutes});
            console.log('fetched all available routes successfully');
        }
        catch(error){
            res.status(400).json({error: error.message});
            console.log('error occured while fetching all routes information')
        }
    }
}

module.exports = new routeController();