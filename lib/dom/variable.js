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
                context.trace("Assigning the '".concat(variableString, "' variable a value..."));
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
                context.debug("...assigned the '".concat(variableString, "' variable a value."));
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
                var variable = context.findVariableByVariableName(variableName), value = variable.getValue();
                context.debug("...resolved the '".concat(variableString, "' variable."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIiksXG4gICAgICBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50O1xuICB9XG5cbiAgc2V0U3RyaW5nKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGEgdmFsdWUuLi5gKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXNzaWdubWVudC5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIGFzc2lnbmVkIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHZhcmlhYmxlLnNldFZhbHVlKHZhbHVlKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFzc2lnbmVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGEgdmFsdWUuYCk7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvckVhY2hMb29wVmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeShmb3JFYWNoTG9vcExvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVBbmRQYXJhbWV0ZXIodmFsdWUsIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXNzaWdubWVudCIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJnZXRBc3NpZ25tZW50Iiwic2V0U3RyaW5nIiwic2V0VHlwZSIsInNldE5hbWUiLCJzZXRWYWx1ZSIsInNldEFzc2lnbm1lbnQiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiYXNzaWduIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmVzb2x2ZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YWx1ZVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnQiLCJkb20iLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0UsOEJBQThCRixJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0csK0JBQStCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUN6Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQ0ssbUNBQW1DTCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q00sb0NBQW9DTixJQUFBQSxnQkFBUyxFQUFD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