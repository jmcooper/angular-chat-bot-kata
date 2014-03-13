module.exports = function(config){
    config.set({
    basePath : '../../',
    files : [
      'app/vendor/angularjs/angular.min.js',
      'app/vendor/angularjs/angular-route.min.js',
      'app//app.js',
      'app/**/*.js',
      'tests/**/*.js',
    ],
    exclude : [
	  'tests/config/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    plugins : ['karma-jasmine', 'karma-chrome-launcher'],
})}
