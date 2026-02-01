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
    var Terms = _elements.default.Terms, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, terms = new Terms(string, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICB0ZXJtcyA9IG5ldyBUZXJtcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21FeHByZXNzaW9uKHRlcm0sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmVzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNBcnJheSA9IFtcbiAgICAgICAgICB0ZXJtXG4gICAgICAgIF0sXG4gICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICB0ZXJtcyA9IG5ldyBQcmltaXRpdmVzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXJtc0Zyb21Ob2RlcyxcbiAgdGVybXNGcm9tRXhwcmVzc2lvblxufTtcblxuZnVuY3Rpb24gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21FeHByZXNzaW9uIiwidGVybXNGcm9tTm9kZXMiLCJub2RlcyIsImNvbnRleHQiLCJUZXJtcyIsImVsZW1lbnRzIiwidGVybXNBcnJheSIsInRlcm1zQXJyYXlGcm9tTm9kZXMiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJzdHJpbmciLCJhcnJheSIsInRlcm1zIiwidGVybSIsIlByaW1pdGl2ZXMiLCJtYXAiLCJub2RlIiwidGVybUZyb21Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUErQkE7ZUFBQTs7UUFiZ0JBO2VBQUFBOztRQVhBQztlQUFBQTs7OytEQUxLO29CQUVRO3NCQUNhOzs7Ozs7QUFFbkMsU0FBU0EsZUFBZUMsS0FBSyxFQUFFQyxPQUFPO0lBQzNDLElBQU0sQUFBRUMsUUFBVUMsaUJBQVEsQ0FBbEJELE9BQ0ZFLGFBQWFDLG9CQUFvQkwsT0FBT0MsVUFDeENLLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0ksU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sUUFBUSxJQUFJUixNQUFNTSxRQUFRQztJQUVoQyxPQUFPQztBQUNUO0FBRU8sU0FBU1osb0JBQW9CYSxJQUFJLEVBQUVWLE9BQU87SUFDL0MsSUFBTSxBQUFFVyxhQUFlVCxpQkFBUSxDQUF2QlMsWUFDRlIsYUFBYTtRQUNYTztLQUNELEVBQ0RMLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0ksU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sUUFBUSxJQUFJRSxXQUFXSixRQUFRQztJQUVyQyxPQUFPQztBQUNUO0lBRUEsV0FBZTtJQUNiWCxnQkFBQUE7SUFDQUQscUJBQUFBO0FBQ0Y7QUFFQSxTQUFTTyxvQkFBb0JMLEtBQUssRUFBRUMsT0FBTztJQUN6QyxJQUFNRyxhQUFhSixNQUFNYSxHQUFHLENBQUMsU0FBQ0M7UUFDNUIsSUFBTUgsT0FBT0ksSUFBQUEsa0JBQVksRUFBQ0QsTUFBTWI7UUFFaEMsT0FBT1U7SUFDVDtJQUVBLE9BQU9QO0FBQ1QifQ==