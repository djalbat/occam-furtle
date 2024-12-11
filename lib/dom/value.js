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
var _constants = require("../constants");
var _types = require("../types");
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
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.node !== null) {
                    type = _types.NODE_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.stringLiteral !== null) {
                    type = _types.STRING_TYPE;
                } else {
                    switch(this.primitive){
                        case null:
                            {
                                type = NULL_TYPE;
                                break;
                            }
                        case true:
                        case false:
                            {
                                type = _types.BOOLEAN_TYPE;
                                break;
                            }
                    }
                }
                return type;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var string = context.nodeAsString(node), number = null, variable = null, primitive = null, stringLiteral = null, value = new Value(string, node, number, variable, primitive, stringLiteral);
                return value;
            }
        },
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var value = null;
                var conditionValueNode = conditionValueNodeQuery(conditionNode);
                if (conditionValueNode !== null) {
                    var valueNode = conditionValueNode; ///
                    value = valueFromValueNode(valueNode, context);
                }
                return value;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var value = null;
                var assignmentValueNode = assignmentValueNodeQuery(assigmentNode);
                if (assignmentValueNode !== null) {
                    var valueNode = assignmentValueNode; ///
                    value = valueFromValueNode(valueNode, context);
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
                    var valueNode = returnStatementValueNode; ///
                    value = valueFromValueNode(valueNode, context);
                }
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function valueFromValueNode(valueNode, context) {
    var Value = _dom.default.Value, Variable = _dom.default.Variable, node = valueNode, string = context.nodeAsString(node), number = numberFromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), primitive = primitiveFromValueNode(valueNode, context), stringLiteral = stringLiteralFromValueNode(valueNode, context), value = new Value(string, node, number, variable, primitive, stringLiteral);
    return value;
}
function numberFromValueNode(valueNode, context) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(valueNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = numberTerminalNodeContent; ///
    }
    return number;
}
function primitiveFromValueNode(valueNode, context) {
    var primitive;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.NULL:
                {
                    primitive = null;
                    break;
                }
            case _constants.TRUE:
                {
                    primitive = true;
                    break;
                }
            case _constants.FALSE:
                {
                    primitive = false;
                    break;
                }
        }
        primitive = primitiveTerminalNodeContent; ///
    }
    return primitive;
}
function stringLiteralFromValueNode(valueNode, context) {
    var stringLiteral = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();
        stringLiteral = stringLiteralTerminalNodeContent; ///
    }
    return stringLiteral;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvdmFsdWVcIiksXG4gICAgICBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AcHJpbWl0aXZlXCIpLFxuICAgICAgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmV0dXJuU3RhdGVtZW50L3ZhbHVlXCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BzdHJpbmctbGl0ZXJhbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIG51bWJlciwgdmFyaWFibGUsIHByaW1pdGl2ZSwgc3RyaW5nTGl0ZXJhbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucHJpbWl0aXZlID0gcHJpbWl0aXZlO1xuICAgIHRoaXMuc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMucHJpbWl0aXZlKSB7XG4gICAgICAgIGNhc2UgbnVsbDoge1xuICAgICAgICAgIHR5cGUgPSBOVUxMX1RZUEU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgY2FzZSBmYWxzZToge1xuICAgICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBwcmltaXRpdmUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHN0cmluZywgbm9kZSwgbnVtYmVyLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBzdHJpbmdMaXRlcmFsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25WYWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb25kaXRpb25WYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRWYWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAoYXNzaWdubWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZTsgIC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YWx1ZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUoc3RyaW5nLCBub2RlLCBudW1iZXIsIHZhcmlhYmxlLCBwcmltaXRpdmUsIHN0cmluZ0xpdGVyYWwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmU7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgTlVMTDoge1xuICAgICAgICBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgcHJpbWl0aXZlID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBGQUxTRToge1xuICAgICAgICBwcmltaXRpdmUgPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nTGl0ZXJhbCA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cbiJdLCJuYW1lcyI6WyJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwiYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJzdHJpbmciLCJub2RlIiwibnVtYmVyIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE51bWJlciIsImdldFZhcmlhYmxlIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIk5VTExfVFlQRSIsIkJPT0xFQU5fVFlQRSIsImZyb21Ob2RlIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsInZhbHVlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsImRvbSIsIlZhcmlhYmxlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZUZyb21WYWx1ZU5vZGUiLCJzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsIk5VTEwiLCJUUlVFIiwiRkFMU0UiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzsyREFkZ0I7cUJBRVU7eUJBRVE7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsSUFBTUEsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0UsMkJBQTJCRixJQUFBQSxnQkFBUyxFQUFDLHNCQUNyQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0lBRWpELFdBQWVNLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEckNOO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0Us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