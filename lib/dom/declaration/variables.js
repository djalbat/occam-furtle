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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
var _node = require("../../utilities/node");
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
var _VariablesDeclaration;
var variableNodesQuery = (0, _query.nodesQuery)("/variablesDeclaration/variable"), assignmentNodesQuery = (0, _query.nodesQuery)("/variablesDeclaration/assignment"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/variablesDeclaration/@type"), variablesDeclarationNodeQuery = (0, _query.nodeQuery)("/step/variablesDeclaration");
var _default = (0, _dom.domAssigned)((_VariablesDeclaration = /*#__PURE__*/ function() {
    function VariablesDeclaration(string, variables) {
        _class_call_check(this, VariablesDeclaration);
        this.string = string;
        this.variables = variables;
    }
    _create_class(VariablesDeclaration, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "call",
            value: function call(context) {
                var variablesDeclarationString = this.getString();
                context.trace("Calling the '".concat(variablesDeclarationString, "' variables declaration"));
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode) {
                var variablesDeclaration = null;
                var variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);
                if (variablesDeclarationNode !== null) {
                    var type = typeFromVariablesDeclarationNode(variablesDeclarationNode), variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode), string = stringFromVariables(variables);
                    variablesDeclaration = new VariablesDeclaration(string, variables);
                }
                return variablesDeclaration;
            }
        }
    ]);
    return VariablesDeclaration;
}(), _define_property(_VariablesDeclaration, "name", "VariablesDeclaration"), _VariablesDeclaration));
function stringFromVariables(variables) {
    var variablesString = variables.reduce(function(variablesString, variable) {
        var variableString = variable.getString();
        variablesString = variablesString === null ? variableString : "".concat(variablesString, ", ").concat(variableString);
        return variablesString;
    }, null), string = "".concat(variablesString, ";");
    return string;
}
function typeFromVariablesDeclarationNode(variablesDeclarationNode) {
    var typeTerminalNode = typeTerminalNodeQuery(variablesDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode) {
    var variableNodes = variableNodesQuery(variablesDeclarationNode), assignmentNodes = assignmentNodesQuery(variablesDeclarationNode), variables = variableNodes.map(function(variableNode) {
        var Variable = _dom.default.Variable, assignmentNode = (0, _node.findSiblingNode)(assignmentNodes, variableNode, variablesDeclarationNode), variable = Variable.fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode);
        return variable;
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgY2FsbChjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7dmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZXMgZGVjbGFyYXRpb25gKTtcblxuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVzRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlKSB7XG4gICAgbGV0IHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodHlwZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZXModmFyaWFibGVzKTtcblxuICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVzRGVjbGFyYXRpb24oc3RyaW5nLCB2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYXJpYWJsZXModmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc1N0cmluZyA9IHZhcmlhYmxlcy5yZWR1Y2UoKHZhcmlhYmxlc1N0cmluZywgdmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdmFyaWFibGVzU3RyaW5nID0gKHZhcmlhYmxlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVTdHJpbmcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhcmlhYmxlc1N0cmluZ30sICR7dmFyaWFibGVTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBgJHt2YXJpYWJsZXNTdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcblxufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh0eXBlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBhc3NpZ25tZW50Tm9kZXMgPSBhc3NpZ25tZW50Tm9kZXNRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnROb2RlID0gZmluZFNpYmxpbmdOb2RlKGFzc2lnbm1lbnROb2RlcywgdmFyaWFibGVOb2RlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXNzaWdubWVudE5vZGVzUXVlcnkiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdHJpbmciLCJ2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZXMiLCJjYWxsIiwiY29udGV4dCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJzdHJpbmdGcm9tVmFyaWFibGVzIiwibmFtZSIsInZhcmlhYmxlc1N0cmluZyIsInJlZHVjZSIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFyaWFibGVOb2RlcyIsImFzc2lnbm1lbnROb2RlcyIsIm1hcCIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiYXNzaWdubWVudE5vZGUiLCJmaW5kU2libGluZ05vZGUiLCJmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBR3NCO29CQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLG1DQUNoQ0MsdUJBQXVCRCxJQUFBQSxpQkFBVSxFQUFDLHFDQUNsQ0Usd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUNsQ0MsZ0NBQWdDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRWhELFdBQWVFLElBQUFBLGdCQUFXLHlDQUFDO2FBQU1DLHFCQUNuQkMsTUFBTSxFQUFFQyxTQUFTO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQU1DLDZCQUE2QixJQUFJLENBQUNKLFNBQVM7Z0JBRWpERyxRQUFRRSxLQUFLLENBQUMsQUFBQyxnQkFBMEMsT0FBM0JELDRCQUEyQjtnQkFFekQsUUFBUTtZQUNWOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsMkJBQTJCZCw4QkFBOEJZO2dCQUUvRCxJQUFJRSw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTUMsT0FBT0MsaUNBQWlDRiwyQkFDeENWLFlBQVlhLDZDQUE2Q0YsTUFBTUQsMkJBQy9EWCxTQUFTZSxvQkFBb0JkO29CQUVuQ1MsdUJBQXVCLElBQUlYLHFCQUFxQkMsUUFBUUM7Z0JBQzFEO2dCQUVBLE9BQU9TO1lBQ1Q7Ozs7S0FoQkEsd0NBQU9NLFFBQU87QUFtQmhCLFNBQVNELG9CQUFvQmQsU0FBUztJQUNwQyxJQUFNZ0Isa0JBQWtCaEIsVUFBVWlCLE1BQU0sQ0FBQyxTQUFDRCxpQkFBaUJFO1FBQ25ELElBQU1DLGlCQUFpQkQsU0FBU2pCLFNBQVM7UUFFekNlLGtCQUFrQixBQUFDQSxvQkFBb0IsT0FDbkJHLGlCQUNFLEFBQUMsR0FBc0JBLE9BQXBCSCxpQkFBZ0IsTUFBbUIsT0FBZkc7UUFFN0MsT0FBT0g7SUFDVCxHQUFHLE9BQ0hqQixTQUFTLEFBQUMsR0FBa0IsT0FBaEJpQixpQkFBZ0I7SUFFbEMsT0FBT2pCO0FBRVQ7QUFFQSxTQUFTYSxpQ0FBaUNGLHdCQUF3QjtJQUNoRSxJQUFNVSxtQkFBbUIxQixzQkFBc0JnQiwyQkFDekNXLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEWCxPQUFPVSx5QkFBeUIsR0FBRztJQUV6QyxPQUFPVjtBQUNUO0FBRUEsU0FBU0UsNkNBQTZDRixJQUFJLEVBQUVELHdCQUF3QjtJQUNsRixJQUFNYSxnQkFBZ0JoQyxtQkFBbUJtQiwyQkFDbkNjLGtCQUFrQi9CLHFCQUFxQmlCLDJCQUN2Q1YsWUFBWXVCLGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztRQUM3QixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLGlCQUFpQkMsSUFBQUEscUJBQWUsRUFBQ04saUJBQWlCRSxjQUFjaEIsMkJBQ2hFUSxXQUFXUyxTQUFTSSxxQ0FBcUMsQ0FBQ3BCLE1BQU1lLGNBQWNHO1FBRXBGLE9BQU9YO0lBQ1Q7SUFFTixPQUFPbEI7QUFDVCJ9