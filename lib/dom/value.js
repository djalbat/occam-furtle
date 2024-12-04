"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Value;
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/@string-literal");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(variable, number, primitive, stringLiteral) {
        _class_call_check(this, Value);
        this.variable = variable;
        this.number = number;
        this.primitive = primitive;
        this.stringLiteral = stringLiteral;
    }
    _create_class(Value, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getPrimitive",
            value: function getPrimitive() {
                return this.primitive;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.stringLiteral;
            }
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var Variable = _dom.default.Variable, variable = Variable.fromValueNode(valueNode, context), number = numberFromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode), value = new Value(variable, number, primitive, stringLiteral);
                return value;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var value = null;
                var assignmentValueNode = assignmentValueNodeQuery(assigmentNode);
                if (assignmentValueNode !== null) {
                    var Variable = _dom.default.Variable, valueNode = assignmentValueNode, variable = Variable.fromValueNode(valueNode, context), number = numberFromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode);
                    value = new Value(variable, number, primitive, stringLiteral);
                }
                return value;
            }
        },
        {
            key: "fromConditionalNode",
            value: function fromConditionalNode(conditionalNode, context) {
                var value = null;
                var conditionValueNode = conditionValueNodeQuery(conditionalNode);
                if (conditionValueNode !== null) {
                    var Variable = _dom.default.Variable, valueNode = conditionValueNode, variable = Variable.fromValueNode(valueNode, context), number = numberFromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode);
                    value = new Value(variable, number, primitive, stringLiteral);
                }
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function numberFromValueNode(valueNode) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(valueNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = numberTerminalNodeContent; ///
    }
    return number;
}
function primitiveFromValueNode(valueNode) {
    var primitive = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        primitive = primitiveTerminalNodeContent; ///
    }
    return primitive;
}
function stringLiteralFromValueNode(valueNode) {
    var stringLiteral = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();
        stringLiteral = stringLiteralTerminalNodeContent; ///
    }
    return stringLiteral;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgbnVtYmVyVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvQG51bWJlclwiKSxcbiAgICAgIGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi92YWx1ZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvQG51bWJlclwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGUsIG51bWJlciwgcHJpbWl0aXZlLCBzdHJpbmdMaXRlcmFsKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMucHJpbWl0aXZlID0gcHJpbWl0aXZlO1xuICAgIHRoaXMuc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZSh2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRWYWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAoYXNzaWdubWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgdmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSksXG4gICAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKTtcblxuICAgICAgdmFsdWUgPSBuZXcgVmFsdWUodmFyaWFibGUsIG51bWJlciwgcHJpbWl0aXZlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbmFsTm9kZShjb25kaXRpb25hbE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uYWxOb2RlKTtcblxuICAgIGlmIChjb25kaXRpb25WYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIHZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpO1xuXG4gICAgICB2YWx1ZSA9IG5ldyBWYWx1ZSh2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gbnVtYmVyVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSB7XG4gIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuIl0sIm5hbWVzIjpbIm51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkiLCJhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJ2YXJpYWJsZSIsIm51bWJlciIsInByaW1pdGl2ZSIsInN0cmluZ0xpdGVyYWwiLCJnZXRWYXJpYWJsZSIsImdldE51bWJlciIsImdldFByaW1pdGl2ZSIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwiZG9tIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZUZyb21WYWx1ZU5vZGUiLCJzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSIsInZhbHVlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsImFzc2lnbm1lbnRWYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uYWxOb2RlIiwiY29uZGl0aW9uYWxOb2RlIiwiY29uZGl0aW9uVmFsdWVOb2RlIiwibmFtZSIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQ3BDQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMscUJBQ3BDRSwyQkFBMkJGLElBQUFBLGdCQUFTLEVBQUMsc0JBQ3JDRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUMsYUFDdkNJLGlDQUFpQ0osSUFBQUEsZ0JBQVMsRUFBQztJQUVqRCxXQUFlSyxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEdkJKO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBTSxBQUFFQyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGWixXQUFXWSxTQUFTSCxhQUFhLENBQUNDLFdBQVdDLFVBQzdDVixTQUFTYSxvQkFBb0JKLFlBQzdCUixZQUFZYSx1QkFBdUJMLFlBQ25DUCxnQkFBZ0JhLDJCQUEyQk4sWUFDM0NPLFFBQVEsSUFBSWxCLE1BQU1DLFVBQVVDLFFBQVFDLFdBQVdDO2dCQUVyRCxPQUFPYztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVSLE9BQU87Z0JBQzlDLElBQUlNLFFBQVE7Z0JBRVosSUFBTUcsc0JBQXNCekIseUJBQXlCd0I7Z0JBRXJELElBQUlDLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNLEFBQUVSLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZGLFlBQVlVLHFCQUNacEIsV0FBV1ksU0FBU0gsYUFBYSxDQUFDQyxXQUFXQyxVQUM3Q1YsU0FBU2Esb0JBQW9CSixZQUM3QlIsWUFBWWEsdUJBQXVCTCxZQUNuQ1AsZ0JBQWdCYSwyQkFBMkJOO29CQUVqRE8sUUFBUSxJQUFJbEIsTUFBTUMsVUFBVUMsUUFBUUMsV0FBV0M7Z0JBQ2pEO2dCQUVBLE9BQU9jO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRVgsT0FBTztnQkFDakQsSUFBSU0sUUFBUTtnQkFFWixJQUFNTSxxQkFBcUI3Qix3QkFBd0I0QjtnQkFFbkQsSUFBSUMsdUJBQXVCLE1BQU07b0JBQy9CLElBQU0sQUFBRVgsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkYsWUFBWWEsb0JBQ1p2QixXQUFXWSxTQUFTSCxhQUFhLENBQUNDLFdBQVdDLFVBQzdDVixTQUFTYSxvQkFBb0JKLFlBQzdCUixZQUFZYSx1QkFBdUJMLFlBQ25DUCxnQkFBZ0JhLDJCQUEyQk47b0JBRWpETyxRQUFRLElBQUlsQixNQUFNQyxVQUFVQyxRQUFRQyxXQUFXQztnQkFDakQ7Z0JBRUEsT0FBT2M7WUFDVDs7OztLQWpEQSx5QkFBT08sUUFBTztBQW9EaEIsU0FBU1Ysb0JBQW9CSixTQUFTO0lBQ3BDLElBQUlULFNBQVM7SUFFYixJQUFNd0IscUJBQXFCakMsd0JBQXdCa0I7SUFFbkQsSUFBSWUsdUJBQXVCLE1BQU07UUFDL0IsSUFBTUMsNEJBQTRCRCxtQkFBbUJFLFVBQVU7UUFFL0QxQixTQUFTeUIsMkJBQTJCLEdBQUc7SUFDekM7SUFFQSxPQUFPekI7QUFDVDtBQUVBLFNBQVNjLHVCQUF1QkwsU0FBUztJQUN2QyxJQUFJUixZQUFZO0lBRWhCLElBQU0wQix3QkFBd0JoQywyQkFBMkJjO0lBRXpELElBQUlrQiwwQkFBMEIsTUFBTTtRQUNsQyxJQUFNQywrQkFBK0JELHNCQUFzQkQsVUFBVTtRQUVyRXpCLFlBQVkyQiw4QkFBOEIsR0FBRztJQUMvQztJQUVBLE9BQU8zQjtBQUNUO0FBRUEsU0FBU2MsMkJBQTJCTixTQUFTO0lBQzNDLElBQUlQLGdCQUFnQjtJQUVwQixJQUFNMkIsNEJBQTRCakMsK0JBQStCYTtJQUVqRSxJQUFJb0IsOEJBQThCLE1BQU07UUFDdEMsSUFBTUMsbUNBQW1DRCwwQkFBMEJILFVBQVU7UUFFN0V4QixnQkFBZ0I0QixrQ0FBa0MsR0FBRztJQUN2RDtJQUVBLE9BQU81QjtBQUNUIn0=