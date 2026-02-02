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
var _ComparisonTerm;
var _default = (0, _elements.define)((_ComparisonTerm = /*#__PURE__*/ function() {
    function ComparisonTerm(string, negated, leftTerm, rightTerm) {
        _class_call_check(this, ComparisonTerm);
        this.string = string;
        this.negated = negated;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(ComparisonTerm, [
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
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var comparisonTermString = this.string; ///
                context.trace("Evaluating the '".concat(comparisonTermString, "' comparison term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== rightTermType) {
                    var leftTermString = leftTerm.getString(), rightTermString = rightTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' whereas the '").concat(rightTermString, "' right term's type is '").concat(rightTermType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);
                var boolean = leftTermEqualToRightTerm; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(comparisonTermString, "' comparison term."));
                return term;
            }
        }
    ]);
    return ComparisonTerm;
}(), _define_property(_ComparisonTerm, "name", "ComparisonTerm"), _ComparisonTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21wYXJpc29uVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IHJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gbGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7bGVmdFRlcm1UeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgdGVybSdzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0gPSBsZWZ0VGVybS5pc0VxdWFsVG8ocmlnaHRUZXJtKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29tcGFyaXNvblRlcm1TdHJpbmd9JyBjb21wYXJpc29uIHRlcm0uYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvblRlcm0iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJjb21wYXJpc29uVGVybVN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRUZXJtRXF1YWxUb1JpZ2h0VGVybSIsImlzRXF1YWxUbyIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxzQjt3QkFFQztvQkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFNLG1DQUFDO2FBQU1DLGVBQ2RDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRHRCSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDWCxNQUFNLEVBQUUsR0FBRztnQkFFN0NTLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUF1QyxPQUFyQkQsc0JBQXFCO2dCQUV0RCxJQUFNVCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDTSxRQUFRLENBQUNDLFVBQ2xDTixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDSyxRQUFRLENBQUNDLFVBQ3BDSSxlQUFlWCxTQUFTWSxPQUFPLElBQy9CQyxnQkFBZ0JaLFVBQVVXLE9BQU87Z0JBRXZDLElBQUlELGlCQUFpQkUsZUFBZTtvQkFDbEMsSUFBTUMsaUJBQWlCZCxTQUFTRSxTQUFTLElBQ25DYSxrQkFBa0JkLFVBQVVDLFNBQVMsSUFDckNjLFVBQVUsQUFBQyxRQUErQ0wsT0FBeENHLGdCQUFlLDJCQUF1REMsT0FBOUJKLGNBQWEsbUJBQTJERSxPQUExQ0UsaUJBQWdCLDRCQUF3QyxPQUFkRixlQUFjLE9BQ2hKSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRywyQkFBMkJwQixTQUFTcUIsU0FBUyxDQUFDcEI7Z0JBRXBELElBQUlxQixVQUFVRiwwQkFBMEIsR0FBRztnQkFFM0MsSUFBSSxJQUFJLENBQUNyQixPQUFPLEVBQUU7b0JBQ2hCdUIsVUFBVSxDQUFDQSxTQUFTLEdBQUc7Z0JBQ3pCO2dCQUVBZCxPQUFPZSxJQUFBQSxxQkFBZSxFQUFDRCxTQUFTZjtnQkFFaENBLFFBQVFpQixLQUFLLENBQUMsQUFBQyxxQkFBeUMsT0FBckJmLHNCQUFxQjtnQkFFeEQsT0FBT0Q7WUFDVDs7OztLQUVBLGtDQUFPaUIsUUFBTyJ9