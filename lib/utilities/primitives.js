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
    get primitivesFromExpression () {
        return primitivesFromExpression;
    },
    get primitivesFromNodes () {
        return primitivesFromNodes;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _primitive = require("../utilities/primitive");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function primitivesFromNodes(nodes, context) {
    var Primitives = _elements.default.Primitives, primitivesArray = primitivesArrayFromNodes(nodes, context), primitivesString = (0, _string.primitivesStringFromPrimitivesArray)(primitivesArray), string = primitivesString, array = primitivesArray, primitives = new Primitives(string, array);
    return primitives;
}
function primitivesFromExpression(primitive, context) {
    var Primitives = _elements.default.Primitives, primitivesArray = [
        primitive
    ], primitivesString = (0, _string.primitivesStringFromPrimitivesArray)(primitivesArray), string = primitivesString, array = primitivesArray, primitives = new Primitives(string, array);
    return primitives;
}
var _default = {
    primitivesFromNodes: primitivesFromNodes,
    primitivesFromExpression: primitivesFromExpression
};
function primitivesArrayFromNodes(nodes, context) {
    var primitivesArray = nodes.map(function(node) {
        var primitive = (0, _primitive.primitiveFromNode)(node, context);
        return primitive;
    });
    return primitivesArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJpbWl0aXZlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBwcmltaXRpdmVGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJpbWl0aXZlXCI7XG5pbXBvcnQgeyBwcmltaXRpdmVzU3RyaW5nRnJvbVByaW1pdGl2ZXNBcnJheSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVzRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZXNBcnJheSA9IHByaW1pdGl2ZXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZXNTdHJpbmcgPSBwcmltaXRpdmVzU3RyaW5nRnJvbVByaW1pdGl2ZXNBcnJheShwcmltaXRpdmVzQXJyYXkpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVzU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBwcmltaXRpdmVzQXJyYXksIC8vL1xuICAgICAgICBwcmltaXRpdmVzID0gbmV3IFByaW1pdGl2ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVzRnJvbUV4cHJlc3Npb24ocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZXNBcnJheSA9IFtcbiAgICAgICAgICBwcmltaXRpdmVcbiAgICAgICAgXSxcbiAgICAgICAgcHJpbWl0aXZlc1N0cmluZyA9IHByaW1pdGl2ZXNTdHJpbmdGcm9tUHJpbWl0aXZlc0FycmF5KHByaW1pdGl2ZXNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZXNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHByaW1pdGl2ZXNBcnJheSwgLy8vXG4gICAgICAgIHByaW1pdGl2ZXMgPSBuZXcgUHJpbWl0aXZlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcHJpbWl0aXZlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmltaXRpdmVzRnJvbU5vZGVzLFxuICBwcmltaXRpdmVzRnJvbUV4cHJlc3Npb25cbn07XG5cbmZ1bmN0aW9uIHByaW1pdGl2ZXNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCBwcmltaXRpdmVzQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9KTtcblxuICByZXR1cm4gcHJpbWl0aXZlc0FycmF5O1xufVxuXG4iXSwibmFtZXMiOlsicHJpbWl0aXZlc0Zyb21FeHByZXNzaW9uIiwicHJpbWl0aXZlc0Zyb21Ob2RlcyIsIm5vZGVzIiwiY29udGV4dCIsIlByaW1pdGl2ZXMiLCJlbGVtZW50cyIsInByaW1pdGl2ZXNBcnJheSIsInByaW1pdGl2ZXNBcnJheUZyb21Ob2RlcyIsInByaW1pdGl2ZXNTdHJpbmciLCJwcmltaXRpdmVzU3RyaW5nRnJvbVByaW1pdGl2ZXNBcnJheSIsInN0cmluZyIsImFycmF5IiwicHJpbWl0aXZlcyIsInByaW1pdGl2ZSIsIm1hcCIsIm5vZGUiLCJwcmltaXRpdmVGcm9tTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0JBO2VBQUE7O1FBYmdCQTtlQUFBQTs7UUFYQUM7ZUFBQUE7OzsrREFMSzt5QkFFYTtzQkFDa0I7Ozs7OztBQUU3QyxTQUFTQSxvQkFBb0JDLEtBQUssRUFBRUMsT0FBTztJQUNoRCxJQUFNLEFBQUVDLGFBQWVDLGlCQUFRLENBQXZCRCxZQUNGRSxrQkFBa0JDLHlCQUF5QkwsT0FBT0MsVUFDbERLLG1CQUFtQkMsSUFBQUEsMkNBQW1DLEVBQUNILGtCQUN2REksU0FBU0Ysa0JBQ1RHLFFBQVFMLGlCQUNSTSxhQUFhLElBQUlSLFdBQVdNLFFBQVFDO0lBRTFDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTWix5QkFBeUJhLFNBQVMsRUFBRVYsT0FBTztJQUN6RCxJQUFNLEFBQUVDLGFBQWVDLGlCQUFRLENBQXZCRCxZQUNGRSxrQkFBa0I7UUFDaEJPO0tBQ0QsRUFDREwsbUJBQW1CQyxJQUFBQSwyQ0FBbUMsRUFBQ0gsa0JBQ3ZESSxTQUFTRixrQkFDVEcsUUFBUUwsaUJBQ1JNLGFBQWEsSUFBSVIsV0FBV00sUUFBUUM7SUFFMUMsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlgscUJBQUFBO0lBQ0FELDBCQUFBQTtBQUNGO0FBRUEsU0FBU08seUJBQXlCTCxLQUFLLEVBQUVDLE9BQU87SUFDOUMsSUFBTUcsa0JBQWtCSixNQUFNWSxHQUFHLENBQUMsU0FBQ0M7UUFDakMsSUFBTUYsWUFBWUcsSUFBQUEsNEJBQWlCLEVBQUNELE1BQU1aO1FBRTFDLE9BQU9VO0lBQ1Q7SUFFQSxPQUFPUDtBQUNUIn0=