
var exec = require('child_process').exec;

module.exports = {
  unsquashfs: function (squashfsFile, outputDir, callback) {
    exec("unsquashfs -d "+outputDir+" " + squashfsFile, function(error, stdout, stderr) {
      callback()
    });
  }
}
