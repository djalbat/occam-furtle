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
var someVariableNodeQuery = (0, _query.nodeQuery)("/some/variable"), valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), everyVariableNodeQuery = (0, _query.nodeQuery)("/every/variable"), reduceVariableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, value) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.value = value;
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
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
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
        },
        {
            key: "assign",
            value: function assign(value, context) {
                var valueString = value.asString(context), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName);
                context.trace("Assigning the ".concat(valueString, " value to the '").concat(variableString, "' variable..."));
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var valueType = value.getType(), variableType = this.type;
                if (valueType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the value's '").concat(valueType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.value = value;
                var variable = this; ///
                context.addVariable(variable);
                context.debug("...assigned the ".concat(valueString, " value to the '").concat(variableString, "' variable."));
            }
        }
    ], [
        {
            key: "fromSomeNode",
            value: function fromSomeNode(someNode, context) {
                var someVariableNode = someVariableNodeQuery(someNode), variableNode = someVariableNode, variable = variableFromVariableNode(variableNode, context);
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
            key: "fromEveryNode",
            value: function fromEveryNode(everyNode, context) {
                var everyVariableNode = everyVariableNodeQuery(everyNode), variableNode = everyVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), value = null, string = name, variable = new Variable(string, type, name, value);
                return variable;
            }
        },
        {
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceVariableNode = reduceVariableNodeQuery(reduceNode), variableNode = reduceVariableNode, variable = variableFromVariableNode(variableNode, context);
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
            key: "fromNamedParameter",
            value: function fromNamedParameter(namedParameter, context) {
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), value = null, string = name, variable = new Variable(string, type, name, value);
                return variable;
            }
        },
        {
            key: "fromValueAndParameter",
            value: function fromValueAndParameter(value, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), string = name, variable = new Variable(string, type, name, value);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), value = null, variable = new Variable(string, type, name, value);
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
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode), variableNode = variableAssignmentVariableNode, variable = variableFromTypeAndVariableNode(type, variableNode, context);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), value = null, variable = new Variable(string, type, name, value);
    return variable;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode), value = null, variable = new Variable(string, type, name, value);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBldmVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V2ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgcmVkdWNlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AbmFtZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFsdWUgPSB2YXJpYWJsZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgYXNzaWduKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmluZyB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVWYXJpYWJsZU5vZGUgPSBzb21lVmFyaWFibGVOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBldmVyeVZhcmlhYmxlTm9kZSA9IGV2ZXJ5VmFyaWFibGVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBldmVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZHVjZVZhcmlhYmxlTm9kZSA9IHJlZHVjZVZhcmlhYmxlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHJlZHVjZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNOYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QXNOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGFzTmFtZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsic29tZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsImV2ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJyZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFZhbHVlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lTWF0Y2hlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJkZWJ1ZyIsImFzc2lnbiIsInZhbHVlVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVNvbWVOb2RlIiwic29tZU5vZGUiLCJzb21lVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlVmFyaWFibGVOb2RlIiwiZnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21OYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiYXNOYW1lIiwiZ2V0QXNOYW1lIiwiZnJvbVZhbHVlQW5kUGFyYW1ldGVyIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImRvbSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7MkRBakJnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0MseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0UseUJBQXlCRixJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0csMEJBQTBCSCxJQUFBQSxnQkFBUyxFQUFDLHFCQUNwQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0ssOEJBQThCTCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q00sZ0NBQWdDTixJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQ08sbUNBQW1DUCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q1Esb0NBQW9DUixJQUFBQSxnQkFBUyxFQUFDLCtCQUM5Q1Msc0NBQXNDVCxJQUFBQSxnQkFBUyxFQUFDO0lBRXRELFdBQWVVLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQUROSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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