module.exports = {
    publicPath: '/iot_weather/',
    devServer: {
        proxy: 'http://172.19.128.107:8081/'
    }
}