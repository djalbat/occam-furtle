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
                var leftTermBoolean = leftTerm.getBoolean(), rightTermBoolean = rightTerm.getBoolean(), boolean = this.disjunction ? leftTermBoolean || rightTermBoolean : leftTermBoolean && rightTermBoolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(logicalTermString, "' logical term."));
                return term;
            }
        }
    ]);
    return LogicalTerm;
}(), _define_property(_LogicalTerm, "name", "LogicalTerm"), _LogicalTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgbG9naWNhbFRlcm1TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1Cb29sZWFuID0gbGVmdFRlcm0uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIHJpZ2h0VGVybUJvb2xlYW4gPSByaWdodFRlcm0uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdFRlcm1Cb29sZWFuIHx8IHJpZ2h0VGVybUJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VGVybUJvb2xlYW4gJiYgcmlnaHRUZXJtQm9vbGVhbik7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxvZ2ljYWxUZXJtXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMb2dpY2FsVGVybSIsInN0cmluZyIsInR5cGUiLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzRGlzanVuY3Rpb24iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJsb2dpY2FsVGVybVN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRUZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRUZXJtU3RyaW5nIiwibGVmdFRlcm1Cb29sZWFuIiwiZ2V0Qm9vbGVhbiIsInJpZ2h0VGVybUJvb2xl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