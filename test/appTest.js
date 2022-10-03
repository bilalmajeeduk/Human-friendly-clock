const assert = require('chai').assert;
const app = require('../src/main');


describe('humanReadableTimeConverter function', function () {

    it('input int return string', function () {
        let result = app.humanReadableTimeConverter(12, 31)
        assert.typeOf(result, 'String')
    })

    it('sending valid hour and minute input', function () {
        let result = app.humanReadableTimeConverter(12, 55)
        assert.equal(result, "Five to one")
    })

    it('sending valid hour and minute input strictly Equal', function () {
        let result = app.humanReadableTimeConverter(12, 35)
        assert.strictEqual(result, "It's  tweleve  thirty   five  pm");
    })

    it('sending invalid hour input', function () {
        let result = app.humanReadableTimeConverter(122, 31)
        assert.typeOf(result, "String")
    })

    it('sending invalid minute input', function () {
        let result = app.humanReadableTimeConverter(12, 311)
        assert.typeOf(result, "String")
    })

})
