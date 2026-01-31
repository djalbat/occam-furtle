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
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
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
                var expressionString = expression.asString(context), namedParameterString = namedParameter.getString();
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
                    var expressionString = expression.asString(context), message1 = "The ".concat(expressionString, " expression's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var terminalNode = node, content = terminalNode.getContent(), string = content; ///
                expression = (0, _element.expressionFromString)(string, context);
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
                    var expressionString = expression.asString(context), message1 = "The ".concat(expressionString, " expression's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJOYW1lc1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbkZyb21Ob2RlcywgZXhwcmVzc2lvbkZyb21TdHJpbmcsIGV4cHJlc3Npb25Gcm9tQm9vbGVhbiwgdmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBtdXN0IGJlIG5vbi10ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJ2YXJpYWJsZUZyb21OYW1lZFBhcmFtZXRlciIsImFzc2lnbiIsInR5cGUiLCJTVFJJTkdfVFlQRSIsIm5vZGUiLCJnZXROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJleHByZXNzaW9uRnJvbVN0cmluZyIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsImV4cHJlc3Npb25Gcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZXhwcmVzc2lvbkZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnNCO3FFQUNLO3dCQUVKO3FCQUMwQzs4QkFDMkI7dUJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0csV0FBZUEsSUFBQUEsZ0JBQU0sb0NBQUM7YUFBTUMsZ0JBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlO2dDQURuQkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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