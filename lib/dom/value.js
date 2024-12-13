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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "resolve",
            value: function resolve(context) {
                var value;
                var valueString = this.string; ///
                context.trace("Resolving the '".concat(valueString, "' value..."));
                value = this.variable !== null ? this.variable.resolve(context) : this; ///
                if (value === null) {
                    var message = "The '".concat(valueString, "; value is not set.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...resolved the '".concat(valueString, "' value."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgVFJVRSwgRkFMU0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5VTUJFUl9UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BudW1iZXJcIiksXG4gICAgICBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vdmFsdWVcIiksXG4gICAgICBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC92YWx1ZVwiKSxcbiAgICAgIHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BwcmltaXRpdmVcIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5TdGF0ZW1lbnQvdmFsdWVcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZS4uLmApO1xuXG4gICAgdmFsdWUgPSAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdGhpczsgIC8vL1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ307IHZhbHVlIGlzIG5vdCBzZXQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh2YWx1ZSkge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHZhbHVlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLnN0cmluZ0xpdGVyYWwgPT09IHN0cmluZ0xpdGVyYWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gdmFsdWUuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmICgodGhpcy5ub2RlID09PSBudWxsKSB8fCAobm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgZXF1YWxUbyA9ICh0aGlzLm5vZGUgPT09IG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMubm9kZS5pc0VxdWFsVG8obm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke2Jvb2xlYW59YCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIHZhcmlhYmxlLCBub2RlLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nTGl0ZXJhbCwgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUoc3RyaW5nLCB2YXJpYWJsZSwgbm9kZSwgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvblZhbHVlTm9kZSA9IGNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvblZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlOyAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgYXNzaWdubWVudFZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChhc3NpZ25tZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBhc3NpZ25tZW50VmFsdWVOb2RlOyAgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkocmV0dXJuU3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFsdWVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh2YWx1ZU5vZGUpLFxuICAgICAgICBzdHJpbmcgPSB2YWx1ZVN0cmluZywgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlID0gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBOdW1iZXIobnVtYmVyVGVybWluYWxOb2RlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZ0xpdGVyYWwgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG59XG4iXSwibmFtZXMiOlsibnVtYmVyVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSIsImFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlIiwic3RyaW5nIiwidmFyaWFibGUiLCJub2RlIiwibnVtYmVyIiwiYm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldE5vZGUiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0Qm9vbGVhbiIsImdldFR5cGUiLCJ0eXBlIiwiTlVNQkVSX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJTVFJJTkdfVFlQRSIsIk5PREVfVFlQRSIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWUiLCJ2YWx1ZVN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiZnJvbU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZUZyb21WYWx1ZU5vZGUiLCJmcm9tU3RyaW5nTGl0ZXJhbCIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblZhbHVlTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJhc3NpZ25tZW50VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwibmFtZSIsImRvbSIsIlZhcmlhYmxlIiwibm9kZUZyb21WYWx1ZU5vZGUiLCJudW1iZXJGcm9tVmFsdWVOb2RlIiwiYm9vbGVhbkZyb21WYWx1ZU5vZGUiLCJzdHJpbmdMaXRlcmFsRnJvbVZhbHVlTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiTnVtYmVyIiwicHJpbWl0aXZlVGVybWluYWxOb2RlIiwicHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCIsIlRSVUUiLCJGQUxTRSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjtnRUFDTTtxQkFFSTt5QkFFRTtxQkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxFLElBQU1BLDBCQUEwQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDcENDLDBCQUEwQkQsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENFLDJCQUEyQkYsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDckNHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDdkNJLGdDQUFnQ0osSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQztJQUVqRCxXQUFlTSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWE7Z0NBRG5DTjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2Ys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