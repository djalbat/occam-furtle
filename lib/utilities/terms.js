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
    get termsFromNodes () {
        return termsFromNodes;
    },
    get termsFromPrimitives () {
        return termsFromPrimitives;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _string = require("../utilities/string");
const _term = require("../utilities/term");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termsFromNodes(nodes, context) {
    const { Terms } = _elements.default, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null;
    context = null;
    const terms = new Terms(context, string, node, array);
    return terms;
}
function termsFromPrimitives(primitives) {
    const { Terms } = _elements.default, termsArray = termsArrayFromPrimitives(primitives), termsString = (0, _string.termsStringFromTermsArray)(termsArray), context = null, string = termsString, array = termsArray, node = null, terms = new Terms(context, string, node, array);
    return terms;
}
const _default = {
    termsFromNodes,
    termsFromPrimitives
};
function termsArrayFromNodes(nodes, context) {
    const termsArray = nodes.map((node)=>{
        const term = (0, _term.termFromNode)(node, context);
        return term;
    });
    return termsArray;
}
function termsArrayFromPrimitives(primitives) {
    const termsArray = primitives.map((primitive)=>{
        const term = (0, _term.termFromPrimitive)(primitive);
        return term;
    });
    return termsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tUHJpbWl0aXZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcykge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSxcbiAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXkpLFxuICAgICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXJtc0Zyb21Ob2RlcyxcbiAgdGVybXNGcm9tUHJpbWl0aXZlc1xufTtcblxuZnVuY3Rpb24gdGVybXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZnVuY3Rpb24gdGVybXNBcnJheUZyb21QcmltaXRpdmVzKHByaW1pdGl2ZXMpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHByaW1pdGl2ZXMubWFwKChwcmltaXRpdmUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21QcmltaXRpdmUocHJpbWl0aXZlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuIl0sIm5hbWVzIjpbInRlcm1zRnJvbU5vZGVzIiwidGVybXNGcm9tUHJpbWl0aXZlcyIsIm5vZGVzIiwiY29udGV4dCIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtc0FycmF5IiwidGVybXNBcnJheUZyb21Ob2RlcyIsInRlcm1zU3RyaW5nIiwidGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSIsInN0cmluZyIsImFycmF5Iiwibm9kZSIsInRlcm1zIiwicHJpbWl0aXZlcyIsInRlcm1zQXJyYXlGcm9tUHJpbWl0aXZlcyIsIm1hcCIsInRlcm0iLCJ0ZXJtRnJvbU5vZGUiLCJwcmltaXRpdmUiLCJ0ZXJtRnJvbVByaW1pdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBbUNBO2VBQUE7O1FBNUJnQkE7ZUFBQUE7O1FBZUFDO2VBQUFBOzs7aUVBcEJLO3dCQUVxQjtzQkFDTTs7Ozs7O0FBRXpDLFNBQVNELGVBQWVFLEtBQUssRUFBRUMsT0FBTztJQUMzQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxpQkFBUSxFQUNwQkMsYUFBYUMsb0JBQW9CTCxPQUFPQyxVQUN4Q0ssY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNILGFBQ3hDSSxTQUFTRixhQUNURyxRQUFRTCxZQUNSTSxPQUFPO0lBRWJULFVBQVU7SUFFVixNQUFNVSxRQUFRLElBQUlULE1BQU1ELFNBQVNPLFFBQVFFLE1BQU1EO0lBRS9DLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTWixvQkFBb0JhLFVBQVU7SUFDNUMsTUFBTSxFQUFFVixLQUFLLEVBQUUsR0FBR0MsaUJBQVEsRUFDcEJDLGFBQWFTLHlCQUF5QkQsYUFDdENOLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0gsVUFBVSxNQUNWTyxTQUFTRixhQUNURyxRQUFRTCxZQUNSTSxPQUFPLE1BQ1BDLFFBQVEsSUFBSVQsTUFBTUQsU0FBU08sUUFBUUUsTUFBTUQ7SUFFL0MsT0FBT0U7QUFDVDtNQUVBLFdBQWU7SUFDYmI7SUFDQUM7QUFDRjtBQUVBLFNBQVNNLG9CQUFvQkwsS0FBSyxFQUFFQyxPQUFPO0lBQ3pDLE1BQU1HLGFBQWFKLE1BQU1jLEdBQUcsQ0FBQyxDQUFDSjtRQUM1QixNQUFNSyxPQUFPQyxJQUFBQSxrQkFBWSxFQUFDTixNQUFNVDtRQUVoQyxPQUFPYztJQUNUO0lBRUEsT0FBT1g7QUFDVDtBQUVBLFNBQVNTLHlCQUF5QkQsVUFBVTtJQUMxQyxNQUFNUixhQUFhUSxXQUFXRSxHQUFHLENBQUMsQ0FBQ0c7UUFDakMsTUFBTUYsT0FBT0csSUFBQUEsdUJBQWlCLEVBQUNEO1FBRS9CLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPWDtBQUNUIn0=