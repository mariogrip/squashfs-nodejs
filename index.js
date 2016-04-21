var squashfs = require("./lib/squashfs-nodejs/build/Release/squashfs.node");

module.exports = {
  unsquashfs: function (squashfsFile, outputDir, callback) {
    //TODO: add arg checks here, since c++ side ONLY can handle string.
    //c++ does some error handeling but they get printed out not returned
    //best would be to have an error callback
    process.nextTick(() => {
      squashfs.unsquashfs(squashfsFile, outputDir);
      callback();
    });

    //TODO: add mksquashfs here and c++ side
  }
};
