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
var _Variable;
var valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), forEachLoopVariableNodeQuery = (0, _query.nodeQuery)("/forEachLoop/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, value, assignment) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.value = value;
        this.assignment = assignment;
    }
    _create_class(Variable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getAssignment",
            value: function getAssignment() {
                return this.assignment;
            }
        },
        {
            key: "setString",
            value: function setString(string) {
                this.string = string;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
            }
        },
        {
            key: "setAssignment",
            value: function setAssignment(assignment) {
                this.assignment = assignment;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
            }
        },
        {
            key: "assign",
            value: function assign(context) {
                if (this.assignment === null) {
                    return;
                }
                var variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName);
                context.trace("Assigning a value to the '".concat(variableString, "' variable..."));
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "' variable is not present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var value = this.assignment.evaluate(context), variable = context.findVariableByVariableName(variableName), valueType = value.getType(), variableType = variable.getType();
                if (valueType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the assigned value's '").concat(valueType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                variable.setValue(value);
                var valueString = value.asString(context);
                context.debug("...assigned the ".concat(valueString, " value to the '").concat(variableString, "' variable."));
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableString = this.string; ///
                context.trace("Evaluating the '".concat(variableString, "' variable..."));
                var variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "; variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableName(variableName), value = variable.getValue(), valueString = value.asString(context);
                context.debug("...evaluated the '".concat(variableString, "' variable to the ").concat(valueString, " value."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var variable = null;
                var valueVariableNode = valueVariableNodeQuery(valueNode);
                if (valueVariableNode !== null) {
                    var variableNode = valueVariableNode; ///
                    variable = variableFromVariableNode(variableNode, context);
                }
                return variable;
            }
        },
        {
            key: "fromNodeQueryNode",
            value: function fromNodeQueryNode(nodeQueryNode, context) {
                var nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode), variableNode = nodeQueryVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromNodesQueryNode",
            value: function fromNodesQueryNode(nodesQueryNode, context) {
                var nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode), variableNode = nodesQueryVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopLoopNode, context) {
                var forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode), variableNode = forEachLoopVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromValueAndParameter",
            value: function fromValueAndParameter(value, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), string = name, assignment = null, variable = new Variable(string, type, name, value, assignment);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), value = null, assignment = null, variable = new Variable(string, type, name, value, assignment);
                return variable;
            }
        },
        {
            key: "fromArrayAssignmentNode",
            value: function fromArrayAssignmentNode(arrayAssignmentNode, context) {
                var arrayAssignmentVariableNode = arrayAssignmentVariableNodeQuery(arrayAssignmentNode), variableNode = arrayAssignmentVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromObjectAssignmentNode",
            value: function fromObjectAssignmentNode(objectAssignmentNode, context) {
                var objectAssignmentVariableNode = objectAssignmentVariableNodeQuery(objectAssignmentNode), variableNode = objectAssignmentVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromParameterAndAssignment",
            value: function fromParameterAndAssignment(parameter, assignment, context) {
                var type = parameter.getType(), name = parameter.getName(), value = null, string = name, variable = new Variable(string, type, name, value, assignment);
                return variable;
            }
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssignmentNode, context) {
                var Assignment = _dom.default.Assignment, variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode), variableNode = variableAssignmentVariableNode, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode), value = null, assignment = Assignment.fromVariableAssignmentNode(variableAssignmentNode, context), variable = new Variable(string, type, name, value, assignment);
                return variable;
            }
        },
        {
            key: "fromTypeVariableNodeAndAssignmentNode",
            value: function fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context) {
                var Assignment = _dom.default.Assignment, node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), value = null, assignment = Assignment.fromAssignmentNode(assignmentNode, context), variable = new Variable(string, type, name, value, assignment);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode), value = null, assignment = null, variable = new Variable(string, type, name, value, assignment);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIiksXG4gICAgICBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50O1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIGEgdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSBhc3NpZ25lZCB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB2YXJpYWJsZS5zZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlVmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUXVlcnlWYXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSA9IGZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkoZm9yRWFjaExvb3BMb29wTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQocGFyYW1ldGVyLCBhc3NpZ25tZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXNzaWdubWVudCIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJnZXRBc3NpZ25tZW50Iiwic2V0U3RyaW5nIiwic2V0VHlwZSIsInNldE5hbWUiLCJzZXRWYWx1ZSIsInNldEFzc2lnbm1lbnQiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiYXNzaWduIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFsdWVUeXBlIiwidmFyaWFibGVUeXBlIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wTG9vcE5vZGUiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInBhcmFtZXRlciIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJBc3NpZ25tZW50IiwiZG9tIiwidmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7OzsyREFmZ0I7Z0VBQ007cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENHLCtCQUErQkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDekNJLGdDQUFnQ0osSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUNLLG1DQUFtQ0wsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NNLG9DQUFvQ04sSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUNPLHNDQUFzQ1AsSUFBQUEsZ0JBQVMsRUFBQztJQUV0RCxXQUFlUSxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVO2dDQURsQkw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENB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