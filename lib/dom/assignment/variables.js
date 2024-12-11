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
var _query = require("../../utilities/query");
var _dom = require("../../dom");
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
var _VariablesAssignment;
var variablesAssignmentNodeQuery = (0, _query.nodeQuery)("/step/variablesAssignment");
var _default = (0, _dom.domAssigned)((_VariablesAssignment = /*#__PURE__*/ function() {
    function VariablesAssignment(string) {
        _class_call_check(this, VariablesAssignment);
        this.string = string;
    }
    _create_class(VariablesAssignment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var variablesAssignment = null;
                var variablesAssignmentNode = variablesAssignmentNodeQuery(stepNode);
                if (variablesAssignmentNode !== null) {
                    var node = variablesAssignmentNode, string = context.nodeAsString(node);
                    debugger;
                }
                return variablesAssignment;
            }
        }
    ]);
    return VariablesAssignment;
}(), _define_property(_VariablesAssignment, "name", "VariablesAssignment"), _VariablesAssignment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzQXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVzQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZXNBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZXNBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlc0Fzc2lnbm1lbnROb2RlID0gdmFyaWFibGVzQXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVzQXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzQXNzaWdubWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidmFyaWFibGVzQXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVzQXNzaWdubWVudCIsInN0cmluZyIsImdldFN0cmluZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsInZhcmlhYmxlc0Fzc2lnbm1lbnQiLCJ2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztxQkFMMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsK0JBQStCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRS9DLFdBQWVDLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsTUFBTTtnQ0FEYUQ7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFQyxPQUFPO2dCQUNuQyxJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLDBCQUEwQlYsNkJBQTZCTztnQkFFN0QsSUFBSUcsNEJBQTRCLE1BQU07b0JBQ3BDLElBQU1DLE9BQU9ELHlCQUNQTixTQUFTSSxRQUFRSSxZQUFZLENBQUNEO29CQUVwQyxRQUFRO2dCQUNWO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7S0FmQSx1Q0FBT0ksUUFBTyJ9