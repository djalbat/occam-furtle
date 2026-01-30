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
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICBleHByZXNzaW9uID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJzdHJpbmciLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm5hcnlTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7cUJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBTSw0QkFBQzthQUFNQyxRQUNkQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxjQUFjO2dDQURsQ0o7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7Ozs7WUFHeEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlSO2dCQUVKLElBQU1TLGdCQUFnQixJQUFJLENBQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUV0Q1MsUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRELGVBQWM7Z0JBRS9DVCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTyxRQUFRLENBQUNDO2dCQUV0QyxJQUFNRyxpQkFBaUJYLFdBQVdZLE9BQU87Z0JBRXpDLElBQUlELG1CQUFtQkUsbUJBQVksRUFBRTtvQkFDbkMsSUFBTUMsbUJBQW1CZCxXQUFXZSxRQUFRLENBQUNQLFVBQ3ZDUSxVQUFVLEFBQUMsT0FBZ0RMLE9BQTFDRyxrQkFBaUIsMkJBQXVFRCxPQUE5Q0YsZ0JBQWUsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDdEhJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFVBQVVwQixXQUFXcUIsVUFBVTtnQkFFckNyQixhQUFhb0IsVUFDSCxJQUFJLENBQUNuQixZQUFZLENBQUNNLFFBQVEsQ0FBQ0MsV0FDekIsSUFBSSxDQUFDTixjQUFjLENBQUNLLFFBQVEsQ0FBQ0M7Z0JBRXpDQSxRQUFRYyxLQUFLLENBQUMsQUFBQyxxQkFBa0MsT0FBZGIsZUFBYztnQkFFakQsT0FBT1Q7WUFDVDs7OztLQUVBLDJCQUFPdUIsUUFBTyJ9