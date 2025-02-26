"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    furtleLexerFromEntries: function() {
        return furtleLexerFromEntries;
    },
    furtleLexerFromNothing: function() {
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
function furtleLexerFromEntries(entries) {
    var rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
function furtleLexerFromNothing() {
    var entries = _lexer.default.entries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_lexer.default, rules);
    return furtleLexer;
}
var _default = {
    furtleLexerFromEntries: furtleLexerFromEntries,
    furtleLexerFromNothing: furtleLexerFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fb2NjYW0tZ3JhbW1hcnMvdXRpbGl0aWVzL2xleGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGV4ZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBGdXJ0bGVMZXhlciBmcm9tIFwiLi4vZnVydGxlL2xleGVyXCI7XG5cbmNvbnN0IHsgbGV4ZXJGcm9tUnVsZXMsIHJ1bGVzRnJvbUVudHJpZXMgfSA9IGxleGVyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlTGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGdXJ0bGVMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gRnVydGxlTGV4ZXIsXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGdXJ0bGVMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmdXJ0bGVMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmdXJ0bGVMZXhlckZyb21FbnRyaWVzLFxuICBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nXG59O1xuIl0sIm5hbWVzIjpbImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJGcm9tUnVsZXMiLCJsZXhlclV0aWxpdGllcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJlbnRyaWVzIiwicnVsZXMiLCJmdXJ0bGVMZXhlciIsIkZ1cnRsZUxleGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1QkEsT0FHRTtlQUhGOztJQWZnQkEsc0JBQXNCO2VBQXRCQTs7SUFPQUMsc0JBQXNCO2VBQXRCQTs7OzJCQWJlOzREQUVQOzs7Ozs7QUFFeEIsSUFBUUMsaUJBQXFDQywyQkFBYyxDQUFuREQsZ0JBQWdCRSxtQkFBcUJELDJCQUFjLENBQW5DQztBQUVqQixTQUFTSix1QkFBdUJLLE9BQU87SUFDNUMsSUFBTUMsUUFBUUYsaUJBQWlCQyxVQUN6QkUsY0FBY0wsZUFBZU0sY0FBVyxFQUFFRjtJQUVoRCxPQUFPQztBQUNUO0FBRU8sU0FBU047SUFDZCxJQUFNLEFBQUVJLFVBQVlHLGNBQVcsQ0FBdkJILFNBQ0ZDLFFBQVFGLGlCQUFpQkMsVUFDekJFLGNBQWNMLGVBQWVNLGNBQVcsRUFBRUY7SUFFaEQsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlAsd0JBQUFBO0lBQ0FDLHdCQUFBQTtBQUNGIn0=