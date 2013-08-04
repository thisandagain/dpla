var test        = require('tap').test,
    dpla        = require(__dirname + '/../../lib/index.js')('bee69101400e5c89df9ee86f24df2db7');

var request     = dpla({
    uri:    '/items',
    search:     {
        q: 'fruit+AND+banana'
    }
}, function (err, obj) {
    test('functional', function (t) {
        t.equal(err, null, 'error object is null');
        t.type(obj, 'object', 'response is an object');
        t.end();
    });
});