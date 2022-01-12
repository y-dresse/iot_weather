import { get_stations } from "@/services/weather.service"

export default {
    namespaced: true,
    state: () => ({
        stations: [
            {
                "idStation": 1,
                "meteos": null,
                "position": "position test"
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
        stations: (state: any, stations: any) => state.stations = stations
    },
    actions: {
        async load_stations(context: any){
            const stations = get_stations();
            context.commit('weather/stations', stations, { root: true });
        }
    },
    getters: {
        stations : (state: any) => state.stations,
        current_station: (state: any) => state.current_station,
        current_weather: (state: any) => state.current_station.meteos[0]
    }
}