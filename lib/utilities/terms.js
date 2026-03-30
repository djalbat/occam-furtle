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
    const { Terms } = _elements.default, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null, lineIndex = null;
    context = null;
    const terms = new Terms(context, string, node, lineIndex, array);
    return terms;
}
function termsFromPrimitives(primitives) {
    const { Terms } = _elements.default, termsArray = termsArrayFromPrimitives(primitives), termsString = (0, _string.termsStringFromTermsArray)(termsArray), context = null, string = termsString, array = termsArray, node = null, lineIndex = null, terms = new Terms(context, string, node, lineIndex, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tUHJpbWl0aXZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21QcmltaXRpdmVzKHByaW1pdGl2ZXMpLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSB0ZXJtc1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVybXNGcm9tTm9kZXMsXG4gIHRlcm1zRnJvbVByaW1pdGl2ZXNcbn07XG5cbmZ1bmN0aW9uIHRlcm1zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRlcm1zQXJyYXlGcm9tUHJpbWl0aXZlcyhwcmltaXRpdmVzKSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSBwcmltaXRpdmVzLm1hcCgocHJpbWl0aXZlKSA9PiB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tUHJpbWl0aXZlKHByaW1pdGl2ZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbiJdLCJuYW1lcyI6WyJ0ZXJtc0Zyb21Ob2RlcyIsInRlcm1zRnJvbVByaW1pdGl2ZXMiLCJub2RlcyIsImNvbnRleHQiLCJUZXJtcyIsImVsZW1lbnRzIiwidGVybXNBcnJheSIsInRlcm1zQXJyYXlGcm9tTm9kZXMiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJzdHJpbmciLCJhcnJheSIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtcyIsInByaW1pdGl2ZXMiLCJ0ZXJtc0FycmF5RnJvbVByaW1pdGl2ZXMiLCJtYXAiLCJ0ZXJtIiwidGVybUZyb21Ob2RlIiwicHJpbWl0aXZlIiwidGVybUZyb21QcmltaXRpdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFDQTtlQUFBOztRQTlCZ0JBO2VBQUFBOztRQWdCQUM7ZUFBQUE7OztpRUFyQks7d0JBRXFCO3NCQUNNOzs7Ozs7QUFFekMsU0FBU0QsZUFBZUUsS0FBSyxFQUFFQyxPQUFPO0lBQzNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxhQUFhQyxvQkFBb0JMLE9BQU9DLFVBQ3hDSyxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0gsYUFDeENJLFNBQVNGLGFBQ1RHLFFBQVFMLFlBQ1JNLE9BQU8sTUFDUEMsWUFBWTtJQUVsQlYsVUFBVTtJQUVWLE1BQU1XLFFBQVEsSUFBSVYsTUFBTUQsU0FBU08sUUFBUUUsTUFBTUMsV0FBV0Y7SUFFMUQsT0FBT0c7QUFDVDtBQUVPLFNBQVNiLG9CQUFvQmMsVUFBVTtJQUM1QyxNQUFNLEVBQUVYLEtBQUssRUFBRSxHQUFHQyxpQkFBUSxFQUNwQkMsYUFBYVUseUJBQXlCRCxhQUN0Q1AsY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNILGFBQ3hDSCxVQUFVLE1BQ1ZPLFNBQVNGLGFBQ1RHLFFBQVFMLFlBQ1JNLE9BQU8sTUFDUEMsWUFBWSxNQUNaQyxRQUFRLElBQUlWLE1BQU1ELFNBQVNPLFFBQVFFLE1BQU1DLFdBQVdGO0lBRTFELE9BQU9HO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JkO0lBQ0FDO0FBQ0Y7QUFFQSxTQUFTTSxvQkFBb0JMLEtBQUssRUFBRUMsT0FBTztJQUN6QyxNQUFNRyxhQUFhSixNQUFNZSxHQUFHLENBQUMsQ0FBQ0w7UUFDNUIsTUFBTU0sT0FBT0MsSUFBQUEsa0JBQVksRUFBQ1AsTUFBTVQ7UUFFaEMsT0FBT2U7SUFDVDtJQUVBLE9BQU9aO0FBQ1Q7QUFFQSxTQUFTVSx5QkFBeUJELFVBQVU7SUFDMUMsTUFBTVQsYUFBYVMsV0FBV0UsR0FBRyxDQUFDLENBQUNHO1FBQ2pDLE1BQU1GLE9BQU9HLElBQUFBLHVCQUFpQixFQUFDRDtRQUUvQixPQUFPRjtJQUNUO0lBRUEsT0FBT1o7QUFDVCJ9