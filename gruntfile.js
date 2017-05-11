'use strict';
module.exports = grunt => {
	grunt.initConfig({
		minifyHtml: {
			test: {
				files: {
					'test/tmp/fixture.html': 'test/fixture.html'
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['minifyHtml']);
};
