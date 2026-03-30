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
    get termFromBoolean () {
        return termFromBoolean;
    },
    get termFromNode () {
        return termFromNode;
    },
    get termFromNodes () {
        return termFromNodes;
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
function termFromNode(node, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNode)(node, context), string = primitive.getString(), lineIndex = null;
    node = null;
    context = null;
    const term = new Term(context, string, node, lineIndex, variable, primitive);
    return term;
}
function termFromNodes(nodes, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNodes)(nodes, context), string = primitive.getString(), node = null, lineIndex = null;
    context = null;
    const term = new Term(context, string, node, lineIndex, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null, lineIndex = null;
    context = null;
    const term = new Term(context, string, node, lineIndex, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null, lineIndex = null;
    context = null;
    const term = new Term(context, string, node, lineIndex, variable, primitive);
    return term;
}
function termFromPrimitive(primitive) {
    const { Term } = _elements.default, context = null, string = primitive.getString(), node = null, lineIndex = null, variable = null, term = new Term(context, string, node, lineIndex, variable, primitive);
    return term;
}
const _default = {
    termFromNode,
    termFromNodes,
    termFromBoolean,
    termFromStringLiteral,
    termFromPrimitive
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSwgcHJpbWl0aXZlRnJvbU5vZGVzLCBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21QcmltaXRpdmUocHJpbWl0aXZlKSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVybUZyb21Ob2RlLFxuICB0ZXJtRnJvbU5vZGVzLFxuICB0ZXJtRnJvbUJvb2xlYW4sXG4gIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCxcbiAgdGVybUZyb21QcmltaXRpdmVcbn07XG4iXSwibmFtZXMiOlsidGVybUZyb21Cb29sZWFuIiwidGVybUZyb21Ob2RlIiwidGVybUZyb21Ob2RlcyIsInRlcm1Gcm9tUHJpbWl0aXZlIiwidGVybUZyb21TdHJpbmdMaXRlcmFsIiwibm9kZSIsImNvbnRleHQiLCJUZXJtIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsInByaW1pdGl2ZUZyb21Ob2RlIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGluZUluZGV4IiwidGVybSIsIm5vZGVzIiwicHJpbWl0aXZlRnJvbU5vZGVzIiwiYm9vbGVhbiIsInByaW1pdGl2ZUZyb21Cb29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsInByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUErRUE7ZUFBQTs7UUExQ2dCQTtlQUFBQTs7UUEvQkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBNkNBQztlQUFBQTs7UUFmQUM7ZUFBQUE7OztpRUFsREs7MkJBRW1GOzs7Ozs7QUFFakcsU0FBU0gsYUFBYUksSUFBSSxFQUFFQyxPQUFPO0lBQ3hDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxXQUFXLE1BQ1hDLFlBQVlDLElBQUFBLDRCQUFpQixFQUFDTixNQUFNQyxVQUNwQ00sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QkMsWUFBWTtJQUVsQlQsT0FBTztJQUVQQyxVQUFVO0lBRVYsTUFBTVMsT0FBTyxJQUFJUixLQUFLRCxTQUFTTSxRQUFRUCxNQUFNUyxXQUFXTCxVQUFVQztJQUVsRSxPQUFPSztBQUNUO0FBRU8sU0FBU2IsY0FBY2MsS0FBSyxFQUFFVixPQUFPO0lBQzFDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxXQUFXLE1BQ1hDLFlBQVlPLElBQUFBLDZCQUFrQixFQUFDRCxPQUFPVixVQUN0Q00sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QlIsT0FBTyxNQUNQUyxZQUFZO0lBRWxCUixVQUFVO0lBRVYsTUFBTVMsT0FBTyxJQUFJUixLQUFLRCxTQUFTTSxRQUFRUCxNQUFNUyxXQUFXTCxVQUFVQztJQUVsRSxPQUFPSztBQUNUO0FBRU8sU0FBU2YsZ0JBQWdCa0IsT0FBTyxFQUFFWixPQUFPO0lBQzlDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxXQUFXLE1BQ1hDLFlBQVlTLElBQUFBLCtCQUFvQixFQUFDRCxTQUFTWixVQUMxQ00sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QlIsT0FBTyxNQUNQUyxZQUFZO0lBRWxCUixVQUFVO0lBRVYsTUFBTVMsT0FBTyxJQUFJUixLQUFLRCxTQUFTTSxRQUFRUCxNQUFNUyxXQUFXTCxVQUFVQztJQUVsRSxPQUFPSztBQUNUO0FBRU8sU0FBU1gsc0JBQXNCZ0IsYUFBYSxFQUFFZCxPQUFPO0lBQzFELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxXQUFXLE1BQ1hDLFlBQVlXLElBQUFBLHFDQUEwQixFQUFDRCxlQUFlZCxVQUN0RE0sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QlIsT0FBTyxNQUNQUyxZQUFZO0lBRWxCUixVQUFVO0lBRVYsTUFBTVMsT0FBTyxJQUFJUixLQUFLRCxTQUFTTSxRQUFRUCxNQUFNUyxXQUFXTCxVQUFVQztJQUVsRSxPQUFPSztBQUNUO0FBRU8sU0FBU1osa0JBQWtCTyxTQUFTO0lBQ3pDLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CRixVQUFVLE1BQ1ZNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJSLE9BQU8sTUFDUFMsWUFBWSxNQUNaTCxXQUFXLE1BQ1hNLE9BQU8sSUFBSVIsS0FBS0QsU0FBU00sUUFBUVAsTUFBTVMsV0FBV0wsVUFBVUM7SUFFbEUsT0FBT0s7QUFDVDtNQUVBLFdBQWU7SUFDYmQ7SUFDQUM7SUFDQUY7SUFDQUk7SUFDQUQ7QUFDRiJ9