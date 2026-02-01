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
var _procedure = require("../procedure");
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
var _AnonymousProcedure;
var _default = (0, _elements.define)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, type, parameters, returnBlock) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.type = type;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    _create_class(AnonymousProcedure, [
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
            key: "getParameters",
            value: function getParameters() {
                return this.paramters;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "call",
            value: function call(terms, context) {
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                this.parameters.matchTerms(terms, context);
                var variables = (0, _procedure.variablesFromTermsAndParameters)(terms, this.parameters, context), term = this.returnBlock.evaluate(variables, context), termType = term.getType();
                if (this.type !== termType) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type and the '").concat(anonymousProcedureString, "' anonymous procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
                return term;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbCh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnModGVybXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBbm9ueW1vdXNQcm9jZWR1cmVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZyIsInR5cGUiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UGFyYW1ldGVycyIsInBhcmFtdGVycyIsImdldFJldHVybkJsb2NrIiwiY2FsbCIsInRlcm1zIiwiY29udGV4dCIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hUZXJtcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21UZXJtc0FuZFBhcmFtZXRlcnMiLCJ0ZXJtIiwiZXZhbHVhdGUiLCJ0ZXJtVHlwZSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxzQjt3QkFFQzt5QkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRCxXQUFlQSxJQUFBQSxnQkFBTSx1Q0FBQzthQUFNQyxtQkFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEdkJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsU0FBUztZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxLQUFLLEVBQUVDLE9BQU87Z0JBQ2pCLElBQU1DLDJCQUEyQixJQUFJLENBQUNaLE1BQU0sRUFBRSxHQUFHO2dCQUVqRFcsUUFBUUUsS0FBSyxDQUFDLEFBQUMsZ0JBQXdDLE9BQXpCRCwwQkFBeUI7Z0JBRXZELElBQUksQ0FBQ1YsVUFBVSxDQUFDWSxVQUFVLENBQUNKLE9BQU9DO2dCQUVsQyxJQUFNSSxZQUFZQyxJQUFBQSwwQ0FBK0IsRUFBQ04sT0FBTyxJQUFJLENBQUNSLFVBQVUsRUFBRVMsVUFDcEVNLE9BQU8sSUFBSSxDQUFDZCxXQUFXLENBQUNlLFFBQVEsQ0FBQ0gsV0FBV0osVUFDNUNRLFdBQVdGLEtBQUtaLE9BQU87Z0JBRTdCLElBQUksSUFBSSxDQUFDSixJQUFJLEtBQUtrQixVQUFVO29CQUMxQixJQUFNQyxhQUFhSCxLQUFLYixTQUFTLElBQzNCaUIsVUFBVSxBQUFDLFFBQThCRixPQUF2QkMsWUFBVyxjQUF1Q1IsT0FBM0JPLFVBQVMsb0JBQXNFLE9BQXBEUCwwQkFBeUIsNkJBQXFDLE9BQVYsSUFBSSxDQUFDWCxJQUFJLEVBQUMsMEJBQ2xJcUIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFYLFFBQVFjLEtBQUssQ0FBQyxBQUFDLGtCQUEwQyxPQUF6QmIsMEJBQXlCO2dCQUV6RCxPQUFPSztZQUNUOzs7O0tBRUEsc0NBQU9TLFFBQU8ifQ==