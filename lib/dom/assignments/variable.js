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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudHMvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvQHR5cGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVBc3NpZ25tZW50c1wiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudHMvdmFyaWFibGVBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnRzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50c1N0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnRzLi4uYCk7XG5cbiAgICB0aGlzLmFycmF5LmZvckVhY2goKHZhcmlhYmxlQXNzaWdubWVudCkgPT4ge1xuICAgICAgdmFyaWFibGVBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudHMuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUsICAvLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudHNOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXNRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nIiwidHJhY2UiLCJmb3JFYWNoIiwidmFyaWFibGVBc3NpZ25tZW50IiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0eXBlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImFycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIm5hbWUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJtYXAiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZG9tIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUNsQ0MsK0JBQStCRCxJQUFBQSxnQkFBUyxFQUFDLDhCQUN6Q0UsK0JBQStCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRWhELFdBQWVDLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRWxESyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBNEMsT0FBMUJELDJCQUEwQjtnQkFFM0QsSUFBSSxDQUFDTCxLQUFLLENBQUNPLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLG1CQUFtQkwsUUFBUSxDQUFDQztnQkFDOUI7Z0JBRUFBLFFBQVFLLEtBQUssQ0FBQyxBQUFDLHFCQUE4QyxPQUExQkosMkJBQTBCO1lBQy9EOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRVAsT0FBTztnQkFDbkMsSUFBSVEsc0JBQXNCO2dCQUUxQixJQUFNQywwQkFBMEJuQiw2QkFBNkJpQjtnQkFFN0QsSUFBSUUsNEJBQTRCLE1BQU07b0JBQ3BDLElBQU1DLE9BQU9ELHlCQUNQZCxTQUFTSyxRQUFRVyxZQUFZLENBQUNELE9BQzlCRSxPQUFPQyxnQ0FBZ0NKLHlCQUF5QlQsVUFDaEVKLFFBQVFrQix3Q0FBd0NGLE1BQU1ILHlCQUF5QlQ7b0JBRXJGUSxzQkFBc0IsSUFBSWQsb0JBQW9CQyxRQUFRQztnQkFDeEQ7Z0JBRUEsT0FBT1k7WUFDVDs7OztLQWpCQSx1Q0FBT08sUUFBTztBQW9CaEIsU0FBU0YsZ0NBQWdDSix1QkFBdUIsRUFBRVQsT0FBTztJQUN2RSxJQUFNZ0IsbUJBQW1CNUIsc0JBQXNCcUIsMEJBQ3pDUSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRE4sT0FBT0sseUJBQXlCLEdBQUc7SUFFekMsT0FBT0w7QUFDVDtBQUVBLFNBQVNFLHdDQUF3Q0YsSUFBSSxFQUFFSCx1QkFBdUIsRUFBRVQsT0FBTztJQUNyRixJQUFNbUIsMEJBQTBCNUIsNkJBQTZCa0IsMEJBQ3ZEYixRQUFRdUIsd0JBQXdCQyxHQUFHLENBQUMsU0FBQ0M7UUFDbkMsSUFBTSxBQUFFQyxxQkFBdUJDLFlBQUcsQ0FBMUJELG9CQUNGbEIscUJBQXFCa0IsbUJBQW1CRSxpQ0FBaUMsQ0FBQ1osTUFBTVMsd0JBQXdCckI7UUFFOUcsT0FBT0k7SUFDVDtJQUVOLE9BQU9SO0FBQ1QifQ==