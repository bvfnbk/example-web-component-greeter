module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'src/public/index.html', watched: true},
      {pattern: 'src/public/HelloMessage.js', watched: true},
      {pattern: 'src/test/**/*.spec.js', watched: true}
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false,
    concurrency: Infinity
  });
};
