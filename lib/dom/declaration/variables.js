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
    function VariablesDeclaration(variables) {
        _class_call_check(this, VariablesDeclaration);
        this.variables = variables;
    }
    _create_class(VariablesDeclaration, [
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var variablesString = variablesStringFromVariables(this.variables), string = "".concat(variablesString, ";");
                return string;
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
                    var type = typeFromVariablesDeclarationNode(variablesDeclarationNode), variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode);
                    variablesDeclaration = new VariablesDeclaration(variables);
                }
                return variablesDeclaration;
            }
        }
    ]);
    return VariablesDeclaration;
}(), _define_property(_VariablesDeclaration, "name", "VariablesDeclaration"), _VariablesDeclaration));
function variablesStringFromVariables(variables) {
    var variablesString = variables.reduce(function(variablesString, variable) {
        var variableString = variable.getString();
        variablesString = variablesString === null ? variableString : "".concat(variablesString, ", ").concat(variableString);
        return variablesString;
    }, null);
    return variablesString;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVzKSB7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlc1N0cmluZyA9IHZhcmlhYmxlc1N0cmluZ0Zyb21WYXJpYWJsZXModGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3ZhcmlhYmxlc1N0cmluZ307YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjYWxsKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHt2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlcyBkZWNsYXJhdGlvbmApO1xuXG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZXNEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlID0gdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh0eXBlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZXNEZWNsYXJhdGlvbih2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlc1N0cmluZ0Zyb21WYXJpYWJsZXModmFyaWFibGVzKSB7XG4gIGNvbnN0IHZhcmlhYmxlc1N0cmluZyA9IHZhcmlhYmxlcy5yZWR1Y2UoKHZhcmlhYmxlc1N0cmluZywgdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdmFyaWFibGVzU3RyaW5nID0gKHZhcmlhYmxlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVTdHJpbmcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhcmlhYmxlc1N0cmluZ30sICR7dmFyaWFibGVTdHJpbmd9YDtcblxuICAgIHJldHVybiB2YXJpYWJsZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiB2YXJpYWJsZXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UeXBlQW5kVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHR5cGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSkge1xuICBjb25zdCB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIGFzc2lnbm1lbnROb2RlcyA9IGFzc2lnbm1lbnROb2Rlc1F1ZXJ5KHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudE5vZGUgPSBmaW5kU2libGluZ05vZGUoYXNzaWdubWVudE5vZGVzLCB2YXJpYWJsZU5vZGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgYXNzaWdubWVudE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhc3NpZ25tZW50Tm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZXNEZWNsYXJhdGlvbiIsInZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsImdldFN0cmluZyIsInZhcmlhYmxlc1N0cmluZyIsInZhcmlhYmxlc1N0cmluZ0Zyb21WYXJpYWJsZXMiLCJzdHJpbmciLCJjYWxsIiwiY29udGV4dCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwicmVkdWNlIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YXJpYWJsZU5vZGVzIiwiYXNzaWdubWVudE5vZGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJhc3NpZ25tZW50Tm9kZSIsImZpbmRTaWJsaW5nTm9kZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtxQkFHc0I7b0JBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsbUNBQ2hDQyx1QkFBdUJELElBQUFBLGlCQUFVLEVBQUMscUNBQ2xDRSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQ2xDQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUM7SUFFaEQsV0FBZUUsSUFBQUEsZ0JBQVcseUNBQUM7YUFBTUMscUJBQ25CQyxTQUFTO2dDQURVRDtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLDZCQUE2QixJQUFJLENBQUNKLFNBQVMsR0FDN0RLLFNBQVMsQUFBQyxHQUFrQixPQUFoQkYsaUJBQWdCO2dCQUVsQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE9BQU87Z0JBQ1YsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ04sU0FBUztnQkFFakRLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGdCQUEwQyxPQUEzQkQsNEJBQTJCO2dCQUV6RCxRQUFRO1lBQ1Y7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFSixPQUFPO2dCQUNuQyxJQUFJSyx1QkFBdUI7Z0JBRTNCLElBQU1DLDJCQUEyQmhCLDhCQUE4QmM7Z0JBRS9ELElBQUlFLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNQyxPQUFPQyxpQ0FBaUNGLDJCQUN4Q2IsWUFBWWdCLDZDQUE2Q0YsTUFBTUQ7b0JBRXJFRCx1QkFBdUIsSUFBSWIscUJBQXFCQztnQkFDbEQ7Z0JBRUEsT0FBT1k7WUFDVDs7OztLQWZBLHdDQUFPSyxRQUFPO0FBa0JoQixTQUFTYiw2QkFBNkJKLFNBQVM7SUFDN0MsSUFBTUcsa0JBQWtCSCxVQUFVa0IsTUFBTSxDQUFDLFNBQUNmLGlCQUFpQmdCO1FBQ3pELElBQU1DLGlCQUFpQkQsU0FBU2pCLFNBQVM7UUFFekNDLGtCQUFrQixBQUFDQSxvQkFBb0IsT0FDbkJpQixpQkFDRSxBQUFDLEdBQXNCQSxPQUFwQmpCLGlCQUFnQixNQUFtQixPQUFmaUI7UUFFN0MsT0FBT2pCO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1Q7QUFFQSxTQUFTWSxpQ0FBaUNGLHdCQUF3QjtJQUNoRSxJQUFNUSxtQkFBbUIxQixzQkFBc0JrQiwyQkFDekNTLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEVCxPQUFPUSx5QkFBeUIsR0FBRztJQUV6QyxPQUFPUjtBQUNUO0FBRUEsU0FBU0UsNkNBQTZDRixJQUFJLEVBQUVELHdCQUF3QjtJQUNsRixJQUFNVyxnQkFBZ0JoQyxtQkFBbUJxQiwyQkFDbkNZLGtCQUFrQi9CLHFCQUFxQm1CLDJCQUN2Q2IsWUFBWXdCLGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztRQUM3QixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLGlCQUFpQkMsSUFBQUEscUJBQWUsRUFBQ04saUJBQWlCRSxjQUFjZCwyQkFDaEVNLFdBQVdTLFNBQVNJLHFDQUFxQyxDQUFDbEIsTUFBTWEsY0FBY0c7UUFFcEYsT0FBT1g7SUFDVDtJQUVOLE9BQU9uQjtBQUNUIn0=