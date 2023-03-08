module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      { pattern: 'src/ts/**/*.ts' },
      { pattern: 'src/test/**/*.ts' }
    ],
    exclude: [],
    preprocessors: {
      'src/ts/**/*.ts' : 'karma-typescript',
      'src/test/**/*.ts' : 'karma-typescript'
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        module: 'ES6',
        target: 'ES6'
      },
      exclude: [
        'node_modules'
      ]
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false,
    concurrency: Infinity
  });
};
