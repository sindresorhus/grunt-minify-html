'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		minifyHtml: {
			test: {
				files: {
					'test/tmp/fixture.html': 'test/fixture.html'
				}
			}
		},
		simplemocha: {
			test: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'minifyHtml', 'simplemocha', 'clean']);
};
