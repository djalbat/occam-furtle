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
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/@string-literal");
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
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var value = null;
                var conditionValueNode = conditionValueNodeQuery(conditionNode);
                if (conditionValueNode !== null) {
                    var Variable = _dom.default.Variable, valueNode = conditionValueNode, variable = Variable.fromValueNode(valueNode, context), number = numberFromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode);
                    value = new Value(variable, number, primitive, stringLiteral);
                }
                return value;
            }
        },
        {
            key: "fromReturnStatementNode",
            value: function fromReturnStatementNode(returnStatementNode, context) {
                var value = null;
                var returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);
                if (returnStatementValueNode !== null) {
                    var Variable = _dom.default.Variable, valueNode = returnStatementValueNode, variable = Variable.fromValueNode(valueNode, context), number = numberFromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgbnVtYmVyVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvQG51bWJlclwiKSxcbiAgICAgIGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi92YWx1ZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvQG51bWJlclwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGUsIG51bWJlciwgcHJpbWl0aXZlLCBzdHJpbmdMaXRlcmFsKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMucHJpbWl0aXZlID0gcHJpbWl0aXZlO1xuICAgIHRoaXMuc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZSh2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRWYWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAoYXNzaWdubWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgdmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSksXG4gICAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKTtcblxuICAgICAgdmFsdWUgPSBuZXcgVmFsdWUodmFyaWFibGUsIG51bWJlciwgcHJpbWl0aXZlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25WYWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb25kaXRpb25WYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIHZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpO1xuXG4gICAgICB2YWx1ZSA9IG5ldyBWYWx1ZSh2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSk7XG5cbiAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHZhcmlhYmxlLCBudW1iZXIsIHByaW1pdGl2ZSwgc3RyaW5nTGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpIHtcbiAgbGV0IHN0cmluZ0xpdGVyYWwgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG59XG4iXSwibmFtZXMiOlsibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsImFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwidmFyaWFibGUiLCJudW1iZXIiLCJwcmltaXRpdmUiLCJzdHJpbmdMaXRlcmFsIiwiZ2V0VmFyaWFibGUiLCJnZXROdW1iZXIiLCJnZXRQcmltaXRpdmUiLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsImNvbnRleHQiLCJWYXJpYWJsZSIsImRvbSIsIm51bWJlckZyb21WYWx1ZU5vZGUiLCJwcmltaXRpdmVGcm9tVmFsdWVOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUiLCJ2YWx1ZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiY29uZGl0aW9uVmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5v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