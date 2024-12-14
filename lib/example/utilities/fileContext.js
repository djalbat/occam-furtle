"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fileContextFromNothing", {
    enumerable: true,
    get: function() {
        return fileContextFromNothing;
    }
});
var _file = /*#__PURE__*/ _interop_require_default(require("../context/file"));
var _nominal = require("../utilities/nominal");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var nominalLexer = (0, _nominal.nominalLexerFromNothing)(), nominalParser = (0, _nominal.nominalParserFromNothing)();
function fileContextFromNothing() {
    var content = "∀n n = n", tokens = nominalLexer.tokenise(content), node = nominalParser.parse(tokens), fileContext = _file.default.fromNodeAndTokens(node, tokens);
    return fileContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy9maWxlQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGVcIjtcblxuaW1wb3J0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcsIG5vbWluYWxQYXJzZXJGcm9tTm90aGluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tTm90aGluZygpLFxuICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUNvbnRleHRGcm9tTm90aGluZygpIHtcbiAgY29uc3QgY29udGVudCA9IGDiiIBuIG4gPSBuYCxcbiAgICAgICAgdG9rZW5zID0gbm9taW5hbExleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbm9taW5hbFBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImZpbGVDb250ZXh0RnJvbU5vdGhpbmciLCJub21pbmFsTGV4ZXIiLCJub21pbmFsTGV4ZXJGcm9tTm90aGluZyIsIm5vbWluYWxQYXJzZXIiLCJub21pbmFsUGFyc2VyRnJvbU5vdGhpbmciLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJmaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNnQkE7OztlQUFBQTs7OzJEQVBRO3VCQUUwQzs7Ozs7O0FBRWxFLElBQU1DLGVBQWVDLElBQUFBLGdDQUF1QixLQUN0Q0MsZ0JBQWdCQyxJQUFBQSxpQ0FBd0I7QUFFdkMsU0FBU0o7SUFDZCxJQUFNSyxVQUFXLFlBQ1hDLFNBQVNMLGFBQWFNLFFBQVEsQ0FBQ0YsVUFDL0JHLE9BQU9MLGNBQWNNLEtBQUssQ0FBQ0gsU0FDM0JJLGNBQWNDLGFBQVcsQ0FBQ0MsaUJBQWlCLENBQUNKLE1BQU1GO0lBRXhELE9BQU9JO0FBQ1QifQ==