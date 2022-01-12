module.exports = {
    publicPath: '/iot_weather/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.19.128.107:8081/meteo-0.0.1-SNAPSHOT'
            }
        }
    }
}