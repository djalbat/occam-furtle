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
var _elements = require("../elements");
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
var _Step;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function() {
    function Step(string, arrayAssignment, objectAssigment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
        this.variablesDeclaration = variablesDeclaration;
    }
    _create_class(Step, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArrayAssignment",
            value: function getArrayAssignment() {
                return this.arrayAssignment;
            }
        },
        {
            key: "getObjectAssigment",
            value: function getObjectAssigment() {
                return this.objectAssigment;
            }
        },
        {
            key: "getVariablesDeclaration",
            value: function getVariablesDeclaration() {
                return this.variablesDeclaration;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                if (false) {
                ///
                } else if (this.arrayAssignment !== null) {
                    this.arrayAssignment.evaluate(context);
                } else if (this.objectAssigment !== null) {
                    this.objectAssigment.evaluate(context);
                } else if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.evaluate(context);
                }
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RBc3NpZ21lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0QXNzaWdtZW50O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXJyYXlBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFycmF5QXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJzdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQjtnQ0FEaERKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7Ozs7WUFHOUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osb0JBQW9CO1lBQ2xDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1IsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTyxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDUCxlQUFlLEtBQUssTUFBTTtvQkFDeEMsSUFBSSxDQUFDQSxlQUFlLENBQUNNLFFBQVEsQ0FBQ0M7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNOLG9CQUFvQixLQUFLLE1BQU07b0JBQzdDLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNLLFFBQVEsQ0FBQ0M7Z0JBQ3JDO1lBQ0Y7Ozs7S0FFQSx3QkFBT0MsUUFBTyJ9