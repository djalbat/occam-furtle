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
            value: function call(expressions, context) {
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                this.parameters.matchExpressions(expressions, context);
                var variables = (0, _procedure.variablesFromExpressionsAndParameters)(expressions, this.parameters, context), expression = this.returnBlock.evaluate(variables, context), expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type and the '").concat(anonymousProcedureString, "' anonymous procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
                return expression;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbChleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaEV4cHJlc3Npb25zKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFBhcmFtZXRlcnMiLCJwYXJhbXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImNhbGwiLCJleHByZXNzaW9ucyIsImNvbnRleHQiLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1hdGNoRXhwcmVzc2lvbnMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tRXhwcmVzc2lvbnNBbmRQYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiZXhwcmVzc2lvblR5cGUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMc0I7d0JBRUM7eUJBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEQsV0FBZUEsSUFBQUEsZ0JBQU0sdUNBQUM7YUFBTUMsbUJBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRHZCSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLFNBQVM7WUFDdkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsV0FBVyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDWixNQUFNLEVBQUUsR0FBRztnQkFFakRXLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGdCQUF3QyxPQUF6QkQsMEJBQXlCO2dCQUV2RCxJQUFJLENBQUNWLFVBQVUsQ0FBQ1ksZ0JBQWdCLENBQUNKLGFBQWFDO2dCQUU5QyxJQUFNSSxZQUFZQyxJQUFBQSxnREFBcUMsRUFBQ04sYUFBYSxJQUFJLENBQUNSLFVBQVUsRUFBRVMsVUFDaEZNLGFBQWEsSUFBSSxDQUFDZCxXQUFXLENBQUNlLFFBQVEsQ0FBQ0gsV0FBV0osVUFDbERRLGlCQUFpQkYsV0FBV1osT0FBTztnQkFFekMsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBS2tCLGdCQUFnQjtvQkFDaEMsSUFBTUMsbUJBQW1CSCxXQUFXYixTQUFTLElBQ3ZDaUIsVUFBVSxBQUFDLE9BQXdDRixPQUFsQ0Msa0JBQWlCLG1CQUFrRFIsT0FBakNPLGdCQUFlLG9CQUFzRSxPQUFwRFAsMEJBQXlCLDZCQUFxQyxPQUFWLElBQUksQ0FBQ1gsSUFBSSxFQUFDLDBCQUNsSnFCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBWCxRQUFRYyxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJiLDBCQUF5QjtnQkFFekQsT0FBT0s7WUFDVDs7OztLQUVBLHNDQUFPUyxRQUFPIn0=