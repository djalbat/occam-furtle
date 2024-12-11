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
var _dom = require("../../dom");
var _query = require("../../utilities/query");
var _object = require("../assignment/object");
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
var _ArrayAssigment;
var variableNodesQuery = (0, _query.nodesQuery)("/arrayAssignment/variable"), typeTerminalNodesQuery = (0, _query.nodesQuery)("/arrayAssignment/@type"), dummyVariableNodesQuery = (0, _query.nodesQuery)("/arrayAssignment/dummyVariable"), arrayAssignmentNodeQuery = (0, _query.nodeQuery)("/step/arrayAssignment");
var _default = (0, _dom.domAssigned)((_ArrayAssigment = /*#__PURE__*/ function() {
    function ArrayAssigment(string, offset, variables) {
        _class_call_check(this, ArrayAssigment);
        this.string = string;
        this.offset = offset;
        this.variables = variables;
    }
    _create_class(ArrayAssigment, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getOffset",
            value: function getOffset() {
                return this.offset;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode) {
                var arrayAssignment = null;
                var arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);
                if (arrayAssignmentNode !== null) {
                    var typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode), variableNodes = variableNodesQuery(arrayAssignmentNode), types = (0, _object.typesFromTypeTerminalNodes)(typeTerminalNodes), string = null, offset = offsetFromArrayAssignmentNode(arrayAssignmentNode), variables = (0, _object.variablesFromVariableNodesAndTypes)(variableNodes, types);
                    arrayAssignment = new ArrayAssigment(string, offset, variables);
                }
                return arrayAssignment;
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));
function offsetFromArrayAssignmentNode(arrayAssignmentNode) {
    var dummyVariableNodes = dummyVariableNodesQuery(arrayAssignmentNode), dummyVariableNodesLength = dummyVariableNodes.length, offset = dummyVariableNodesLength; ///
    return offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2RlcywgdmFyaWFibGVzRnJvbVZhcmlhYmxlTm9kZXNBbmRUeXBlcyB9IGZyb20gXCIuLi9hc3NpZ25tZW50L29iamVjdFwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIGR1bW15VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvZHVtbXlWYXJpYWJsZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2FycmF5QXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXJyYXlBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG9mZnNldCwgdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUpIHtcbiAgICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGVzID0gdHlwZVRlcm1pbmFsTm9kZXNRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVR5cGVUZXJtaW5hbE5vZGVzKHR5cGVUZXJtaW5hbE5vZGVzKSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXModmFyaWFibGVOb2RlcywgdHlwZXMpO1xuXG4gICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ21lbnQoc3RyaW5nLCBvZmZzZXQsIHZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUpIHtcbiAgY29uc3QgZHVtbXlWYXJpYWJsZU5vZGVzID0gZHVtbXlWYXJpYWJsZU5vZGVzUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgIGR1bW15VmFyaWFibGVOb2Rlc0xlbmd0aCA9IGR1bW15VmFyaWFibGVOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG9mZnNldCA9IGR1bW15VmFyaWFibGVOb2Rlc0xlbmd0aDsgIC8vL1xuXG4gIHJldHVybiBvZmZzZXQ7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVzUXVlcnkiLCJkdW1teVZhcmlhYmxlTm9kZXNRdWVyeSIsImFycmF5QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQXJyYXlBc3NpZ21lbnQiLCJzdHJpbmciLCJvZmZzZXQiLCJ2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXRPZmZzZXQiLCJnZXRWYXJpYWJsZXMiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImFycmF5QXNzaWdubWVudCIsImFycmF5QXNzaWdubWVudE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlTm9kZXMiLCJ0eXBlcyIsInR5cGVzRnJvbVR5cGVUZXJtaW5hbE5vZGVzIiwib2Zmc2V0RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzIiwibmFtZSIsImR1bW15VmFyaWFibGVOb2RlcyIsImR1bW15VmFyaWFibGVOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7bUJBVDRCO3FCQUNVO3NCQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsOEJBQ2hDQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsMkJBQ3BDRSwwQkFBMEJGLElBQUFBLGlCQUFVLEVBQUMsbUNBQ3JDRywyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7SUFFM0MsV0FBZUMsSUFBQUEsZ0JBQVcsbUNBQUM7YUFBTUMsZUFDbkJDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7Ozs7WUFJT0ksS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUTtnQkFDMUIsSUFBSUMsa0JBQWtCO2dCQUV0QixJQUFNQyxzQkFBc0JiLHlCQUF5Qlc7Z0JBRXJELElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNQyxvQkFBb0JoQix1QkFBdUJlLHNCQUMzQ0UsZ0JBQWdCbkIsbUJBQW1CaUIsc0JBQ25DRyxRQUFRQyxJQUFBQSxrQ0FBMEIsRUFBQ0gsb0JBQ25DVixTQUFTLE1BQ1RDLFNBQVNhLDhCQUE4Qkwsc0JBQ3ZDUCxZQUFZYSxJQUFBQSwwQ0FBa0MsRUFBQ0osZUFBZUM7b0JBRXBFSixrQkFBa0IsSUFBSVQsZUFBZUMsUUFBUUMsUUFBUUM7Z0JBQ3ZEO2dCQUVBLE9BQU9NO1lBQ1Q7Ozs7S0FuQkEsa0NBQU9RLFFBQU87QUFzQmhCLFNBQVNGLDhCQUE4QkwsbUJBQW1CO0lBQ3hELElBQU1RLHFCQUFxQnRCLHdCQUF3QmMsc0JBQzdDUywyQkFBMkJELG1CQUFtQkUsTUFBTSxFQUNwRGxCLFNBQVNpQiwwQkFBMkIsR0FBRztJQUU3QyxPQUFPakI7QUFDVCJ9