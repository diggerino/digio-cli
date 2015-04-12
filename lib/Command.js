/*
 * Command object
 *
 * Each command sent through the CLI module is structured as a Command object
 *
 *    Command(input)
 *    - input is a string containing: (module, function[ -a arg1 -b arg2 -c arg3])
 *    - ouput array: [module, function, optionals]
 *
 *
 *    Example:
 *    - Command('images list -t snapshots')
 *
 *    Returns:
 *    - ['images', 'list', '-t snapshots']
 *
 **/
var Command = function Command (cmd) {
  if (! cmd) {
    throw new Error('No command provided')
  }

  this.input_command = cmd
  this.command_array = []

  this.construct_command_array()
}


Command.prototype.construct_command_array = function () {
  var input_command_array = this.input_command.split(' ')

  this.command_array.push(input_command_array[0])
  this.command_array.push(input_command_array[1])
  this.command_array.push(input_command_array.splice(2).join(' ').trim())
}

Command.prototype.get_arguments = function () {
  var args = {}

  this.command_array[2].split('-').splice(1).forEach(function (e) {
    var arg = e.split(' ')
    args[arg[0]] = arg.splice(1).join(' ').trim()
  })

  return args
}

Command.prototype.get_module = function () {
  return this.command_array[0]
}

Command.prototype.get_module_function = function () {
  return this.command_array[1]
}

Command.prototype.toString = function () {
  return this.command_array
}


module.exports = Command
