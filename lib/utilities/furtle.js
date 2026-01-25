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
var _occamgrammars = require("occam-grammars");
var _Lexer = /*#__PURE__*/ _interop_require_default(require("../furtle/Lexer"));
var _Parser = /*#__PURE__*/ _interop_require_default(require("../furtle/Parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var furtleLexerFromNothing = _occamgrammars.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _occamgrammars.parsersUtilities.furtleParserFromNothing;
var furtleLexer = furtleLexerFromNothing(_Lexer.default);
var furtleParser = furtleParserFromNothing(_Parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvTGV4ZXJcIjtcbmltcG9ydCBGdXJ0bGVQYXJzZXIgZnJvbSBcIi4uL2Z1cnRsZS9QYXJzZXJcIjtcblxuY29uc3QgeyBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKEZ1cnRsZUxleGVyKTtcblxuZXhwb3J0IGNvbnN0IGZ1cnRsZVBhcnNlciA9IGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nKEZ1cnRsZVBhcnNlcik7XG4iXSwibmFtZXMiOlsiZnVydGxlTGV4ZXIiLCJmdXJ0bGVQYXJzZXIiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwiRnVydGxlTGV4ZXIiLCJGdXJ0bGVQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVhQTtlQUFBQTs7UUFFQUM7ZUFBQUE7Ozs2QkFWcUM7NERBRTFCOzZEQUNDOzs7Ozs7QUFFekIsSUFBTSxBQUFFQyx5QkFBMkJDLDhCQUFlLENBQTFDRCx3QkFDRixBQUFFRSwwQkFBNEJDLCtCQUFnQixDQUE1Q0Q7QUFFRCxJQUFNSixjQUFjRSx1QkFBdUJJLGNBQVc7QUFFdEQsSUFBTUwsZUFBZUcsd0JBQXdCRyxlQUFZIn0=