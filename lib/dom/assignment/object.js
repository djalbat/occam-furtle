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
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, terminalNode = node, content = terminalNode.getContent(), string = content; ///
                value = Value.fromString(string, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromNamedParameterAndAssignment(namedParameter, assignment);
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
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, boolean = terminal; ///
                value = Value.fromBoolean(boolean, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromNamedParameterAndAssignment(namedParameter, assignment);
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
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                value = Value.fromNodes(nodes, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromNamedParameterAndAssignment(namedParameter, assignment);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgbmFtZWQgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtTVFJJTkdfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUsIEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudDsgIC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRQYXJhbWV0ZXJBbmRBc3NpZ25tZW50KG5hbWVkUGFyYW1ldGVyLCBhc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUsIEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBib29sZWFuID0gdGVybWluYWw7IC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlckFuZEFzc2lnbm1lbnQobmFtZWRQYXJhbWV0ZXIsIGFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG4gIH1cblxuICBldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSwgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlckFuZEFzc2lnbm1lbnQobmFtZWRQYXJhbWV0ZXIsIGFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIE5hbWVkUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IE5hbWVkUGFyYW1ldGVycy5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFyaWFibGUiLCJBc3NpZ25tZW50IiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tU3RyaW5nIiwiYXNzaWdubWVudCIsImZyb21WYWx1ZSIsImZyb21OYW1lZFBhcmFtZXRlckFuZEFzc2lnbm1lbnQiLCJhZGRWYXJpYWJsZSIsImFzc2lnbiIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiTk9ERVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJmcm9tTm9kZXMiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIm9iamVjdEFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5vZGVBc1N0cmluZyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7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