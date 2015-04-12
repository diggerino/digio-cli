var assert = require('assert')
, Command = require('../lib/Command')

describe('Command', function () {

  it ('should throw error when no command is provided', function () {
    assert.throws(function () {
      new Command()
    }, Error)
  })
  /*
  ----------------------------------------------------------------------------*/
  describe('Command modules and functions', function () {
    var input
      , cmd

    beforeEach(function () {
      input = 'images list'
      cmd = new Command(input)
    })

    it ('should return module called on get_module', function () {
      assert.equal(cmd.get_module(), 'images')
    })

    it ('should return module command called on get_module_function', function () {
      assert.equal(cmd.get_module_function(), 'list')
    })
  })


  /*
  ----------------------------------------------------------------------------*/
  describe('Commands with module specific arguments', function () {

    var input
      , cmd

    beforeEach(function () {
      input = ['images',  'list',  '-t snapshot -a test']
      cmd = new Command(input.join(' '))
    })

    it ('should return array containing module, function and optionals when object is printed', function () {
      assert.deepEqual(cmd.toString(), input)
    })

    it ('should return optionals when command is called', function () {
      assert.deepEqual(cmd.get_arguments(), {t: 'snapshot', a: 'test'})
    })

  })

})
