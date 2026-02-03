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
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromNode)(node, context), string = primitive.getString(), term = new Term(string, variable, primitive);
    return term;
}
function termFromNodes(nodes, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromNodes)(nodes, context), string = primitive.getString(), term = new Term(string, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), term = new Term(string, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    var Term = _elements.default.Term, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), term = new Term(string, variable, primitive);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSwgcHJpbWl0aXZlRnJvbU5vZGVzLCBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsidGVybUZyb21Cb29sZWFuIiwidGVybUZyb21Ob2RlIiwidGVybUZyb21Ob2RlcyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsIm5vZGUiLCJjb250ZXh0IiwiVGVybSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJwcmltaXRpdmVGcm9tTm9kZSIsInN0cmluZyIsImdldFN0cmluZyIsInRlcm0iLCJub2RlcyIsInByaW1pdGl2ZUZyb21Ob2RlcyIsImJvb2xlYW4iLCJwcmltaXRpdmVGcm9tQm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMEJnQkE7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUFVQUM7ZUFBQUE7O1FBb0JBQztlQUFBQTs7OytEQWxDSzt5QkFFbUY7Ozs7OztBQUVqRyxTQUFTRixhQUFhRyxJQUFJLEVBQUVDLE9BQU87SUFDeEMsSUFBTSxBQUFFQyxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsV0FBVyxNQUNYQyxZQUFZQyxJQUFBQSw0QkFBaUIsRUFBQ04sTUFBTUMsVUFDcENNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJDLE9BQU8sSUFBSVAsS0FBS0ssUUFBUUgsVUFBVUM7SUFFeEMsT0FBT0k7QUFDVDtBQUVPLFNBQVNYLGNBQWNZLEtBQUssRUFBRVQsT0FBTztJQUMxQyxJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxXQUFXLE1BQ1hDLFlBQVlNLElBQUFBLDZCQUFrQixFQUFDRCxPQUFPVCxVQUN0Q00sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QkMsT0FBTyxJQUFJUCxLQUFLSyxRQUFRSCxVQUFVQztJQUV4QyxPQUFPSTtBQUNUO0FBRU8sU0FBU2IsZ0JBQWdCZ0IsT0FBTyxFQUFFWCxPQUFPO0lBQzlDLElBQU0sQUFBRUMsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLFdBQVcsTUFDWEMsWUFBWVEsSUFBQUEsK0JBQW9CLEVBQUNELFNBQVNYLFVBQzFDTSxTQUFTRixVQUFVRyxTQUFTLElBQzVCQyxPQUFPLElBQUlQLEtBQUtLLFFBQVFILFVBQVVDO0lBRXhDLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTVixzQkFBc0JlLGFBQWEsRUFBRWIsT0FBTztJQUMxRCxJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxXQUFXLE1BQ1hDLFlBQVlVLElBQUFBLHFDQUEwQixFQUFDRCxlQUFlYixVQUN0RE0sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QkMsT0FBTyxJQUFJUCxLQUFLSyxRQUFRSCxVQUFVQztJQUV4QyxPQUFPSTtBQUNUIn0=