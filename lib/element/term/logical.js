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
var _LogicalTerm;
var _default = (0, _elements.define)((_LogicalTerm = /*#__PURE__*/ function() {
    function LogicalTerm(string, type, disjunction, leftTerm, rightTerm) {
        _class_call_check(this, LogicalTerm);
        this.string = string;
        this.type = type;
        this.disjunction = disjunction;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(LogicalTerm, [
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
            key: "isDisjunction",
            value: function isDisjunction() {
                return this.disjunction;
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
                var logicalTermString = this.string; ///
                context.trace("Evaluating the '".concat(logicalTermString, "' logical term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== _types.BOOLEAN_TYPE) {
                    var leftTermString = leftTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightTermType !== _types.BOOLEAN_TYPE) {
                    var rightTermString = rightTerm.getString(), message1 = "The '".concat(rightTermString, "' right term's type is '").concat(rightTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftTermPrimitiveValue = leftTerm.getPrimitiveValue(), rightTermPrimitiveValue = rightTerm.getPrimitiveValue(), leftBoolean = leftTermPrimitiveValue, rightBoolean = rightTermPrimitiveValue, boolean = this.disjunction ? leftBoolean || rightBoolean : leftBoolean && rightBoolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(logicalTermString, "' logical term as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return LogicalTerm;
}(), _define_property(_LogicalTerm, "name", "LogicalTerm"), _LogicalTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgbG9naWNhbFRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1QcmltaXRpdmVWYWx1ZSA9IGxlZnRUZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUgPSByaWdodFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBsZWZ0Qm9vbGVhbiA9bGVmdFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgcmlnaHRCb29sZWFuID0gcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gfHwgcmlnaHRCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gJiYgcmlnaHRCb29sZWFuKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bG9naWNhbFRlcm1TdHJpbmd9JyBsb2dpY2FsIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxUZXJtIiwic3RyaW5nIiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImxvZ2ljYWxUZXJtU3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJyaWdodFRlcm1QcmltaXRpdmVWYWx1ZSIsImxlZnRCb29sZWFuIiwicmlnaHRCb29sZWFuIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5zQjt3QkFFQztxQkFDTTtvQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFNLGdDQUFDO2FBQU1DLFlBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEaENMO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDYixNQUFNLEVBQUUsR0FBRztnQkFFMUNXLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQkQsbUJBQWtCO2dCQUVuRCxJQUFNVixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDTyxRQUFRLENBQUNDLFVBQ2xDUCxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDTSxRQUFRLENBQUNDLFVBQ3BDSSxlQUFlWixTQUFTRyxPQUFPLElBQy9CVSxnQkFBZ0JaLFVBQVVFLE9BQU87Z0JBRXZDLElBQUlTLGlCQUFpQkUsbUJBQVksRUFBRTtvQkFDakMsSUFBTUMsaUJBQWlCZixTQUFTRSxTQUFTLElBQ25DYyxVQUFVLEFBQUMsUUFBK0NKLE9BQXhDRyxnQkFBZSwyQkFBcUVELE9BQTVDRixjQUFhLGlDQUE0QyxPQUFiRSxtQkFBWSxFQUFDLE9BQ25IRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJSixrQkFBa0JDLG1CQUFZLEVBQUU7b0JBQ2xDLElBQU1NLGtCQUFrQm5CLFVBQVVDLFNBQVMsSUFDckNjLFdBQVUsQUFBQyxRQUFpREgsT0FBMUNPLGlCQUFnQiw0QkFBdUVOLE9BQTdDRCxlQUFjLGlDQUE0QyxPQUFiQyxtQkFBWSxFQUFDLE9BQ3RIRyxhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNSSx5QkFBeUJyQixTQUFTc0IsaUJBQWlCLElBQ25EQywwQkFBMEJ0QixVQUFVcUIsaUJBQWlCLElBQ3JERSxjQUFhSCx3QkFDYkksZUFBZUYseUJBQ2ZHLFVBQVUsSUFBSSxDQUFDM0IsV0FBVyxHQUNieUIsZUFBZUMsZUFDYkQsZUFBZUM7Z0JBRXBDaEIsT0FBT2tCLElBQUFBLHFCQUFlLEVBQUNELFNBQVNsQjtnQkFFaEMsSUFBTW9CLGFBQWFuQixLQUFLUCxTQUFTO2dCQUVqQ00sUUFBUXFCLEtBQUssQ0FBQyxBQUFDLHFCQUEyREQsT0FBdkNsQixtQkFBa0IsdUJBQWdDLE9BQVhrQixZQUFXO2dCQUVyRixPQUFPbkI7WUFDVDs7OztLQUVBLCtCQUFPcUIsUUFBTyJ9