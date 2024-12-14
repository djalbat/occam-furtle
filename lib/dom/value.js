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
    function Value(string, variable, node, number, boolean, stringLiteral) {
        _class_call_check(this, Value);
        this.string = string;
        this.variable = variable;
        this.node = node;
        this.number = number;
        this.boolean = boolean;
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
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
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
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.stringLiteral;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.stringLiteral !== null) {
                    type = _types.STRING_TYPE;
                } else {
                    type = _types.NODE_TYPE;
                }
                return type;
            }
        },
        {
            key: "asString",
            value: function asString(context) {
                var string;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    string = null;
                } else if (this.number !== null) {
                    string = "".concat(this.number);
                } else if (this.boolean !== null) {
                    string = "".concat(this.boolean);
                } else if (this.stringLiteral !== null) {
                    string = "".concat(this.stringLiteral);
                } else {
                    string = this.node === null ? _constants.NULL : context.nodeAsString(this.node);
                }
                return string;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var valueString = this.string; ///
                context.trace("Resolving the '".concat(valueString, "' value..."));
                value = this.variable !== null ? this.variable.resolve(context) : this; ///
                var string = value.asString(context); ///
                context.debug("...resolved the '".concat(valueString, "' value to '").concat(string, "'."));
                return value;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(value) {
                var equalTo;
                if (false) {
                ///
                } else if (this.stringLiteral !== null) {
                    var stringLiteral = value.getStringLiteral();
                    equalTo = this.stringLiteral === stringLiteral;
                } else if (this.boolean !== null) {
                    var boolean = value.getBoolean();
                    equalTo = this.boolean === boolean;
                } else if (this.number !== null) {
                    var number = value.getNumber();
                    equalTo = this.number === number;
                } else {
                    var node = value.getNode();
                    if (this.node === null || node === null) {
                        equalTo = this.node === node;
                    } else {
                        equalTo = this.node.isEqualTo(node);
                    }
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var string = context.nodeAsString(node), variable = null, number = null, boolean = null, stringLiteral = null, value = new Value(string, variable, node, number, boolean, stringLiteral);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var string = "".concat(boolean), node = null, variable = null, number = null, stringLiteral = null, value = new Value(string, variable, node, number, boolean, stringLiteral);
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
            key: "fromStringLiteral",
            value: function fromStringLiteral(stringLiteral, context) {
                var string = stringLiteral, node = null, variable = null, number = null, boolean = null, value = new Value(string, variable, node, number, boolean, stringLiteral);
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
    var Value = _dom.default.Value, Variable = _dom.default.Variable, valueString = context.nodeAsString(valueNode), string = valueString, variable = Variable.fromValueNode(valueNode, context), node = nodeFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), stringLiteral = stringLiteralFromValueNode(valueNode, context), value = new Value(string, variable, node, number, boolean, stringLiteral);
    return value;
}
function nodeFromValueNode(valueNode, context) {
    var node = null; ///
    return node;
}
function numberFromValueNode(valueNode, context) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(valueNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = Number(numberTerminalNodeContent);
    }
    return number;
}
function booleanFromValueNode(valueNode, context) {
    var boolean = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.TRUE:
                {
                    boolean = true;
                    break;
                }
            case _constants.FALSE:
                {
                    boolean = false;
                    break;
                }
        }
    }
    return boolean;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL3ZhbHVlXCIpLFxuICAgICAgYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvdmFsdWVcIiksXG4gICAgICBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AcHJpbWl0aXZlXCIpLFxuICAgICAgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmV0dXJuU3RhdGVtZW50L3ZhbHVlXCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BzdHJpbmctbGl0ZXJhbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBub2RlLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib29sZWFuO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc1N0cmluZyhjb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMubnVtYmVyfWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMuYm9vbGVhbn1gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLnN0cmluZ0xpdGVyYWx9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyaW5nID0gKHRoaXMubm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZS4uLmApO1xuXG4gICAgdmFsdWUgPSAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdGhpczsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7IC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgdG8gJyR7c3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSB2YWx1ZS5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmdMaXRlcmFsID09PSBzdHJpbmdMaXRlcmFsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAoKHRoaXMubm9kZSA9PT0gbnVsbCkgfHwgKG5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIGVxdWFsVG8gPSAodGhpcy5ub2RlID09PSBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLm5vZGUuaXNFcXVhbFRvKG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIHZhcmlhYmxlLCBub2RlLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHtib29sZWFufWAsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUoc3RyaW5nLCB2YXJpYWJsZSwgbm9kZSwgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25WYWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb25kaXRpb25WYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRWYWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAoYXNzaWdubWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZTsgIC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIHZhbHVlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFsdWVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVTdHJpbmcsIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIHZhcmlhYmxlLCBub2RlLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBib29sZWFuID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBUUlVFOiB7XG4gICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEZBTFNFOiB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuIl0sIm5hbWVzIjpbIm51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkiLCJhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5Iiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZSIsInN0cmluZyIsInZhcmlhYmxlIiwibm9kZSIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImdldEJvb2xlYW4iLCJnZXRUeXBlIiwidHlwZSIsIk5VTUJFUl9UWVBFIiwiQk9PTEVBTl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJOT0RFX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJOVUxMIiwibm9kZUFzU3RyaW5nIiwicmVzb2x2ZSIsInZhbHVlIiwidmFsdWVTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImZyb21Ob2RlIiwiZnJvbUJvb2xlYW4iLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidmFsdWVGcm9tVmFsdWVOb2RlIiwiZnJvbVN0cmluZ0xpdGVyYWwiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiYXNzaWdubWVudFZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsIm5hbWUiLCJkb20iLCJWYXJpYWJsZSIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIk51bWJlciIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJUUlVFIiwiRkFMU0UiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OzsyREFkZ0I7cUJBRVU7eUJBRVE7cUJBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsSUFBTUEsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0UsMkJBQTJCRixJQUFBQSxnQkFBUyxFQUFDLHNCQUNy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