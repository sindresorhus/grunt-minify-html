'use strict';
var eachAsync = require('each-async');
var Minimize = require('minimize');

module.exports = function (grunt) {
	grunt.registerMultiTask('minifyHtml', 'Minify HTML', function () {
		var options = this.options();

		eachAsync(this.files, function (el, i, next) {
			var minimize = new Minimize(options);
			var src = el.src[0];

			minimize.parse(grunt.file.read(src), function (err, data) {
				if (err) {
					grunt.warn(err);
					next(err);
					return;
				}

				grunt.file.write(el.dest, data);
				next();
			});
		}, this.async());
	});
};
