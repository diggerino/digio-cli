var Command = require('./Command')

/* ...
------------------------------------------------------------------------------*/
var help
, parse
, register



/* Functions
------------------------------------------------------------------------------*/
help = function help () {

}

parse = function parse () {
  try {
    var cmd = new Command(process.argv.splice(2).join(' '))
  }
  catch (err) {
    console.error('Something went wrong');
  }
}

register = function register (mod, cmd, args, desc, func) {

}


module.exports = {
  parse: parse,
  register: register,
  version: _version
}
