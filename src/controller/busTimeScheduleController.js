const BusTimeSchedulesService = require('../service/busTimeScheduleService');

class BusTimeScheduleController {
    async getSchedulesByRouteId(req, res){
        try {
            const { route_id } = req.body;
            const allSchedules = await BusTimeScheduleService.getTimeScheduleByRouteId(route_id);
            res.status(200).json(allSchedules);
            console.log(`Successfully fetched all schedule informations under routeId : ${route_id}`);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async filterSchedulesByArrivalTimeAndDestination(req, res) {
        try {
            const { arrivalTime, destination } = req.body;
            if (!arrivalTime || !destination) {
                return res.status(400).json({ error: 'arrivalTime and destination are required' });
            }
            const filteredSchedules = await BusTimeScheduleService.filterByArrivalTimeAndDestination(arrivalTime, destination);
            res.status(200).json(filteredSchedules);
            console.log(`Successfully filtered schedules by arrival time: ${arrivalTime} and destination: ${destination}`);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = new BusTimeScheduleController();