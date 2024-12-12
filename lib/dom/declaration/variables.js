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
                var variablesDeclarationString = this.string; ///
                context.trace("Calling the '".concat(variablesDeclarationString, "' variables declaration..."));
                this.variables.forEach(function(variable) {
                    variable.assign(context);
                    context.addVariable(variable);
                });
                context.debug("...called the '".concat(variablesDeclarationString, "' variables declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgY2FsbChjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHt2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlcyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3ZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGVzIGRlY2xhcmF0aW9uLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlc0RlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUgPSB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCAgLy8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UeXBlQW5kVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHR5cGUsIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlc0RlY2xhcmF0aW9uKHN0cmluZywgdmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiB2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh0eXBlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBhc3NpZ25tZW50Tm9kZXMgPSBhc3NpZ25tZW50Tm9kZXNRdWVyeSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnROb2RlID0gZmluZFNpYmxpbmdOb2RlKGFzc2lnbm1lbnROb2RlcywgdmFyaWFibGVOb2RlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXNzaWdubWVudE5vZGVzUXVlcnkiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdHJpbmciLCJ2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZXMiLCJjYWxsIiwiY29udGV4dCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJmb3JFYWNoIiwidmFyaWFibGUiLCJhc3NpZ24iLCJhZGRWYXJpYWJsZSIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0eXBlIiwidHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSIsIm5hbWUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFyaWFibGVOb2RlcyIsImFzc2lnbm1lbnROb2RlcyIsIm1hcCIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiYXNzaWdubWVudE5vZGUiLCJmaW5kU2libGluZ05vZGUiLCJmcm9t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