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
var _default = (0, _dom.domAssigned)((_VariableAssignments = /*#__PURE__*/ function() {
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
    var VariableAssignments = _dom.default.VariableAssignments, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), array = arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), string = stringFromArray(array, context), variableAssignments = new VariableAssignments(string, array);
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
        var VariableAssignment = _dom.default.VariableAssignment, variableAssignment = VariableAssignment.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudHMvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvQHR5cGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnRzL3ZhcmlhYmxlQXNzaWdubWVudFwiKSxcbiAgICAgIHN0ZXBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVBc3NpZ25tZW50c1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50cyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy4uLmApO1xuXG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKCh2YXJpYWJsZUFzc2lnbm1lbnQpID0+IHtcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudHNcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcFZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHN0ZXBWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwVmFyaWFibGVBc3NpZ25tZW50c05vZGU7ICAvLy9cblxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGRvbSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcsIHZhcmlhYmxlQXNzaWdubWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSAodmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9LCAke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50c05vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlc1F1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudHNOb2RlKSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGVwVmFyaWFibGVBc3NpZ25tZW50c05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nIiwidHJhY2UiLCJmb3JFYWNoIiwidmFyaWFibGVBc3NpZ25tZW50IiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJzdGVwVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJuYW1lIiwiZG9tIiwidHlwZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJhcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJzdHJpbmdGcm9tQXJyYXkiLCJyZWR1Y2UiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUNsQ0MsK0JBQStCQyxJQUFBQSxpQkFBVSxFQUFDLDRDQUMxQ0MsbUNB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