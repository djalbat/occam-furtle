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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
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
var _ProcedureCall;
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, expressions) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.expressions = expressions;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getExpressions",
            value: function getExpressions() {
                return this.expressions;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.reference.getName();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var procedureCallString = this.string; ///
                context.trace("Evaluating the '".concat(procedureCallString, "' procedure call..."));
                var name = this.getName(), procedurePresent = context.isProcedurePresentByName(name);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var procedure = context.findProcedureByName(name), expressions = this.expressions.evaluate(context), expression = procedure.call(expressions, context);
                context.debug("...evaluated the '".concat(procedureCallString, "' procedure call."));
                return expression;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZUNhbGwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE5hbWUoKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gdGhpcy5leHByZXNzaW9ucy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwiZXhwcmVzc2lvbnMiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRFeHByZXNzaW9ucyIsImdldE5hbWUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJleHByZXNzaW9uIiwiY2FsbCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnRUFKc0I7d0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxrQ0FBQzthQUFNQyxjQUNkQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVztnQ0FEaEJIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0wsU0FBUyxDQUFDSyxPQUFPO1lBQUk7OztZQUU3Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ1QsTUFBTSxFQUFHLEdBQUc7Z0JBRTdDUSxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBc0MsT0FBcEJELHFCQUFvQjtnQkFFckQsSUFBTUUsT0FBTyxJQUFJLENBQUNMLE9BQU8sSUFDbkJNLG1CQUFtQkosUUFBUUssd0JBQXdCLENBQUNGO2dCQUUxRCxJQUFJLENBQUNDLGtCQUFrQjtvQkFDckIsSUFBTUUsVUFBVSxBQUFDLFFBQTJCLE9BQXBCTCxxQkFBb0IsZ0NBQ3RDTSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxZQUFZVixRQUFRVyxtQkFBbUIsQ0FBQ1IsT0FDeENULGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNLLFFBQVEsQ0FBQ0MsVUFDeENZLGFBQWFGLFVBQVVHLElBQUksQ0FBQ25CLGFBQWFNO2dCQUUvQ0EsUUFBUWMsS0FBSyxDQUFDLEFBQUMscUJBQXdDLE9BQXBCYixxQkFBb0I7Z0JBRXZELE9BQU9XO1lBQ1Q7Ozs7S0FFQSxpQ0FBT1QsUUFBTyJ9