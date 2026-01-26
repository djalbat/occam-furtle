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
var _VariableAssignment;
var _default = (0, _elements.define)((_VariableAssignment = /*#__PURE__*/ function() {
    function VariableAssignment(string, variable, expression) {
        _class_call_check(this, VariableAssignment);
        this.string = string;
        this.variable = variable;
        this.expression = expression;
    }
    _create_class(VariableAssignment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var variableAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(variableAssignmentString, "' variable assignment..."));
                expression = this.expression.evaluate(context);
                this.variable.assign(expression, context);
                context.debug("...evaluated the '".concat(variableAssignmentString, "' variable assignment."));
                return expression;
            }
        }
    ]);
    return VariableAssignment;
}(), _define_property(_VariableAssignment, "name", "VariableAssignment"), _VariableAssignment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudC4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50LmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImFzc2lnbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHVDQUFDO2FBQU1DLG1CQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEZEg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUw7Z0JBRUosSUFBTU0sMkJBQTJCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRWpETyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBMkMsT0FBekJELDBCQUF5QjtnQkFFMUROLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNJLFFBQVEsQ0FBQ0M7Z0JBRXRDLElBQUksQ0FBQ04sUUFBUSxDQUFDUyxNQUFNLENBQUNSLFlBQVlLO2dCQUVqQ0EsUUFBUUksS0FBSyxDQUFDLEFBQUMscUJBQTZDLE9BQXpCSCwwQkFBeUI7Z0JBRTVELE9BQU9OO1lBQ1Q7Ozs7S0FFQSxzQ0FBT1UsUUFBTyJ9