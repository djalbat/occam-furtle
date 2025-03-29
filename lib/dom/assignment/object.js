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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
var _query = require("../../utilities/query");
var _types = require("../../types");
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
var stepObjectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
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
                var Variable = _dom.default.Variable, variable = Variable.fromNamedParameter(namedParameter, context);
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
                var Expression = _dom.default.Expression, terminalNode = node, content = terminalNode.getContent(), string = content; ///
                expression = Expression.fromString(string, context); ///
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
                var Expression = _dom.default.Expression, boolean = terminal; ///
                expression = Expression.fromBoolean(boolean, context); ///
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
                var Expression = _dom.default.Expression, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                expression = Expression.fromNodes(nodes, context); ///
                return expression;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var stepObjectAssignmentNode = stepObjectAssignmentNodeQuery(stepNode);
                if (stepObjectAssignmentNode !== null) {
                    var objectAssignmentNode = stepObjectAssignmentNode; ///
                    objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var Variable = _dom.default.Variable, NamedParameters = _dom.default.NamedParameters, ObjectAssigment = _dom.default.ObjectAssigment, namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), string = stringFromVariableAndNamesParameters(variable, namedParameters, context), objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function stringFromVariableAndNamesParameters(variable, namedParameters, context) {
    var namedParametersString = namedParameters.getString(), variableString = variable.getString(), string = "{ ".concat(namedParametersString, " } = ").concat(variableString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgc3RlcE9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBub2RlUHJvcGVydGllcy5tYXRjaE5hbWVkUGFyYW1ldGVycyh0aGlzLm5hbWVkUGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLmV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgICAgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdGVwT2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwT2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoc3RlcE9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZTsgIC8vL1xuXG4gICAgICBvYmplY3RBc3NpZ25tZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIE5hbWVkUGFyYW1ldGVycywgT2JqZWN0QXNzaWdtZW50IH0gPSBkb20sXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IE5hbWVkUGFyYW1ldGVycy5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVzUGFyYW1ldGVycyh2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZXNQYXJhbWV0ZXJzKHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgeyAke25hbWVkUGFyYW1ldGVyc1N0cmluZ30gfSA9ICR7dmFyaWFibGVTdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJzdGVwT2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUHJvcGVydGllcyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXJzIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJldmFsdWF0ZU5hbWVkUGFyYW1ldGVyIiwiZGVidWciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWUiLCJnZXROYW1lIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIiLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyIiwiVmFyaWFibGUiLCJkb20iLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJhc3NpZ24iLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIkV4cHJlc3Npb24iLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21TdHJpbmciLCJCT09MRUFOX1RZUEUiLCJ0ZXJtaW5hbCIsImJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZnJvbU5vZGVzIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwic3RlcE9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZXNQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJzU3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxRUFDSztxQkFFRDtxQkFFdUM7OEJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixJQUFNQSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7SUFFaEQsV0FBZUMsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZTtnQ0FEZEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFB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