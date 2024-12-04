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
var valueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/@number"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/@string-literal");
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
                var Variable = _dom.default.Variable, variable = Variable.fromValueNode(valueNode, context), number = numberFromAssignmentNode(valueNode), primitive = primitiveFromAssignmentNode(valueNode), stringLiteral = stringLiteralFromAssignmentNode(valueNode), value = new Value(variable, number, primitive, stringLiteral);
                return value;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var value = null;
                var valueNode = valueNodeQuery(assigmentNode);
                if (valueNode !== null) {
                    var Variable = _dom.default.Variable, variable = Variable.fromValueNode(valueNode, context), number = numberFromAssignmentNode(valueNode), primitive = primitiveFromAssignmentNode(valueNode), stringLiteral = stringLiteralFromAssignmentNode(valueNode);
                    value = new Value(variable, number, primitive, stringLiteral);
                }
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function numberFromAssignmentNode(assigmentNode) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(assigmentNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = numberTerminalNodeContent; ///
    }
    return number;
}
function primitiveFromAssignmentNode(assigmentNode) {
    var primitive = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(assigmentNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        primitive = primitiveTerminalNodeContent; ///
    }
    return primitive;
}
function stringLiteralFromAssignmentNode(assigmentNode) {
    var stringLiteral = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(assigmentNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();
        stringLiteral = stringLiteralTerminalNodeContent; ///
    }
    return stringLiteral;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC92YWx1ZVwiKSxcbiAgICAgIG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL0BudW1iZXJcIiksXG4gICAgICBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9AbnVtYmVyXCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL0BzdHJpbmctbGl0ZXJhbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5zdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tQXNzaWdubWVudE5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tQXNzaWdubWVudE5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21Bc3NpZ25tZW50Tm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHZhcmlhYmxlLCBudW1iZXIsIHByaW1pdGl2ZSwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWVOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAodmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlckZyb21Bc3NpZ25tZW50Tm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbUFzc2lnbm1lbnROb2RlKHZhbHVlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21Bc3NpZ25tZW50Tm9kZSh2YWx1ZU5vZGUpO1xuXG4gICAgICB2YWx1ZSA9IG5ldyBWYWx1ZSh2YXJpYWJsZSwgbnVtYmVyLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG51bWJlckZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcHJpbWl0aXZlRnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUpIHtcbiAgbGV0IHN0cmluZ0xpdGVyYWwgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJ2YXJpYWJsZSIsIm51bWJlciIsInByaW1pdGl2ZSIsInN0cmluZ0xpdGVyYWwiLCJnZXRWYXJpYWJsZSIsImdldE51bWJlciIsImdldFByaW1pdGl2ZSIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwiZG9tIiwibnVtYmVyRnJvbUFzc2lnbm1lbnROb2RlIiwicHJpbWl0aXZlRnJvbUFzc2lnbm1lbnROb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21Bc3NpZ25tZW50Tm9kZSIsInZhbHVlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsIm5hbWUiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDM0JDLDBCQUEwQkQsSUFBQUEsZ0JBQVMsRUFBQyxhQUNwQ0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLGFBQ3ZDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUM7SUFFakQsV0FBZUksSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRHZCSjtRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3JDLElBQU0sQUFBRUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRlosV0FBV1ksU0FBU0gsYUFBYSxDQUFDQyxXQUFXQyxVQUM3Q1YsU0FBU2EseUJBQXlCSixZQUNsQ1IsWUFBWWEsNEJBQTRCTCxZQUN4Q1AsZ0JBQWdCYSxnQ0FBZ0NOLFlBQ2hETyxRQUFRLElBQUlsQixNQUFNQyxVQUFVQyxRQUFRQyxXQUFXQztnQkFFckQsT0FBT2M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFUixPQUFPO2dCQUM5QyxJQUFJTSxRQUFRO2dCQUVaLElBQU1QLFlBQVlqQixlQUFlMEI7Z0JBRWpDLElBQUlULGNBQWMsTUFBTTtvQkFDdEIsSUFBTSxBQUFFRSxXQUFhQyxZQUFHLENBQWhCRCxVQUNGWixXQUFXWSxTQUFTSCxhQUFhLENBQUNDLFdBQVdDLFVBQzdDVixTQUFTYSx5QkFBeUJKLFlBQ2xDUixZQUFZYSw0QkFBNEJMLFlBQ3hDUCxnQkFBZ0JhLGdDQUFnQ047b0JBRXRETyxRQUFRLElBQUlsQixNQUFNQyxVQUFVQyxRQUFRQyxXQUFXQztnQkFDakQ7Z0JBRUEsT0FBT2M7WUFDVDs7OztLQTdCQSx5QkFBT0csUUFBTztBQWdDaEIsU0FBU04seUJBQXlCSyxhQUFhO0lBQzdDLElBQUlsQixTQUFTO0lBRWIsSUFBTW9CLHFCQUFxQjFCLHdCQUF3QndCO0lBRW5ELElBQUlFLHVCQUF1QixNQUFNO1FBQy9CLElBQU1DLDRCQUE0QkQsbUJBQW1CRSxVQUFVO1FBRS9EdEIsU0FBU3FCLDJCQUEyQixHQUFHO0lBQ3pDO0lBRUEsT0FBT3JCO0FBQ1Q7QUFFQSxTQUFTYyw0QkFBNEJJLGFBQWE7SUFDaEQsSUFBSWpCLFlBQVk7SUFFaEIsSUFBTXNCLHdCQUF3QjVCLDJCQUEyQnVCO0lBRXpELElBQUlLLDBCQUEwQixNQUFNO1FBQ2xDLElBQU1DLCtCQUErQkQsc0JBQXNCRCxVQUFVO1FBRXJFckIsWUFBWXVCLDhCQUE4QixHQUFHO0lBQy9DO0lBRUEsT0FBT3ZCO0FBQ1Q7QUFFQSxTQUFTYyxnQ0FBZ0NHLGFBQWE7SUFDcEQsSUFBSWhCLGdCQUFnQjtJQUVwQixJQUFNdUIsNEJBQTRCN0IsK0JBQStCc0I7SUFFakUsSUFBSU8sOEJBQThCLE1BQU07UUFDdEMsSUFBTUMsbUNBQW1DRCwwQkFBMEJILFVBQVU7UUFFN0VwQixnQkFBZ0J3QixrQ0FBa0MsR0FBRztJQUN2RDtJQUVBLE9BQU94QjtBQUNUIn0=