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
var _assignment = /*#__PURE__*/ _interop_require_default(require("./assignment"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var string;
                string = "".concat(this.type, " ").concat(this.name);
                if (this.assignment !== null) {
                    var assignmentString = this.assignment.getString();
                    string = "".concat(string, " = ").concat(assignmentString);
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
            key: "isTypeNodeType",
            value: function isTypeNodeType() {
                var type = _types.NODE_TYPE, typeMatches = this.matchType(type), typeNodeType = typeMatches;
                return typeNodeType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IGFzc2lnbm1lbnQgZnJvbSBcIi4vYXNzaWdubWVudFwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcGFyYW1ldGVyL0B0eXBlXCIpLFxuICAgICAgdmFsdWVWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS92YXJpYWJsZVwiKSxcbiAgICAgIHBhcmFtZXRlclZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mb3JFYWNoTG9vcC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGFzc2lnbm1lbnQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc3NpZ25tZW50ID0gYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgc3RyaW5nID0gYCR7dGhpcy50eXBlfSAke3RoaXMubmFtZX1gO1xuXG4gICAgaWYgKHRoaXMuYXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudFN0cmluZyA9IHRoaXMuYXNzaWdubWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSA9ICR7YXNzaWdubWVudFN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBtYXRjaFR5cGUodHlwZSkge1xuICAgIGNvbnN0IHR5cGVNYXRjaGVzID0gKHRoaXMudHlwZSA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZU1hdGNoZXM7XG4gIH1cblxuICBpc1R5cGVOb2RlVHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gTk9ERV9UWVBFLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGUodHlwZSksXG4gICAgICAgICAgdHlwZU5vZGVUeXBlID0gdHlwZU1hdGNoZXM7XG5cbiAgICByZXR1cm4gdHlwZU5vZGVUeXBlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCB7IEFzc2lnbm1lbnQgfSA9IGRvbTtcblxuICAgIHRoaXMuYXNzaWdubWVudCA9IEFzc2lnbm1lbnQuZnJvbVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVZhcmlhYmxlTm9kZSA9IHZhbHVlVmFyaWFibGVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGFzc2lnbWVudCA9IG51bGw7XG5cbiAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJWYXJpYWJsZU5vZGUgPSBwYXJhbWV0ZXJWYXJpYWJsZU5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBwYXJhbWV0ZXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlUXVlcnlWYXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdtZW50KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9yRWFjaExvb3BWYXJpYWJsZU5vZGUgPSBmb3JFYWNoTG9vcFZhcmlhYmxlTm9kZVF1ZXJ5KGZvckVhY2hMb29wTG9vcE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGZvckVhY2hMb29wVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIGFzc2lnbWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSh0eXBlLCBuYW1lLCBhc3NpZ21lbnQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlVmFyaWFibGVOb2RlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBhc3NpZ25tZW50Tm9kZSkge1xuICAgIGNvbnN0IHsgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgYXNzaWdubWVudCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gdmFyaWFibGVOYW1lVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVZhcmlhYmxlTm9kZVF1ZXJ5IiwicGFyYW1ldGVyVmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGUiLCJ0eXBlIiwibmFtZSIsImFzc2lnbm1lbnQiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFzc2lnbm1lbnQiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJhc3NpZ25tZW50U3RyaW5nIiwibWF0Y2hUeXBlIiwidHlwZU1hdGNoZXMiLCJpc1R5cGVOb2RlVHlwZSIsIk5PREVfVFlQRSIsInR5cGVOb2RlVHlwZSIsInNldFZhbHVlIiwidmFsdWUiLCJBc3NpZ25tZW50IiwiZG9tIiwiZnJvbVZhbHVlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsImNvbnRleHQiLCJ2YXJpYWJsZSIsInZhbHVlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJhc3NpZ21lbnQiLCJmcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJWYXJpYWJsZU5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlWYXJpYWJsZU5vZGUiLCJmcm9tRm9yRWFjaExvb3BOb2RlIiwiZm9yRWFjaExvb3BMb29wTm9kZSIsImZvckVhY2hMb29wVmFyaWFibGVOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmcm9tVHlwZVZhcmlhYmxlTm9kZUFuZEFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzJEQWZnQjtxQkFFVTtxQkFDQTtpRUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUNsQ0MseUJBQXlCRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNuQ0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFD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