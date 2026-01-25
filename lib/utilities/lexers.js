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
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XG4gIGlmIChlbnRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBlbnRyaWVzID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gRnVydGxlTGV4ZXI7ICAvLy9cbiAgfVxuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICBDbGFzcyA9IEZ1cnRsZUxleGVyOyAgLy8vXG4gIH1cblxuICBjb25zdCB7IGVudHJpZXMgfSA9IEZ1cnRsZUxleGVyO1xuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVMZXhlckZyb21FbnRyaWVzLFxuICBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nXG59O1xuIl0sIm5hbWVzIjpbImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJGcm9tUnVsZXMiLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJDbGFzcyIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJGdXJ0bGVMZXhlciIsInJ1bGVzIiwiZnVydGxlTGV4ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdDQTtlQUFBOztRQWhDZ0JBO2VBQUFBOztRQWdCQUM7ZUFBQUE7OzsyQkF0QmU7NERBRVA7Ozs7OztBQUV4QixJQUFRQyxpQkFBcUNDLDJCQUFjLENBQW5ERCxnQkFBZ0JFLG1CQUFxQkQsMkJBQWMsQ0FBbkNDO0FBRWpCLFNBQVNKLHVCQUF1QkssS0FBSyxFQUFFQyxPQUFPO0lBQ25ELElBQUlBLFlBQVlDLFdBQVc7UUFDekJELFVBQVVELE9BQVEsR0FBRztRQUVyQkEsUUFBUUcsY0FBVyxFQUFHLEdBQUc7SUFDM0I7SUFFQSxJQUFJQztJQUVKQSxRQUFRTCxpQkFBaUJFO0lBRXpCLElBQU1JLGNBQWNSLGVBQWVHLE9BQU9JO0lBRTFDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTVCx1QkFBdUJJLEtBQUs7SUFDMUMsSUFBSUEsVUFBVUUsV0FBVztRQUN2QkYsUUFBUUcsY0FBVyxFQUFHLEdBQUc7SUFDM0I7SUFFQSxJQUFNLEFBQUVGLFVBQVlFLGNBQVcsQ0FBdkJGO0lBRVIsSUFBSUc7SUFFSkEsUUFBUUwsaUJBQWlCRTtJQUV6QixJQUFNSSxjQUFjUixlQUFlRyxPQUFPSTtJQUUxQyxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiVix3QkFBQUE7SUFDQUMsd0JBQUFBO0FBQ0YifQ==