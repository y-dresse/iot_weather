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
        current_station: {
            "idStation": 1,
            "meteos": [
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                },
                {
                    "idMeteo": 1,
                    "currentTime": "1999-01-08T04:05:06.000+00:00",
                    "humidity": 10,
                    "pressure": 10,
                    "temperature": 10,
                    "uv": 10,
                    "cloudCoverage": 10,
                    "cloudAltitude": 10,
                    "precipitation": 10,
                    "windDirection": "NORTH",
                    "windDegree": 10,
                    "windSpeed": 10
                }
            ],
            "position": "position test"
        }
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
            const station = await get_weather_info(id)
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