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
    get termFromBoolean () {
        return termFromBoolean;
    },
    get termFromPrimitive () {
        return termFromPrimitive;
    },
    get termFromStringLiteral () {
        return termFromStringLiteral;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _primitive = require("../utilities/primitive");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromBoolean(boolean, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromPrimitive(primitive) {
    const { Term } = _elements.default, context = null, string = primitive.getString(), node = null, breakPoint = null, variable = null, term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByaW1pdGl2ZShwcmltaXRpdmUpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsidGVybUZyb21Cb29sZWFuIiwidGVybUZyb21QcmltaXRpdmUiLCJ0ZXJtRnJvbVN0cmluZ0xpdGVyYWwiLCJib29sZWFuIiwiY29udGV4dCIsIlRlcm0iLCJlbGVtZW50cyIsInZhcmlhYmxlIiwicHJpbWl0aXZlIiwicHJpbWl0aXZlRnJvbUJvb2xlYW4iLCJzdHJpbmciLCJnZXRTdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJzdHJpbmdMaXRlcmFsIiwicHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQU1nQkE7ZUFBQUE7O1FBZUFDO2VBQUFBOztRQVlBQztlQUFBQTs7O2lFQS9CSzsyQkFFNEM7Ozs7OztBQUUxRCxTQUFTRixnQkFBZ0JHLE9BQU8sRUFBRUMsT0FBTztJQUM5QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsV0FBVyxNQUNYQyxZQUFZQyxJQUFBQSwrQkFBb0IsRUFBQ04sU0FBU0MsVUFDMUNNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJDLE9BQU8sTUFDUEMsYUFBYTtJQUVuQlQsVUFBVTtJQUVWLE1BQU1VLE9BQU8sSUFBSVQsS0FBS0QsU0FBU00sUUFBUUUsTUFBTUMsWUFBWU4sVUFBVUM7SUFFbkUsT0FBT007QUFDVDtBQUVPLFNBQVNiLGtCQUFrQk8sU0FBUztJQUN6QyxNQUFNLEVBQUVILElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkYsVUFBVSxNQUNWTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCQyxPQUFPLE1BQ1BDLGFBQWEsTUFDYk4sV0FBVyxNQUNYTyxPQUFPLElBQUlULEtBQUtELFNBQVNNLFFBQVFFLE1BQU1DLFlBQVlOLFVBQVVDO0lBRW5FLE9BQU9NO0FBQ1Q7QUFFTyxTQUFTWixzQkFBc0JhLGFBQWEsRUFBRVgsT0FBTztJQUMxRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsV0FBVyxNQUNYQyxZQUFZUSxJQUFBQSxxQ0FBMEIsRUFBQ0QsZUFBZVgsVUFDdERNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJDLE9BQU8sTUFDUEMsYUFBYTtJQUVuQlQsVUFBVTtJQUVWLE1BQU1VLE9BQU8sSUFBSVQsS0FBS0QsU0FBU00sUUFBUUUsTUFBTUMsWUFBWU4sVUFBVUM7SUFFbkUsT0FBT007QUFDVCJ9