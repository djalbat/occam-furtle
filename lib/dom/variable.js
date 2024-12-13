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
var valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), forEachLoopVariableNodeQuery = (0, _query.nodeQuery)("/forEachLoop/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable");
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
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
            }
        },
        {
            key: "assign",
            value: function assign(context) {
                var variableString = this.string; ///
                if (this.assignment === null) {
                    context.debug("The '".concat(variableString, "' variable has not been assigned a value."));
                    return;
                }
                context.trace("Assigning the '".concat(variableString, "' variable a value..."));
                var value = this.assignment.resolve(context), type = value.getType();
                if (this.type !== type) {
                    var message = "The '".concat(variableString, " variable's '").concat(this.type, "' type does not match the assigned value's '").concat(type, "' type.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.value = value;
                context.debug("...assigned the '".concat(variableString, "' variable a value."));
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var variableString = this.string; ///
                context.trace("Resolving the '".concat(variableString, "' variable..."));
                var variableName = this.name, variable = context.findVariableByVariableName(variableName);
                if (variable === null) {
                    var message = "The '".concat(variableString, "; variable cannot be found.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var value = variable.getValue();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIiksXG4gICAgICBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50O1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGhhcyBub3QgYmVlbiBhc3NpZ25lZCBhIHZhbHVlLmApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGEgdmFsdWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hc3NpZ25tZW50LnJlc29sdmUoY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3RoaXMudHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIGFzc2lnbmVkIHZhbHVlJ3MgJyR7dHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhIHZhbHVlLmApO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfTsgdmFyaWFibGUgY2Fubm90IGJlIGZvdW5kLidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvckVhY2hMb29wVmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeShmb3JFYWNoTG9vcExvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVBbmRQYXJhbWV0ZXIodmFsdWUsIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlLCBhc3NpZ25tZW50KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRWYWx1ZSIsImdldEFzc2lnbm1lbnQiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiYXNzaWduIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwiZGVidWciLCJ0cmFjZSIsInJlc29sdmUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wTG9vcE5vZGUiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInBhcmFtZXRlciIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwiQXNzaWdubWVudCIsImRvbSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7MkRBZGdCO2dFQUNNO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMsd0JBQ3ZDRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMseUJBQ3hDRywrQkFBK0JILElBQUFBLGdCQUFTLEVBQUMsMEJBQ3pDSSxnQ0FBZ0NKLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFDSyxtQ0FBbUNMLElB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