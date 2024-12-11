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
                var string;
                string = "".concat(this.type, " ").concat(this.name);
                if (this.assignment !== null) {
                    var assignmentString = this.assignment.getString();
                    string = "".concat(string).concat(assignmentString);
                }
                return string;
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
                    var variableNode = valueVariableNode, type = null, name = nameFromVariableNode(variableNode), assigment = null;
                    variable = new Variable(type, name, assigment);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc3NpZ25tZW50ID0gYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgc3RyaW5nID0gYCR7dGhpcy50eXBlfSAke3RoaXMubmFtZX1gO1xuXG4gICAgaWYgKHRoaXMuYXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudFN0cmluZyA9IHRoaXMuYXNzaWdubWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7YXNzaWdubWVudFN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSkge1xuICAgIGNvbnN0IHR5cGVNYXRjaGVzID0gKHRoaXMudHlwZSA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZU1hdGNoZXM7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tO1xuXG4gICAgdGhpcy5hc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlVmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YWx1ZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXNzaWdtZW50ID0gbnVsbDtcblxuICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSA9IGZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkoZm9yRWFjaExvb3BMb29wTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGFzc2lnbm1lbnROb2RlKSB7XG4gICAgY29uc3QgeyBBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJ0eXBlIiwibmFtZSIsImFzc2lnbm1lbnQiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFzc2lnbm1lbnQiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJhc3NpZ25tZW50U3RyaW5nIiwibWF0Y2hUeXBlIiwidHlwZU1hdGNoZXMiLCJzZXRWYWx1ZSIsInZhbHVlIiwiQXNzaWdubWVudCIsImRvbSIsImZyb21WYWx1ZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJjb250ZXh0IiwidmFyaWFibGUiLCJ2YWx1ZVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwiYXNzaWdtZW50IiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wTG9vcE5vZGUiLCJmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVR5cGVWYXJpYWJsZU5vZGVBbmRBc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlIiwidmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENHLCtCQUErQkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDekNJLGdDQUFnQ0osSUFBQUEsZ0JBQVMsRUFBQztJQUVoRCxXQUFlSyxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBREhIO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFB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