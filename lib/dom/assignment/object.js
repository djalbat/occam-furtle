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
var _node = /*#__PURE__*/ _interop_require_default(require("../../parameters/node"));
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
    function ObjectAssigment(string, variable, parameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variable = variable;
        this.parameters = parameters;
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
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
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
                _node.default.matchParameters(this.parameters, context);
                this.parameters.forEachParameter(function(parameter) {
                    if (parameter !== null) {
                        _this.evaluateParameter(parameter, value, context);
                    }
                });
                context.debug("...evaluated the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "evaluateParameter",
            value: function evaluateParameter(parameter, value, context) {
                var valueString = value.asString(context), parameterString = parameter.getString();
                context.trace("Evaluating the '".concat(parameterString, "' parameter against the ").concat(valueString, " value..."));
                var name = parameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            this.evaluateContentParameter(parameter, value, context);
                            break;
                        }
                    case _parameterNames.TERMINAL_PARAMETER_NAME:
                        {
                            this.evaluateTerminalParameter(parameter, value, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            this.evaluateChildNodesParameter(parameter, value, context);
                            break;
                        }
                }
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the ").concat(valueString, " value."));
            }
        },
        {
            key: "evaluateContentParameter",
            value: function evaluateContentParameter(parameter, value, context) {
                var type = parameter.getType();
                if (type !== _types.STRING_TYPE) {
                    var parameterString = parameter.getString(), message = "The '".concat(parameterString, "' parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, terminalNode = node, content = terminalNode.getContent(), string = content; ///
                value = Value.fromString(string, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
                context.addVariable(variable);
                variable.assign(context);
            }
        },
        {
            key: "evaluateTerminalParameter",
            value: function evaluateTerminalParameter(parameter, value, context) {
                var type = parameter.getType();
                if (type !== _types.BOOLEAN_TYPE) {
                    var parameterString = parameter.getString(), message = "The '".concat(parameterString, "' parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, boolean = terminal; ///
                value = Value.fromBoolean(boolean, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
                context.addVariable(variable);
                variable.assign(context);
            }
        },
        {
            key: "evaluateChildNodesParameter",
            value: function evaluateChildNodesParameter(parameter, value, context) {
                var type = parameter.getType();
                if (type !== _types.NODES_TYPE) {
                    var parameterString = parameter.getString(), message = "The '".concat(parameterString, "' parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                value = Value.fromNodes(nodes, context); ///
                var assignment = Assignment.fromValue(value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
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
                    var Variable = _dom.default.Variable, Parameters = _dom.default.Parameters, node = objectAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, variable, parameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVBhcmFtZXRlcnMgZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQYXJhbWV0ZXJzLm1hdGNoUGFyYW1ldGVycyh0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZUNvbnRlbnRQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRlcm1pbmFsUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRoaXMuZXZhbHVhdGVDaGlsZE5vZGVzUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLmApO1xuICB9XG5cbiAgZXZhbHVhdGVDb250ZW50UGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlLCBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQocGFyYW1ldGVyLCBhc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbFBhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUsIEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBib29sZWFuID0gdGVybWluYWw7IC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50KHBhcmFtZXRlciwgYXNzaWdubWVudCk7XG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc1BhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlLCBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQocGFyYW1ldGVyLCBhc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBQYXJhbWV0ZXJzIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk9iamVjdEFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UGFyYW1ldGVycyIsImV2YWx1YXRlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUGFyYW1ldGVycyIsIm1hdGNoUGFyYW1ldGVycyIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwicGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50UGFyYW1ldGVyIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZVRlcm1pbmFsUGFyYW1ldGVyIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNoaWxkTm9kZXNQYXJhbWV0ZXIiLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFyaWFibGUiLCJBc3NpZ25tZW50IiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tU3RyaW5nIiwiYXNzaWdubWVudCIsImZyb21WYWx1ZSIsImZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50IiwiYWRkVmFyaWFibGUiLCJhc3NpZ24iLCJCT09MRUFOX1RZUEUiLCJ0ZXJtaW5hbCIsImJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZnJvbU5vZGVzIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJQYXJhbWV0ZXJzIiwibm9kZUFzU3RyaW5nIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007MkRBQ0s7cUJBRUQ7cUJBRXVDOzhCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBTUEsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENB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