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
var valueVariableNodeQuery = (0, _query.nodeQuery)("/value/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), forEachLoopVariableNodeQuery = (0, _query.nodeQuery)("/forEachLoop/variable"), variableNameTerminalNodeQuery = (0, _query.nodeQuery)("/variable/@name");
var _default = (0, _dom.domAssigned)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, assignment) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.assignment = assignment;
    }
    _create_class(Variable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
            key: "matchType",
            value: function matchType(type) {
                var typeMatches = this.type === type;
                return typeMatches;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                var Assignment = _dom.default.Assignment;
                this.assignment = Assignment.fromValue(value);
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var variable = null;
                var valueVariableNode = valueVariableNodeQuery(valueNode);
                if (valueVariableNode !== null) {
                    var variableNode = valueVariableNode; ///
                    variable = variableFromVariableNode(variableNode, context);
                }
                return variable;
            }
        },
        {
            key: "fromNodeQueryNode",
            value: function fromNodeQueryNode(nodeQueryNode, context) {
                var nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode), variableNode = nodeQueryVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromNodesQueryNode",
            value: function fromNodesQueryNode(nodesQueryNode, context) {
                var nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode), variableNode = nodesQueryVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopLoopNode, context) {
                var forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode), variableNode = forEachLoopVariableNode, variable = variableFromVariableNode(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, context) {
                var node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), assignment = null, variable = new Variable(string, type, name, assignment);
                return variable;
            }
        },
        {
            key: "fromTypeVariableNodeAndAssignmentNode",
            value: function fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context) {
                var Assignment = _dom.default.Assignment, node = variableNode, string = context.nodeAsString(node), name = nameFromVariableNode(variableNode), assignment = Assignment.fromAssignmentNode(assignmentNode, context), variable = new Variable(string, type, name, assignment);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));
function variableFromVariableNode(variableNode, context) {
    var Variable = _dom.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode), assignment = null, variable = new Variable(string, type, name, assignment);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode), variableNameTerminalNodeContent = variableNameTerminalNode.getContent(), name = variableNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgYXNzaWdubWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBhc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudDtcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZU1hdGNoZXMgPSAodGhpcy50eXBlID09PSB0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb207XG5cbiAgICB0aGlzLmFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVWYXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BMb29wTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZvckVhY2hMb29wVmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeShmb3JFYWNoTG9vcExvb3BOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgYXNzaWdubWVudCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgYXNzaWdubWVudCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJhc3NpZ25tZW50IiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBc3NpZ25tZW50IiwibWF0Y2hUeXBlIiwidHlwZU1hdGNoZXMiLCJzZXRWYWx1ZSIsInZhbHVlIiwiQXNzaWdubWVudCIsImRvbSIsImZyb21WYWx1ZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUMsb0JBQ25DQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMsd0JBQ3ZDRSw4QkFBOEJGLElBQUFBLGdCQUFTLEVBQUMseUJBQ3hDRywrQkFBK0JILElBQUFBLGdCQUFTLEVBQUMsMEJBQ3pDSSxnQ0FBZ0NKLElBQUFBLGdCQUFTLEVBQUM7SUFFaEQsV0FBZUssSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRFhKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJB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