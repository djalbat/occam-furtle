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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
var _stringLiteral = require("../../utilities/stringLiteral");
var _types = require("../../types");
var _expression = require("../../utilities/expression");
var _parameterNames = require("../../parameterNames");
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
var _ObjectAssigment;
var _default = (0, _elements.define)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, variable, namedParameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variable = variable;
        this.namedParameters = namedParameters;
    }
    _create_class(ObjectAssigment, [
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
            key: "getNamedParameters",
            value: function getNamedParameters() {
                return this.namedParameters;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var objectAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(objectAssignmentString, "' object assignment..."));
                var expression = this.variable.evaluate(context), expressionType = expression.getType();
                if (expressionType !== _types.NODE_TYPE) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _nodeProperties.default.matchNamedParameters(this.namedParameters, context);
                this.namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.evaluateNamedParameter(namedParameter, expression, context);
                });
                context.debug("...evaluated the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "evaluateNamedParameter",
            value: function evaluateNamedParameter(namedParameter, expression, context) {
                var expressionString = expression.getString(), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the '".concat(namedParameterString, "' named parameter against the ").concat(expressionString, " expression..."));
                var name = namedParameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            expression = this.evaluateContentNamedParameter(namedParameter, expression, context);
                            break;
                        }
                    case _parameterNames.TERMINAL_PARAMETER_NAME:
                        {
                            expression = this.evaluateTerminalNamedParameter(namedParameter, expression, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            expression = this.evaluateChildNodesNamedParameter(namedParameter, expression, context);
                            break;
                        }
                }
                var Variable = _elements.default.Variable, variable = Variable.fromNamedParameter(namedParameter, context);
                variable.assign(expression, context);
                context.debug("...evaluated the '".concat(namedParameterString, "' parameter named against the ").concat(expressionString, " expression."));
            }
        },
        {
            key: "evaluateContentNamedParameter",
            value: function evaluateContentNamedParameter(namedParameter, expression, context) {
                var type = namedParameter.getType();
                if (type !== _types.STRING_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = expression.getNode(), nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var expressionString = expression.getString(), message1 = "The ".concat(expressionString, " expression's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
                expression = (0, _expression.expressionFromStringLiteral)(stringLiteral, context);
                return expression;
            }
        },
        {
            key: "evaluateTerminalNamedParameter",
            value: function evaluateTerminalNamedParameter(namedParameter, expression, context) {
                var type = namedParameter.getType();
                if (type !== _types.BOOLEAN_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = expression.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var boolean = terminal; ///
                expression = (0, _expression.expressionFromBoolean)(boolean, context); ///
                return expression;
            }
        },
        {
            key: "evaluateChildNodesNamedParameter",
            value: function evaluateChildNodesNamedParameter(namedParameter, expression, context) {
                var type = namedParameter.getType();
                if (type !== _types.NODES_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = expression.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var expressionString = expression.getString(), message1 = "The ".concat(expressionString, " expression's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                expression = (0, _expression.expressionFromNodes)(nodes, context);
                return expression;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBleHByZXNzaW9uRnJvbU5vZGVzLCBleHByZXNzaW9uRnJvbUJvb2xlYW4sIGV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBub2RlUHJvcGVydGllcy5tYXRjaE5hbWVkUGFyYW1ldGVycyh0aGlzLm5hbWVkUGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLmV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBtdXN0IGJlIHRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiZXZhbHVhdGVOYW1lZFBhcmFtZXRlciIsImRlYnVnIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlciIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlciIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJhc3NpZ24iLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nIiwiZXhwcmVzc2lvbkZyb21TdHJpbmdMaXRlcmFsIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwiZXhwcmVzc2lvbkZyb21Cb29sZWFuIiwiTk9ERVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJleHByZXNzaW9uRnJvbU5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnRUFWcUI7Z0VBQ0M7cUVBQ0s7NkJBR2E7cUJBQ3lCOzBCQUN1Qjs4QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0sb0NBQUM7YUFB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