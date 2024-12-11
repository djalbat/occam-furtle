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
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), conditionValueNodeQuery = (0, _query.nodeQuery)("/condition/value"), assignmentValueNodeQuery = (0, _query.nodeQuery)("/assignment/value"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(string, node, number, variable, primitive, stringLiteral) {
        _class_call_check(this, Value);
        this.string = string;
        this.node = node;
        this.number = number;
        this.variable = variable;
        this.primitive = primitive;
        this.stringLiteral = stringLiteral;
    }
    _create_class(Value, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
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
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, fileContext) {
                var string = fileContext.nodeAsString(node), number = null, variable = null, primitive = null, stringLiteral = null, value = new Value(string, node, number, variable, primitive, stringLiteral);
                return value;
            }
        },
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode) {
                var value = valueFromValueNode(valueNode);
                return value;
            }
        },
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode) {
                var value = null;
                var conditionValueNode = conditionValueNodeQuery(conditionNode);
                if (conditionValueNode !== null) {
                    var valueNode = conditionValueNode; ///
                    value = valueFromValueNode(valueNode);
                }
                return value;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode) {
                var value = null;
                var assignmentValueNode = assignmentValueNodeQuery(assigmentNode);
                if (assignmentValueNode !== null) {
                    var valueNode = assignmentValueNode; ///
                    value = valueFromValueNode(valueNode);
                }
                return value;
            }
        },
        {
            key: "fromReturnStatementNode",
            value: function fromReturnStatementNode(returnStatementNode) {
                var value = null;
                var returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);
                if (returnStatementValueNode !== null) {
                    var valueNode = returnStatementValueNode; ///
                    value = valueFromValueNode(valueNode);
                }
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function valueFromValueNode(valueNode) {
    var Value = _dom.default.Value, Variable = _dom.default.Variable, node = null, number = numberFromValueNode(valueNode), variable = Variable.fromValueNode(valueNode), primitive = primitiveFromValueNode(valueNode), stringLiteral = stringLiteralFromValueNode(valueNode), string = stringFromNumberVariableStringLiteralAndPrimitive(number, variable, stringLiteral, primitive), value = new Value(string, node, number, variable, primitive, stringLiteral);
    return value;
}
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
function stringFromNumberVariableStringLiteralAndPrimitive(number, variable, stringLiteral, primitive) {
    var string;
    if (false) {
    ///
    } else if (number !== null) {
        var numberString = "".concat(number);
        string = numberString; ///
    } else if (variable !== null) {
        var variableString = variable.getString();
        string = variableString; ///
    } else if (stringLiteral !== null) {
        var stringLiteralString = '"'.concat(stringLiteral, '"');
        string = stringLiteralString; ///
    } else {
        var primitiveString = "".concat(primitive);
        string = primitiveString; ///
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgbnVtYmVyVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQG51bWJlclwiKSxcbiAgICAgIGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi92YWx1ZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3ZhbHVlXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBudW1iZXIsIHZhcmlhYmxlLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLnN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgcHJpbWl0aXZlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIG5vZGUsIG51bWJlciwgdmFyaWFibGUsIHByaW1pdGl2ZSwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50VmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGU7ICAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSkge1xuICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU51bWJlclZhcmlhYmxlU3RyaW5nTGl0ZXJhbEFuZFByaW1pdGl2ZShudW1iZXIsIHZhcmlhYmxlLCBzdHJpbmdMaXRlcmFsLCBwcmltaXRpdmUpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIG5vZGUsIG51bWJlciwgdmFyaWFibGUsIHByaW1pdGl2ZSwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSkge1xuICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGUgPSBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSkge1xuICBsZXQgc3RyaW5nTGl0ZXJhbCA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU51bWJlclZhcmlhYmxlU3RyaW5nTGl0ZXJhbEFuZFByaW1pdGl2ZShudW1iZXIsIHZhcmlhYmxlLCBzdHJpbmdMaXRlcmFsLCBwcmltaXRpdmUpIHtcbiAgbGV0IHN0cmluZztcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJTdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICAgIHN0cmluZyA9IG51bWJlclN0cmluZzsgIC8vL1xuICB9IGVsc2UgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSBpZiAoc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxTdHJpbmcgPSBgXCIke3N0cmluZ0xpdGVyYWx9XCJgO1xuXG4gICAgc3RyaW5nID0gc3RyaW5nTGl0ZXJhbFN0cmluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gYCR7cHJpbWl0aXZlfWA7XG5cbiAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmc7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwiYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJzdHJpbmciLCJub2RlIiwibnVtYmVyIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE51bWJlciIsImdldFZhcmlhYmxlIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImZyb21Ob2RlIiwiZmlsZUNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJ2YWx1ZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiYXNzaWdubWVudFZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsIm5hbWUiLCJkb20iLCJWYXJpYWJsZSIsIm51bWJlckZyb21WYWx1ZU5vZGUiLCJwcmltaXRpdmVGcm9tVmFsdWVOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUiLCJzdHJpbmdGcm9tTnVtYmVyVmFyaWFibGVTdHJpbmdMaXRlcmFsQW5kUHJpbWl0aXZlIiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50Iiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50IiwibnVtYmVyU3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJzdHJpbmdMaXRlcmFsU3RyaW5nIiwicHJpbWl0aXZlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSwwQkFBMEJDLElBQUFBLGdCQUFTLEVBQUMsbUJBQ3BDQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMscUJBQ3BDRSwyQkFBMkJGLElBQUFBLGdCQUFTLEVBQUMsc0JBQ3JDRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUMsc0JB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