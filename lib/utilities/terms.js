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
    get termsFromExpression () {
        return termsFromExpression;
    },
    get termsFromNodes () {
        return termsFromNodes;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _term = require("../utilities/term");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termsFromNodes(nodes, context) {
    var Primitives = _elements.default.Primitives, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, terms = new Primitives(string, array);
    return terms;
}
function termsFromExpression(term, context) {
    var Primitives = _elements.default.Primitives, termsArray = [
        term
    ], termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, terms = new Primitives(string, array);
    return terms;
}
var _default = {
    termsFromNodes: termsFromNodes,
    termsFromExpression: termsFromExpression
};
function termsArrayFromNodes(nodes, context) {
    var termsArray = nodes.map(function(node) {
        var term = (0, _term.termFromNode)(node, context);
        return term;
    });
    return termsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXkpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIHRlcm1zID0gbmV3IFByaW1pdGl2ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tRXhwcmVzc2lvbih0ZXJtLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zQXJyYXkgPSBbXG4gICAgICAgICAgdGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAvLy9cbiAgICAgICAgdGVybXMgPSBuZXcgUHJpbWl0aXZlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVybXNGcm9tTm9kZXMsXG4gIHRlcm1zRnJvbUV4cHJlc3Npb25cbn07XG5cbmZ1bmN0aW9uIHRlcm1zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0FycmF5O1xufVxuXG4iXSwibmFtZXMiOlsidGVybXNGcm9tRXhwcmVzc2lvbiIsInRlcm1zRnJvbU5vZGVzIiwibm9kZXMiLCJjb250ZXh0IiwiUHJpbWl0aXZlcyIsImVsZW1lbnRzIiwidGVybXNBcnJheSIsInRlcm1zQXJyYXlGcm9tTm9kZXMiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJzdHJpbmciLCJhcnJheSIsInRlcm1zIiwidGVybSIsIm1hcCIsIm5vZGUiLCJ0ZXJtRnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQStCQTtlQUFBOztRQWJnQkE7ZUFBQUE7O1FBWEFDO2VBQUFBOzs7K0RBTEs7b0JBRVE7c0JBQ2E7Ozs7OztBQUVuQyxTQUFTQSxlQUFlQyxLQUFLLEVBQUVDLE9BQU87SUFDM0MsSUFBTSxBQUFFQyxhQUFlQyxpQkFBUSxDQUF2QkQsWUFDRkUsYUFBYUMsb0JBQW9CTCxPQUFPQyxVQUN4Q0ssY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNILGFBQ3hDSSxTQUFTRixhQUNURyxRQUFRTCxZQUNSTSxRQUFRLElBQUlSLFdBQVdNLFFBQVFDO0lBRXJDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTWixvQkFBb0JhLElBQUksRUFBRVYsT0FBTztJQUMvQyxJQUFNLEFBQUVDLGFBQWVDLGlCQUFRLENBQXZCRCxZQUNGRSxhQUFhO1FBQ1hPO0tBQ0QsRUFDREwsY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNILGFBQ3hDSSxTQUFTRixhQUNURyxRQUFRTCxZQUNSTSxRQUFRLElBQUlSLFdBQVdNLFFBQVFDO0lBRXJDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JYLGdCQUFBQTtJQUNBRCxxQkFBQUE7QUFDRjtBQUVBLFNBQVNPLG9CQUFvQkwsS0FBSyxFQUFFQyxPQUFPO0lBQ3pDLElBQU1HLGFBQWFKLE1BQU1ZLEdBQUcsQ0FBQyxTQUFDQztRQUM1QixJQUFNRixPQUFPRyxJQUFBQSxrQkFBWSxFQUFDRCxNQUFNWjtRQUVoQyxPQUFPVTtJQUNUO0lBRUEsT0FBT1A7QUFDVCJ9