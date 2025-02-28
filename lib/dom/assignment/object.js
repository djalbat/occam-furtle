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
var objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
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
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _nodeProperties.default.matchNamedParameters(this.namedParameters, context);
                this.namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.evaluateNamedParameter(namedParameter, value, context);
                });
                context.debug("...evaluated the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "evaluateNamedParameter",
            value: function evaluateNamedParameter(namedParameter, value, context) {
                var valueString = value.asString(context), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the '".concat(namedParameterString, "' named parameter against the ").concat(valueString, " value..."));
                var name = namedParameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            this.evaluateContentNamedParameter(namedParameter, value, context);
                            break;
                        }
                    case _parameterNames.TERMINAL_PARAMETER_NAME:
                        {
                            this.evaluateTerminalNamedParameter(namedParameter, value, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            this.evaluateChildNodesNamedParameter(namedParameter, value, context);
                            break;
                        }
                }
                context.debug("...evaluated the '".concat(namedParameterString, "' parameter named against the ").concat(valueString, " value."));
            }
        },
        {
            key: "evaluateContentNamedParameter",
            value: function evaluateContentNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.STRING_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, Variable = _dom.default.Variable, terminalNode = node, content = terminalNode.getContent(), string = content; ///
                value = Value.fromString(string, context); ///
                debugger;
                var variable = Variable.fromValueAndNamedParameter(value, namedParameter, context);
                context.addVariable(variable);
                variable.assign(context);
            }
        },
        {
            key: "evaluateTerminalNamedParameter",
            value: function evaluateTerminalNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.BOOLEAN_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var Value = _dom.default.Value, Variable = _dom.default.Variable, boolean = terminal; ///
                value = Value.fromBoolean(boolean, context); ///
                debugger;
                var variable = Variable.fromValueAndNamedParameter(value, namedParameter, context);
                context.addVariable(variable);
                variable.assign(context);
            }
        },
        {
            key: "evaluateChildNodesNamedParameter",
            value: function evaluateChildNodesNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.NODES_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, Variable = _dom.default.Variable, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                value = Value.fromNodes(nodes, context); ///
                debugger;
                var variable = Variable.fromValueAndNamedParameter(value, namedParameter, context);
                context.addVariable(variable);
                variable.assign(context);
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var objectAssignmentNode = objectAssignmentNodeQuery(stepNode);
                if (objectAssignmentNode !== null) {
                    var Variable = _dom.default.Variable, NamedParameters = _dom.default.NamedParameters, node = objectAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, variable, namedParameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgbmFtZWQgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtTVFJJTkdfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudDsgIC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCk7ICAvLy9cblxuICAgIGRlYnVnZ2VyXG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZUFuZE5hbWVkUGFyYW1ldGVyKHZhbHVlLCBuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcbiAgfVxuXG4gIGV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGRlYnVnZ2VyXG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZUFuZE5hbWVkUGFyYW1ldGVyKHZhbHVlLCBuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVBbmROYW1lZFBhcmFtZXRlcih2YWx1ZSwgbmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIE5hbWVkUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IE5hbWVkUGFyYW1ldGVycy5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFyaWFibGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21TdHJpbmciLCJmcm9tVmFsdWVBbmROYW1lZFBhcmFtZXRlciIsImFkZFZhcmlhYmxlIiwiYXNzaWduIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJOT0RFU19UWVBFIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsImZyb21Ob2RlcyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwib2JqZWN0QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibm9kZUFzU3RyaW5nIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUVBQ0s7cUJBRUQ7cUJBRXVDOzhCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBTUEsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGVBQWU7Z0NBRGRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZUFBZTtZQUM3Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFNQyx5QkFBeUIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFL0NPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF5QyxPQUF2QkQsd0JBQXVCO2dCQUV4RCxJQUFNRSxRQUFRLElBQUksQ0FBQ1QsUUFBUSxDQUFDSyxRQUFRLENBQUNDLFVBQy9CSSxZQUFZRCxNQUFNRSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjRSxnQkFBUyxFQUFFO29CQUMzQixJQUFNQyxjQUFjSixNQUFNSyxRQUFRLENBQUNSLFVBQzdCUyxVQUFVLEFBQUMsT0FBOEJMLE9BQXhCRyxhQUFZLGNBQTBDRCxPQUE5QkYsV0FBVSxzQkFBOEIsT0FBVkUsZ0JBQVMsRUFBQyxPQUNqRkksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFHLHVCQUFjLENBQUNDLG9CQUFvQixDQUFDLElBQUksQ0FBQ25CLGVBQWUsRUFBRUs7Z0JBRTFELElBQUksQ0FBQ0wsZUFBZSxDQUFDb0IscUJBQXFCLENBQUMsU0FBQ0M7b0JBQzFDLE1BQUtDLHNCQUFzQixDQUFDRCxnQkFBZ0JiLE9BQU9IO2dCQUNyRDtnQkFFQUEsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLHFCQUEyQyxPQUF2QmpCLHdCQUF1QjtZQUM1RDs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRCxjQUFjLEVBQUViLEtBQUssRUFBRUgsT0FBTztnQkFDbkQsSUFBTU8sY0FBY0osTUFBTUssUUFBUSxDQUFDUixVQUM3Qm1CLHVCQUF1QkgsZUFBZXBCLFNBQVM7Z0JBRXJESSxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBdUVLLE9BQXJEWSxzQkFBcUIsa0NBQTRDLE9BQVpaLGFBQVk7Z0JBRWxHLElBQU1hLE9BQU9KLGVBQWVLLE9BQU87Z0JBRW5DLE9BQVFEO29CQUNOLEtBQUtFLHNDQUFzQjt3QkFBRTs0QkFDM0IsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ1AsZ0JBQWdCYixPQUFPSDs0QkFFMUQ7d0JBQ0Y7b0JBRUEsS0FBS3dCLHVDQUF1Qjt3QkFBRTs0QkFDNUIsSUFBSSxDQUFDQyw4QkFBOEIsQ0FBQ1QsZ0JBQWdCYixPQUFPSDs0QkFFM0Q7d0JBQ0Y7b0JBRUEsS0FBSzBCLDBDQUEwQjt3QkFBRTs0QkFDL0IsSUFBSSxDQUFDQyxnQ0FBZ0MsQ0FBQ1gsZ0JBQWdCYixPQUFPSDs0QkFFN0Q7d0JBQ0Y7Z0JBQ0Y7Z0JBRUFBLFFBQVFrQixLQUFLLENBQUMsQUFBQyxxQkFBeUVYLE9BQXJEWSxzQkFBcUIsa0NBQTRDLE9BQVpaLGFBQVk7WUFDdEc7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QlAsY0FBYyxFQUFFYixLQUFLLEVBQUVILE9BQU87Z0JBQzFELElBQU00QixPQUFPWixlQUFlWCxPQUFPO2dCQUVuQyxJQUFJdUIsU0FBU0Msa0JBQVcsRUFBRTtvQkFDeEIsSUFBTVYsdUJBQXVCSCxlQUFlcEIsU0FBUyxJQUMvQ2EsVUFBVSxBQUFDLFFBQWtFb0IsT0FBM0RWLHNCQUFxQix3Q0FBa0QsT0FBWlUsa0JBQVcsRUFBQyxPQUN6Rm5CLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1vQixPQUFPM0IsTUFBTTRCLE9BQU8sSUFDcEJDLG1CQUFtQkYsS0FBS0csY0FBYztnQkFFNUMsSUFBSSxDQUFDRCxrQkFBa0I7b0JBQ3JCLElBQU16QixjQUFjSixNQUFNSyxRQUFRLENBQUNSLFVBQzdCUyxXQUFVLEFBQUMsT0FBa0IsT0FBWkYsYUFBWSxvQ0FDN0JHLGFBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQVF3QixRQUFvQkMsWUFBRyxDQUF2QkQsT0FBT0UsV0FBYUQsWUFBRyxDQUFoQkMsVUFDVEMsZUFBZVAsTUFDZlEsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQzlDLFNBQVM2QyxTQUFVLEdBQUc7Z0JBRTVCbkMsUUFBUStCLE1BQU1NLFVBQVUsQ0FBQy9DLFFBQVFPLFVBQVcsR0FBRztnQkFFL0MsUUFBUTtnQkFFUixJQUFNTixXQUFXMEMsU0FBU0ssMEJBQTBCLENBQUN0QyxPQUFPYSxnQkFBZ0JoQjtnQkFFNUVBLFFBQVEwQyxXQUFXLENBQUNoRDtnQkFFcEJBLFNBQVNpRCxNQUFNLENBQUMzQztZQUNsQjs7O1lBRUF5QixLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCVCxjQUFjLEVBQUViLEtBQUssRUFBRUgsT0FBTztnQkFDM0QsSUFBTTRCLE9BQU9aLGVBQWVYLE9BQU87Z0JBRW5DLElBQUl1QixTQUFTZ0IsbUJBQVksRUFBRTtvQkFDekIsSUFBTXpCLHVCQUF1QkgsZUFBZXBCLFNBQVMsSUFDL0NhLFVBQVUsQUFBQyxRQUFrRW1DLE9BQTNEekIsc0JBQXFCLHdDQUFtRCxPQUFieUIsbUJBQVksRUFBQyxPQUMxRmxDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1vQixPQUFPM0IsTUFBTTRCLE9BQU8sSUFDcEJDLG1CQUFtQkYsS0FBS0csY0FBYyxJQUN0Q1ksV0FBV2Isa0JBQW1CLEdBQUc7Z0JBRXZDLElBQVFFLFFBQW9CQyxZQUFHLENBQXZCRCxPQUFPRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNUVSxVQUFVRCxVQUFVLEdBQUc7Z0JBRTdCMUMsUUFBUStCLE1BQU1hLFdBQVcsQ0FBQ0QsU0FBUzlDLFVBQVcsR0FBRztnQkFFakQsUUFBUTtnQkFFUixJQUFNTixXQUFXMEMsU0FBU0ssMEJBQTBCLENBQUN0QyxPQUFPYSxnQkFBZ0JoQjtnQkFFNUVBLFFBQVEwQyxXQUFXLENBQUNoRDtnQkFFcEJBLFNBQVNpRCxNQUFNLENBQUMzQztZQUNsQjs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDWCxjQUFjLEVBQUViLEtBQUssRUFBRUgsT0FBTztnQkFDN0QsSUFBTTRCLE9BQU9aLGVBQWVYLE9BQU87Z0JBRW5DLElBQUl1QixTQUFTb0IsaUJBQVUsRUFBRTtvQkFDdkIsSUFBTTdCLHVCQUF1QkgsZUFBZXBCLFNBQVMsSUFDL0NhLFVBQVUsQUFBQyxRQUFrRXVDLE9BQTNEN0Isc0JBQXFCLHdDQUFpRCxPQUFYNkIsaUJBQVUsRUFBQyxPQUN4RnRDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1vQixPQUFPM0IsTUFBTTRCLE9BQU8sSUFDcEJrQixzQkFBc0JuQixLQUFLb0IsaUJBQWlCO2dCQUVsRCxJQUFJLENBQUNELHFCQUFxQjtvQkFDeEIsSUFBTTFDLGNBQWNKLE1BQU1LLFFBQVEsQ0FBQ1IsVUFDN0JTLFdBQVUsQUFBQyxPQUFrQixPQUFaRixhQUFZLHdDQUM3QkcsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBUXdCLFFBQW9CQyxZQUFHLENBQXZCRCxPQUFPRSxXQUFhRCxZQUFHLENBQWhCQyxVQUNUZSxrQkFBa0JyQixNQUNsQnNCLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsUUFBUUYsWUFBYSxHQUFHO2dCQUU5QmpELFFBQVErQixNQUFNcUIsU0FBUyxDQUFDRCxPQUFPdEQsVUFBVyxHQUFHO2dCQUU3QyxRQUFRO2dCQUVSLElBQU1OLFdBQVcwQyxTQUFTSywwQkFBMEIsQ0FBQ3RDLE9BQU9hLGdCQUFnQmhCO2dCQUU1RUEsUUFBUTBDLFdBQVcsQ0FBQ2hEO2dCQUVwQkEsU0FBU2lELE1BQU0sQ0FBQzNDO1lBQ2xCOzs7O1lBSU93RCxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUV6RCxPQUFPO2dCQUNuQyxJQUFJMEQsbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUJ0RSwwQkFBMEJvRTtnQkFFdkQsSUFBSUUseUJBQXlCLE1BQU07b0JBQ2pDLElBQVF2QixXQUE4QkQsWUFBRyxDQUFqQ0MsVUFBVXdCLGtCQUFvQnpCLFlBQUcsQ0FBdkJ5QixpQkFDWjlCLE9BQU82QixzQkFDUGxFLFNBQVNPLFFBQVE2RCxZQUFZLENBQUMvQixPQUM5QnBDLFdBQVcwQyxTQUFTMEIsd0JBQXdCLENBQUNILHNCQUFzQjNELFVBQ25FTCxrQkFBa0JpRSxnQkFBZ0JFLHdCQUF3QixDQUFDSCxzQkFBc0IzRDtvQkFFdkYwRCxtQkFBbUIsSUFBSWxFLGdCQUFnQkMsUUFBUUMsVUFBVUM7Z0JBQzNEO2dCQUVBLE9BQU8rRDtZQUNUOzs7O0tBbEJBLG1DQUFPdEMsUUFBTyJ9