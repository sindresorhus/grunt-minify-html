'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should minify HTML', function () {
	var actual = grunt.file.read('test/tmp/fixture.html');
	assert.strictEqual(actual, '<div class="slide nodejs"></div>');
});
