import fs from 'fs';
import test from 'ava';

test(t => {
	t.is(
		fs.readFileSync('test/tmp/fixture.html', 'utf8'),
		'<div class="slide nodejs"></div>'
	);
});
