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
    get primitiveFromBoolean () {
        return primitiveFromBoolean;
    },
    get primitiveFromNode () {
        return primitiveFromNode;
    },
    get primitiveFromNodes () {
        return primitiveFromNodes;
    },
    get primitiveFromStringLiteral () {
        return primitiveFromStringLiteral;
    }
});
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _types = require("../types");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function primitiveFromNode(node, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNode)(node, context), string = primitiveString, type = _types.NODE_TYPE, value = node, lineIndex = null;
    node = null;
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex, type, value);
    return primitive;
}
function primitiveFromNodes(nodes, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNodes)(nodes, context), string = primitiveString, type = _types.NODES_TYPE, value = nodes, node = null, lineIndex = null;
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex, type, value);
    return primitive;
}
function primitiveFromBoolean(boolean, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromBoolean)(boolean), string = primitiveString, type = _types.BOOLEAN_TYPE, value = boolean, node = null, lineIndex = null;
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex, type, value);
    return primitive;
}
function primitiveFromStringLiteral(stringLiteral, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromStringLiteral)(stringLiteral), string = primitiveString, type = _types.STRING_TYPE, value = stringLiteral, node = null, lineIndex = null;
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex, type, value);
    return primitive;
}
const _default = {
    primitiveFromNode,
    primitiveFromNodes,
    primitiveFromBoolean,
    primitiveFromStringLiteral
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJpbWl0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZSwgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZXMsIHByaW10aXZlU3RyaW5nRnJvbUJvb2xlYW4sIHByaW10aXZlU3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgIC8vL1xuICAgICAgICB0eXBlID0gTk9ERV9UWVBFLFxuICAgICAgICB2YWx1ZSA9IG5vZGUsIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gcHJpbXRpdmVTdHJpbmdGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsICAvLy9cbiAgICAgICAgdHlwZSA9IE5PREVTX1RZUEUsXG4gICAgICAgIHZhbHVlID0gbm9kZXMsICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgdmFsdWUpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gcHJpbXRpdmVTdHJpbmdGcm9tQm9vbGVhbihib29sZWFuKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLCAgLy8vXG4gICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgIHZhbHVlID0gYm9vbGVhbiwgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBwcmltdGl2ZVN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsICAvLy9cbiAgICAgICAgdHlwZSA9IFNUUklOR19UWVBFLFxuICAgICAgICB2YWx1ZSA9IHN0cmluZ0xpdGVyYWwsICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgdmFsdWUpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpbWl0aXZlRnJvbU5vZGUsXG4gIHByaW1pdGl2ZUZyb21Ob2RlcyxcbiAgcHJpbWl0aXZlRnJvbUJvb2xlYW4sXG4gIHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsXG59O1xuIl0sIm5hbWVzIjpbInByaW1pdGl2ZUZyb21Cb29sZWFuIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVGcm9tTm9kZXMiLCJwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbCIsIm5vZGUiLCJjb250ZXh0IiwiUHJpbWl0aXZlIiwiZWxlbWVudHMiLCJwcmltaXRpdmVTdHJpbmciLCJwcmltdGl2ZVN0cmluZ0Zyb21Ob2RlIiwic3RyaW5nIiwidHlwZSIsIk5PREVfVFlQRSIsInZhbHVlIiwibGluZUluZGV4IiwicHJpbWl0aXZlIiwibm9kZXMiLCJwcmltdGl2ZVN0cmluZ0Zyb21Ob2RlcyIsIk5PREVTX1RZUEUiLCJib29sZWFuIiwicHJpbXRpdmVTdHJpbmdGcm9tQm9vbGVhbiIsIkJPT0xFQU5fVFlQRSIsInN0cmluZ0xpdGVyYWwiLCJwcmltdGl2ZVN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiU1RSSU5HX1RZUEUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdFQTtlQUFBOztRQWhDZ0JBO2VBQUFBOztRQWpDQUM7ZUFBQUE7O1FBaUJBQztlQUFBQTs7UUFnQ0FDO2VBQUFBOzs7aUVBdERLO3VCQUU0Qzt3QkFDMkQ7Ozs7OztBQUVySCxTQUFTRixrQkFBa0JHLElBQUksRUFBRUMsT0FBTztJQUM3QyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCQyxJQUFBQSw4QkFBc0IsRUFBQ0wsTUFBTUMsVUFDL0NLLFNBQVNGLGlCQUNURyxPQUFPQyxnQkFBUyxFQUNoQkMsUUFBUVQsTUFDUlUsWUFBWTtJQUVsQlYsT0FBTztJQUVQQyxVQUFVO0lBRVYsTUFBTVUsWUFBWSxJQUFJVCxVQUFVRCxTQUFTSyxRQUFRTixNQUFNVSxXQUFXSCxNQUFNRTtJQUV4RSxPQUFPRTtBQUNUO0FBRU8sU0FBU2IsbUJBQW1CYyxLQUFLLEVBQUVYLE9BQU87SUFDL0MsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsaUJBQVEsRUFDeEJDLGtCQUFrQlMsSUFBQUEsK0JBQXVCLEVBQUNELE9BQU9YLFVBQ2pESyxTQUFTRixpQkFDVEcsT0FBT08saUJBQVUsRUFDakJMLFFBQVFHLE9BQ1JaLE9BQU8sTUFDUFUsWUFBWTtJQUVsQlQsVUFBVTtJQUVWLE1BQU1VLFlBQVksSUFBSVQsVUFBVUQsU0FBU0ssUUFBUU4sTUFBTVUsV0FBV0gsTUFBTUU7SUFFeEUsT0FBT0U7QUFDVDtBQUVPLFNBQVNmLHFCQUFxQm1CLE9BQU8sRUFBRWQsT0FBTztJQUNuRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCWSxJQUFBQSxpQ0FBeUIsRUFBQ0QsVUFDNUNULFNBQVNGLGlCQUNURyxPQUFPVSxtQkFBWSxFQUNuQlIsUUFBUU0sU0FDUmYsT0FBTyxNQUNQVSxZQUFZO0lBRWxCVCxVQUFVO0lBRVYsTUFBTVUsWUFBWSxJQUFJVCxVQUFVRCxTQUFTSyxRQUFRTixNQUFNVSxXQUFXSCxNQUFNRTtJQUV4RSxPQUFPRTtBQUNUO0FBRU8sU0FBU1osMkJBQTJCbUIsYUFBYSxFQUFFakIsT0FBTztJQUMvRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCZSxJQUFBQSx1Q0FBK0IsRUFBQ0QsZ0JBQ2xEWixTQUFTRixpQkFDVEcsT0FBT2Esa0JBQVcsRUFDbEJYLFFBQVFTLGVBQ1JsQixPQUFPLE1BQ1BVLFlBQVk7SUFFbEJULFVBQVU7SUFFVixNQUFNVSxZQUFZLElBQUlULFVBQVVELFNBQVNLLFFBQVFOLE1BQU1VLFdBQVdILE1BQU1FO0lBRXhFLE9BQU9FO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JkO0lBQ0FDO0lBQ0FGO0lBQ0FHO0FBQ0YifQ==