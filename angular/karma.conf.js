// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        files: [],
        preprocessors: {},
        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
        },
        angularCli: {
            config: './.angular-cli.json',
            environment: 'dev',
        },
        reporters:
            config.angularCli && config.angularCli.codeCoverage ? ['progress', 'coverage-istanbul'] : ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
    });
};
