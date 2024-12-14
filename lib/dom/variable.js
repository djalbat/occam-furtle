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
                var value = this.assignment.resolve(context), variable = context.findVariableByVariableName(variableName), valueType = value.getType(), variableType = variable.getType();
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
            key: "resolve",
            value: function resolve(context) {
                var variableString = this.string; ///
                context.trace("Resolving the '".concat(variableString, "' variable..."));
                var variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "; variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableName(variableName), value = variable.getValue(), valueString = value.asString(context);
                context.debug("...resolved the '".concat(variableString, "' variable to the ").concat(valueString, " value."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIiksXG4gICAgICBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50O1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIGEgdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXNzaWdubWVudC5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIGFzc2lnbmVkIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHZhcmlhYmxlLnNldFZhbHVlKHZhbHVlKTtcblxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvckVhY2hMb29wVmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeShmb3JFYWNoTG9vcExvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVBbmRQYXJhbWV0ZXIodmFsdWUsIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyQW5kQXNzaWdubWVudChwYXJhbWV0ZXIsIGFzc2lnbm1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRWYWx1ZSIsImdldEFzc2lnbm1lbnQiLCJzZXRTdHJpbmciLCJzZXRUeXBlIiwic2V0TmFtZSIsInNldFZhbHVlIiwic2V0QXNzaWdubWVudCIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJhc3NpZ24iLCJjb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyZXNvbHZlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhbHVlVHlwZSIsInZhcmlhYmxlVHlwZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiQXNzaWdubWVudCIsImRvbSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7MkRBZmdCO2dFQUNNO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMsd0JBQ3ZDRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMseUJBQ3hDRywrQkFBK0JILElBQUFBLGdCQUFTLEVBQUMsMEJBQ3pDSSxnQ0FBZ0NKLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFDSyxtQ0FBbUNMLElBQUFBLGdCQUFTLEVBQUMsOEJBQzdDTSxvQ0FBb0NOLElBQUFBLGdCQUFTLEVBQUMsK0JBQzlDTyxzQ0FBc0NQLElBQUFBLGdCQUFTLEVBQUM7SUFFdEQsV0FBZVEsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVTtnQ0FEbEJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJ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