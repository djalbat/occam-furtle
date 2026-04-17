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
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNode)(node, context), string = primitiveString, type = _types.NODE_TYPE, value = node, breakPoint = null;
    node = null;
    context = null;
    const primitive = new Primitive(context, string, node, breakPoint, type, value);
    return primitive;
}
function primitiveFromNodes(nodes, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNodes)(nodes, context), string = primitiveString, type = _types.NODES_TYPE, value = nodes, node = null, breakPoint = null;
    context = null;
    const primitive = new Primitive(context, string, node, breakPoint, type, value);
    return primitive;
}
function primitiveFromBoolean(boolean, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromBoolean)(boolean), string = primitiveString, type = _types.BOOLEAN_TYPE, value = boolean, node = null, breakPoint = null;
    context = null;
    const primitive = new Primitive(context, string, node, breakPoint, type, value);
    return primitive;
}
function primitiveFromStringLiteral(stringLiteral, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromStringLiteral)(stringLiteral), string = primitiveString, type = _types.STRING_TYPE, value = stringLiteral, node = null, breakPoint = null;
    context = null;
    const primitive = new Primitive(context, string, node, breakPoint, type, value);
    return primitive;
}
const _default = {
    primitiveFromNode,
    primitiveFromNodes,
    primitiveFromBoolean,
    primitiveFromStringLiteral
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJpbWl0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZSwgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZXMsIHByaW10aXZlU3RyaW5nRnJvbUJvb2xlYW4sIHByaW10aXZlU3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgIC8vL1xuICAgICAgICB0eXBlID0gTk9ERV9UWVBFLFxuICAgICAgICB2YWx1ZSA9IG5vZGUsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBub2RlID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgdmFsdWUpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBwcmltdGl2ZVN0cmluZ0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgIC8vL1xuICAgICAgICB0eXBlID0gTk9ERVNfVFlQRSxcbiAgICAgICAgdmFsdWUgPSBub2RlcywgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbUJvb2xlYW4oYm9vbGVhbiksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgIC8vL1xuICAgICAgICB0eXBlID0gQk9PTEVBTl9UWVBFLFxuICAgICAgICB2YWx1ZSA9IGJvb2xlYW4sICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBwcmltdGl2ZVN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsICAvLy9cbiAgICAgICAgdHlwZSA9IFNUUklOR19UWVBFLFxuICAgICAgICB2YWx1ZSA9IHN0cmluZ0xpdGVyYWwsICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmltaXRpdmVGcm9tTm9kZSxcbiAgcHJpbWl0aXZlRnJvbU5vZGVzLFxuICBwcmltaXRpdmVGcm9tQm9vbGVhbixcbiAgcHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWxcbn07XG4iXSwibmFtZXMiOlsicHJpbWl0aXZlRnJvbUJvb2xlYW4iLCJwcmltaXRpdmVGcm9tTm9kZSIsInByaW1pdGl2ZUZyb21Ob2RlcyIsInByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsIiwibm9kZSIsImNvbnRleHQiLCJQcmltaXRpdmUiLCJlbGVtZW50cyIsInByaW1pdGl2ZVN0cmluZyIsInByaW10aXZlU3RyaW5nRnJvbU5vZGUiLCJzdHJpbmciLCJ0eXBlIiwiTk9ERV9UWVBFIiwidmFsdWUiLCJicmVha1BvaW50IiwicHJpbWl0aXZlIiwibm9kZXMiLCJwcmltdGl2ZVN0cmluZ0Zyb21Ob2RlcyIsIk5PREVTX1RZUEUiLCJib29sZWFuIiwicHJpbXRpdmVTdHJpbmdGcm9tQm9vbGVhbiIsIkJPT0xFQU5fVFlQRSIsInN0cmluZ0xpdGVyYWwiLCJwcmltdGl2ZVN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiU1RSSU5HX1RZUEUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdFQTtlQUFBOztRQWhDZ0JBO2VBQUFBOztRQWpDQUM7ZUFBQUE7O1FBaUJBQztlQUFBQTs7UUFnQ0FDO2VBQUFBOzs7aUVBdERLO3VCQUU0Qzt3QkFDMkQ7Ozs7OztBQUVySCxTQUFTRixrQkFBa0JHLElBQUksRUFBRUMsT0FBTztJQUM3QyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCQyxJQUFBQSw4QkFBc0IsRUFBQ0wsTUFBTUMsVUFDL0NLLFNBQVNGLGlCQUNURyxPQUFPQyxnQkFBUyxFQUNoQkMsUUFBUVQsTUFDUlUsYUFBYTtJQUVuQlYsT0FBTztJQUVQQyxVQUFVO0lBRVYsTUFBTVUsWUFBWSxJQUFJVCxVQUFVRCxTQUFTSyxRQUFRTixNQUFNVSxZQUFZSCxNQUFNRTtJQUV6RSxPQUFPRTtBQUNUO0FBRU8sU0FBU2IsbUJBQW1CYyxLQUFLLEVBQUVYLE9BQU87SUFDL0MsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsaUJBQVEsRUFDeEJDLGtCQUFrQlMsSUFBQUEsK0JBQXVCLEVBQUNELE9BQU9YLFVBQ2pESyxTQUFTRixpQkFDVEcsT0FBT08saUJBQVUsRUFDakJMLFFBQVFHLE9BQ1JaLE9BQU8sTUFDUFUsYUFBYTtJQUVuQlQsVUFBVTtJQUVWLE1BQU1VLFlBQVksSUFBSVQsVUFBVUQsU0FBU0ssUUFBUU4sTUFBTVUsWUFBWUgsTUFBTUU7SUFFekUsT0FBT0U7QUFDVDtBQUVPLFNBQVNmLHFCQUFxQm1CLE9BQU8sRUFBRWQsT0FBTztJQUNuRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCWSxJQUFBQSxpQ0FBeUIsRUFBQ0QsVUFDNUNULFNBQVNGLGlCQUNURyxPQUFPVSxtQkFBWSxFQUNuQlIsUUFBUU0sU0FDUmYsT0FBTyxNQUNQVSxhQUFhO0lBRW5CVCxVQUFVO0lBRVYsTUFBTVUsWUFBWSxJQUFJVCxVQUFVRCxTQUFTSyxRQUFRTixNQUFNVSxZQUFZSCxNQUFNRTtJQUV6RSxPQUFPRTtBQUNUO0FBRU8sU0FBU1osMkJBQTJCbUIsYUFBYSxFQUFFakIsT0FBTztJQUMvRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCZSxJQUFBQSx1Q0FBK0IsRUFBQ0QsZ0JBQ2xEWixTQUFTRixpQkFDVEcsT0FBT2Esa0JBQVcsRUFDbEJYLFFBQVFTLGVBQ1JsQixPQUFPLE1BQ1BVLGFBQWE7SUFFbkJULFVBQVU7SUFFVixNQUFNVSxZQUFZLElBQUlULFVBQVVELFNBQVNLLFFBQVFOLE1BQU1VLFlBQVlILE1BQU1FO0lBRXpFLE9BQU9FO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JkO0lBQ0FDO0lBQ0FGO0lBQ0FHO0FBQ0YifQ==