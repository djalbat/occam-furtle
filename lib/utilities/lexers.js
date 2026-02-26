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
const _occamlexers = require("occam-lexers");
const _lexer = /*#__PURE__*/ _interop_require_default(require("../furtle/lexer"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { lexerFromRules, rulesFromEntries } = _occamlexers.lexerUtilities;
function furtleLexerFromNothing(Class) {
    if (Class === undefined) {
        Class = _lexer.default; ///
    }
    const { entries } = _lexer.default;
    let rules;
    rules = rulesFromEntries(entries);
    const furtleLexer = lexerFromRules(Class, rules);
    return furtleLexer;
}
function furtleLexerFromEntries(Class, entries) {
    if (entries === undefined) {
        entries = Class; ///
        Class = _lexer.default; ///
    }
    let rules;
    rules = rulesFromEntries(entries);
    const furtleLexer = lexerFromRules(Class, rules);
    return furtleLexer;
}
const _default = {
    furtleLexerFromEntries,
    furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEZ1cnRsZUxleGVyIGZyb20gXCIuLi9mdXJ0bGUvbGV4ZXJcIjtcblxuY29uc3QgeyBsZXhlckZyb21SdWxlcywgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKENsYXNzKSB7XG4gIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQ2xhc3MgPSBGdXJ0bGVMZXhlcjsgIC8vL1xuICB9XG5cbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcjtcblxuICBsZXQgcnVsZXM7XG5cbiAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIGNvbnN0IGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gZnVydGxlTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKENsYXNzLCBlbnRyaWVzKSB7XG4gIGlmIChlbnRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBlbnRyaWVzID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gRnVydGxlTGV4ZXI7ICAvLy9cbiAgfVxuXG4gIGxldCBydWxlcztcblxuICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgY29uc3QgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVMZXhlckZyb21FbnRyaWVzLFxuICBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nXG59O1xuIl0sIm5hbWVzIjpbImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJGcm9tUnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzIiwibGV4ZXJVdGlsaXRpZXMiLCJDbGFzcyIsInVuZGVmaW5lZCIsIkZ1cnRsZUxleGVyIiwiZW50cmllcyIsInJ1bGVzIiwiZnVydGxlTGV4ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdDQTtlQUFBOztRQWhCZ0JBO2VBQUFBOztRQWhCQUM7ZUFBQUE7Ozs2QkFOZTs4REFFUDs7Ozs7O0FBRXhCLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQywyQkFBYztBQUVwRCxTQUFTSCx1QkFBdUJJLEtBQUs7SUFDMUMsSUFBSUEsVUFBVUMsV0FBVztRQUN2QkQsUUFBUUUsY0FBVyxFQUFHLEdBQUc7SUFDM0I7SUFFQSxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxjQUFXO0lBRS9CLElBQUlFO0lBRUpBLFFBQVFOLGlCQUFpQks7SUFFekIsTUFBTUUsY0FBY1IsZUFBZUcsT0FBT0k7SUFFMUMsT0FBT0M7QUFDVDtBQUVPLFNBQVNWLHVCQUF1QkssS0FBSyxFQUFFRyxPQUFPO0lBQ25ELElBQUlBLFlBQVlGLFdBQVc7UUFDekJFLFVBQVVILE9BQVEsR0FBRztRQUVyQkEsUUFBUUUsY0FBVyxFQUFHLEdBQUc7SUFDM0I7SUFFQSxJQUFJRTtJQUVKQSxRQUFRTixpQkFBaUJLO0lBRXpCLE1BQU1FLGNBQWNSLGVBQWVHLE9BQU9JO0lBRTFDLE9BQU9DO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JWO0lBQ0FDO0FBQ0YifQ==