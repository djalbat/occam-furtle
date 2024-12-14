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
            key: "resolve",
            value: function resolve(context) {
                var variablesDeclarationString = this.string; ///
                context.trace("Resolving the '".concat(variablesDeclarationString, "' variables declaration..."));
                this.variables.forEach(function(variable) {
                    context.addVariable(variable);
                    variable.assign(context);
                });
                context.debug("...resolved the '".concat(variablesDeclarationString, "' variables declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQge2ZpbmRTaWJsaW5nTm9kZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vdmFyaWFibGVcIiksXG4gICAgICBhc3NpZ25tZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFyaWFibGVzRGVjbGFyYXRpb24vYXNzaWdubWVudFwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZXNEZWNsYXJhdGlvbi9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzRGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlc0RlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3ZhcmlhYmxlc0RlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGVzIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlLmFzc2lnbihjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHt2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlcyBkZWNsYXJhdGlvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZXNEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlID0gdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgIC8vLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVHlwZUFuZFZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh0eXBlLCB2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZXNEZWNsYXJhdGlvbihzdHJpbmcsIHZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodHlwZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgYXNzaWdubWVudE5vZGVzID0gYXNzaWdubWVudE5vZGVzUXVlcnkodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50Tm9kZSA9IGZpbmRTaWJsaW5nTm9kZShhc3NpZ25tZW50Tm9kZXMsIHZhcmlhYmxlTm9kZSwgdmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFzc2lnbm1lbnROb2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RyaW5nIiwidmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiZm9yRWFjaCIsInZhcmlhYmxlIiwiYWRkVmFyaWFibGUiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVzRnJvbVR5cGVBbmRWYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJuYW1lIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInZhcmlhYmxlTm9kZXMiLCJhc3NpZ25tZW50Tm9kZXMiLCJtYXAiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsImRvbSIsImFzc2lnbm1lbnROb2RlIiwiZmluZFNpYmxpbmdO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