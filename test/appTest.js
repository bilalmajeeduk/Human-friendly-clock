const assert = require('chai').assert;
const app = require('../src/main');

describe('printWord function', function () {

    it('input int return string', function () {
        var result = app.printWords(12, 30)
        assert.typeOf(result, 'String')

    })
})
