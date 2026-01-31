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
var _element = require("../../utilities/element");
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
                var expression;
                var negatedExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(negatedExpressionString, "' negated expression..."));
                expression = this.expression.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.BOOLEAN_TYPE) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " left expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = expression.getBoolean();
                boolean = !boolean;
                expression = (0, _element.expressionFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(negatedExpressionString, "' negated expression."));
                return expression;
            }
        }
    ]);
    return NegatedExpression;
}(), _define_property(_NegatedExpression, "name", "NegatedExpression"), _NegatedExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBleHByZXNzaW9uRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5lZ2F0ZWRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZEV4cHJlc3Npb25TdHJpbmd9JyBuZWdhdGVkIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBsZWZ0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2V4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgIGJvb2xlYW4gPSAhYm9vbGVhbjtcblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nfScgbmVnYXRlZCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZEV4cHJlc3Npb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImV4cHJlc3Npb25Gcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnNCO3dCQUVDO3FCQUNNO3VCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7YUFBTUMsa0JBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURWSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLDBCQUEwQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVoRE8sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTBDLE9BQXhCRCx5QkFBd0I7Z0JBRXpETixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxRQUFRLENBQUNDO2dCQUV0QyxJQUFNRyxpQkFBaUJSLFdBQVdFLE9BQU87Z0JBRXpDLElBQUlNLG1CQUFtQkMsbUJBQVksRUFBRTtvQkFDbkMsSUFBTUMsbUJBQW1CVixXQUFXQyxTQUFTLElBQ3ZDVSxVQUFVLEFBQUMsT0FBcURILE9BQS9DRSxrQkFBaUIsZ0NBQTRFRCxPQUE5Q0QsZ0JBQWUsaUNBQTRDLE9BQWJDLG1CQUFZLEVBQUMsT0FDM0hHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlHLFVBQVVmLFdBQVdnQixVQUFVO2dCQUVuQ0QsVUFBVSxDQUFDQTtnQkFFWGYsYUFBYWlCLElBQUFBLDhCQUFxQixFQUFDRixTQUFTVjtnQkFFNUNBLFFBQVFhLEtBQUssQ0FBQyxBQUFDLHFCQUE0QyxPQUF4QloseUJBQXdCO2dCQUUzRCxPQUFPTjtZQUNUOzs7O0tBRUEscUNBQU9tQixRQUFPIn0=