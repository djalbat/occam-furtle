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
var someVariableNodeQuery = (0, _query.nodeQuery)("/some/variable"), everyVariableNodeQuery = (0, _query.nodeQuery)("/every/variable"), reduceVariableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), expressionVariableNodeQuery = (0, _query.nodeQuery)("/expression/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable"), variableIdentifierTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@identifier");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, identifier, expression) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.identifier = identifier;
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
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "matchVariableIdentifier",
            value: function matchVariableIdentifier(variableIdentifier) {
                var nameMatches = this.identifier === variableIdentifier;
                return nameMatches;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableString = this.string; ///
                context.trace("Evaluating the '".concat(variableString, "' variable..."));
                var nested = true, variableIdentifier = this.identifier, variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier, nested);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "; variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableIdentifier(variableIdentifier), expression = variable.getExpression(), expressionString = expression.asString(context);
                context.debug("...evaluated the '".concat(variableString, "' variable to the ").concat(expressionString, " expression."));
                return expression;
            }
        },
        {
            key: "assign",
            value: function assign(expression, context) {
                var nested = false, expressionString = expression.asString(context), variableIdentifier = this.identifier, variableString = this.string, variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier, nested);
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
            key: "fromEveryNode",
            value: function fromEveryNode(everyNode, context) {
                var everyVariableNode = everyVariableNodeQuery(everyNode), variableNode = everyVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), identifier = parameter.getName(), expression = null, string = stringFromName(identifier, context), variable = new Variable(string, type, identifier, expression);
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
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), identifier = asName !== null ? asName : namedParameter.getName(), expression = null, string = stringFromName(identifier, context), variable = new Variable(string, type, identifier, expression);
                return variable;
            }
        },
        {
            key: "fromExpressionAndParameter",
            value: function fromExpressionAndParameter(expression, parameter, context) {
                var type = parameter.getType(), identifier = parameter.getName(), string = stringFromName(identifier, context), variable = new Variable(string, type, identifier, expression);
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
}(), _define_property(_Variable, "identifier", "Variable"), _Variable));
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _dom.default.Variable, identifier = nameFromVariableNode(variableNode), expression = null, string = stringFromName(identifier, context), variable = new Variable(string, type, identifier, expression);
    return variable;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, type = null, identifier = nameFromVariableNode(variableNode), expression = null, string = stringFromName(identifier, context), variable = new Variable(string, type, identifier, expression);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableIdentifierTerminalNode = variableIdentifierTerminalNodeQuery(variableNode), variableIdentifierTerminalNodeContent = variableIdentifierTerminalNode.getContent(), identifier = variableIdentifierTerminalNodeContent; ///
    return identifier;
}
function stringFromName(identifier, context) {
    var nameString = identifier, string = nameString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBzb21lVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIGV2ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvdmFyaWFibGVcIiksXG4gICAgICByZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBleHByZXNzaW9uVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZUlkZW50aWZpZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AaWRlbnRpZmllclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGlkZW50aWZpZXIsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBuZXN0ZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ307IHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHZhcmlhYmxlLmdldEV4cHJlc3Npb24oKSxcbiAgICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBhc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25pbmcgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFzc2lnbmVkIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gIH1cblxuICBzdGF0aWMgaWRlbnRpZmllciA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc29tZVZhcmlhYmxlTm9kZSA9IHNvbWVWYXJpYWJsZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc29tZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25WYXJpYWJsZU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvblZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXZlcnlWYXJpYWJsZU5vZGUgPSBldmVyeVZhcmlhYmxlTm9kZVF1ZXJ5KGV2ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gZXZlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcmFtZXRlcihwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShpZGVudGlmaWVyLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIGlkZW50aWZpZXIsIGV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VWYXJpYWJsZU5vZGUgPSByZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeShyZWR1Y2VOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSByZWR1Y2VWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFzTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IChhc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBhc05hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgIG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShpZGVudGlmaWVyLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIGlkZW50aWZpZXIsIGV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyKGV4cHJlc3Npb24sIHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKGlkZW50aWZpZXIsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgaWRlbnRpZmllciwgZXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIGlkZW50aWZpZXIgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUoaWRlbnRpZmllciwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgaWRlbnRpZmllciwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkZW50aWZpZXIgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUoaWRlbnRpZmllciwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgaWRlbnRpZmllciwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlID0gdmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gaWRlbnRpZmllcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWUoaWRlbnRpZmllciwgY29udGV4dCkge1xuICBjb25zdCBuYW1lU3RyaW5nID0gaWRlbnRpZmllciwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBuYW1lU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsic29tZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXZlcnlWYXJpYWJsZU5vZGVRdWVyeSIsInJlZHVjZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJleHByZXNzaW9uVmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwidHlwZSIsImlkZW50aWZpZXIiLCJleHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldElkZW50aWZpZXIiLCJnZXRFeHByZXNzaW9uIiwibWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJuYW1lTWF0Y2hlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJuZXN0ZWQiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsImRlYnVnIiwiYXNzaWduIiwiZXhwcmVzc2lvblR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJhZGRWYXJpYWJsZSIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwic29tZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvblZhcmlhYmxlTm9kZSIsImZyb21FdmVyeU5vZGUiLCJldmVyeU5vZGUiLCJldmVyeVZhcmlhYmxlTm9kZSIsImZyb21QYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJnZXROYW1lIiwic3RyaW5nRnJvbU5hbWUiLCJmcm9tUmVkdWNlTm9kZSIsInJlZHVjZU5vZGUiLCJyZWR1Y2VWYXJpYWJsZU5vZGUiLCJmcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFzTmFtZSIsImdldEFzTmFtZSIsImZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJkb20iLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibmFtZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7OzJEQWpCZ0I7Z0VBQ007cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDbENDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNJLDhCQUE4QkosSUFB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