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
var _elements = require("../../elements");
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
var _VariableAssignments;
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
    ]);
    return VariableAssignments;
}(), _define_property(_VariableAssignments, "name", "VariableAssignments"), _VariableAssignments));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnRzL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlQXNzaWdubWVudHMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudHMuLi5gKTtcblxuICAgIHRoaXMuYXJyYXkuZm9yRWFjaCgodmFyaWFibGVBc3NpZ25tZW50KSA9PiB7XG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50cy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRzXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJ0cmFjZSIsImZvckVhY2giLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx3Q0FBQzthQUFNQyxvQkFDZEMsTUFBTSxFQUFFQyxLQUFLO2dDQURDRjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRWxESyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBNEMsT0FBMUJELDJCQUEwQjtnQkFFM0QsSUFBSSxDQUFDTCxLQUFLLENBQUNPLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLG1CQUFtQkwsUUFBUSxDQUFDQztnQkFDOUI7Z0JBRUFBLFFBQVFLLEtBQUssQ0FBQyxBQUFDLHFCQUE4QyxPQUExQkosMkJBQTBCO1lBQy9EOzs7O0tBRUEsdUNBQU9LLFFBQU8ifQ==