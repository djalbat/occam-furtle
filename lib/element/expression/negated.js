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
var _types = require("../../types");
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
var _NegatedExpression;
var _default = (0, _elements.define)((_NegatedExpression = /*#__PURE__*/ function() {
    function NegatedExpression(string, type, expression) {
        _class_call_check(this, NegatedExpression);
        this.string = string;
        this.type = type;
        this.expression = expression;
    }
    _create_class(NegatedExpression, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
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
                var term;
                var negatedExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(negatedExpressionString, "' negated expression..."));
                term = this.term.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.BOOLEAN_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' left term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = term.getBoolean();
                boolean = !boolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(negatedExpressionString, "' negated expression."));
                return term;
            }
        }
    ]);
    return NegatedExpression;
}(), _define_property(_NegatedExpression, "name", "NegatedExpression"), _NegatedExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5lZ2F0ZWRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZEV4cHJlc3Npb25TdHJpbmd9JyBuZWdhdGVkIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbiA9IHRlcm0uZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZEV4cHJlc3Npb25TdHJpbmd9JyBuZWdhdGVkIGV4cHJlc3Npb24uYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOZWdhdGVkRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmVnYXRlZEV4cHJlc3Npb24iLCJzdHJpbmciLCJ0eXBlIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnNCO3dCQUVDO3FCQUNNO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7YUFBTUMsa0JBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURWSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLDBCQUEwQixJQUFJLENBQUNULE1BQU0sRUFBRSxHQUFHO2dCQUVoRE8sUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQTBDLE9BQXhCRCx5QkFBd0I7Z0JBRXpERCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDRixRQUFRLENBQUNDO2dCQUUxQixJQUFNSSxXQUFXSCxLQUFLSixPQUFPO2dCQUU3QixJQUFJTyxhQUFhQyxtQkFBWSxFQUFFO29CQUM3QixJQUFNQyxhQUFhTCxLQUFLTCxTQUFTLElBQzNCVyxVQUFVLEFBQUMsUUFBMkNILE9BQXBDRSxZQUFXLDJCQUFpRUQsT0FBeENELFVBQVMsaUNBQTRDLE9BQWJDLG1CQUFZLEVBQUMsT0FDM0dHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlHLFVBQVVWLEtBQUtXLFVBQVU7Z0JBRTdCRCxVQUFVLENBQUNBO2dCQUVYVixPQUFPWSxJQUFBQSxxQkFBZSxFQUFDRixTQUFTWDtnQkFFaENBLFFBQVFjLEtBQUssQ0FBQyxBQUFDLHFCQUE0QyxPQUF4QloseUJBQXdCO2dCQUUzRCxPQUFPRDtZQUNUOzs7O0tBRUEscUNBQU9jLFFBQU8ifQ==