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
    get termFromNominalValue () {
        return termFromNominalValue;
    },
    get termFromNominalValues () {
        return termFromNominalValues;
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
function termFromPrimitive(primitive) {
    const { Term } = _elements.default, context = null, string = primitive.getString(), node = null, breakPoint = null, variable = null, term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromNominalValue(nominalValue) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNominalValue)(nominalValue), string = primitive.getString(), breakPoint = null, node = null, context = null, term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromNominalValues(nominalValues) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNominalValues)(nominalValues), string = primitive.getString(), node = null, breakPoint = null, context = null, term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive);
    return term;
}
const _default = {
    termFromBoolean,
    termFromNominalValue,
    termFromNominalValues,
    termFromStringLiteral,
    termFromPrimitive
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbU5vbWluYWxWYWx1ZSwgcHJpbWl0aXZlRnJvbU5vbWluYWxWYWx1ZXMsIHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wcmltaXRpdmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJpbWl0aXZlKHByaW1pdGl2ZSkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTm9taW5hbFZhbHVlKG5vbWluYWxWYWx1ZSkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob21pbmFsVmFsdWUobm9taW5hbFZhbHVlKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTm9taW5hbFZhbHVlcyhub21pbmFsVmFsdWVzKSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vbWluYWxWYWx1ZXMobm9taW5hbFZhbHVlcyksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXJtRnJvbUJvb2xlYW4sXG4gIHRlcm1Gcm9tTm9taW5hbFZhbHVlLFxuICB0ZXJtRnJvbU5vbWluYWxWYWx1ZXMsXG4gIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCxcbiAgdGVybUZyb21QcmltaXRpdmVcbn07XG4iXSwibmFtZXMiOlsidGVybUZyb21Cb29sZWFuIiwidGVybUZyb21Ob21pbmFsVmFsdWUiLCJ0ZXJtRnJvbU5vbWluYWxWYWx1ZXMiLCJ0ZXJtRnJvbVByaW1pdGl2ZSIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInByaW1pdGl2ZSIsIlRlcm0iLCJlbGVtZW50cyIsImNvbnRleHQiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwidGVybSIsImJvb2xlYW4iLCJwcmltaXRpdmVGcm9tQm9vbGVhbiIsIm5vbWluYWxWYWx1ZSIsInByaW1pdGl2ZUZyb21Ob21pbmFsVmFsdWUiLCJub21pbmFsVmFsdWVzIiwicHJpbWl0aXZlRnJvbU5vbWluYWxWYWx1ZXMiLCJzdHJpbmdMaXRlcmFsIiwicHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBFQTtlQUFBOztRQXhEZ0JBO2VBQUFBOztRQWVBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBeENBQztlQUFBQTs7UUFxREFDO2VBQUFBOzs7aUVBekRLOzJCQUVtRzs7Ozs7O0FBRWpILFNBQVNELGtCQUFrQkUsU0FBUztJQUN6QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsVUFBVSxNQUNWQyxTQUFTSixVQUFVSyxTQUFTLElBQzVCQyxPQUFPLE1BQ1BDLGFBQWEsTUFDYkMsV0FBVyxNQUNYQyxPQUFPLElBQUlSLEtBQUtFLFNBQVNDLFFBQVFFLE1BQU1DLFlBQVlDLFVBQVVSO0lBRW5FLE9BQU9TO0FBQ1Q7QUFFTyxTQUFTZCxnQkFBZ0JlLE9BQU8sRUFBRVAsT0FBTztJQUM5QyxNQUFNLEVBQUVGLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQk0sV0FBVyxNQUNYUixZQUFZVyxJQUFBQSwrQkFBb0IsRUFBQ0QsU0FBU1AsVUFDMUNDLFNBQVNKLFVBQVVLLFNBQVMsSUFDNUJDLE9BQU8sTUFDUEMsYUFBYTtJQUVuQkosVUFBVTtJQUVWLE1BQU1NLE9BQU8sSUFBSVIsS0FBS0UsU0FBU0MsUUFBUUUsTUFBTUMsWUFBWUMsVUFBVVI7SUFFbkUsT0FBT1M7QUFDVDtBQUVPLFNBQVNiLHFCQUFxQmdCLFlBQVk7SUFDL0MsTUFBTSxFQUFFWCxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJNLFdBQVcsTUFDWFIsWUFBWWEsSUFBQUEsb0NBQXlCLEVBQUNELGVBQ3RDUixTQUFTSixVQUFVSyxTQUFTLElBQzVCRSxhQUFhLE1BQ2JELE9BQU8sTUFDUEgsVUFBVSxNQUNWTSxPQUFPLElBQUlSLEtBQUtFLFNBQVNDLFFBQVFFLE1BQU1DLFlBQVlDLFVBQVVSO0lBRW5FLE9BQU9TO0FBQ1Q7QUFFTyxTQUFTWixzQkFBc0JpQixhQUFhO0lBQ2pELE1BQU0sRUFBRWIsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CTSxXQUFXLE1BQ1hSLFlBQVllLElBQUFBLHFDQUEwQixFQUFDRCxnQkFDdkNWLFNBQVNKLFVBQVVLLFNBQVMsSUFDNUJDLE9BQU8sTUFDUEMsYUFBYSxNQUNiSixVQUFVLE1BQ1ZNLE9BQU8sSUFBSVIsS0FBS0UsU0FBU0MsUUFBUUUsTUFBTUMsWUFBWUMsVUFBVVI7SUFFbkUsT0FBT1M7QUFDVDtBQUVPLFNBQVNWLHNCQUFzQmlCLGFBQWEsRUFBRWIsT0FBTztJQUMxRCxNQUFNLEVBQUVGLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQk0sV0FBVyxNQUNYUixZQUFZaUIsSUFBQUEscUNBQTBCLEVBQUNELGVBQWViLFVBQ3REQyxTQUFTSixVQUFVSyxTQUFTLElBQzVCQyxPQUFPLE1BQ1BDLGFBQWE7SUFFbkJKLFVBQVU7SUFFVixNQUFNTSxPQUFPLElBQUlSLEtBQUtFLFNBQVNDLFFBQVFFLE1BQU1DLFlBQVlDLFVBQVVSO0lBRW5FLE9BQU9TO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JkO0lBQ0FDO0lBQ0FDO0lBQ0FFO0lBQ0FEO0FBQ0YifQ==