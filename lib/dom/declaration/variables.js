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
            key: "evaluate",
            value: function evaluate(context) {
                var variablesDeclarationString = this.string; ///
                context.trace("Evaluating the '".concat(variablesDeclarationString, "' variables declaration..."));
                this.variables.forEach(function(variable) {
                    context.addVariable(variable);
                    variable.assign(context);
                });
                context.debug("...evaluated the '".concat(variablesDeclarationString, "' variables declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZXMgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlcyBkZWNsYXJhdGlvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZXNEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlID0gdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgIC8vLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh0eXBlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZXNEZWNsYXJhdGlvbihzdHJpbmcsIHZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodHlwZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgYXNzaWdubWVudE5vZGVzID0gYXNzaWdubWVudE5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50Tm9kZSA9IGZpbmRTaWJsaW5nTm9kZShhc3NpZ25tZW50Tm9kZXMsIHZhcmlhYmxlTm9kZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFzc2lnbm1lbnROb2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RyaW5nIiwidmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImZvckVhY2giLCJ2YXJpYWJsZSIsImFkZFZhcmlhYmxlIiwiYXNzaWduIiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInR5cGUiLCJ0eXBlRnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlc0Zyb21UeXBlQW5kVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwibmFtZSIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YXJpYWJsZU5vZGVzIiwiYXNzaWdubWVudE5vZGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJhc3NpZ25tZW50Tm9kZSIsImZpbmRTaWJs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