# squashfs-nodejs
squashfs for nodejs

NOTE: v1.0.x only supports unsquashfs

## Install

```
npm install squashfs-nodejs
```

## Usage


squashfs.unsquashfs([Squashfs File], [Output directory], [callback])

```
var squashfs = require("squashfs-nodejs");

squashfs.unsquashfs("mySquashfsFile", "/my/ourput/directory", function(err, errcode){
  if (!err){
    console.log("success");
  }
})
```

### error codes:

ERROR.NOT_EXISTING
ERROR.CANNOT_READ
ERROR.OUTPUT_DIR_EXISTS
ERROR.NOT_ENOUGH_ARGS
ERROR.UNKNOWN
