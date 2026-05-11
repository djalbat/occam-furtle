"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get FurtleFileContext () {
        return _furtle.default;
    },
    get FurtleLexer () {
        return _lexer.default;
    },
    get FurtleParser () {
        return _parser.default;
    },
    get lexersUtilities () {
        return _lexers.default;
    },
    get parsersUtilities () {
        return _parsers.default;
    }
});
require("./preamble");
const _lexer = /*#__PURE__*/ _interop_require_default(require("./furtle/lexer"));
const _parser = /*#__PURE__*/ _interop_require_default(require("./furtle/parser"));
const _lexers = /*#__PURE__*/ _interop_require_default(require("./utilities/lexers"));
const _parsers = /*#__PURE__*/ _interop_require_default(require("./utilities/parsers"));
const _furtle = /*#__PURE__*/ _interop_require_default(require("./context/file/furtle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9wcmVhbWJsZVwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZ1cnRsZUxleGVyIH0gZnJvbSBcIi4vZnVydGxlL2xleGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZ1cnRsZVBhcnNlciB9IGZyb20gXCIuL2Z1cnRsZS9wYXJzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV4ZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xleGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L2ZpbGUvZnVydGxlXCI7XG4iXSwibmFtZXMiOlsiRnVydGxlRmlsZUNvbnRleHQiLCJGdXJ0bGVMZXhlciIsIkZ1cnRsZVBhcnNlciIsImxleGVyc1V0aWxpdGllcyIsInBhcnNlcnNVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFvQkE7ZUFBQUEsZUFBaUI7O1FBSmpCQztlQUFBQSxjQUFXOztRQUNYQztlQUFBQSxlQUFZOztRQUNaQztlQUFBQSxlQUFlOztRQUNmQztlQUFBQSxnQkFBZ0I7OztRQUw3Qjs4REFFZ0M7K0RBQ0M7K0RBQ0c7Z0VBQ0M7K0RBQ0MifQ==