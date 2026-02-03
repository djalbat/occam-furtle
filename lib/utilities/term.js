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
    get termFromNode () {
        return termFromNode;
    },
    get termFromNodes () {
        return termFromNodes;
    },
    get termFromStringLiteral () {
        return termFromStringLiteral;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _primitive = require("../utilities/primitive");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function termFromNode(node, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromNode)(node, context), string = primitive.getString();
    node = null;
    context = null;
    var term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromNodes(nodes, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromNodes)(nodes, context), string = primitive.getString(), node = null;
    context = null;
    var term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null;
    context = null;
    var term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null;
    context = null;
    var term = new Term(context, string, node, variable, primitive);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSwgcHJpbWl0aXZlRnJvbU5vZGVzLCBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpO1xuXG4gIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtRnJvbU5vZGUiLCJ0ZXJtRnJvbU5vZGVzIiwidGVybUZyb21TdHJpbmdMaXRlcmFsIiwibm9kZSIsImNvbnRleHQiLCJUZXJtIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsInByaW1pdGl2ZUZyb21Ob2RlIiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwidGVybSIsIm5vZGVzIiwicHJpbWl0aXZlRnJvbU5vZGVzIiwiYm9vbGVhbiIsInByaW1pdGl2ZUZyb21Cb29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsInByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFtQ2dCQTtlQUFBQTs7UUE3QkFDO2VBQUFBOztRQWVBQztlQUFBQTs7UUE0QkFDO2VBQUFBOzs7K0RBL0NLO3lCQUVtRjs7Ozs7O0FBRWpHLFNBQVNGLGFBQWFHLElBQUksRUFBRUMsT0FBTztJQUN4QyxJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxXQUFXLE1BQ1hDLFlBQVlDLElBQUFBLDRCQUFpQixFQUFDTixNQUFNQyxVQUNwQ00sU0FBU0YsVUFBVUcsU0FBUztJQUVsQ1IsT0FBTztJQUVQQyxVQUFVO0lBRVYsSUFBTVEsT0FBTyxJQUFJUCxLQUFLRCxTQUFTTSxRQUFRUCxNQUFNSSxVQUFVQztJQUV2RCxPQUFPSTtBQUNUO0FBRU8sU0FBU1gsY0FBY1ksS0FBSyxFQUFFVCxPQUFPO0lBQzFDLElBQU0sQUFBRUMsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLFdBQVcsTUFDWEMsWUFBWU0sSUFBQUEsNkJBQWtCLEVBQUNELE9BQU9ULFVBQ3RDTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCUixPQUFPO0lBRWJDLFVBQVU7SUFFVixJQUFNUSxPQUFPLElBQUlQLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1JLFVBQVVDO0lBRXZELE9BQU9JO0FBQ1Q7QUFFTyxTQUFTYixnQkFBZ0JnQixPQUFPLEVBQUVYLE9BQU87SUFDOUMsSUFBTSxBQUFFQyxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsV0FBVyxNQUNYQyxZQUFZUSxJQUFBQSwrQkFBb0IsRUFBQ0QsU0FBU1gsVUFDMUNNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJSLE9BQU87SUFFYkMsVUFBVTtJQUVWLElBQU1RLE9BQU8sSUFBSVAsS0FBS0QsU0FBU00sUUFBUVAsTUFBTUksVUFBVUM7SUFFdkQsT0FBT0k7QUFDVDtBQUVPLFNBQVNWLHNCQUFzQmUsYUFBYSxFQUFFYixPQUFPO0lBQzFELElBQU0sQUFBRUMsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLFdBQVcsTUFDWEMsWUFBWVUsSUFBQUEscUNBQTBCLEVBQUNELGVBQWViLFVBQ3RETSxTQUFTRixVQUFVRyxTQUFTLElBQzVCUixPQUFPO0lBRWJDLFVBQVU7SUFFVixJQUFNUSxPQUFPLElBQUlQLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1JLFVBQVVDO0lBRXZELE9BQU9JO0FBQ1QifQ==