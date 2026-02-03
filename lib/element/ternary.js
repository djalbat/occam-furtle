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
    function Ternary(string, term, ifExpression, elseExpression) {
        _class_call_check(this, Ternary);
        this.string = string;
        this.term = term;
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
            key: "getTerm",
            value: function getTerm() {
                return this.term;
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
                var term;
                var ternaryString = this.string; ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                term = this.term.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.BOOLEAN_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), boolean = primitiveValue; ///
                term = boolean ? this.ifExpression.evaluate(context) : this.elseExpression.evaluate(context);
                var termString1 = term.getString();
                context.debug("...evaluated the '".concat(ternaryString, "' ternary as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICB0ZXJtID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJzdHJpbmciLCJ0ZXJtIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm5hcnlTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwiYm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHNCO3dCQUVDO3FCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sNEJBQUM7YUFBTUMsUUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsY0FBYztnQ0FENUJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7Ozs7WUFHeEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlSO2dCQUVKLElBQU1TLGdCQUFnQixJQUFJLENBQUNWLE1BQU0sRUFBRSxHQUFHO2dCQUV0Q1MsUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRELGVBQWM7Z0JBRS9DVCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDTyxRQUFRLENBQUNDO2dCQUUxQixJQUFNRyxXQUFXWCxLQUFLWSxPQUFPO2dCQUU3QixJQUFJRCxhQUFhRSxtQkFBWSxFQUFFO29CQUM3QixJQUFNQyxhQUFhZCxLQUFLRyxTQUFTLElBQzNCWSxVQUFVLEFBQUMsUUFBc0NKLE9BQS9CRyxZQUFXLHNCQUE0REQsT0FBeENGLFVBQVMsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDdEdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGlCQUFpQm5CLEtBQUtvQixpQkFBaUIsSUFDdkNDLFVBQVVGLGdCQUFnQixHQUFHO2dCQUVuQ25CLE9BQU9xQixVQUNHLElBQUksQ0FBQ3BCLFlBQVksQ0FBQ00sUUFBUSxDQUFDQyxXQUN6QixJQUFJLENBQUNOLGNBQWMsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFekMsSUFBTU0sY0FBYWQsS0FBS0csU0FBUztnQkFFakNLLFFBQVFjLEtBQUssQ0FBQyxBQUFDLHFCQUFrRFIsT0FBOUJMLGVBQWMsa0JBQTJCLE9BQVhLLGFBQVc7Z0JBRTVFLE9BQU9kO1lBQ1Q7Ozs7S0FFQSwyQkFBT3VCLFFBQU8ifQ==