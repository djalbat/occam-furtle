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
                    string = context.nodeAsString(this.node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgVFJVRSwgRkFMU0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5VTUJFUl9UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BudW1iZXJcIiksXG4gICAgICBjb25kaXRpb25WYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vdmFsdWVcIiksXG4gICAgICBhc3NpZ25tZW50VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC92YWx1ZVwiKSxcbiAgICAgIHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL0BwcmltaXRpdmVcIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5TdGF0ZW1lbnQvdmFsdWVcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGhpcy5udW1iZXJ9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7dGhpcy5ib29sZWFufWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMuc3RyaW5nTGl0ZXJhbH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gKHRoaXMudmFyaWFibGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGUucmVzb2x2ZShjb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgIHRoaXM7ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIHRvICcke3N0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhbHVlKSB7XG4gICAgbGV0IGVxdWFsVG87XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmdMaXRlcmFsID0gdmFsdWUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nTGl0ZXJhbCA9PT0gc3RyaW5nTGl0ZXJhbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5ib29sZWFuID09PSBib29sZWFuKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSB2YWx1ZS5nZXROdW1iZXIoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLm51bWJlciA9PT0gbnVtYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKCh0aGlzLm5vZGUgPT09IG51bGwpIHx8IChub2RlID09PSBudWxsKSkge1xuICAgICAgICBlcXVhbFRvID0gKHRoaXMubm9kZSA9PT0gbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcXVhbFRvID0gdGhpcy5ub2RlLmlzRXF1YWxUbyhub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUoc3RyaW5nLCB2YXJpYWJsZSwgbm9kZSwgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7Ym9vbGVhbn1gLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBudWxsLFxuICAgICAgICAgIHZhbHVlID0gbmV3IFZhbHVlKHN0cmluZywgdmFyaWFibGUsIG5vZGUsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLCAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShzdHJpbmcsIHZhcmlhYmxlLCBub2RlLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVmFsdWVOb2RlID0gY29uZGl0aW9uVmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZU5vZGUgPSBjb25kaXRpb25WYWx1ZU5vZGU7IC8vL1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50VmFsdWVOb2RlID0gYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKGFzc2lnbm1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IGFzc2lnbm1lbnRWYWx1ZU5vZGU7ICAvLy9cblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgPSByZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeShyZXR1cm5TdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB2YWx1ZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhbHVlTm9kZSksXG4gICAgICAgIHN0cmluZyA9IHZhbHVlU3RyaW5nLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJvb2xlYW4gPSBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUoc3RyaW5nLCB2YXJpYWJsZSwgbm9kZSwgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyID0gbnVsbDtcblxuICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGUgPSBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Gcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgYm9vbGVhbiA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgVFJVRToge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBGQUxTRToge1xuICAgICAgICBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nTGl0ZXJhbCA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cbiJdLCJuYW1lcyI6WyJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvblZhbHVlTm9kZVF1ZXJ5IiwiYXNzaWdubWVudFZhbHVlTm9kZVF1ZXJ5IiwicHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRWYWx1ZU5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5vZGUiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0Tm9kZSIsImdldE51bWJlciIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRCb29sZWFuIiwiZ2V0VHlwZSIsInR5cGUiLCJOVU1CRVJfVFlQRSIsIkJPT0xFQU5fVFlQRSIsIlNUUklOR19UWVBFIiwiTk9ERV9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwicmVzb2x2ZSIsInZhbHVlIiwidmFsdWVTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImZyb21Ob2RlIiwiZnJvbUJvb2xlYW4iLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidmFsdWVGcm9tVmFsdWVOb2RlIiwiZnJvbVN0cmluZ0xpdGVyYWwiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25WYWx1ZU5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiYXNzaWdubWVudFZhbHVlTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudFZhbHVlTm9kZSIsIm5hbWUiLCJkb20iLCJWYXJpYWJsZSIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsImJvb2xlYW5Gcm9tVmFsdWVOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21WYWx1ZU5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGUiLCJudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIk51bWJlciIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJUUlVFIiwiRkFMU0UiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7OzsyREFmZ0I7Z0VBQ007cUJBRUk7eUJBRUU7cUJBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxJQUFNQSwwQkFBMEJDLElBQUFBLGdCQUFTLEVBQUMsbUJBQ3BDQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMscUJBQ3BDRSwyQkFBMkJGLElBQUFBLGdCQUFTLEVBQUMsc0JBQ3JDRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUMsc0JB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