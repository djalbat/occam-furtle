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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
var _types = require("../types");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Ternary;
var _default = (0, _elements.define)((_Ternary = /*#__PURE__*/ function() {
    function Ternary(string, expression, ifExpression, elseExpression) {
        _class_call_check(this, Ternary);
        this.string = string;
        this.expression = expression;
        this.ifExpression = ifExpression;
        this.elseExpression = elseExpression;
    }
    _create_class(Ternary, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "getIfBlock",
            value: function getIfBlock() {
                return this.ifExpression;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var ternaryString = this.string; ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                expression = this.expression.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.BOOLEAN_TYPE) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = expression.getBoolean();
                expression = boolean ? this.ifExpression.evaluate(context) : this.elseExpression.evaluate(context);
                context.debug("...evaluated the '".concat(ternaryString, "' ternary."));
                return expression;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICBleHByZXNzaW9uID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJzdHJpbmciLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm5hcnlTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHNCO3dCQUVDO3FCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sNEJBQUM7YUFBTUMsUUFDZEMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsY0FBYztnQ0FEbENKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOzs7O1lBR3hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGNBQWM7WUFDNUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJUjtnQkFFSixJQUFNUyxnQkFBZ0IsSUFBSSxDQUFDVixNQUFNLEVBQUUsR0FBRztnQkFFdENTLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRCxlQUFjO2dCQUUvQ1QsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ08sUUFBUSxDQUFDQztnQkFFdEMsSUFBTUcsaUJBQWlCWCxXQUFXWSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLG1CQUFZLEVBQUU7b0JBQ25DLElBQU1DLG1CQUFtQmQsV0FBV0csU0FBUyxJQUN2Q1ksVUFBVSxBQUFDLE9BQWdESixPQUExQ0csa0JBQWlCLDJCQUF1RUQsT0FBOUNGLGdCQUFlLGlDQUE0QyxPQUFiRSxtQkFBWSxFQUFDLE9BQ3RIRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxVQUFVbkIsV0FBV29CLFVBQVU7Z0JBRXJDcEIsYUFBYW1CLFVBQ0gsSUFBSSxDQUFDbEIsWUFBWSxDQUFDTSxRQUFRLENBQUNDLFdBQ3pCLElBQUksQ0FBQ04sY0FBYyxDQUFDSyxRQUFRLENBQUNDO2dCQUV6Q0EsUUFBUWEsS0FBSyxDQUFDLEFBQUMscUJBQWtDLE9BQWRaLGVBQWM7Z0JBRWpELE9BQU9UO1lBQ1Q7Ozs7S0FFQSwyQkFBT3NCLFFBQU8ifQ==