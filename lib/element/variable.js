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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
var someVariableNodeQuery = (0, _query.nodeQuery)("/some/variable"), everyVariableNodeQuery = (0, _query.nodeQuery)("/every/variable"), reduceVariableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), expressionVariableNodeQuery = (0, _query.nodeQuery)("/expression/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
var _default = (0, _elements.define)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, expression) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.expression = expression;
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
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
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
                var variable = context.findVariableByVariableName(variableName), expression = variable.getExpression(), expressionString = expression.asString(context);
                context.debug("...evaluated the '".concat(variableString, "' variable to the ").concat(expressionString, " expression."));
                return expression;
            }
        },
        {
            key: "assign",
            value: function assign(expression, context) {
                var nested = false, expressionString = expression.asString(context), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                context.trace("Assigning the ".concat(expressionString, " expression to the '").concat(variableString, "' variable..."));
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var expressionType = expression.getType(), variableType = this.type;
                if (expressionType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the expression's '").concat(expressionType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.expression = expression;
                var variable = this; ///
                context.addVariable(variable);
                context.debug("...assigned the ".concat(expressionString, " expression to the '").concat(variableString, "' variable."));
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
            key: "fromEveryNode",
            value: function fromEveryNode(everyNode, context) {
                var everyVariableNode = everyVariableNodeQuery(everyNode), variableNode = everyVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), expression = null, string = stringFromName(name, context), variable = new Variable(string, type, name, expression);
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
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), expression = null, string = stringFromName(name, context), variable = new Variable(string, type, name, expression);
                return variable;
            }
        },
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var variable = null;
                var expressionVariableNode = expressionVariableNodeQuery(expressionNode);
                if (expressionVariableNode !== null) {
                    var variableNode = expressionVariableNode; ///
                    variable = variableFromVariableNode(variableNode, context);
                }
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
            key: "fromExpressionAndParameter",
            value: function fromExpressionAndParameter(expression, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), string = stringFromName(name, context), variable = new Variable(string, type, name, expression);
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
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = null, string = stringFromName(name, context), variable = new Variable(string, type, name, expression);
    return variable;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, type = null, name = nameFromVariableNode(variableNode), expression = null, string = stringFromName(name, context), variable = new Variable(string, type, name, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNvbWVWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zb21lL3ZhcmlhYmxlXCIpLFxuICAgICAgZXZlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ldmVyeS92YXJpYWJsZVwiKSxcbiAgICAgIHJlZHVjZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIGV4cHJlc3Npb25WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AbmFtZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBuZXN0ZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhcmlhYmxlLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBhc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25pbmcgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFzc2lnbmVkIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc29tZVZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc29tZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV2ZXJ5VmFyaWFibGVOb2RlID0gZXZlcnlWYXJpYWJsZU5vZGVRdWVyeShldmVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGV2ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVkdWNlVmFyaWFibGVOb2RlID0gcmVkdWNlVmFyaWFibGVOb2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gcmVkdWNlVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUXVlcnlWYXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc05hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXRBc05hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSAoYXNOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYXNOYW1lIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25WYXJpYWJsZU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvblZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlcihleHByZXNzaW9uLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbmFtZVN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInNvbWVWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImV2ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJyZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZXhwcmVzc2lvblZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEV4cHJlc3Npb24iLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsIm5lc3RlZCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJleHByZXNzaW9uVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVNvbWVOb2RlIiwic29tZU5vZGUiLCJzb21lVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsInN0cmluZ0Zyb21OYW1lIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlVmFyaWFibGVOb2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJhc05hbWUiLCJnZXRBc05hbWUiLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25WYXJpYWJsZU5vZGUiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlciIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZWxlbWVudHMiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibmFtZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O2dFQWpCcUI7Z0VBQ0M7cUJBR0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDbENDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNJLDhCQUE4QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENLLDhCQUE4QkwsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENNLGdDQUFnQ04sSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUNPLG1DQUFtQ1AsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NRLG9DQUFvQ1IsSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUNTLHNDQUFzQ1QsSUFBQUEsZ0JBQVMsRUFBQztJQUV0RCxXQUFlVSxJQUFBQSxnQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURoQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxD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