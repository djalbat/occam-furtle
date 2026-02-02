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
                var boolean = term.getBoolean();
                term = boolean ? this.ifExpression.evaluate(context) : this.elseExpression.evaluate(context);
                context.debug("...evaluated the '".concat(ternaryString, "' ternary."));
                return term;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtLmdldEJvb2xlYW4oKTtcblxuICAgIHRlcm0gPSBib29sZWFuID9cbiAgICAgICAgICAgICAgdGhpcy5pZkV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxzZUV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5LmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybmFyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybmFyeSIsInN0cmluZyIsInRlcm0iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRJZkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybmFyeVN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7cUJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBTSw0QkFBQzthQUFNQyxRQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxjQUFjO2dDQUQ1Qko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixZQUFZO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixjQUFjO1lBQzVCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSVI7Z0JBRUosSUFBTVMsZ0JBQWdCLElBQUksQ0FBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBRXRDUyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBZ0MsT0FBZEQsZUFBYztnQkFFL0NULE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNPLFFBQVEsQ0FBQ0M7Z0JBRTFCLElBQU1HLFdBQVdYLEtBQUtZLE9BQU87Z0JBRTdCLElBQUlELGFBQWFFLG1CQUFZLEVBQUU7b0JBQzdCLElBQU1DLGFBQWFkLEtBQUtHLFNBQVMsSUFDM0JZLFVBQVUsQUFBQyxRQUFzQ0osT0FBL0JHLFlBQVcsc0JBQTRERCxPQUF4Q0YsVUFBUyxpQ0FBNEMsT0FBYkUsbUJBQVksRUFBQyxPQUN0R0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsVUFBVW5CLEtBQUtvQixVQUFVO2dCQUUvQnBCLE9BQU9tQixVQUNHLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ00sUUFBUSxDQUFDQyxXQUN6QixJQUFJLENBQUNOLGNBQWMsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFekNBLFFBQVFhLEtBQUssQ0FBQyxBQUFDLHFCQUFrQyxPQUFkWixlQUFjO2dCQUVqRCxPQUFPVDtZQUNUOzs7O0tBRUEsMkJBQU9zQixRQUFPIn0=