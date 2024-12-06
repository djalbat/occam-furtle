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
    function ArrayAssigment(offset, variables) {
        _class_call_check(this, ArrayAssigment);
        this.offset = offset;
        this.variables = variables;
    }
    _create_class(ArrayAssigment, [
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
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var arrayAssignment = null;
                var arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);
                if (arrayAssignmentNode !== null) {
                    var typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode), variableNodes = variableNodesQuery(arrayAssignmentNode), types = (0, _object.typesFromTypeTerminalNodes)(typeTerminalNodes), offset = offsetFromArrayAssignmentNode(arrayAssignmentNode), variables = (0, _object.variablesFromVariableNodesAndTypes)(variableNodes, types);
                    arrayAssignment = new ArrayAssigment(offset, variables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2RlcywgdmFyaWFibGVzRnJvbVZhcmlhYmxlTm9kZXNBbmRUeXBlcyB9IGZyb20gXCIuLi9hc3NpZ25tZW50L29iamVjdFwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIGR1bW15VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvZHVtbXlWYXJpYWJsZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2FycmF5QXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXJyYXlBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihvZmZzZXQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlcyA9IHR5cGVUZXJtaW5hbE5vZGVzUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2Rlcyh0eXBlVGVybWluYWxOb2RlcyksXG4gICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXModmFyaWFibGVOb2RlcywgdHlwZXMpO1xuXG4gICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ21lbnQob2Zmc2V0LCB2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlKSB7XG4gIGNvbnN0IGR1bW15VmFyaWFibGVOb2RlcyA9IGR1bW15VmFyaWFibGVOb2Rlc1F1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICBkdW1teVZhcmlhYmxlTm9kZXNMZW5ndGggPSBkdW1teVZhcmlhYmxlTm9kZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQgPSBkdW1teVZhcmlhYmxlTm9kZXNMZW5ndGg7ICAvLy9cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0eXBlVGVybWluYWxOb2Rlc1F1ZXJ5IiwiZHVtbXlWYXJpYWJsZU5vZGVzUXVlcnkiLCJhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFycmF5QXNzaWdtZW50Iiwib2Zmc2V0IiwidmFyaWFibGVzIiwiZ2V0T2Zmc2V0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiYXJyYXlBc3NpZ25tZW50IiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsInR5cGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVOb2RlcyIsInR5cGVzIiwidHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXMiLCJvZmZzZXRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXMiLCJuYW1lIiwiZHVtbXlWYXJpYWJsZU5vZGVzIiwiZHVtbXlWYXJpYWJsZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzttQkFUNEI7cUJBQ1U7c0JBQ3lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyw4QkFDaENDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQywyQkFDcENFLDBCQUEwQkYsSUFBQUEsaUJBQVUsRUFBQyxtQ0FDckNHLDJCQUEyQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUUzQyxXQUFlQyxJQUFBQSxnQkFBVyxtQ0FBQzthQUFNQyxlQUNuQkMsTUFBTSxFQUFFQyxTQUFTO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFQyxPQUFPO2dCQUNuQyxJQUFJQyxrQkFBa0I7Z0JBRXRCLElBQU1DLHNCQUFzQmIseUJBQXlCVTtnQkFFckQsSUFBSUcsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1DLG9CQUFvQmhCLHVCQUF1QmUsc0JBQzNDRSxnQkFBZ0JuQixtQkFBbUJpQixzQkFDbkNHLFFBQVFDLElBQUFBLGtDQUEwQixFQUFDSCxvQkFDbkNWLFNBQVNjLDhCQUE4Qkwsc0JBQ3ZDUixZQUFZYyxJQUFBQSwwQ0FBa0MsRUFBQ0osZUFBZUM7b0JBRXBFSixrQkFBa0IsSUFBSVQsZUFBZUMsUUFBUUM7Z0JBQy9DO2dCQUVBLE9BQU9PO1lBQ1Q7Ozs7S0FsQkEsa0NBQU9RLFFBQU87QUFxQmhCLFNBQVNGLDhCQUE4QkwsbUJBQW1CO0lBQ3hELElBQU1RLHFCQUFxQnRCLHdCQUF3QmMsc0JBQzdDUywyQkFBMkJELG1CQUFtQkUsTUFBTSxFQUNwRG5CLFNBQVNrQiwwQkFBMkIsR0FBRztJQUU3QyxPQUFPbEI7QUFDVCJ9