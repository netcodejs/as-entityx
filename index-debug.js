const fs = require("fs");
const loader = require("@assemblyscript/loader");
const WASI = require("wasi").WASI;
const wasi = new WASI();
const imports = {
  /* imports go here */
  wasi_snapshot_preview1: wasi.wasiImport,
};
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/build/untouched.wasm"),
  imports
);
wasi.start(wasmModule);
module.exports = wasmModule.exports;
