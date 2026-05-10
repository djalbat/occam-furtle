"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "termsFromNodes", {
    enumerable: true,
    get: function() {
        return termsFromNodes;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _term = require("../utilities/term");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termsFromNodes(nodes, context) {
    const { Terms } = _elements.default, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null, breakPoint = null;
    context = null;
    const terms = new Terms(context, string, node, breakPoint, array);
    return terms;
}
function termsArrayFromNodes(nodes, context) {
    const termsArray = nodes.map((node)=>{
        const term = (0, _term.termFromNode)(node, context);
        return term;
    });
    return termsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5pbXBvcnQgeyB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZnVuY3Rpb24gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21Ob2RlcyIsIm5vZGVzIiwiY29udGV4dCIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtc0FycmF5IiwidGVybXNBcnJheUZyb21Ob2RlcyIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSIsInN0cmluZyIsImFycmF5Iiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtcyIsIm1hcCIsInRlcm0iLCJ0ZXJtRnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9nQkE7OztlQUFBQTs7O2lFQUxLO3NCQUVRO3dCQUNhOzs7Ozs7QUFFbkMsU0FBU0EsZUFBZUMsS0FBSyxFQUFFQyxPQUFPO0lBQzNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxhQUFhQyxvQkFBb0JMLE9BQU9DLFVBQ3hDSyxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0gsYUFDeENJLFNBQVNGLGFBQ1RHLFFBQVFMLFlBQ1JNLE9BQU8sTUFDUEMsYUFBYTtJQUVuQlYsVUFBVTtJQUVWLE1BQU1XLFFBQVEsSUFBSVYsTUFBTUQsU0FBU08sUUFBUUUsTUFBTUMsWUFBWUY7SUFFM0QsT0FBT0c7QUFDVDtBQUVBLFNBQVNQLG9CQUFvQkwsS0FBSyxFQUFFQyxPQUFPO0lBQ3pDLE1BQU1HLGFBQWFKLE1BQU1hLEdBQUcsQ0FBQyxDQUFDSDtRQUM1QixNQUFNSSxPQUFPQyxJQUFBQSxrQkFBWSxFQUFDTCxNQUFNVDtRQUVoQyxPQUFPYTtJQUNUO0lBRUEsT0FBT1Y7QUFDVCJ9