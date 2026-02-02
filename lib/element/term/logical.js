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
var _LogicaTerm;
var _default = (0, _elements.define)((_LogicaTerm = /*#__PURE__*/ function() {
    function LogicaTerm(string, type, disjunction, leftTerm, rightTerm) {
        _class_call_check(this, LogicaTerm);
        this.string = string;
        this.type = type;
        this.disjunction = disjunction;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(LogicaTerm, [
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
                var logicaTermString = this.string; ///
                context.trace("Evaluating the '".concat(logicaTermString, "' logical term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== _types.BOOLEAN_TYPE) {
                    var leftTermString = leftTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightTermType !== _types.BOOLEAN_TYPE) {
                    var rightTermString = rightTerm.getString(), message1 = "The '".concat(rightTermString, "' right term's type is '").concat(rightTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftTermBoolean = leftTerm.getBoolean(), rightTermBoolean = rightTerm.getBoolean(), boolean = this.disjunction ? leftTermBoolean || rightTermBoolean : leftTermBoolean && rightTermBoolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(logicaTermString, "' logical term."));
                return term;
            }
        }
    ]);
    return LogicaTerm;
}(), _define_property(_LogicaTerm, "name", "LogicaTerm"), _LogicaTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYVRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb247XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzRGlzanVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzanVuY3Rpb247XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCBsb2dpY2FUZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bG9naWNhVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1Cb29sZWFuID0gbGVmdFRlcm0uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIHJpZ2h0VGVybUJvb2xlYW4gPSByaWdodFRlcm0uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdFRlcm1Cb29sZWFuIHx8IHJpZ2h0VGVybUJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VGVybUJvb2xlYW4gJiYgcmlnaHRUZXJtQm9vbGVhbik7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtsb2dpY2FUZXJtU3RyaW5nfScgbG9naWNhbCB0ZXJtLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTG9naWNhVGVybSIsInN0cmluZyIsInR5cGUiLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzRGlzanVuY3Rpb24iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJsb2dpY2FUZXJtU3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybUJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRUZXJtQm9vbGVhbiIsImJv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