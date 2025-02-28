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
            value: function assign(context) {
                var variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName);
                context.trace("Assigning a value to the '".concat(variableString, "' variable..."));
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "' variable is not present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var value = this.value.evaluate(context), valueType = value.getType(), variableType = this.type;
                if (valueType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the assigned value's '").concat(valueType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.value = value;
                var valueString = value.asString(context);
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
            key: "fromValueAndNamedParameter",
            value: function fromValueAndNamedParameter(value, namedParameter, context) {
                var asName = namedParameter.getAsName(), name = asName !== null ? asName : namedParameter.getName(), type = namedParameter.getType(), string = name, variable = new Variable(string, type, name, value);
                return variable;
            }
        },
        {
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode), variableNode = variableAssignmentVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode), value = null, variable = new Variable(string, type, name, value);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
} /*

  static fromNamedParameterAndAssignment(namedParameter, assignment, context) {
    const asName = namedParameter.getAsName(),
          name = (asName !== null) ?
                   asName : ///
                    namedParameter.getName(),
          type = namedParameter.getType(),
          value = null,
          string = name,  ///
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }

 */ 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZXNRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfTsgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YWx1ZSA9IHZhcmlhYmxlLmdldFZhbHVlKCksXG4gICAgICAgICAgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25pbmcgYSB2YWx1ZSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSBhc3NpZ25lZCB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzb21lVmFyaWFibGVOb2RlID0gc29tZVZhcmlhYmxlTm9kZVF1ZXJ5KHNvbWVMb29wTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc29tZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlQW5kTmFtZWRQYXJhbWV0ZXIodmFsdWUsIG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNOYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QXNOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IChhc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBhc05hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbi8qXG5cbiAgc3RhdGljIGZyb21OYW1lZFBhcmFtZXRlckFuZEFzc2lnbm1lbnQobmFtZWRQYXJhbWV0ZXIsIGFzc2lnbm1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc05hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXRBc05hbWUoKSxcbiAgICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGFzTmFtZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgdmFsdWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAqLyJdLCJuYW1lcyI6WyJzb21lVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsImRlYnVnIiwiYXNzaWduIiwidmFsdWVUeXBlIiwidmFyaWFibGVUeXBlIiwiZnJvbVNvbWVOb2RlIiwic29tZUxvb3BOb2RlIiwic29tZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInBhcmFtZXRlciIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVZhbHVlQW5kTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFzTmFtZSIsImdldEFzTmFtZSIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJkb20iLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjtnRUFDTTtx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