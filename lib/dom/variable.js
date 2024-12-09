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
var _types = require("../types");
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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type"), valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), parameterVariableNodeQuery = (0, _query.nodeQuery)("/parameter/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), forEachLoopVariableNodeQuery = (0, _query.nodeQuery)("/forEachLoop/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(type, name, assignment) {
        _class_call_check(this, Variable);
        this.type = type;
        this.name = name;
        this.assignment = assignment;
    }
    _create_class(Variable, [
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
            key: "getAssignment",
            value: function getAssignment() {
                return this.assignment;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = "".concat(this.type, " ").concat(this.name);
                return string;
            }
        },
        {
            key: "isTypeNodeType",
            value: function isTypeNodeType() {
                var typeNodeType = this.type === _types.NODE_TYPE;
                return typeNodeType;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var variable = null;
                var valueVariableNode = valueVariableNodeQuery(valueNode);
                if (valueVariableNode !== null) {
                    var variableNode = valueVariableNode, type = null, name = nameFromVariableNode(variableNode), assigment = null;
                    variable = new Variable(type, name, assigment);
                }
                return variable;
            }
        },
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameterVariableNode = parameterVariableNodeQuery(parameterNode), variableNode = parameterVariableNode, type = typeFromParameterNode(parameterNode), name = nameFromVariableNode(variableNode), assigment = null, variable = new Variable(type, name, assigment);
                return variable;
            }
        },
        {
            key: "fromNodeQueryNode",
            value: function fromNodeQueryNode(nodeQueryNode, context) {
                var nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode), variableNode = nodeQueryVariableNode, type = null, name = nameFromVariableNode(variableNode), assigment = null, variable = new Variable(type, name, assigment);
                return variable;
            }
        },
        {
            key: "fromNodesQueryNode",
            value: function fromNodesQueryNode(nodesQueryNode, context) {
                var nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode), variableNode = nodesQueryVariableNode, type = null, name = nameFromVariableNode(variableNode), assigment = null, variable = new Variable(type, name, assigment);
                return variable;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopLoopNode, context) {
                var forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode), variableNode = forEachLoopVariableNode, type = null, name = nameFromVariableNode(variableNode), assigment = null, variable = new Variable(type, name, assigment);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var name = nameFromVariableNode(variableNode), assigment = null, variable = new Variable(type, name, assigment);
                return variable;
            }
        },
        {
            key: "fromTypeVariableNodeAndAssignmentNode",
            value: function fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode) {
                var Assignment = _dom.default.Assignment, name = nameFromVariableNode(variableNode), assignment = Assignment.fromAssignmentNode(assignmentNode), variable = new Variable(type, name, assignment);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcGFyYW1ldGVyL0B0eXBlXCIpLFxuICAgICAgdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS92YXJpYWJsZVwiKSxcbiAgICAgIHBhcmFtZXRlclZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc3NpZ25tZW50ID0gYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLnR5cGV9ICR7dGhpcy5uYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaXNUeXBlTm9kZVR5cGUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGVUeXBlID0gKHRoaXMudHlwZSA9PT0gTk9ERV9UWVBFKTtcblxuICAgIHJldHVybiB0eXBlTm9kZVR5cGU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFyaWFibGVOb2RlID0gcGFyYW1ldGVyVmFyaWFibGVOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gcGFyYW1ldGVyVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvckVhY2hMb29wVmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeShmb3JFYWNoTG9vcExvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgYXNzaWdubWVudE5vZGUpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlKSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsInBhcmFtZXRlclZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJhc3NpZ25tZW50IiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiaXNUeXBlTm9kZVR5cGUiLCJ0eXBlTm9kZVR5cGUiLCJOT0RFX1RZUEUiLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlIiwidmFsdWVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsImFzc2lnbWVudCIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlclZhcmlhYmxlTm9kZSIsInR5cGVGcm9tUGFyYW1ldGVyTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnQiLCJkb20iLCJmcm9tQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0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