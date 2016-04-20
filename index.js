
var exec = require('child_process').exec;

module.exports = {
  unsquashfs: function (squashfsFile, outputDir, callback) {
    exec(__dirname+"/lib/squashfs-tool/unsquashfs -d "+outputDir+" " + squashfsFile, function(error, stdout, stderr) {
      callback()
    });
  }
}
