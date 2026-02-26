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
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNode)(node, context), string = primitive.getString();
    node = null;
    context = null;
    const term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromNodes(nodes, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromNodes)(nodes, context), string = primitive.getString(), node = null;
    context = null;
    const term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromBoolean(boolean, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromBoolean)(boolean, context), string = primitive.getString(), node = null;
    context = null;
    const term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromStringLiteral(stringLiteral, context) {
    const { Term } = _elements.default, variable = null, primitive = (0, _primitive.primitiveFromStringLiteral)(stringLiteral, context), string = primitive.getString(), node = null;
    context = null;
    const term = new Term(context, string, node, variable, primitive);
    return term;
}
function termFromPrimitive(primitive) {
    const { Term } = _elements.default, context = null, string = primitive.getString(), node = null, variable = null, term = new Term(context, string, node, variable, primitive);
    return term;
}
const _default = {
    termFromNode,
    termFromNodes,
    termFromBoolean,
    termFromStringLiteral,
    termFromPrimitive
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSwgcHJpbWl0aXZlRnJvbU5vZGVzLCBwcmltaXRpdmVGcm9tQm9vbGVhbiwgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ByaW1pdGl2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpO1xuXG4gIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUHJpbWl0aXZlKHByaW1pdGl2ZSkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXJtRnJvbU5vZGUsXG4gIHRlcm1Gcm9tTm9kZXMsXG4gIHRlcm1Gcm9tQm9vbGVhbixcbiAgdGVybUZyb21TdHJpbmdMaXRlcmFsLFxuICB0ZXJtRnJvbVByaW1pdGl2ZVxufTtcbiJdLCJuYW1lcyI6WyJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtRnJvbU5vZGUiLCJ0ZXJtRnJvbU5vZGVzIiwidGVybUZyb21QcmltaXRpdmUiLCJ0ZXJtRnJvbVN0cmluZ0xpdGVyYWwiLCJub2RlIiwiY29udGV4dCIsIlRlcm0iLCJlbGVtZW50cyIsInZhcmlhYmxlIiwicHJpbWl0aXZlIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJ0ZXJtIiwibm9kZXMiLCJwcmltaXRpdmVGcm9tTm9kZXMiLCJib29sZWFuIiwicHJpbWl0aXZlRnJvbUJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwicHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBFQTtlQUFBOztRQXZDZ0JBO2VBQUFBOztRQTdCQUM7ZUFBQUE7O1FBZUFDO2VBQUFBOztRQTBDQUM7ZUFBQUE7O1FBZEFDO2VBQUFBOzs7aUVBL0NLOzJCQUVtRjs7Ozs7O0FBRWpHLFNBQVNILGFBQWFJLElBQUksRUFBRUMsT0FBTztJQUN4QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsV0FBVyxNQUNYQyxZQUFZQyxJQUFBQSw0QkFBaUIsRUFBQ04sTUFBTUMsVUFDcENNLFNBQVNGLFVBQVVHLFNBQVM7SUFFbENSLE9BQU87SUFFUEMsVUFBVTtJQUVWLE1BQU1RLE9BQU8sSUFBSVAsS0FBS0QsU0FBU00sUUFBUVAsTUFBTUksVUFBVUM7SUFFdkQsT0FBT0k7QUFDVDtBQUVPLFNBQVNaLGNBQWNhLEtBQUssRUFBRVQsT0FBTztJQUMxQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsV0FBVyxNQUNYQyxZQUFZTSxJQUFBQSw2QkFBa0IsRUFBQ0QsT0FBT1QsVUFDdENNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJSLE9BQU87SUFFYkMsVUFBVTtJQUVWLE1BQU1RLE9BQU8sSUFBSVAsS0FBS0QsU0FBU00sUUFBUVAsTUFBTUksVUFBVUM7SUFFdkQsT0FBT0k7QUFDVDtBQUVPLFNBQVNkLGdCQUFnQmlCLE9BQU8sRUFBRVgsT0FBTztJQUM5QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsV0FBVyxNQUNYQyxZQUFZUSxJQUFBQSwrQkFBb0IsRUFBQ0QsU0FBU1gsVUFDMUNNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJSLE9BQU87SUFFYkMsVUFBVTtJQUVWLE1BQU1RLE9BQU8sSUFBSVAsS0FBS0QsU0FBU00sUUFBUVAsTUFBTUksVUFBVUM7SUFFdkQsT0FBT0k7QUFDVDtBQUVPLFNBQVNWLHNCQUFzQmUsYUFBYSxFQUFFYixPQUFPO0lBQzFELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxXQUFXLE1BQ1hDLFlBQVlVLElBQUFBLHFDQUEwQixFQUFDRCxlQUFlYixVQUN0RE0sU0FBU0YsVUFBVUcsU0FBUyxJQUM1QlIsT0FBTztJQUViQyxVQUFVO0lBRVYsTUFBTVEsT0FBTyxJQUFJUCxLQUFLRCxTQUFTTSxRQUFRUCxNQUFNSSxVQUFVQztJQUV2RCxPQUFPSTtBQUNUO0FBRU8sU0FBU1gsa0JBQWtCTyxTQUFTO0lBQ3pDLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CRixVQUFVLE1BQ1ZNLFNBQVNGLFVBQVVHLFNBQVMsSUFDNUJSLE9BQU8sTUFDUEksV0FBVyxNQUNYSyxPQUFPLElBQUlQLEtBQUtELFNBQVNNLFFBQVFQLE1BQU1JLFVBQVVDO0lBRXZELE9BQU9JO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JiO0lBQ0FDO0lBQ0FGO0lBQ0FJO0lBQ0FEO0FBQ0YifQ==