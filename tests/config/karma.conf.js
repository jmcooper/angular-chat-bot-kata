module.exports = function(config){
    config.set({
    basePath : '../../',
    files : [
      'tests/**/*.js'
      'app/vendor/angularjs/*.js',
      'app/js/**/*.js',
    ],
    exclude : [
	  'tests/config/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    plugins : ['karma-jasmine', 'karma-chrome-launcher'],
})}
