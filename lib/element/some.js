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
var _expressions = require("../utilities/expressions");
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
                    var expressions = (0, _expressions.expressionsFromExpression)(expression, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXhwcmVzc2lvbnNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tTm9kZSwgZXhwcmVzc2lvbkZyb21Cb29sZWFuIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9leHByZXNzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTb21lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGVzKCksXG4gICAgICAgICAgYm9vbGVhbiA9IG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNvbWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInNvbWVTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJzb21lIiwibm9kZSIsImV4cHJlc3Npb25Gcm9tTm9kZSIsImV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbiIsImNhbGwiLCJCT09MRUFOX1RZUEUiLCJnZXRCb29sZWFuIiwiZXhwcmVzc2lvbkZyb21Cb29sZWFuIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0VBUHNCO3dCQUVDO3FCQUNrQjsyQkFDQzswQkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxRCxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQUR0Qkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxhQUFhLElBQUksQ0FBQ04sU0FBUztnQkFFakNJLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYRCxZQUFXO2dCQUU1Q0QsYUFBYSxJQUFJLENBQUNQLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFcEMsSUFBTUksaUJBQWlCSCxXQUFXSSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLGlCQUFVLEVBQUU7b0JBQ2pDLElBQU1DLG1CQUFtQk4sV0FBV0wsU0FBUyxJQUN2Q1ksVUFBVSxBQUFDLE9BQXdDSixPQUFsQ0csa0JBQWlCLG1CQUFvREQsT0FBbkNGLGdCQUFlLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRWCxXQUFXWSxRQUFRLElBQzNCQyxVQUFVRixNQUFNRyxJQUFJLENBQUMsU0FBQ0M7b0JBQ3BCLElBQUlmO29CQUVKQSxhQUFhZ0IsSUFBQUEsOEJBQWtCLEVBQUNELE1BQU1oQjtvQkFFdEMsSUFBTWtCLGNBQWNDLElBQUFBLHNDQUF5QixFQUFDbEIsWUFBWUQ7b0JBRTFEQyxhQUFhLE1BQUtOLGtCQUFrQixDQUFDeUIsSUFBSSxDQUFDRixhQUFhbEI7b0JBRXZELElBQU1JLGlCQUFpQkgsV0FBV0ksT0FBTztvQkFFekMsSUFBSUQsbUJBQW1CaUIsbUJBQVksRUFBRTt3QkFDbkMsSUFBTWQsbUJBQW1CTixXQUFXTCxTQUFTLElBQ3ZDWSxVQUFVLEFBQUMsT0FBZ0RKLE9BQTFDRyxrQkFBaUIsMkJBQXVFYyxPQUE5Q2pCLGdCQUFlLGlDQUE0QyxPQUFiaUIsbUJBQVksRUFBQyxPQUN0SFosWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDt3QkFFeEMsTUFBTUM7b0JBQ1I7b0JBRUEsSUFBTUssVUFBVWIsV0FBV3FCLFVBQVU7b0JBRXJDLE9BQU9SO2dCQUNUO2dCQUVOYixhQUFhc0IsSUFBQUEsaUNBQXFCLEVBQUNULFNBQVNkO2dCQUU1Q0EsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQStCLE9BQVhELFlBQVc7Z0JBRTlDLE9BQU9EO1lBQ1Q7Ozs7S0FFQSx3QkFBT3VCLFFBQU8ifQ==