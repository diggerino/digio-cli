var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter()

var Events = function Events () {
  console.log('min event');
}

Events.prototype = Object.create(EventEmitter.prototype)
Events.prototype.constructor = Events

module.exports = new Events()
