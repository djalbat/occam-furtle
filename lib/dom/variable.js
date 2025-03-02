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
                var nested = true, variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
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
                var nested = false, valueString = value.asString(context), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
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
                var type = parameter.getType(), name = parameter.getName(), value = null, string = stringFromName(name, context), variable = new Variable(string, type, name, value);
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
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), value = null, string = stringFromName(name, context), variable = new Variable(string, type, name, value);
                return variable;
            }
        },
        {
            key: "fromValueAndParameter",
            value: function fromValueAndParameter(value, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), string = stringFromName(name, context), variable = new Variable(string, type, name, value);
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
    var Variable = _dom.default.Variable, name = nameFromVariableNode(variableNode), value = null, string = stringFromName(name, context), variable = new Variable(string, type, name, value);
    return variable;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, type = null, name = nameFromVariableNode(variableNode), value = null, string = stringFromName(name, context), variable = new Variable(string, type, name, value);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
}
function stringFromName(name, context) {
    var nameString = name, string = nameString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBldmVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V2ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgcmVkdWNlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AbmFtZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9OyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhbHVlID0gdmFyaWFibGUuZ2V0VmFsdWUoKSxcbiAgICAgICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGFzc2lnbih2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmluZyB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVWYXJpYWJsZU5vZGUgPSBzb21lVmFyaWFibGVOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBldmVyeVZhcmlhYmxlTm9kZSA9IGV2ZXJ5VmFyaWFibGVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBldmVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVkdWNlVmFyaWFibGVOb2RlID0gcmVkdWNlVmFyaWFibGVOb2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gcmVkdWNlVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUXVlcnlWYXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc05hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXRBc05hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSAoYXNOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYXNOYW1lIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZUFuZFBhcmFtZXRlcih2YWx1ZSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbmFtZVN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInNvbWVWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlVmFyaWFibGVOb2RlUXVlcnkiLCJldmVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwicmVkdWNlVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJ2YWx1ZVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJhZGRWYXJpYWJsZSIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwic29tZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsImZyb21FdmVyeU5vZGUiLCJldmVyeU5vZGUiLCJldmVyeVZhcmlhYmxlTm9kZSIsImZyb21QYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJzdHJpbmdGcm9tTmFtZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21OYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiYXNOYW1lIiwiZ2V0QXNOYW1lIiwiZnJvbVZhbHVlQW5kUGFyYW1ldGVyIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJkb20iLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibmFtZVN0cmluZyJdLCJtYXBw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