var chai = require('chai');
var expect = chai.expect;
var squashfs = require('../index.js');
var fs = require("fs");
var rimraf = require("rimraf");

describe('unsquashfs', function() {
  it('unsquashfs() should return ERROR.NOT_ENOUGH_ARGS if no args are passed in', () => {
    var unsquashfs = squashfs.unsquashfs();
    expect(unsquashfs).to.equal(squashfs.ERROR.NOT_ENOUGH_ARGS);
  });
  it('unsquashfs() should return ERROR.NOT_ENOUGH_ARGS if 1 items are passed in', () => {
    var unsquashfs = squashfs.unsquashfs("");
    expect(unsquashfs).to.equal(squashfs.ERROR.NOT_ENOUGH_ARGS);
  });
  it('unsquashfs() should return ERROR.NOT_ENOUGH_ARGS if 2 items are passed in', () => {
    var unsquashfs = squashfs.unsquashfs("", "");
    expect(unsquashfs).to.equal(squashfs.ERROR.NOT_ENOUGH_ARGS);
  });
  it('unsquashfs() should return (callback) ERROR.NOT_EXISTING if the file does not exists', (done) => {
    squashfs.unsquashfs("fdjf3kjvkj3kjlj3", "3klvjklejkevle", (err, errcode) => {
      expect(err).to.equal(true);
      expect(errcode).to.equal(squashfs.ERROR.NOT_EXISTING);
      done();
    });
  });
  it('unsquashfs() should return (callback) ERROR.OUTPUT_DIR_EXISTS if the file does not exists', (done) => {
    squashfs.unsquashfs(__dirname+"/squashfs_test.snap", "/tmp", (err, errcode) => {
      expect(err).to.equal(true);
      expect(errcode).to.equal(squashfs.ERROR.OUTPUT_DIR_EXISTS);
      done();
    });
  });
  it('unsquashfs() should return (callback) True and unpack squashfs_test.snap to __dirname/squTest', (done) => {
    squashfs.unsquashfs(__dirname+"/squashfs_test.snap", "/tmp/squTest", (err, errcode) => {
      var ok = true;
      expect(err).to.equal(false);
      if (fs.accessSync("/tmp/squTest/meta/snap.yaml", fs.F_OK))
        ok = false;
      expect(ok).to.equal(true);
      rimraf("/tmp/squTest", () => {
        done();
      })
    });
  });
});
