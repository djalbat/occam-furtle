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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/variableAssignments/@type"), variableAssignmentsNodeQuery = (0, _query.nodeQuery)("/step/variableAssignments"), variableAssignmentNodesQuery = (0, _query.nodesQuery)("/variableAssignments/variableAssignment");
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
                // context.addVariable(variable);
                //
                // variable.assign(context);
                });
                context.debug("...evaluated the '".concat(variableAssignmentsString, "' variable assignments."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var variableAssignments = null;
                var variableAssignmentsNode = variableAssignmentsNodeQuery(stepNode);
                if (variableAssignmentsNode !== null) {
                    var node = variableAssignmentsNode, string = context.nodeAsString(node), type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), array = arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context);
                    variableAssignments = new VariableAssignments(string, array);
                }
                return variableAssignments;
            }
        }
    ]);
    return VariableAssignments;
}(), _define_property(_VariableAssignments, "name", "VariableAssignments"), _VariableAssignments));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudHMvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvQHR5cGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVBc3NpZ25tZW50c1wiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvdmFyaWFibGVBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLi4uYCk7XG5cbiAgICB0aGlzLmFycmF5LmZvckVhY2goKHZhcmlhYmxlQXNzaWdubWVudCkgPT4ge1xuICAgICAgdmFyaWFibGVBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAvLyBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcbiAgICAgIC8vXG4gICAgICAvLyB2YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRzXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVBc3NpZ25tZW50c05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgIC8vLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50c05vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlc1F1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudHNOb2RlKSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50c05vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJ0cmFjZSIsImZvckVhY2giLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJkZWJ1ZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInR5cGUiLCJ0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiYXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwibmFtZSIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsIm1hcCIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJkb20iLCJmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsK0JBQ2xDQywrQkFBK0JELElBQUFBLGdCQUFTLEVBQUMsOEJBQ3pDRSwrQkFBK0JDLElBQUFBLGlCQUFVLEVBQUM7SUFFaEQsV0FBZUMsSUFBQUEsZ0JBQVcsd0NBQUM7YUFBTUMsb0JBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFNQyw0QkFBNEIsSUFBSSxDQUFDTixNQUFNLEVBQUUsR0FBRztnQkFFbERLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE0QyxPQUExQkQsMkJBQTBCO2dCQUUzRCxJQUFJLENBQUNMLEtBQUssQ0FBQ08sT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsbUJBQW1CTCxRQUFRLENBQUNDO2dCQUU1QixpQ0FBaUM7Z0JBQ2pDLEVBQUU7Z0JBQ0YsNEJBQTRCO2dCQUM5QjtnQkFFQUEsUUFBUUssS0FBSyxDQUFDLEFBQUMscUJBQThDLE9BQTFCSiwyQkFBMEI7WUFDL0Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFUCxPQUFPO2dCQUNuQyxJQUFJUSxzQkFBc0I7Z0JBRTFCLElBQU1DLDBCQUEwQm5CLDZCQUE2QmlCO2dCQUU3RCxJQUFJRSw0QkFBNEIsTUFBTTtvQkFDcEMsSUFBTUMsT0FBT0QseUJBQ1BkLFNBQVNLLFFBQVFXLFlBQVksQ0FBQ0QsT0FDOUJFLE9BQU9DLGdDQUFnQ0oseUJBQXlCVCxVQUNoRUosUUFBUWtCLHdDQUF3Q0YsTUFBTUgseUJBQXlCVDtvQkFFckZRLHNCQUFzQixJQUFJZCxvQkFBb0JDLFFBQVFDO2dCQUN4RDtnQkFFQSxPQUFPWTtZQUNUOzs7O0tBakJBLHVDQUFPTyxRQUFPO0FBb0JoQixTQUFTRixnQ0FBZ0NKLHVCQUF1QixFQUFFVCxPQUFPO0lBQ3ZFLElBQU1nQixtQkFBbUI1QixzQkFBc0JxQiwwQkFDekNRLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JETixPQUFPSyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPTDtBQUNUO0FBRUEsU0FBU0Usd0NBQXdDRixJQUFJLEVBQUVILHVCQUF1QixFQUFFVCxPQUFPO0lBQ3JGLElBQU1tQiwwQkFBMEI1Qiw2QkFBNkJrQiwwQkFDdkRiLFFBQVF1Qix3QkFBd0JDLEdBQUcsQ0FBQyxTQUFDQztRQUNuQyxJQUFNLEFBQUVDLHFCQUF1QkMsWUFBRyxDQUExQkQsb0JBQ0ZsQixxQkFBcUJrQixtQkFBbUJFLGlDQUFpQyxDQUFDWixNQUFNUyx3QkFBd0JyQjtRQUU5RyxPQUFPSTtJQUNUO0lBRU4sT0FBT1I7QUFDVCJ9