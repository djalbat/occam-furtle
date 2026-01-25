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
    get default () {
        return _default;
    },
    get furtleLexerFromEntries () {
        return furtleLexerFromEntries;
    },
    get furtleLexerFromNothing () {
        return furtleLexerFromNothing;
    }
});
var _occamlexers = require("occam-lexers");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../furtle/lexer"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries;
function furtleLexerFromNothing(Class) {
    if (Class === undefined) {
        Class = _lexer.default; ///
    }
    var entries = _lexer.default.entries;
    var rules;
    rules = rulesFromEntries(entries);
    var furtleLexer = lexerFromRules(Class, rules);
    return furtleLexer;
}
function furtleLexerFromEntries(Class, entries) {
    if (entries === undefined) {
        entries = Class; ///
        Class = _lexer.default; ///
    }
    var rules;
    rules = rulesFromEntries(entries);
    var furtleLexer = lexerFromRules(Class, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKENsYXNzKSB7XG4gIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQ2xhc3MgPSBGdXJ0bGVMZXhlcjsgIC8vL1xuICB9XG5cbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIGNvbnN0IGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XG4gIGlmIChlbnRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBlbnRyaWVzID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gRnVydGxlTGV4ZXI7ICAvLy9cbiAgfVxuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVMZXhlckZyb21FbnRyaWVzLFxuICBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nXG59O1xuIl0sIm5hbWVzIjpbImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJGcm9tUnVsZXMiLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJDbGFzcyIsInVuZGVmaW5lZCIsIkZ1cnRsZUxleGVyIiwiZW50cmllcyIsInJ1bGVzIiwiZnVydGxlTGV4ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdDQTtlQUFBOztRQWhCZ0JBO2VBQUFBOztRQWhCQUM7ZUFBQUE7OzsyQkFOZTs0REFFUDs7Ozs7O0FBRXhCLElBQVFDLGlCQUFxQ0MsMkJBQWMsQ0FBbkRELGdCQUFnQkUsbUJBQXFCRCwyQkFBYyxDQUFuQ0M7QUFFakIsU0FBU0gsdUJBQXVCSSxLQUFLO0lBQzFDLElBQUlBLFVBQVVDLFdBQVc7UUFDdkJELFFBQVFFLGNBQVcsRUFBRyxHQUFHO0lBQzNCO0lBRUEsSUFBTSxBQUFFQyxVQUFZRCxjQUFXLENBQXZCQztJQUVSLElBQUlDO0lBRUpBLFFBQVFMLGlCQUFpQkk7SUFFekIsSUFBTUUsY0FBY1IsZUFBZUcsT0FBT0k7SUFFMUMsT0FBT0M7QUFDVDtBQUVPLFNBQVNWLHVCQUF1QkssS0FBSyxFQUFFRyxPQUFPO0lBQ25ELElBQUlBLFlBQVlGLFdBQVc7UUFDekJFLFVBQVVILE9BQVEsR0FBRztRQUVyQkEsUUFBUUUsY0FBVyxFQUFHLEdBQUc7SUFDM0I7SUFFQSxJQUFJRTtJQUVKQSxRQUFRTCxpQkFBaUJJO0lBRXpCLElBQU1FLGNBQWNSLGVBQWVHLE9BQU9JO0lBRTFDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JWLHdCQUFBQTtJQUNBQyx3QkFBQUE7QUFDRiJ9