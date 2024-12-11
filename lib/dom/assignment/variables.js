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
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode) {
                var variablesAssignment = null;
                var variablesAssignmentNode = variablesAssignmentNodeQuery(stepNode);
                if (variablesAssignmentNode !== null) {
                    debugger;
                }
                return variablesAssignment;
            }
        }
    ]);
    return VariablesAssignment;
}(), _define_property(_VariablesAssignment, "name", "VariablesAssignment"), _VariablesAssignment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvdmFyaWFibGVzQXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVzQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVzQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUpIHtcbiAgICBsZXQgdmFyaWFibGVzQXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZSA9IHZhcmlhYmxlc0Fzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlc0Fzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXNBc3NpZ25tZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZXNBc3NpZ25tZW50Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJ2YXJpYWJsZXNBc3NpZ25tZW50IiwidmFyaWFibGVzQXNzaWdubWVudE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztxQkFMMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsK0JBQStCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRS9DLFdBQWVDLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsTUFBTTtnQ0FEYUQ7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTUMsMEJBQTBCVCw2QkFBNkJPO2dCQUU3RCxJQUFJRSw0QkFBNEIsTUFBTTtvQkFDcEMsUUFBUTtnQkFDVjtnQkFFQSxPQUFPRDtZQUNUOzs7O0tBWkEsdUNBQU9FLFFBQU8ifQ==