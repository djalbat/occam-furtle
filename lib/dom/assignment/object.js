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
            key: "resolve",
            value: function resolve(context) {
                var _this = this;
                var objectAssignmentString = this.string; ///
                context.trace("Resolving the '".concat(objectAssignmentString, "' object assignment..."));
                var value = this.variable.resolve(context), valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _node.default.matchParameters(this.parameters, context);
                this.parameters.forEachParameter(function(parameter) {
                    if (parameter !== null) {
                        _this.resolveParameter(parameter, value, context);
                    }
                });
                context.debug("...resolved the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "resolveParameter",
            value: function resolveParameter(parameter, value, context) {
                var valueString = value.asString(context), parameterString = parameter.getString();
                context.trace("Resolving the '".concat(parameterString, "' parameter against the ").concat(valueString, " value..."));
                var name = parameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            this.resolveContentParameter(parameter, value, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            this.resolveChildNodesParameter(parameter, value, context);
                            break;
                        }
                }
                context.debug("...resolved the '".concat(parameterString, "' parameter against the ").concat(valueString, " value."));
            }
        },
        {
            key: "resolveContentParameter",
            value: function resolveContentParameter(parameter, value, context) {
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
            key: "resolveChildNodesParameter",
            value: function resolveChildNodesParameter(parameter, value, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVBhcmFtZXRlcnMgZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQYXJhbWV0ZXJzLm1hdGNoUGFyYW1ldGVycyh0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlc29sdmVQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgcmVzb2x2ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0aGlzLnJlc29sdmVDb250ZW50UGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUNoaWxkTm9kZXNQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS5gKTtcbiAgfVxuXG4gIHJlc29sdmVDb250ZW50UGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUsIFZhcmlhYmxlLCBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQocGFyYW1ldGVyLCBhc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuICB9XG5cbiAgcmVzb2x2ZUNoaWxkTm9kZXNQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSwgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50KHBhcmFtZXRlciwgYXNzaWdubWVudCk7XG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSwgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsInBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFBhcmFtZXRlcnMiLCJyZXNvbHZlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUGFyYW1ldGVycyIsIm1hdGNoUGFyYW1ldGVycyIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJyZXNvbHZlUGFyYW1ldGVyIiwiZGVidWciLCJwYXJhbWV0ZXJTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJyZXNvbHZlQ29udGVudFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwicmVzb2x2ZUNoaWxkTm9kZXNQYXJhbWV0ZXIiLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJub2RlIiwiZ2V0Tm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFyaWFibGUiLCJBc3NpZ25tZW50IiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJmcm9tU3RyaW5nIiwiYXNzaWdubWVudCIsImZyb21WYWx1ZSIsImZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50IiwiYWRkVmFyaWFibGUiLCJhc3NpZ24iLCJOT0RFU19UWVBFIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsImZyb21Ob2RlcyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwib2JqZWN0QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiUGFyYW1ldGVycyIsIm5vZGVBc1N0cmluZyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNOzJEQUNLO3FCQUVEO3FCQUV5Qjs4QkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5FLElBQU1BLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURUSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTzs7Z0JBQ2IsSUFBTUMseUJBQXlCLElBQUksQ0FBQ1IsTUFBTSxF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