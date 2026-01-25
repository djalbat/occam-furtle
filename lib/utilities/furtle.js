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
    get furtleLexer () {
        return furtleLexer;
    },
    get furtleParser () {
        return furtleParser;
    }
});
var _Lexer = /*#__PURE__*/ _interop_require_default(require("../furtle/Lexer"));
var _Parser = /*#__PURE__*/ _interop_require_default(require("../furtle/Parser"));
var _lexers = require("../utilities/lexers");
var _parsers = require("../utilities/parsers");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var furtleLexer = (0, _lexers.furtleLexerFromNothing)(_Lexer.default);
var furtleParser = (0, _parsers.furtleParserFromNothing)(_Parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRnVydGxlTGV4ZXIgZnJvbSBcIi4uL2Z1cnRsZS9MZXhlclwiO1xuaW1wb3J0IEZ1cnRsZVBhcnNlciBmcm9tIFwiLi4vZnVydGxlL1BhcnNlclwiO1xuXG5pbXBvcnQgeyBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9sZXhlcnNcIjtcbmltcG9ydCB7IGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmdXJ0bGVMZXhlciA9IGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcoRnVydGxlTGV4ZXIpO1xuXG5leHBvcnQgY29uc3QgZnVydGxlUGFyc2VyID0gZnVydGxlUGFyc2VyRnJvbU5vdGhpbmcoRnVydGxlUGFyc2VyKTtcbiJdLCJuYW1lcyI6WyJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJGdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIiwiRnVydGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRYUE7ZUFBQUE7O1FBRUFDO2VBQUFBOzs7NERBUlc7NkRBQ0M7c0JBRWM7dUJBQ0M7Ozs7OztBQUVqQyxJQUFNRCxjQUFjRSxJQUFBQSw4QkFBc0IsRUFBQ0MsY0FBVztBQUV0RCxJQUFNRixlQUFlRyxJQUFBQSxnQ0FBdUIsRUFBQ0MsZUFBWSJ9