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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type"), valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name"), parameterVariableNameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/variable/@name");
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
                var type = typeFromParameterNode(parameterNode), name = nameFromParameterNode(parameterNode), assigment = null, variable = new Variable(type, name, assigment);
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
function nameFromParameterNode(parameterNode) {
    var parameterVariableNameTerminalNode = parameterVariableNameTerminalNodeQuery(parameterNode), parameterVariableNameTerminalNodeContent = parameterVariableNameTerminalNode.getContent(), name = parameterVariableNameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AdHlwZVwiKSxcbiAgICAgIHZhbHVlVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZS9AbmFtZVwiKSxcbiAgICAgIHBhcmFtZXRlclZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci92YXJpYWJsZS9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy50eXBlfSAke3RoaXMubmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbWVudCA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpIHtcbiAgY29uc3QgcGFyYW1ldGVyVmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gcGFyYW1ldGVyVmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHBhcmFtZXRlclZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXJhbWV0ZXJWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyVmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlKSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicGFyYW1ldGVyVmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJhc3NpZ25tZW50IiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsImNvbnRleHQiLCJ2YXJpYWJsZSIsInZhbHVlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJhc3NpZ21lbnQiLCJmcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJBc3NpZ25tZW50IiwiZG9tIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJwYXJhbWV0ZXJWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJwYXJhbWV0ZXJWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwidHlw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