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
var _types = require("../types");
var _primitives = require("../utilities/primitives");
var _expression = require("../utilities/expression");
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
var _Some;
var _default = (0, _elements.define)((_Some = /*#__PURE__*/ function() {
    function Some(string, variable, anonymousProcedure) {
        _class_call_check(this, Some);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Some, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var expression;
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.some(function(node) {
                    var expression;
                    expression = (0, _expression.expressionFromNode)(node, context);
                    var expressions = (0, _primitives.expressionsFromExpression)(expression, context);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    var expressionType = expression.getType();
                    if (expressionType !== _types.BOOLEAN_TYPE) {
                        var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = expression.getBoolean();
                    return boolean;
                });
                expression = (0, _expression.expressionFromBoolean)(boolean, context);
                context.trace("...evaluated the '".concat(someString, "' some."));
                return expression;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJpbWl0aXZlc1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbkZyb21Ob2RlLCBleHByZXNzaW9uRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2V4cHJlc3Npb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNvbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3Qgc29tZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IGV4cHJlc3Npb24uZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtleHByZXNzaW9uVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm9vbGVhbiA9IGV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbjtcbiAgICAgICAgICB9KTtcblxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU29tZVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU29tZSIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwic29tZVN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiYm9vbGVhbiIsInNvbWUiLCJub2RlIiwiZXhwcmVzc2lvbkZyb21Ob2RlIiwiZXhwcmVzc2lvbnMiLCJleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJleHByZXNzaW9uRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQc0I7d0JBRUM7cUJBQ2tCOzBCQUNDOzBCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFELFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRHRCSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO1lBQ2hDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLGFBQWEsSUFBSSxDQUFDTixTQUFTO2dCQUVqQ0ksUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQTZCLE9BQVhELFlBQVc7Z0JBRTVDRCxhQUFhLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxRQUFRLENBQUNDO2dCQUVwQyxJQUFNSSxpQkFBaUJILFdBQVdJLE9BQU87Z0JBRXpDLElBQUlELG1CQUFtQkUsaUJBQVUsRUFBRTtvQkFDakMsSUFBTUMsbUJBQW1CTixXQUFXTCxTQUFTLElBQ3ZDWSxVQUFVLEFBQUMsT0FBd0NKLE9BQWxDRyxrQkFBaUIsbUJBQW9ERCxPQUFuQ0YsZ0JBQWUsc0JBQStCLE9BQVhFLGlCQUFVLEVBQUMsT0FDakdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFFBQVFYLFdBQVdZLFFBQVEsSUFDM0JDLFVBQVVGLE1BQU1HLElBQUksQ0FBQyxTQUFDQztvQkFDcEIsSUFBSWY7b0JBRUpBLGFBQWFnQixJQUFBQSw4QkFBa0IsRUFBQ0QsTUFBTWhCO29CQUV0QyxJQUFNa0IsY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNsQixZQUFZRDtvQkFFMURDLGFBQWEsTUFBS04sa0JBQWtCLENBQUN5QixJQUFJLENBQUNGLGFBQWFsQjtvQkFFdkQsSUFBTUksaUJBQWlCSCxXQUFXSSxPQUFPO29CQUV6QyxJQUFJRCxtQkFBbUJpQixtQkFBWSxFQUFFO3dCQUNuQyxJQUFNZCxtQkFBbUJOLFdBQVdMLFNBQVMsSUFDdkNZLFVBQVUsQUFBQyxPQUFnREosT0FBMUNHLGtCQUFpQiwyQkFBdUVjLE9BQTlDakIsZ0JBQWUsaUNBQTRDLE9BQWJpQixtQkFBWSxFQUFDLE9BQ3RIWixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dCQUV4QyxNQUFNQztvQkFDUjtvQkFFQSxJQUFNSyxVQUFVYixXQUFXcUIsVUFBVTtvQkFFckMsT0FBT1I7Z0JBQ1Q7Z0JBRU5iLGFBQWFzQixJQUFBQSxpQ0FBcUIsRUFBQ1QsU0FBU2Q7Z0JBRTVDQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBK0IsT0FBWEQsWUFBVztnQkFFOUMsT0FBT0Q7WUFDVDs7OztLQUVBLHdCQUFPdUIsUUFBTyJ9