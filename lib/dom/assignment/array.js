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
                return this.string;
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
            value: function fromStepNode(stepNode, context) {
                var arrayAssignment = null;
                var arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);
                if (arrayAssignmentNode !== null) {
                    var typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode), variableNodes = variableNodesQuery(arrayAssignmentNode), types = (0, _object.typesFromTypeTerminalNodes)(typeTerminalNodes, context), node = arrayAssignmentNode, string = context.nodeAsString(node), offset = offsetFromArrayAssignmentNode(arrayAssignmentNode, context), variables = (0, _object.variablesFromVariableNodesAndTypes)(variableNodes, types, context);
                    arrayAssignment = new ArrayAssigment(string, offset, variables);
                }
                return arrayAssignment;
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));
function offsetFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var dummyVariableNodes = dummyVariableNodesQuery(arrayAssignmentNode), dummyVariableNodesLength = dummyVariableNodes.length, offset = dummyVariableNodesLength; ///
    return offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2RlcywgdmFyaWFibGVzRnJvbVZhcmlhYmxlTm9kZXNBbmRUeXBlcyB9IGZyb20gXCIuLi9hc3NpZ25tZW50L29iamVjdFwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2FycmF5QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIGR1bW15VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvZHVtbXlWYXJpYWJsZVwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2FycmF5QXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXJyYXlBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG9mZnNldCwgdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZXMgPSB0eXBlVGVybWluYWxOb2Rlc1F1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXModHlwZVRlcm1pbmFsTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzKHZhcmlhYmxlTm9kZXMsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdtZW50KHN0cmluZywgb2Zmc2V0LCB2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGR1bW15VmFyaWFibGVOb2RlcyA9IGR1bW15VmFyaWFibGVOb2Rlc1F1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICBkdW1teVZhcmlhYmxlTm9kZXNMZW5ndGggPSBkdW1teVZhcmlhYmxlTm9kZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQgPSBkdW1teVZhcmlhYmxlTm9kZXNMZW5ndGg7ICAvLy9cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0eXBlVGVybWluYWxOb2Rlc1F1ZXJ5IiwiZHVtbXlWYXJpYWJsZU5vZGVzUXVlcnkiLCJhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFycmF5QXNzaWdtZW50Iiwic3RyaW5nIiwib2Zmc2V0IiwidmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0T2Zmc2V0IiwiZ2V0VmFyaWFibGVzIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiYXJyYXlBc3NpZ25tZW50IiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsInR5cGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVOb2RlcyIsInR5cGVzIiwidHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXMiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwib2Zmc2V0RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzIiwibmFtZSIsImR1bW15VmFyaWFibGVOb2RlcyIsImR1bW15VmFyaWFibGVOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7bUJBVDRCO3FCQUNVO3NCQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsOEJBQ2hDQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsMkJBQ3BDRSwwQkFBMEJGLElBQUFBLGlCQUFVLEVBQUMsbUNBQ3JDRywyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7SUFFM0MsV0FBZUMsSUFBQUEsZ0JBQVcsbUNBQUM7YUFBTUMsZUFDbkJDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7OztZQUlPSSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVDLE9BQU87Z0JBQ25DLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsc0JBQXNCZCx5QkFBeUJXO2dCQUVyRCxJQUFJRyx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUMsb0JBQW9CakIsdUJBQXVCZ0Isc0JBQzNDRSxnQkFBZ0JwQixtQkFBbUJrQixzQkFDbkNHLFFBQVFDLElBQUFBLGtDQUEwQixFQUFDSCxtQkFBbUJILFVBQ3RETyxPQUFPTCxxQkFDUFYsU0FBU1EsUUFBUVEsWUFBWSxDQUFDRCxPQUM5QmQsU0FBU2dCLDhCQUE4QlAscUJBQXFCRixVQUM1RE4sWUFBWWdCLElBQUFBLDBDQUFrQyxFQUFDTixlQUFlQyxPQUFPTDtvQkFFM0VDLGtCQUFrQixJQUFJVixlQUFlQyxRQUFRQyxRQUFRQztnQkFDdkQ7Z0JBRUEsT0FBT087WUFDVDs7OztLQXBCQSxrQ0FBT1UsUUFBTztBQXVCaEIsU0FBU0YsOEJBQThCUCxtQkFBbUIsRUFBRUYsT0FBTztJQUNqRSxJQUFNWSxxQkFBcUJ6Qix3QkFBd0JlLHNCQUM3Q1csMkJBQTJCRCxtQkFBbUJFLE1BQU0sRUFDcERyQixTQUFTb0IsMEJBQTJCLEdBQUc7SUFFN0MsT0FBT3BCO0FBQ1QifQ==