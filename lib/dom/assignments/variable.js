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
                    var type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), array = arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), string = stringFromArray(array, context);
                    variableAssignments = new VariableAssignments(string, array);
                }
                return variableAssignments;
            }
        }
    ]);
    return VariableAssignments;
}(), _define_property(_VariableAssignments, "name", "VariableAssignments"), _VariableAssignments));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudHMvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvQHR5cGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVBc3NpZ25tZW50c1wiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvdmFyaWFibGVBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLi4uYCk7XG5cbiAgICB0aGlzLmFycmF5LmZvckVhY2goKHZhcmlhYmxlQXNzaWdubWVudCkgPT4ge1xuICAgICAgdmFyaWFibGVBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudHMuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFyaWFibGVBc3NpZ25tZW50c1N0cmluZywgdmFyaWFibGVBc3NpZ25tZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50LmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9ICh2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30sICR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmc7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkodmFyaWFibGVBc3NpZ25tZW50c05vZGUpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzLm1hcCgodmFyaWFibGVBc3NpZ25tZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyIsInRyYWNlIiwiZm9yRWFjaCIsInZhcmlhYmxlQXNzaWdubWVudCIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInN0cmluZ0Zyb21BcnJheSIsIm5hbWUiLCJyZWR1Y2UiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZG9tIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUNsQ0MsK0JBQStCRCxJQUFBQSxnQkFBUyxFQUFDLDhCQUN6Q0UsK0JBQStCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRWhELFdBQWVDLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRWxESyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBNEMsT0FBMUJELDJCQUEwQjtnQkFFM0QsSUFBSSxDQUFDTCxLQUFLLENBQUNPLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLG1CQUFtQkwsUUFBUSxDQUFDQztnQkFDOUI7Z0JBRUFBLFFBQVFLLEtBQUssQ0FBQyxBQUFDLHFCQUE4QyxPQUExQkosMkJBQTBCO1lBQy9EOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRVAsT0FBTztnQkFDbkMsSUFBSVEsc0JBQXNCO2dCQUUxQixJQUFNQywwQkFBMEJuQiw2QkFBNkJpQjtnQkFFN0QsSUFBSUUsNEJBQTRCLE1BQU07b0JBQ3BDLElBQU1DLE9BQU9DLGdDQUFnQ0YseUJBQXlCVCxVQUNoRUosUUFBUWdCLHdDQUF3Q0YsTUFBTUQseUJBQXlCVCxVQUMvRUwsU0FBU2tCLGdCQUFnQmpCLE9BQU9JO29CQUV0Q1Esc0JBQXNCLElBQUlkLG9CQUFvQkMsUUFBUUM7Z0JBQ3hEO2dCQUVBLE9BQU9ZO1lBQ1Q7Ozs7S0FoQkEsdUNBQU9NLFFBQU87QUFtQmhCLFNBQVNELGdCQUFnQmpCLEtBQUssRUFBRUksT0FBTztJQUNyQyxJQUFNQyw0QkFBNEJMLE1BQU1tQixNQUFNLENBQUMsU0FBQ2QsMkJBQTJCRztRQUNuRSxJQUFNWSwyQkFBMkJaLG1CQUFtQlAsU0FBUztRQUU3REksNEJBQTRCLEFBQUNBLDhCQUE4QixPQUM3QmUsMkJBQ0MsQUFBQyxHQUFnQ0EsT0FBOUJmLDJCQUEwQixNQUE2QixPQUF6QmU7UUFFaEUsT0FBT2Y7SUFDVCxHQUFHLE9BQ0hOLFNBQVNNLDJCQUEyQixHQUFHO0lBRTdDLE9BQU9OO0FBQ1Q7QUFFQSxTQUFTZ0IsZ0NBQWdDRix1QkFBdUIsRUFBRVQsT0FBTztJQUN2RSxJQUFNaUIsbUJBQW1CN0Isc0JBQXNCcUIsMEJBQ3pDUywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRFQsT0FBT1EseUJBQXlCLEdBQUc7SUFFekMsT0FBT1I7QUFDVDtBQUVBLFNBQVNFLHdDQUF3Q0YsSUFBSSxFQUFFRCx1QkFBdUIsRUFBRVQsT0FBTztJQUNyRixJQUFNb0IsMEJBQTBCN0IsNkJBQTZCa0IsMEJBQ3ZEYixRQUFRd0Isd0JBQXdCQyxHQUFHLENBQUMsU0FBQ0M7UUFDbkMsSUFBTSxBQUFFQyxxQkFBdUJDLFlBQUcsQ0FBMUJELG9CQUNGbkIscUJBQXFCbUIsbUJBQW1CRSxpQ0FBaUMsQ0FBQ2YsTUFBTVksd0JBQXdCdEI7UUFFOUcsT0FBT0k7SUFDVDtJQUVOLE9BQU9SO0FBQ1QifQ==