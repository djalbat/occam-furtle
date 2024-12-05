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
                var variablesString = variablesStringFromVariables(this.variables), string = variablesString; ///
                return string;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVzKSB7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlc1N0cmluZyA9IHZhcmlhYmxlc1N0cmluZ0Zyb21WYXJpYWJsZXModGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlc1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlc0RlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUgPSB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UeXBlQW5kVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHR5cGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlc0RlY2xhcmF0aW9uKHZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVzU3RyaW5nRnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgY29uc3QgdmFyaWFibGVzU3RyaW5nID0gdmFyaWFibGVzLnJlZHVjZSgodmFyaWFibGVzU3RyaW5nLCB2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB2YXJpYWJsZXNTdHJpbmcgPSAodmFyaWFibGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFyaWFibGVzU3RyaW5nfSwgJHt2YXJpYWJsZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlc1N0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodHlwZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgYXNzaWdubWVudE5vZGVzID0gYXNzaWdubWVudE5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50Tm9kZSA9IGZpbmRTaWJsaW5nTm9kZShhc3NpZ25tZW50Tm9kZXMsIHZhcmlhYmxlTm9kZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFzc2lnbm1lbnROb2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlc0RlY2xhcmF0aW9uIiwidmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVzU3RyaW5nIiwidmFyaWFibGVzU3RyaW5nRnJvbVZhcmlhYmxlcyIsInN0cmluZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwicmVkdWNlIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YXJpYWJsZU5vZGVzIiwiYXNzaWdubWVudE5vZGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJhc3NpZ25tZW50Tm9kZSIsImZpbmRTaWJsaW5nTm9kZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtxQkFHc0I7b0JBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsbUNBQ2hDQyx1QkFBdUJELElBQUFBLGlCQUFVLEVBQUMscUNBQ2xDRSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQ2xDQyxnQ0FBZ0NELElBQUFBLGdCQUFTLEVBQUM7SUFFaEQsV0FBZUUsSUFBQUEsZ0JBQVcseUNBQUM7YUFBTUMscUJBQ25CQyxTQUFTO2dDQURVRDtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLDZCQUE2QixJQUFJLENBQUNKLFNBQVMsR0FDN0RLLFNBQVNGLGlCQUFpQixHQUFHO2dCQUVuQyxPQUFPRTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQywyQkFBMkJiLDhCQUE4QlU7Z0JBRS9ELElBQUlHLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNQyxPQUFPQyxpQ0FBaUNGLDJCQUN4Q1YsWUFBWWEsNkNBQTZDRixNQUFNRDtvQkFFckVELHVCQUF1QixJQUFJVixxQkFBcUJDO2dCQUNsRDtnQkFFQSxPQUFPUztZQUNUOzs7O0tBZkEsd0NBQU9LLFFBQU87QUFrQmhCLFNBQVNWLDZCQUE2QkosU0FBUztJQUM3QyxJQUFNRyxrQkFBa0JILFVBQVVlLE1BQU0sQ0FBQyxTQUFDWixpQkFBaUJhO1FBQ3pELElBQU1DLGlCQUFpQkQsU0FBU2QsU0FBUztRQUV6Q0Msa0JBQWtCLEFBQUNBLG9CQUFvQixPQUNuQmMsaUJBQ0UsQUFBQyxHQUFzQkEsT0FBcEJkLGlCQUFnQixNQUFtQixPQUFmYztRQUU3QyxPQUFPZDtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUO0FBRUEsU0FBU1MsaUNBQWlDRix3QkFBd0I7SUFDaEUsSUFBTVEsbUJBQW1CdkIsc0JBQXNCZSwyQkFDekNTLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEVCxPQUFPUSx5QkFBeUIsR0FBRztJQUV6QyxPQUFPUjtBQUNUO0FBRUEsU0FBU0UsNkNBQTZDRixJQUFJLEVBQUVELHdCQUF3QjtJQUNsRixJQUFNVyxnQkFBZ0I3QixtQkFBbUJrQiwyQkFDbkNZLGtCQUFrQjVCLHFCQUFxQmdCLDJCQUN2Q1YsWUFBWXFCLGNBQWNFLEdBQUcsQ0FBQyxTQUFDQztRQUM3QixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLGlCQUFpQkMsSUFBQUEscUJBQWUsRUFBQ04saUJBQWlCRSxjQUFjZCwyQkFDaEVNLFdBQVdTLFNBQVNJLHFDQUFxQyxDQUFDbEIsTUFBTWEsY0FBY0c7UUFFcEYsT0FBT1g7SUFDVDtJQUVOLE9BQU9oQjtBQUNUIn0=