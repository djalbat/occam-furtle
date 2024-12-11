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
            value: function fromValueNode(valueNode) {
                var variable = null;
                var valueVariableNode = valueVariableNodeQuery(valueNode);
                if (valueVariableNode !== null) {
                    var variableNode = valueVariableNode, type = null, name = nameFromVariableNode(variableNode), assignment = null, string = stringFromTypeNameAndAssigment(type, name, assignment);
                    variable = new Variable(string, type, name, assignment);
                }
                return variable;
            }
        },
        {
            key: "fromNodeQueryNode",
            value: function fromNodeQueryNode(nodeQueryNode) {
                var nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode), variableNode = nodeQueryVariableNode, type = null, name = nameFromVariableNode(variableNode), assignment = null, string = stringFromTypeNameAndAssigment(type, name, assignment), variable = new Variable(string, type, name, assignment);
                return variable;
            }
        },
        {
            key: "fromNodesQueryNode",
            value: function fromNodesQueryNode(nodesQueryNode) {
                var nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode), variableNode = nodesQueryVariableNode, type = null, name = nameFromVariableNode(variableNode), assignment = null, string = stringFromTypeNameAndAssigment(type, name, assignment), variable = new Variable(string, type, name, assignment);
                return variable;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopLoopNode) {
                var forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode), variableNode = forEachLoopVariableNode, type = null, name = nameFromVariableNode(variableNode), assignment = null, string = stringFromTypeNameAndAssigment(type, name, assignment), variable = new Variable(string, type, name, assignment);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var name = nameFromVariableNode(variableNode), assignment = null, string = stringFromTypeNameAndAssigment(type, name, assignment), variable = new Variable(string, type, name, assignment);
                return variable;
            }
        },
        {
            key: "fromTypeVariableNodeAndAssignmentNode",
            value: function fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode) {
                var Assignment = _dom.default.Assignment, name = nameFromVariableNode(variableNode), assignment = Assignment.fromAssignmentNode(assignmentNode), string = stringFromTypeNameAndAssigment(type, name, assignment), variable = new Variable(string, type, name, assignment);
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
function stringFromTypeNameAndAssigment(type, name, assignment) {
    var string;
    string = "".concat(type, " ").concat(name);
    if (assignment !== null) {
        var assignmentString = assignment.getString();
        string = "".concat(string).concat(assignmentString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZVF1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL3ZhcmlhYmxlXCIpLFxuICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQG5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXNzaWdubWVudCA9IGFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50O1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9ICh0aGlzLnR5cGUgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVNYXRjaGVzO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbTtcblxuICAgIHRoaXMuYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNzaWdtZW50KHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc3NpZ21lbnQodHlwZSwgbmFtZSwgYXNzaWdubWVudCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc3NpZ21lbnQodHlwZSwgbmFtZSwgYXNzaWdubWVudCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBhc3NpZ25tZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTG9vcE5vZGUpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZSA9IGZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkoZm9yRWFjaExvb3BMb29wTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzc2lnbWVudCh0eXBlLCBuYW1lLCBhc3NpZ25tZW50KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzc2lnbWVudCh0eXBlLCBuYW1lLCBhc3NpZ25tZW50KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNzaWdtZW50KHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNzaWdtZW50KHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHt0eXBlfSAke25hbWV9YDtcblxuICBpZiAoYXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFzc2lnbm1lbnRTdHJpbmcgPSBhc3NpZ25tZW50LmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7YXNzaWdubWVudFN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbInZhbHVlVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzc2lnbm1lbnQiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFzc2lnbm1lbnQiLCJtYXRjaFR5cGUiLCJ0eXBlTWF0Y2hlcyIsInNldFZhbHVlIiwidmFsdWUiLCJBc3NpZ25tZW50IiwiZG9tIiwiZnJvbVZhbHVlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhcmlhYmxlIiwidmFsdWVWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzc2lnbWVudCIsImZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcExvb3BOb2RlIiwiZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSIsInZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXNzaWdubWVudFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCO3FCQUVVO3FCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0UsOEJBQThCRixJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0csK0JBQStCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUN6Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDO0lBRWhELFdBQWVLLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURYSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxJQUFJO2dCQUNaLElBQU1RLGNBQWUsSUFBSSxDQUFDUixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPUTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLEtBQUs7Z0JBQ1osSUFBTSxBQUFFQyxhQUFlQyxZQUFHLENBQWxCRDtnQkFFUixJQUFJLENBQUNULFVBQVUsR0FBR1MsV0FBV0UsU0FBUyxDQUFDSDtZQUN6Qzs7OztZQUlPSSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUM1QixJQUFJQyxXQUFXO2dCQUVmLElBQU1DLG9CQUFvQjFCLHVCQUF1QndCO2dCQUVqRCxJQUFJRSxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBTUMsZUFBZUQsbUJBQ2ZqQixPQUFPLE1BQ1BDLE9BQU9rQixxQkFBcUJELGVBQzVCaEIsYUFBYSxNQUNiSCxTQUFTcUIsK0JBQStCcEIsTUFBTUMsTUFBTUM7b0JBRTFEYyxXQUFXLElBQUlsQixTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFDOUM7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYTtnQkFDcEMsSUFBTUMsd0JBQXdCOUIsMkJBQTJCNkIsZ0JBQ25ESixlQUFlSyx1QkFDZnZCLE9BQU8sTUFDUEMsT0FBT2tCLHFCQUFxQkQsZUFDNUJoQixhQUFhLE1BQ2JILFNBQVNxQiwrQkFBK0JwQixNQUFNQyxNQUFNQyxhQUNwRGMsV0FBVyxJQUFJbEIsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRWxELE9BQU9jO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1DLHlCQUF5QmhDLDRCQUE0QitCLGlCQUNyRFAsZUFBZVEsd0JBQ2YxQixPQUFPLE1BQ1BDLE9BQU9rQixxQkFBcUJELGVBQzVCaEIsYUFBYSxNQUNiSCxTQUFTcUIsK0JBQStCcEIsTUFBTUMsTUFBTUMsYUFDcERjLFdBQVcsSUFBSWxCLFNBQVNDLFFBQVFDLE1BQU1DLE1BQU1DO2dCQUVsRCxPQUFPYztZQUNUOzs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxtQkFBbUI7Z0JBQzVDLElBQU1DLDBCQUEwQmxDLDZCQUE2QmlDLHNCQUN2RFYsZUFBZVcseUJBQ2Y3QixPQUFPLE1BQ1BDLE9BQU9rQixxQkFBcUJELGVBQzVCaEIsYUFBYSxNQUNiSCxTQUFTcUIsK0JBQStCcEIsTUFBTUMsTUFBTUMsYUFDcERjLFdBQVcsSUFBSWxCLFNBQVNDLFFBQVFDLE1BQU1DLE1BQU1DO2dCQUVsRCxPQUFPYztZQUNUOzs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCWixZQUFZLEVBQUVsQixJQUFJO2dCQUMvQyxJQUFNQyxPQUFPa0IscUJBQXFCRCxlQUM1QmhCLGFBQWEsTUFDYkgsU0FBU3FCLCtCQUErQnBCLE1BQU1DLE1BQU1DLGFBQ3BEYyxXQUFXLElBQUlsQixTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFFbEQsT0FBT2M7WUFDVDs7O1lBRU9lLEtBQUFBO21CQUFQLFNBQU9BLHNDQUFzQy9CLElBQUksRUFBRWtCLFlBQVksRUFBRWMsY0FBYztnQkFDN0UsSUFBTSxBQUFFckIsYUFBZUMsWUFBRyxDQUFsQkQsWUFDRlYsT0FBT2tCLHFCQUFxQkQsZUFDNUJoQixhQUFhUyxXQUFXc0Isa0JBQWtCLENBQUNELGlCQUMzQ2pDLFNBQVNxQiwrQkFBK0JwQixNQUFNQyxNQUFNQyxhQUNwRGMsV0FBVyxJQUFJbEIsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRWxELE9BQU9jO1lBQ1Q7Ozs7S0F6RUEsNEJBQU9mLFFBQU87QUE0RWhCLFNBQVNrQixxQkFBcUJELFlBQVk7SUFDeEMsSUFBTWdCLDJCQUEyQnRDLDhCQUE4QnNCLGVBQ3pEaUIsa0NBQWtDRCx5QkFBeUJFLFVBQVUsSUFDckVuQyxPQUFPa0MsaUNBQWlDLEdBQUc7SUFFakQsT0FBT2xDO0FBQ1Q7QUFFQSxTQUFTbUIsK0JBQStCcEIsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7SUFDNUQsSUFBSUg7SUFFSkEsU0FBUyxBQUFDLEdBQVVFLE9BQVJELE1BQUssS0FBUSxPQUFMQztJQUVwQixJQUFJQyxlQUFlLE1BQU07UUFDdkIsSUFBTW1DLG1CQUFtQm5DLFdBQVdDLFNBQVM7UUFFN0NKLFNBQVMsQUFBQyxHQUFXc0MsT0FBVHRDLFFBQTBCLE9BQWpCc0M7SUFDdkI7SUFFQSxPQUFPdEM7QUFDVCJ9