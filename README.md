# squashfs-nodejs
squashfs for nodejs

NOTE: v1.0.0 only supports unsquashfs

## Install

```
sudo apt update && sudo apt install squashfs-tools
npm install squashfs-nodejs
```

## Usage


squashfs.unsquashfs([Squashfs File], [Output directory], [callback])

```
var squashfs = require("squashfs-nodejs");

squashfs.unsquashfs("mySquashfsFile", "/my/ourput/directory", function(metadata){
 console.log("success");
})
```
