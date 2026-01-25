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
                    var expressionString = expression.asString(context), message1 = "The ".concat(expressionString, " expression's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Expression = _elements.default.Expression, terminalNode = node, content = terminalNode.getContent(), string = content; ///
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
                var Expression = _elements.default.Expression, boolean = terminal; ///
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
                var Expression = _elements.default.Expression, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
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
    var Variable = _elements.default.Variable, NamedParameters = _elements.default.NamedParameters, ObjectAssigment = _elements.default.ObjectAssigment, namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), string = stringFromVariableAndNamesParameters(variable, namedParameters, context), objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function stringFromVariableAndNamesParameters(variable, namedParameters, context) {
    var namedParametersString = namedParameters.getString(), variableString = variable.getString(), string = "{ ".concat(namedParametersString, " } = ").concat(variableString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJOYW1lc1wiO1xuXG5jb25zdCBzdGVwT2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBub2RlUHJvcGVydGllcy5tYXRjaE5hbWVkUGFyYW1ldGVycyh0aGlzLm5hbWVkUGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLmV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBtdXN0IGJlIHRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAgLy8vXG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChzdGVwT2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE9iamVjdEFzc2lnbm1lbnROb2RlOyAgLy8vXG5cbiAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTmFtZWRQYXJhbWV0ZXJzLCBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBOYW1lZFBhcmFtZXRlcnMuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lc1BhcmFtZXRlcnModmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVzUGFyYW1ldGVycyh2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IG5hbWVkUGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYHsgJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9IH0gPSAke3ZhcmlhYmxlU3RyaW5nfTtgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsic3RlcE9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwibm9kZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJFeHByZXNzaW9uIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tU3RyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJOT0RFU19UWVBFIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsImZyb21Ob2RlcyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwib2JqZWN0QXNzaWdubWVudCIsInN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVzUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsInZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnRUFYcUI7Z0VBQ0M7cUVBQ0s7cUJBR0Q7cUJBQ3VDOzhCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBTUEsZ0NBQWdDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRWhELFdBQWVDLElBQUFBLGdCQUFNLG9DQUFDO2FBQU1DLGdCQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZTtnQ0FEbkJIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFB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