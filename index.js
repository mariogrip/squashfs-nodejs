var squashfs = require("./lib/squashfs-nodejs/build/Release/squashfs.node");
var fs = require("fs");
var path = require("path");

var ERROR = {
    NOT_EXISTING: 1,
    CANNOT_READ: 2,
    OUTPUT_DIR_EXISTS: 3,
    NOT_ENOUGH_ARGS: 4,
    UNKNOWN: 12
}

var checkFile = (file, callback) => {
    //TODO: check if file is squashfs file
    fs.access(file, fs.F_OK, (err) => {
        if (err) {
            callback(true, ERROR.NOT_EXISTING);
            return;
        }
        fs.access(file, fs.R_OK, (err) => {
            if (err) {
                callback(true, ERROR.CANNOT_READ);
                return;
            }
            callback(false);
        });
    });
};

var checkDirSync = (dir) => {
  try{
    if (fs.accessSync(dir, fs.F_OK)) {
      return false;
    }
    return ERROR.OUTPUT_DIR_EXISTS;
  }catch(err){
    return false;
  }
};

module.exports = {
    ERROR: ERROR,
    unsquashfs: function(squashfsFile, outputDir, callback) {
      if (!squashfsFile || !outputDir || !callback){
        console.error("not enough arguments provided");
        return ERROR.NOT_ENOUGH_ARGS;
      }
        checkFile(squashfsFile, (err, errcode) => {
            //Use process to be sure it stays running
            if (err) {
                callback(err, errcode);
                return;
            }
            var outputDirCheck = checkDirSync(outputDir);
            if (outputDirCheck) {
                callback(true, outputDirCheck);
                return;
            }
            process.nextTick(() => {
                var err = squashfs.unsquashfs(squashfsFile, outputDir);
                console.log(err);
                if (err === 1) {
                    callback(true, ERROR.UNKNOWN);
                    return;
                }
                callback(false);
            });
        })

        //TODO: add mksquashfs here and c++ side
    }
}
