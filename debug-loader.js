const NodePath = require("node:path");

module.exports = function debugLoader(code) {
  console.log({
    $resource: NodePath.relative(this.context, this.resource),
    loaderIndex: this.loaderIndex,
    $loaders: this.loaders.map((l) => NodePath.relative(process.cwd(), l.path)),
  });
  return code;
};
