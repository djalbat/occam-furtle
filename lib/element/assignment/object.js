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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
var _elements = require("../../elements");
var _stringLiteral = require("../../utilities/stringLiteral");
var _types = require("../../types");
var _parameterNames = require("../../parameterNames");
var _element = require("../../utilities/element");
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
                var variable = (0, _element.variableFromNamedParameter)(namedParameter, context);
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
                expression = (0, _element.expressionFromStringLiteral)(stringLiteral, context);
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
                expression = (0, _element.expressionFromBoolean)(boolean, context); ///
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
                expression = (0, _element.expressionFromNodes)(nodes, context);
                return expression;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tTm9kZXMsIGV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbCwgZXhwcmVzc2lvbkZyb21Cb29sZWFuLCB2YXJpYWJsZUZyb21OYW1lZFBhcmFtZXRlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgT2JqZWN0QXNzaWdtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbm9kZVByb3BlcnRpZXMubWF0Y2hOYW1lZFBhcmFtZXRlcnModGhpcy5uYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRToge1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBtdXN0IGJlIHRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiZXZhbHVhdGVOYW1lZFBhcmFtZXRlciIsImRlYnVnIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlciIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlciIsInZhcmlhYmxlRnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwibm9kZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsImV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbCIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsImV4cHJlc3Npb25Gcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZXhwcmVzc2lvbkZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0VBVHNCO3FFQUNLO3dCQUVKOzZCQUNpQjtxQkFDeUI7OEJBQzJCO3VCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBILFdBQWVBLElBQUFBLGdCQUFNLG9DQUFDO2FBQU1DLGdCQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZTtnQ0FEbkJIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJ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