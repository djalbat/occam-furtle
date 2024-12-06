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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AdHlwZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICBwYXJhbWV0ZXJWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wYXJhbWV0ZXIvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZXNRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIGZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZm9yRWFjaExvb3AvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy50eXBlfSAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbWVudCA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJWYXJpYWJsZU5vZGUgPSBwYXJhbWV0ZXJWYXJpYWJsZU5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBwYXJhbWV0ZXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUXVlcnlWYXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5KGZvckVhY2hMb29wTG9vcE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGZvckVhY2hMb29wVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5IiwicGFyYW1ldGVyVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJ0eXBlIiwibmFtZSIsImFzc2lnbm1lbnQiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFzc2lnbm1lbnQiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlIiwidmFsdWVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsImFzc2lnbWVudCIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlclZhcmlhYmxlTm9kZSIsInR5cGVGcm9tUGFyYW1ldGVyTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsIkFzc2lnbm1lbnQiLCJkb20iLCJmcm9tQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsd0JBQXdC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