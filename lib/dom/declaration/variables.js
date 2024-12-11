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
            value: function fromStepNode(stepNode, context) {
                var variablesDeclaration = null;
                var variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);
                if (variablesDeclarationNode !== null) {
                    var node = variablesDeclarationNode, string = context.nodeAsString(node), type = typeFromVariablesDeclarationNode(variablesDeclarationNode, context), variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode, context);
                    variablesDeclaration = new VariablesDeclaration(string, variables);
                }
                return variablesDeclaration;
            }
        }
    ]);
    return VariablesDeclaration;
}(), _define_property(_VariablesDeclaration, "name", "VariablesDeclaration"), _VariablesDeclaration));
function typeFromVariablesDeclarationNode(variablesDeclarationNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(variablesDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode, context) {
    var variableNodes = variableNodesQuery(variablesDeclarationNode), assignmentNodes = assignmentNodesQuery(variablesDeclarationNode), variables = variableNodes.map(function(variableNode) {
        var Variable = _dom.default.Variable, assignmentNode = (0, _node.findSiblingNode)(assignmentNodes, variableNode, variablesDeclarationNode), variable = Variable.fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context);
        return variable;
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgY2FsbChjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7dmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZXMgZGVjbGFyYXRpb25gKTtcblxuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVzRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsICAvLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodHlwZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVzRGVjbGFyYXRpb24oc3RyaW5nLCB2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UeXBlQW5kVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHR5cGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIGFzc2lnbm1lbnROb2RlcyA9IGFzc2lnbm1lbnROb2Rlc1F1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudE5vZGUgPSBmaW5kU2libGluZ05vZGUoYXNzaWdubWVudE5vZGVzLCB2YXJpYWJsZU5vZGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgYXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhc3NpZ25tZW50Tm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0cmluZyIsInZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlcyIsImNhbGwiLCJjb250ZXh0IiwidmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInZhcmlhYmxlTm9kZXMiLCJhc3NpZ25tZW50Tm9kZXMiLCJtYXAiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImRvbSIsImFzc2lnbm1lbnROb2RlIiwiZmluZFNpYmxpbmdOb2RlIiwidmFyaWFibGUiLCJmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBR3NCO29CQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLG1DQUNoQ0MsdUJBQXVCRCxJQUFBQSxpQkFBVSxFQUFDLHFDQUNsQ0Usd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUNsQ0MsZ0NBQWdDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRWhELFdBQWVFLElBQUFBLGdCQUFXLHlDQUFDO2FBQU1DLHFCQUNuQkMsTUFBTSxFQUFFQyxTQUFTO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQU1DLDZCQUE2QixJQUFJLENBQUNKLFNBQVM7Z0JBRWpERyxRQUFRRSxLQUFLLENBQUMsQUFBQyxnQkFBMEMsT0FBM0JELDRCQUEyQjtnQkFFekQsUUFBUTtZQUNWOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUosT0FBTztnQkFDbkMsSUFBSUssdUJBQXVCO2dCQUUzQixJQUFNQywyQkFBMkJkLDhCQUE4Qlk7Z0JBRS9ELElBQUlFLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNQyxPQUFPRCwwQkFDUFgsU0FBU0ssUUFBUVEsWUFBWSxDQUFDRCxPQUM5QkUsT0FBT0MsaUNBQWlDSiwwQkFBMEJOLFVBQ2xFSixZQUFZZSw2Q0FBNkNGLE1BQU1ILDBCQUEwQk47b0JBRS9GSyx1QkFBdUIsSUFBSVgscUJBQXFCQyxRQUFRQztnQkFDMUQ7Z0JBRUEsT0FBT1M7WUFDVDs7OztLQWpCQSx3Q0FBT08sUUFBTztBQW9CaEIsU0FBU0YsaUNBQWlDSix3QkFBd0IsRUFBRU4sT0FBTztJQUN6RSxJQUFNYSxtQkFBbUJ2QixzQkFBc0JnQiwyQkFDekNRLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JETixPQUFPSyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPTDtBQUNUO0FBRUEsU0FBU0UsNkNBQTZDRixJQUFJLEVBQUVILHdCQUF3QixFQUFFTixPQUFPO0lBQzNGLElBQU1nQixnQkFBZ0I3QixtQkFBbUJtQiwyQkFDbkNXLGtCQUFrQjVCLHFCQUFxQmlCLDJCQUN2Q1YsWUFBWW9CLGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztRQUM3QixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLGlCQUFpQkMsSUFBQUEscUJBQWUsRUFBQ04saUJBQWlCRSxjQUFjYiwyQkFDaEVrQixXQUFXSixTQUFTSyxxQ0FBcUMsQ0FBQ2hCLE1BQU1VLGNBQWNHLGdCQUFnQnRCO1FBRXBHLE9BQU93QjtJQUNUO0lBRU4sT0FBTzVCO0FBQ1QifQ==