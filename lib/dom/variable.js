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
var someVariableNodeQuery = (0, _query.nodeQuery)("/some/variable"), valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
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
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), value = null, string = name, variable = new Variable(string, type, name, value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZXNRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfTsgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YWx1ZSA9IHZhcmlhYmxlLmdldFZhbHVlKCksXG4gICAgICAgICAgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhc3NpZ24odmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVNvbWVOb2RlKHNvbWVMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVWYXJpYWJsZU5vZGUgPSBzb21lVmFyaWFibGVOb2RlUXVlcnkoc29tZUxvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzb21lVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlVmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNOYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QXNOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGFzTmFtZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsic29tZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFZhbHVlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lTWF0Y2hlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJkZWJ1ZyIsImFzc2lnbiIsInZhbHVlVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVNvbWVOb2RlIiwic29tZUxvb3BOb2RlIiwic29tZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsImZyb21QYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJmcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFzTmFtZSIsImdldEFzTmFtZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJkb20iLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0MseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0csOEJBQThCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQ0ssbUNBQW1DTCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q00sb0NBQW9DTixJQUFBQSxnQkFBUyxFQUFDLCtCQUM5Q08sc0NBQXNDUCxJQUFBQSxnQkFBUyxFQUFDO0lBRXRELFdBQWVRLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQUROSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FB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