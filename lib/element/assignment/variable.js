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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
    ], [
        {
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
                return variableAssignment;
            }
        }
    ]);
    return VariableAssignment;
}(), _define_property(_VariableAssignment, "name", "VariableAssignment"), _VariableAssignment));
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var Variable = _elements.default.Variable, Expression = _elements.default.Expression, VariableAssignment = _elements.default.VariableAssignment, expression = Expression.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), string = stringFromExpressionAndVariable(expression, variable, context), assignment = new VariableAssignment(string, variable, expression);
    return assignment;
}
function stringFromExpressionAndVariable(expression, variable, context) {
    var variableString = variable.getString(), expressionString = expression.asString(context), string = "".concat(variableString, " = ").concat(expressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgRXhwcmVzc2lvbiwgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke3ZhcmlhYmxlU3RyaW5nfSA9ICR7ZXhwcmVzc2lvblN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiYXNzaWduIiwiZGVidWciLCJmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ0eXBlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiRXhwcmVzc2lvbiIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwic3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZVN0cmluZyIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJckIsV0FBZUEsSUFBQUEsZ0JBQU0sdUNBQUM7YUFBTUMsbUJBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURkSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSwyQkFBMkIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFakRPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUEyQyxPQUF6QkQsMEJBQXlCO2dCQUUxRE4sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDQztnQkFFdEMsSUFBSSxDQUFDTixRQUFRLENBQUNTLE1BQU0sQ0FBQ1IsWUFBWUs7Z0JBRWpDQSxRQUFRSSxLQUFLLENBQUMsQUFBQyxxQkFBNkMsT0FBekJILDBCQUF5QjtnQkFFNUQsT0FBT047WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLElBQUksRUFBRUMsc0JBQXNCLEVBQUVQLE9BQU87Z0JBQzVFLElBQU1RLHFCQUFxQkMsb0RBQW9ESCxNQUFNQyx3QkFBd0JQO2dCQUU3RyxPQUFPUTtZQUNUOzs7O0tBTkEsc0NBQU9FLFFBQU87QUFTaEIsU0FBU0Qsb0RBQW9ESCxJQUFJLEVBQUVDLHNCQUFzQixFQUFFUCxPQUFPO0lBQ2hHLElBQVFXLFdBQTZDQyxpQkFBUSxDQUFyREQsVUFBVUUsYUFBbUNELGlCQUFRLENBQTNDQyxZQUFZckIscUJBQXVCb0IsaUJBQVEsQ0FBL0JwQixvQkFDeEJHLGFBQWFrQixXQUFXQywwQkFBMEIsQ0FBQ1Asd0JBQXdCUCxVQUMzRU4sV0FBV2lCLFNBQVNOLGlDQUFpQyxDQUFDQyxNQUFNQyx3QkFBd0JQLFVBQ3BGUCxTQUFTc0IsZ0NBQWdDcEIsWUFBWUQsVUFBVU0sVUFDL0RnQixhQUFhLElBQUl4QixtQkFBbUJDLFFBQVFDLFVBQVVDO0lBRTVELE9BQU9xQjtBQUNUO0FBRUEsU0FBU0QsZ0NBQWdDcEIsVUFBVSxFQUFFRCxRQUFRLEVBQUVNLE9BQU87SUFDcEUsSUFBTWlCLGlCQUFpQnZCLFNBQVNFLFNBQVMsSUFDbkNzQixtQkFBbUJ2QixXQUFXd0IsUUFBUSxDQUFDbkIsVUFDdkNQLFNBQVMsQUFBQyxHQUFzQnlCLE9BQXBCRCxnQkFBZSxPQUFzQixPQUFqQkMsa0JBQWlCO0lBRXZELE9BQU96QjtBQUNUIn0=