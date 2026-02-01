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
var _term = require("../utilities/term");
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
var _Comparison;
var _default = (0, _elements.define)((_Comparison = /*#__PURE__*/ function() {
    function Comparison(string, negated, leftExpression, rightExpression) {
        _class_call_check(this, Comparison);
        this.string = string;
        this.negated = negated;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(Comparison, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "getLeftExpression",
            value: function getLeftExpression() {
                return this.leftExpression;
            }
        },
        {
            key: "getRightExpression",
            value: function getRightExpression() {
                return this.rightExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var comparisonString = this.string; ///
                context.trace("Evaluating the '".concat(comparisonString, "' comparison..."));
                var leftTerm = this.leftExpression.evaluate(context), rightTerm = this.rightExpression.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== rightTermType) {
                    var leftTermString = leftTerm.getString(), rightTermString = rightTerm.getString(), message = "The '".concat(leftTermString, "' left expression's type is '").concat(leftTermType, "' whereas the '").concat(rightTermString, "' right expression's type is '").concat(rightTermType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);
                var boolean = leftTermEqualToRightTerm; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(comparisonString, "' comparison."));
                return term;
            }
        }
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbXBhcmlzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tQm9vbGVhbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uO1xuICAgIHRoaXMucmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybSA9IHRoaXMubGVmdEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZSAhPT0gcmlnaHRUZXJtVHlwZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVyZWFzIHRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRUZXJtRXF1YWxUb1JpZ2h0VGVybSA9IGxlZnRUZXJtLmlzRXF1YWxUbyhyaWdodFRlcm0pO1xuXG4gICAgbGV0IGJvb2xlYW4gPSBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm07IC8vL1xuXG4gICAgaWYgKHRoaXMubmVnYXRlZCkge1xuICAgICAgYm9vbGVhbiA9ICFib29sZWFuOyAvLy9cbiAgICB9XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb21wYXJpc29uU3RyaW5nfScgY29tcGFyaXNvbi5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBhcmlzb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbXBhcmlzb24iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0RXhwcmVzc2lvbiIsImdldFJpZ2h0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJjb21wYXJpc29uU3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1TdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0iLCJpc0VxdWFsVG8iLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7b0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoQyxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQURsQ0o7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixjQUFjO1lBQzVCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBRXpDUyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBbUMsT0FBakJELGtCQUFpQjtnQkFFbEQsSUFBTUUsV0FBVyxJQUFJLENBQUNYLGNBQWMsQ0FBQ00sUUFBUSxDQUFDQyxVQUN4Q0ssWUFBWSxJQUFJLENBQUNYLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDQyxVQUMxQ00sZUFBZUYsU0FBU0csT0FBTyxJQUMvQkMsZ0JBQWdCSCxVQUFVRSxPQUFPO2dCQUV2QyxJQUFJRCxpQkFBaUJFLGVBQWU7b0JBQ2xDLElBQU1DLGlCQUFpQkwsU0FBU1QsU0FBUyxJQUNuQ2Usa0JBQWtCTCxVQUFVVixTQUFTLElBQ3JDZ0IsVUFBVSxBQUFDLFFBQXFETCxPQUE5Q0csZ0JBQWUsaUNBQTZEQyxPQUE5QkosY0FBYSxtQkFBaUVFLE9BQWhERSxpQkFBZ0Isa0NBQThDLE9BQWRGLGVBQWMsT0FDNUpJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLDJCQUEyQlgsU0FBU1ksU0FBUyxDQUFDWDtnQkFFcEQsSUFBSVksVUFBVUYsMEJBQTBCLEdBQUc7Z0JBRTNDLElBQUksSUFBSSxDQUFDdkIsT0FBTyxFQUFFO29CQUNoQnlCLFVBQVUsQ0FBQ0EsU0FBUyxHQUFHO2dCQUN6QjtnQkFFQWhCLE9BQU9pQixJQUFBQSxxQkFBZSxFQUFDRCxTQUFTakI7Z0JBRWhDQSxRQUFRbUIsS0FBSyxDQUFDLEFBQUMscUJBQXFDLE9BQWpCakIsa0JBQWlCO2dCQUVwRCxPQUFPRDtZQUNUOzs7O0tBRUEsOEJBQU9tQixRQUFPIn0=