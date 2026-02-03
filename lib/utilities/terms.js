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
    var Terms = _elements.default.Terms, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null;
    context = null;
    var terms = new Terms(context, string, node, array);
    return terms;
}
function termsFromExpression(term, context) {
    var Primitives = _elements.default.Primitives, termsArray = [
        term
    ], termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null;
    context = null;
    var terms = new Primitives(context, string, node, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tRXhwcmVzc2lvbih0ZXJtLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zQXJyYXkgPSBbXG4gICAgICAgICAgdGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFByaW1pdGl2ZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlcm1zRnJvbU5vZGVzLFxuICB0ZXJtc0Zyb21FeHByZXNzaW9uXG59O1xuXG5mdW5jdGlvbiB0ZXJtc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuIl0sIm5hbWVzIjpbInRlcm1zRnJvbUV4cHJlc3Npb24iLCJ0ZXJtc0Zyb21Ob2RlcyIsIm5vZGVzIiwiY29udGV4dCIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtc0FycmF5IiwidGVybXNBcnJheUZyb21Ob2RlcyIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSIsInN0cmluZyIsImFycmF5Iiwibm9kZSIsInRlcm1zIiwidGVybSIsIlByaW1pdGl2ZXMiLCJtYXAiLCJ0ZXJtRnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXVDQTtlQUFBOztRQWpCZ0JBO2VBQUFBOztRQWZBQztlQUFBQTs7OytEQUxLO29CQUVRO3NCQUNhOzs7Ozs7QUFFbkMsU0FBU0EsZUFBZUMsS0FBSyxFQUFFQyxPQUFPO0lBQzNDLElBQU0sQUFBRUMsUUFBVUMsaUJBQVEsQ0FBbEJELE9BQ0ZFLGFBQWFDLG9CQUFvQkwsT0FBT0MsVUFDeENLLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0ksU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sT0FBTztJQUViVCxVQUFVO0lBRVYsSUFBTVUsUUFBUSxJQUFJVCxNQUFNRCxTQUFTTyxRQUFRRSxNQUFNRDtJQUUvQyxPQUFPRTtBQUNUO0FBRU8sU0FBU2Isb0JBQW9CYyxJQUFJLEVBQUVYLE9BQU87SUFDL0MsSUFBTSxBQUFFWSxhQUFlVixpQkFBUSxDQUF2QlUsWUFDRlQsYUFBYTtRQUNYUTtLQUNELEVBQ0ROLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0ksU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sT0FBTztJQUViVCxVQUFVO0lBRVYsSUFBTVUsUUFBUSxJQUFJRSxXQUFXWixTQUFTTyxRQUFRRSxNQUFNRDtJQUVwRCxPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiWixnQkFBQUE7SUFDQUQscUJBQUFBO0FBQ0Y7QUFFQSxTQUFTTyxvQkFBb0JMLEtBQUssRUFBRUMsT0FBTztJQUN6QyxJQUFNRyxhQUFhSixNQUFNYyxHQUFHLENBQUMsU0FBQ0o7UUFDNUIsSUFBTUUsT0FBT0csSUFBQUEsa0JBQVksRUFBQ0wsTUFBTVQ7UUFFaEMsT0FBT1c7SUFDVDtJQUVBLE9BQU9SO0FBQ1QifQ==