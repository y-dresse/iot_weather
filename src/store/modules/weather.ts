import { get_stations, get_weather_info } from "@/services/weather.service"

export default {
    namespaced: true,
    state: () => ({
        stations: [
            {
                "idStation": 1,
                "name": "Paris",
                "latitude" : "48.856614",
                "longitude" : 2.3522219,
            },
            {
                "idStation": 2,
                "name": "Strasbourg",
                "latitude" : 48.5734053,
                "longitude" : 7.7521113,
            },
            {
                "idStation": 3,
                "name": "Reims",
                "latitude" : 49.258329,
                "longitude" : 4.031696,
            }
        ],
        current_station: null
        
    }),
    mutations: {
        stations: (state: any, stations: any) => state.stations = stations,
        current: (state: any, station: any) => state.current_station = station
    },
    actions: {
        async load_stations(context: any){
            const stations = await get_stations();
            context.commit('weather/stations', stations, { root: true });
        },
        async load_weather_info(context: any, id: number){
            const station = await get_weather_info(id);
            station.meteos.reverse();
            context.commit('weather/current', station, { root : true });
        },
        set_current(context: any, id: number){
            const stations = context.getters.stations;
            const station = stations.filter((station: any) => station.idStation === id)[0];
            context.commit('weather/current', station, { root: true });
        },
        remove_current(context: any){
            context.commit('weather/current', null, { root: true });
        }
    },
    getters: {
        stations : (state: any) => state.stations,
        current_station: (state: any) => state.current_station,
        current_weather: (state: any) => state.current_station.meteos[0]
    }
}