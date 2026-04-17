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
    const { Terms } = _elements.default, termsArray = termsArrayFromNodes(nodes, context), termsString = (0, _string.termsStringFromTermsArray)(termsArray), string = termsString, array = termsArray, node = null, breakPoint = null;
    context = null;
    const terms = new Terms(context, string, node, breakPoint, array);
    return terms;
}
function termsFromPrimitives(primitives) {
    const { Terms } = _elements.default, termsArray = termsArrayFromPrimitives(primitives), termsString = (0, _string.termsStringFromTermsArray)(termsArray), context = null, string = termsString, array = termsArray, node = null, breakPoint = null, terms = new Terms(context, string, node, breakPoint, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tUHJpbWl0aXZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtcyA9IG5ldyBUZXJtcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21QcmltaXRpdmVzKHByaW1pdGl2ZXMpIHtcbiAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5RnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcyksXG4gICAgICAgIHRlcm1zU3RyaW5nID0gdGVybXNTdHJpbmdGcm9tVGVybXNBcnJheSh0ZXJtc0FycmF5KSxcbiAgICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlcm1zRnJvbU5vZGVzLFxuICB0ZXJtc0Zyb21QcmltaXRpdmVzXG59O1xuXG5mdW5jdGlvbiB0ZXJtc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0FycmF5O1xufVxuXG5mdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVByaW1pdGl2ZXMocHJpbWl0aXZlcykge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gcHJpbWl0aXZlcy5tYXAoKHByaW1pdGl2ZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVByaW1pdGl2ZShwcmltaXRpdmUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0FycmF5O1xufVxuXG4iXSwibmFtZXMiOlsidGVybXNGcm9tTm9kZXMiLCJ0ZXJtc0Zyb21QcmltaXRpdmVzIiwibm9kZXMiLCJjb250ZXh0IiwiVGVybXMiLCJlbGVtZW50cyIsInRlcm1zQXJyYXkiLCJ0ZXJtc0FycmF5RnJvbU5vZGVzIiwidGVybXNTdHJpbmciLCJ0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5Iiwic3RyaW5nIiwiYXJyYXkiLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm1zIiwicHJpbWl0aXZlcyIsInRlcm1zQXJyYXlGcm9tUHJpbWl0aXZlcyIsIm1hcCIsInRlcm0iLCJ0ZXJtRnJvbU5vZGUiLCJwcmltaXRpdmUiLCJ0ZXJtRnJvbVByaW1pdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcUNBO2VBQUE7O1FBOUJnQkE7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7O2lFQXJCSzt3QkFFcUI7c0JBQ007Ozs7OztBQUV6QyxTQUFTRCxlQUFlRSxLQUFLLEVBQUVDLE9BQU87SUFDM0MsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsaUJBQVEsRUFDcEJDLGFBQWFDLG9CQUFvQkwsT0FBT0MsVUFDeENLLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDSCxhQUN4Q0ksU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sT0FBTyxNQUNQQyxhQUFhO0lBRW5CVixVQUFVO0lBRVYsTUFBTVcsUUFBUSxJQUFJVixNQUFNRCxTQUFTTyxRQUFRRSxNQUFNQyxZQUFZRjtJQUUzRCxPQUFPRztBQUNUO0FBRU8sU0FBU2Isb0JBQW9CYyxVQUFVO0lBQzVDLE1BQU0sRUFBRVgsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxhQUFhVSx5QkFBeUJELGFBQ3RDUCxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0gsYUFDeENILFVBQVUsTUFDVk8sU0FBU0YsYUFDVEcsUUFBUUwsWUFDUk0sT0FBTyxNQUNQQyxhQUFhLE1BQ2JDLFFBQVEsSUFBSVYsTUFBTUQsU0FBU08sUUFBUUUsTUFBTUMsWUFBWUY7SUFFM0QsT0FBT0c7QUFDVDtNQUVBLFdBQWU7SUFDYmQ7SUFDQUM7QUFDRjtBQUVBLFNBQVNNLG9CQUFvQkwsS0FBSyxFQUFFQyxPQUFPO0lBQ3pDLE1BQU1HLGFBQWFKLE1BQU1lLEdBQUcsQ0FBQyxDQUFDTDtRQUM1QixNQUFNTSxPQUFPQyxJQUFBQSxrQkFBWSxFQUFDUCxNQUFNVDtRQUVoQyxPQUFPZTtJQUNUO0lBRUEsT0FBT1o7QUFDVDtBQUVBLFNBQVNVLHlCQUF5QkQsVUFBVTtJQUMxQyxNQUFNVCxhQUFhUyxXQUFXRSxHQUFHLENBQUMsQ0FBQ0c7UUFDakMsTUFBTUYsT0FBT0csSUFBQUEsdUJBQWlCLEVBQUNEO1FBRS9CLE9BQU9GO0lBQ1Q7SUFFQSxPQUFPWjtBQUNUIn0=