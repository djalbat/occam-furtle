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
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNode)(node, context), string = primitiveString, type = _types.NODE_TYPE, value = node; ///
    node = null;
    context = null;
    const primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
function primitiveFromNodes(nodes, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromNodes)(nodes, context), string = primitiveString, type = _types.NODES_TYPE, value = nodes, node = null;
    context = null;
    const primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
function primitiveFromBoolean(boolean, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromBoolean)(boolean), string = primitiveString, type = _types.BOOLEAN_TYPE, value = boolean, node = null;
    context = null;
    const primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
function primitiveFromStringLiteral(stringLiteral, context) {
    const { Primitive } = _elements.default, primitiveString = (0, _string.primtiveStringFromStringLiteral)(stringLiteral), string = primitiveString, type = _types.STRING_TYPE, value = stringLiteral, node = null;
    context = null;
    const primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
const _default = {
    primitiveFromNode,
    primitiveFromNodes,
    primitiveFromBoolean,
    primitiveFromStringLiteral
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJpbWl0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZSwgcHJpbXRpdmVTdHJpbmdGcm9tTm9kZXMsIHByaW10aXZlU3RyaW5nRnJvbUJvb2xlYW4sIHByaW10aXZlU3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgIC8vL1xuICAgICAgICB0eXBlID0gTk9ERV9UWVBFLFxuICAgICAgICB2YWx1ZSA9IG5vZGU7IC8vL1xuXG4gIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IHByaW10aXZlU3RyaW5nRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLCAgLy8vXG4gICAgICAgIHR5cGUgPSBOT0RFU19UWVBFLFxuICAgICAgICB2YWx1ZSA9IG5vZGVzLCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBwcmltdGl2ZVN0cmluZ0Zyb21Cb29sZWFuKGJvb2xlYW4pLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsICAvLy9cbiAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgdmFsdWUgPSBib29sZWFuLCAgLy8vXG4gICAgICAgIG5vZGUgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBwcmltdGl2ZVN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsICAvLy9cbiAgICAgICAgdHlwZSA9IFNUUklOR19UWVBFLFxuICAgICAgICB2YWx1ZSA9IHN0cmluZ0xpdGVyYWwsICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaW1pdGl2ZUZyb21Ob2RlLFxuICBwcmltaXRpdmVGcm9tTm9kZXMsXG4gIHByaW1pdGl2ZUZyb21Cb29sZWFuLFxuICBwcmltaXRpdmVGcm9tU3RyaW5nTGl0ZXJhbFxufTtcbiJdLCJuYW1lcyI6WyJwcmltaXRpdmVGcm9tQm9vbGVhbiIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlRnJvbU5vZGVzIiwicHJpbWl0aXZlRnJvbVN0cmluZ0xpdGVyYWwiLCJub2RlIiwiY29udGV4dCIsIlByaW1pdGl2ZSIsImVsZW1lbnRzIiwicHJpbWl0aXZlU3RyaW5nIiwicHJpbXRpdmVTdHJpbmdGcm9tTm9kZSIsInN0cmluZyIsInR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZSIsInByaW1pdGl2ZSIsIm5vZGVzIiwicHJpbXRpdmVTdHJpbmdGcm9tTm9kZXMiLCJOT0RFU19UWVBFIiwiYm9vbGVhbiIsInByaW10aXZlU3RyaW5nRnJvbUJvb2xlYW4iLCJCT09MRUFOX1RZUEUiLCJzdHJpbmdMaXRlcmFsIiwicHJpbXRpdmVTdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlNUUklOR19UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvRUE7ZUFBQTs7UUE5QmdCQTtlQUFBQTs7UUEvQkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7O2lFQW5ESzt1QkFFNEM7d0JBQzJEOzs7Ozs7QUFFckgsU0FBU0Ysa0JBQWtCRyxJQUFJLEVBQUVDLE9BQU87SUFDN0MsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsaUJBQVEsRUFDeEJDLGtCQUFrQkMsSUFBQUEsOEJBQXNCLEVBQUNMLE1BQU1DLFVBQy9DSyxTQUFTRixpQkFDVEcsT0FBT0MsZ0JBQVMsRUFDaEJDLFFBQVFULE1BQU0sR0FBRztJQUV2QkEsT0FBTztJQUVQQyxVQUFVO0lBRVYsTUFBTVMsWUFBWSxJQUFJUixVQUFVRCxTQUFTSyxRQUFRTixNQUFNTyxNQUFNRTtJQUU3RCxPQUFPQztBQUNUO0FBRU8sU0FBU1osbUJBQW1CYSxLQUFLLEVBQUVWLE9BQU87SUFDL0MsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsaUJBQVEsRUFDeEJDLGtCQUFrQlEsSUFBQUEsK0JBQXVCLEVBQUNELE9BQU9WLFVBQ2pESyxTQUFTRixpQkFDVEcsT0FBT00saUJBQVUsRUFDakJKLFFBQVFFLE9BQ1JYLE9BQU87SUFFYkMsVUFBVTtJQUVWLE1BQU1TLFlBQVksSUFBSVIsVUFBVUQsU0FBU0ssUUFBUU4sTUFBTU8sTUFBTUU7SUFFN0QsT0FBT0M7QUFDVDtBQUVPLFNBQVNkLHFCQUFxQmtCLE9BQU8sRUFBRWIsT0FBTztJQUNuRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCVyxJQUFBQSxpQ0FBeUIsRUFBQ0QsVUFDNUNSLFNBQVNGLGlCQUNURyxPQUFPUyxtQkFBWSxFQUNuQlAsUUFBUUssU0FDUmQsT0FBTztJQUViQyxVQUFVO0lBRVYsTUFBTVMsWUFBWSxJQUFJUixVQUFVRCxTQUFTSyxRQUFRTixNQUFNTyxNQUFNRTtJQUU3RCxPQUFPQztBQUNUO0FBRU8sU0FBU1gsMkJBQTJCa0IsYUFBYSxFQUFFaEIsT0FBTztJQUMvRCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxpQkFBUSxFQUN4QkMsa0JBQWtCYyxJQUFBQSx1Q0FBK0IsRUFBQ0QsZ0JBQ2xEWCxTQUFTRixpQkFDVEcsT0FBT1ksa0JBQVcsRUFDbEJWLFFBQVFRLGVBQ1JqQixPQUFPO0lBRWJDLFVBQVU7SUFFVixNQUFNUyxZQUFZLElBQUlSLFVBQVVELFNBQVNLLFFBQVFOLE1BQU1PLE1BQU1FO0lBRTdELE9BQU9DO0FBQ1Q7TUFFQSxXQUFlO0lBQ2JiO0lBQ0FDO0lBQ0FGO0lBQ0FHO0FBQ0YifQ==