'use strict';
const fs = require('fs');
const path = require('path');
const eachAsync = require('each-async');
const makeDir = require('make-dir');
const Minimize = require('minimize');

module.exports = grunt => {
	grunt.registerMultiTask('minifyHtml', 'Minify HTML', function () {
		const done = this.async();
		const options = this.options();

		eachAsync(this.files, (el, i, next) => {
			const minimize = new Minimize(options);
			const src = el.src[0];

			fs.readFile(src, 'utf8', (err, str) => {
				if (err) {
					next(err);
					return;
				}

				minimize.parse(str, (err, min) => {
					if (err) {
						next(err);
						return;
					}

					makeDir(path.dirname(el.dest)).then(() => {
						fs.writeFile(el.dest, min, next);
					}).catch(next);
				});
			});
		}, err => {
			if (err) {
				grunt.warn(err);
			}

			done();
		});
	});
};
