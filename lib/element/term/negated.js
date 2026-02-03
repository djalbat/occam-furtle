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
var _NegatedTerm;
var _default = (0, _elements.define)((_NegatedTerm = /*#__PURE__*/ function() {
    function NegatedTerm(string, type, term) {
        _class_call_check(this, NegatedTerm);
        this.string = string;
        this.type = type;
        this.term = term;
    }
    _create_class(NegatedTerm, [
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
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var negatedTermString = this.string; ///
                context.trace("Evaluating the '".concat(negatedTermString, "' negated term..."));
                term = this.term.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.BOOLEAN_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' left term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean;
                var primitiveValue = term.getPrimitiveValue();
                boolean = primitiveValue; ///
                boolean = !boolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString1 = term.getString();
                context.debug("...evaluated the '".concat(negatedTermString, "' negated term as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return NegatedTerm;
}(), _define_property(_NegatedTerm, "name", "NegatedTerm"), _NegatedTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5lZ2F0ZWRUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRUZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0uLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbjtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpO1xuXG4gICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgIGJvb2xlYW4gPSAhYm9vbGVhbjtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5lZ2F0ZWRUZXJtIiwic3RyaW5nIiwidHlwZSIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0VGVybSIsImV2YWx1YXRlIiwiY29udGV4dCIsIm5lZ2F0ZWRUZXJtU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsInRlcm1Gcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnNCO3dCQUVDO3FCQUNNO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7YUFBTUMsWUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBREpIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSxvQkFBb0IsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFMUNPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQkQsbUJBQWtCO2dCQUVuRE4sT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0ksUUFBUSxDQUFDQztnQkFFMUIsSUFBTUcsV0FBV1IsS0FBS0UsT0FBTztnQkFFN0IsSUFBSU0sYUFBYUMsbUJBQVksRUFBRTtvQkFDN0IsSUFBTUMsYUFBYVYsS0FBS0MsU0FBUyxJQUMzQlUsVUFBVSxBQUFDLFFBQTJDSCxPQUFwQ0UsWUFBVywyQkFBaUVELE9BQXhDRCxVQUFTLGlDQUE0QyxPQUFiQyxtQkFBWSxFQUFDLE9BQzNHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJRztnQkFFSixJQUFNQyxpQkFBaUJoQixLQUFLaUIsaUJBQWlCO2dCQUU3Q0YsVUFBVUMsZ0JBQWdCLEdBQUc7Z0JBRTdCRCxVQUFVLENBQUNBO2dCQUVYZixPQUFPa0IsSUFBQUEscUJBQWUsRUFBQ0gsU0FBU1Y7Z0JBRWhDLElBQU1LLGNBQWFWLEtBQUtDLFNBQVM7Z0JBRWpDSSxRQUFRYyxLQUFLLENBQUMsQUFBQyxxQkFBMkRULE9BQXZDSixtQkFBa0IsdUJBQWdDLE9BQVhJLGFBQVc7Z0JBRXJGLE9BQU9WO1lBQ1Q7Ozs7S0FFQSwrQkFBT29CLFFBQU8ifQ==