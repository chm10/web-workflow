var gulp = require ('gulp'),
webpack = require('webpack');

gulp.task ('scripts', function (callback){
	webpack(require('../../webpack.config.js'), function(error,stats){
		if (error){
			console.log(error.toString());
		}else{
			console.log(stats.toString());
		}
		callback();
	});
});