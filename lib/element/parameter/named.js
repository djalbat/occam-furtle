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
var _NamedParameter;
var _default = (0, _elements.define)((_NamedParameter = /*#__PURE__*/ function() {
    function NamedParameter(string, type, name, asName) {
        _class_call_check(this, NamedParameter);
        this.string = string;
        this.type = type;
        this.name = name;
        this.asName = asName;
    }
    _create_class(NamedParameter, [
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getAsName",
            value: function getAsName() {
                return this.asName;
            }
        },
        {
            key: "matchExpression",
            value: function matchExpression(expression, context) {
                var expressionString = expression.asString(context), namedParameterString = this.string; ///
                context.trace("Matching the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter..."));
                var expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFzTmFtZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFzTmFtZSA9IGFzTmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hFeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSAgYW5kICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgJyR7dGhpcy50eXBlfScgdHlwZSBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyOyAvLy9cblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQVN0cmluZyA9IG5hbWVkUGFyYW1ldGVyQS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyQlN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzTmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QXNOYW1lIiwibWF0Y2hFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsImNvbnRleHQiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFB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