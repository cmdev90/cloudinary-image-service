const Eureka = require('eureka-js-client').Eureka;
const client = new Eureka({
    instance: {
        app: 'nodejs-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': 4000,
            '@enabled': 'true',
        },
        vipAddress: 'jq.test.something.com',
        statusPageUrl: 'http://localhost:3000/api/login',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});

module.exports = function connectToEureka() {
    client.logger.level('debug');
    client.start(function (error) {
        console.log(JSON.stringify(error) || 'Eureka registration complete');
    });
}
