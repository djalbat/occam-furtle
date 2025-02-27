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
var someVariableNodeQuery = (0, _query.nodeQuery)("/some/variable"), valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable");
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
            key: "fromSomeNode",
            value: function fromSomeNode(someLoopNode, context) {
                var someVariableNode = someVariableNodeQuery(someLoopNode), variableNode = someVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZXNRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5hc3NpZ25tZW50ID0gYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudDtcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBzZXRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5hc3NpZ25tZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmluZyBhIHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IHZhcmlhYmxlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9IHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlfScgdHlwZSBkb2VzIG5vdCBtYXRjaCB0aGUgYXNzaWduZWQgdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlLidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdmFyaWFibGUuc2V0VmFsdWUodmFsdWUpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFzc2lnbmVkIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9OyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhbHVlID0gdmFyaWFibGUuZ2V0VmFsdWUoKSxcbiAgICAgICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tU29tZU5vZGUoc29tZUxvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc29tZVZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGVRdWVyeShzb21lTG9vcE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZUFuZFBhcmFtZXRlcih2YWx1ZSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50KHBhcmFtZXRlciwgYXNzaWdubWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJzb21lVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRWYWx1ZSIsImdldEFzc2lnbm1lbnQiLCJzZXRTdHJpbmciLCJzZXRUeXBlIiwic2V0TmFtZSIsInNldFZhbHVlIiwic2V0QXNzaWdubWVudCIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJhc3NpZ24iLCJjb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJldmFsdWF0ZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YWx1ZVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTG9vcE5vZGUiLCJzb21lVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlVmFyaWFibGVOb2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbVZhbHVlQW5kUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tUGFyYW1ldGVyQW5kQXNzaWdubWVudCIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnQiLCJkb20iLCJmcm9tQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzJEQWRnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0MseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0csOEJBQThCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQ0ssbUNBQW1DTCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q00sb0NBQW9DTixJQUFBQSxnQkFBUyxFQUFDO0lBRXBELFdBQWVPLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRGxCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFB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