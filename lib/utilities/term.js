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
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNode)(node, context), string = primitive.getString(), breakPoint = null;
    node = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromNodes(nodes, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNodes)(nodes, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromPrimitive(primitive) {
    const { Term } = _elements.default, context = null, string = primitive.getString(), node = null, breakPoint = null, variable = null, term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
const _default = {
    termFromNode,
    termFromNodes,
    termFromBoolean,
    termFromStringLiteral,
    termFromPrimitive
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSwgcHJpbWl0aXZlRnJvbU5vZGVzLCBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBub2RlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVByaW1pdGl2ZShwcmltaXRpdmUpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlcm1Gcm9tTm9kZSxcbiAgdGVybUZyb21Ob2RlcyxcbiAgdGVybUZyb21Cb29sZWFuLFxuICB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwsXG4gIHRlcm1Gcm9tUHJpbWl0aXZlXG59O1xuIl0sIm5hbWVzIjpbInRlcm1Gcm9tQm9vbGVhbiIsInRlcm1Gcm9tTm9kZSIsInRlcm1Gcm9tTm9kZXMiLCJ0ZXJtRnJvbVByaW1pdGl2ZSIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsIm5vZGUiLCJjb250ZXh0IiwiVGVybSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJwcmltaXRpdmVGcm9tTm9kZSIsInN0cmluZyIsImdldFN0cmluZyIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwibm9kZXMiLCJwcmltaXRpdmVGcm9tTm9kZXMiLCJib29sZWFuIiwicHJpbWl0aXZlRnJvbUJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwicHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQStFQTtlQUFBOztRQTFDZ0JBO2VBQUFBOztRQS9CQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUE2Q0FDO2VBQUFBOztRQWZBQztlQUFBQTs7O2lFQWxESzsyQkFFbUY7Ozs7OztBQUVqRyxTQUFTSCxhQUFhSSxJQUFJLEVBQUVDLE9BQU87SUFDeEMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJDLFdBQVcsTUFDWEMsWUFBWUMsSUFBQUEsNEJBQWlCLEVBQUNOLE1BQU1DLFVBQ3BDTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCQyxhQUFhO0lBRW5CVCxPQUFPO0lBRVBDLFVBQVU7SUFFVixNQUFNUyxPQUFPLElBQUlSLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1TLFlBQVlMLFVBQVVDO0lBRW5FLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTYixjQUFjYyxLQUFLLEVBQUVWLE9BQU87SUFDMUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJDLFdBQVcsTUFDWEMsWUFBWU8sSUFBQUEsNkJBQWtCLEVBQUNELE9BQU9WLFVBQ3RDTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCUixPQUFPLE1BQ1BTLGFBQWE7SUFFbkJSLFVBQVU7SUFFVixNQUFNUyxPQUFPLElBQUlSLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1TLFlBQVlMLFVBQVVDO0lBRW5FLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTZixnQkFBZ0JrQixPQUFPLEVBQUVaLE9BQU87SUFDOUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJDLFdBQVcsTUFDWEMsWUFBWVMsSUFBQUEsK0JBQW9CLEVBQUNELFNBQVNaLFVBQzFDTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCUixPQUFPLE1BQ1BTLGFBQWE7SUFFbkJSLFVBQVU7SUFFVixNQUFNUyxPQUFPLElBQUlSLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1TLFlBQVlMLFVBQVVDO0lBRW5FLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTWCxzQkFBc0JnQixhQUFhLEVBQUVkLE9BQU87SUFDMUQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJDLFdBQVcsTUFDWEMsWUFBWVcsSUFBQUEscUNBQTBCLEVBQUNELGVBQWVkLFVBQ3RETSxTQUFTRixVQUFVRyxTQUFTLElBQzVCUixPQUFPLE1BQ1BTLGFBQWE7SUFFbkJSLFVBQVU7SUFFVixNQUFNUyxPQUFPLElBQUlSLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1TLFlBQVlMLFVBQVVDO0lBRW5FLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTWixrQkFBa0JPLFNBQVM7SUFDekMsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJGLFVBQVUsTUFDVk0sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QlIsT0FBTyxNQUNQUyxhQUFhLE1BQ2JMLFdBQVcsTUFDWE0sT0FBTyxJQUFJUixLQUFLRCxTQUFTTSxRQUFRUCxNQUFNUyxZQUFZTCxVQUFVQztJQUVuRSxPQUFPSztBQUNUO01BRUEsV0FBZTtJQUNiZDtJQUNBQztJQUNBRjtJQUNBSTtJQUNBRDtBQUNGIn0=