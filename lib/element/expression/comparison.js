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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
var _term = require("../../utilities/term");
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
var _ComparisonExpression;
var _default = (0, _elements.define)((_ComparisonExpression = /*#__PURE__*/ function() {
    function ComparisonExpression(string, negated, leftExpression, rightExpression) {
        _class_call_check(this, ComparisonExpression);
        this.string = string;
        this.negated = negated;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(ComparisonExpression, [
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
                var comparisonExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(comparisonExpressionString, "' comparison expression..."));
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
                context.debug("...evaluated the '".concat(comparisonExpressionString, "' comparison expression."));
                return term;
            }
        }
    ]);
    return ComparisonExpression;
}(), _define_property(_ComparisonExpression, "name", "ComparisonExpression"), _ComparisonExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wYXJpc29uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uO1xuICAgIHRoaXMucmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgY29tcGFyaXNvbkV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uRXhwcmVzc2lvblN0cmluZ30nIGNvbXBhcmlzb24gZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IHJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gbGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdFRlcm1UeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0gPSBsZWZ0VGVybS5pc0VxdWFsVG8ocmlnaHRUZXJtKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29tcGFyaXNvbkV4cHJlc3Npb25TdHJpbmd9JyBjb21wYXJpc29uIGV4cHJlc3Npb24uYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvbkV4cHJlc3Npb24iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0RXhwcmVzc2lvbiIsImdldFJpZ2h0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJjb21wYXJpc29uRXhwcmVzc2lvblN0cmluZyIsInRyYWNlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHNCO3dCQUVDO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0seUNBQUM7YUFBTUMscUJBQ2RDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRGxDSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGNBQWM7WUFDNUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyw2QkFBNkIsSUFBSSxDQUFDWCxNQUFNLEVBQUUsR0FBRztnQkFFbkRTLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUE2QyxPQUEzQkQsNEJBQTJCO2dCQUU1RCxJQUFNRSxXQUFXLElBQUksQ0FBQ1gsY0FBYyxDQUFDTSxRQUFRLENBQUNDLFVBQ3hDSyxZQUFZLElBQUksQ0FBQ1gsZUFBZSxDQUFDSyxRQUFRLENBQUNDLFVBQzFDTSxlQUFlRixTQUFTRyxPQUFPLElBQy9CQyxnQkFBZ0JILFVBQVVFLE9BQU87Z0JBRXZDLElBQUlELGlCQUFpQkUsZUFBZTtvQkFDbEMsSUFBTUMsaUJBQWlCTCxTQUFTVCxTQUFTLElBQ25DZSxrQkFBa0JMLFVBQVVWLFNBQVMsSUFDckNnQixVQUFVLEFBQUMsUUFBcURMLE9BQTlDRyxnQkFBZSxpQ0FBNkRDLE9BQTlCSixjQUFhLG1CQUFpRUUsT0FBaERFLGlCQUFnQixrQ0FBOEMsT0FBZEYsZUFBYyxPQUM1SkksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsMkJBQTJCWCxTQUFTWSxTQUFTLENBQUNYO2dCQUVwRCxJQUFJWSxVQUFVRiwwQkFBMEIsR0FBRztnQkFFM0MsSUFBSSxJQUFJLENBQUN2QixPQUFPLEVBQUU7b0JBQ2hCeUIsVUFBVSxDQUFDQSxTQUFTLEdBQUc7Z0JBQ3pCO2dCQUVBaEIsT0FBT2lCLElBQUFBLHFCQUFlLEVBQUNELFNBQVNqQjtnQkFFaENBLFFBQVFtQixLQUFLLENBQUMsQUFBQyxxQkFBK0MsT0FBM0JqQiw0QkFBMkI7Z0JBRTlELE9BQU9EO1lBQ1Q7Ozs7S0FFQSx3Q0FBT21CLFFBQU8ifQ==