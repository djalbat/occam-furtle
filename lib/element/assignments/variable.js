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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _query = require("../../utilities/query");
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
var _VariableAssignments;
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/variableAssignments/@type"), variableAssignmentNodesQuery = (0, _query.nodesQuery)("/variableAssignments/variableAssignment"), stepVariableAssignmentsNodeQuery = (0, _query.nodeQuery)("/step/variableAssignments");
var _default = (0, _elements.define)((_VariableAssignments = /*#__PURE__*/ function() {
    function VariableAssignments(string, array) {
        _class_call_check(this, VariableAssignments);
        this.string = string;
        this.array = array;
    }
    _create_class(VariableAssignments, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableAssignmentsString = this.string; ///
                context.trace("Evaluating the '".concat(variableAssignmentsString, "' variable assignments..."));
                this.array.forEach(function(variableAssignment) {
                    variableAssignment.evaluate(context);
                });
                context.debug("...evaluated the '".concat(variableAssignmentsString, "' variable assignments."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var variableAssignments = null;
                var stepVariableAssignmentsNode = stepVariableAssignmentsNodeQuery(stepNode);
                if (stepVariableAssignmentsNode !== null) {
                    var variableAssignmentsNode = stepVariableAssignmentsNode; ///
                    variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
                }
                return variableAssignments;
            }
        }
    ]);
    return VariableAssignments;
}(), _define_property(_VariableAssignments, "name", "VariableAssignments"), _VariableAssignments));
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), array = arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), string = stringFromArray(array, context), variableAssignments = new VariableAssignments(string, array);
    return variableAssignments;
}
function stringFromArray(array, context) {
    var variableAssignmentsString = array.reduce(function(variableAssignmentsString, variableAssignment) {
        var variableAssignmentString = variableAssignment.getString();
        variableAssignmentsString = variableAssignmentsString === null ? variableAssignmentString : "".concat(variableAssignmentsString, ", ").concat(variableAssignmentString);
        return variableAssignmentsString;
    }, null), string = variableAssignmentsString; ///
    return string;
}
function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(variableAssignmentsNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
    var variableAssignmentNodes = variableAssignmentNodesQuery(variableAssignmentsNode), array = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var VariableAssignment = _elements.default.VariableAssignment, variableAssignment = VariableAssignment.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50cy9AdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvdmFyaWFibGVBc3NpZ25tZW50XCIpLFxuICAgICAgc3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC92YXJpYWJsZUFzc2lnbm1lbnRzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50cyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy4uLmApO1xuXG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKCh2YXJpYWJsZUFzc2lnbm1lbnQpID0+IHtcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudHNcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHN0ZXBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwVmFyaWFibGVBc3NpZ25tZW50c05vZGU7ICAvLy9cblxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFyaWFibGVBc3NpZ25tZW50c1N0cmluZywgdmFyaWFibGVBc3NpZ25tZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50LmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9ICh2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30sICR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmc7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkodmFyaWFibGVBc3NpZ25tZW50c05vZGUpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzLm1hcCgodmFyaWFibGVBc3NpZ25tZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkiLCJkZWZpbmUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJ0cmFjZSIsImZvckVhY2giLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJkZWJ1ZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50cyIsInN0ZXBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIm5hbWUiLCJlbGVtZW50cyIsInR5cGUiLCJ0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiYXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwic3RyaW5nRnJvbUFycmF5IiwicmVkdWNlIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwibWFwIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0VBVHFCO3FCQUdpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQywrQkFDbENDLCtCQUErQkMsSUFBQUEsaUJB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