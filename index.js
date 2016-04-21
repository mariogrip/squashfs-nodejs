
var exec = require('child_process').exec;

module.exports = {
  unsquashfs: function(squashfsFile, outputDir, callback) {
    exec(__dirname + '/lib/squashfs-tools/unsquashfs -d ' + outputDir + ' ' + squashfsFile, function(err, stdout, stderr) {
      callback(err);
    });
  }
};
