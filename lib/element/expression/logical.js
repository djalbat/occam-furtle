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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _LogicalExpression;
var _default = (0, _elements.define)((_LogicalExpression = /*#__PURE__*/ function() {
    function LogicalExpression(string, type, disjunction, leftExpression, rightExpression) {
        _class_call_check(this, LogicalExpression);
        this.string = string;
        this.type = type;
        this.disjunction = disjunction;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(LogicalExpression, [
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
            key: "getLeftExpression",
            value: function getLeftExpression() {
                return this.leftExpression;
            }
        },
        {
            key: "getRightExpression",
            value: function getRightExpression() {
                return this.rightExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var logicalExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(logicalExpressionString, "' logical expression..."));
                var Expression = _elements.default.Expression, leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
                if (leftExpressionType !== _types.BOOLEAN_TYPE) {
                    var leftExpressionString = leftExpression.asString(context), message = "The ".concat(leftExpressionString, " left expression's type is '").concat(leftExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightExpressionType !== _types.BOOLEAN_TYPE) {
                    var rightExpressionString = rightExpression.asString(context), message1 = "The ".concat(rightExpressionString, " right expression's type is '").concat(rightExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftExpressionBoolean = leftExpression.getBoolean(), rightExpressionBoolean = rightExpression.getBoolean(), boolean = this.disjunction ? leftExpressionBoolean || rightExpressionBoolean : leftExpressionBoolean && rightExpressionBoolean;
                expression = (0, _element.expressionFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(logicalExpressionString, "' logical expression."));
                return expression;
            }
        }
    ]);
    return LogicalExpression;
}(), _define_property(_LogicalExpression, "name", "LogicalExpression"), _LogicalExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBleHByZXNzaW9uRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uO1xuICAgIHRoaXMubGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbjtcbiAgICB0aGlzLnJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsRXhwcmVzc2lvblN0cmluZ30nIGxvZ2ljYWwgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IHRoaXMubGVmdEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gdGhpcy5yaWdodEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25UeXBlID0gbGVmdEV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblR5cGUgPSByaWdodEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRFeHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0RXhwcmVzc2lvblN0cmluZyA9IGxlZnRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtsZWZ0RXhwcmVzc2lvblN0cmluZ30gbGVmdCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtsZWZ0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFeHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodEV4cHJlc3Npb25TdHJpbmcgPSByaWdodEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3JpZ2h0RXhwcmVzc2lvblN0cmluZ30gcmlnaHQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7cmlnaHRFeHByZXNzaW9uVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRFeHByZXNzaW9uQm9vbGVhbiA9IGxlZnRFeHByZXNzaW9uLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25Cb29sZWFuID0gcmlnaHRFeHByZXNzaW9uLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5kaXNqdW5jdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgKGxlZnRFeHByZXNzaW9uQm9vbGVhbiB8fCByaWdodEV4cHJlc3Npb25Cb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdEV4cHJlc3Npb25Cb29sZWFuICYmIHJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4pO1xuXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bG9naWNhbEV4cHJlc3Npb25TdHJpbmd9JyBsb2dpY2FsIGV4cHJlc3Npb24uYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMb2dpY2FsRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTG9naWNhbEV4cHJlc3Npb24iLCJzdHJpbmciLCJ0eXBlIiwiZGlzanVuY3Rpb24iLCJsZWZ0RXhwcmVzc2lvbiIsInJpZ2h0RXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFR5cGUiLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0TGVmdEV4cHJlc3Npb24iLCJnZXRSaWdodEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb25TdHJpbmciLCJ0cmFjZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsImxlZnRFeHByZXNzaW9uVHlwZSIsInJpZ2h0RXhwcmVzc2lvblR5cGUiLCJCT09MRUFOX1RZUEUiLCJsZWZ0RXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRFeHByZXNzaW9uU3RyaW5nIiwibGVmdEV4cHJlc3Npb25Cb29sZWFuIiwiZ2V0Qm9vbGVhbiIsInJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4iLCJib29sZWFuIiwiZXhwcmVzc2lvbkZyb21Cb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7Z0VBQ0M7cUJBR087dUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDO2FBQU1DLGtCQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRDVDTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxjQUFjO1lBQzVCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxlQUFlO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMsMEJBQTBCLElBQUksQ0FBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRWhEVyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBMEMsT0FBeEJELHlCQUF3QjtnQkFFekQsSUFBTSxBQUFFRSxhQUFlQyxpQkFBUSxDQUF2QkQsWUFDRlosaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDTyxRQUFRLENBQUNDLFVBQzlDUCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNNLFFBQVEsQ0FBQ0MsVUFDaERNLHFCQUFxQmQsZUFBZUcsT0FBTyxJQUMzQ1ksc0JBQXNCZCxnQkFBZ0JFLE9BQU87Z0JBRW5ELElBQUlXLHVCQUF1QkUsbUJBQVksRUFBRTtvQkFDdkMsSUFBTUMsdUJBQXVCakIsZUFBZWtCLFFBQVEsQ0FBQ1YsVUFDL0NXLFVBQVUsQUFBQyxPQUF5REwsT0FBbkRHLHNCQUFxQixnQ0FBZ0ZELE9BQWxERixvQkFBbUIsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDbklJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlMLHdCQUF3QkMsbUJBQVksRUFBRTtvQkFDeEMsSUFBTU8sd0JBQXdCdEIsZ0JBQWdCaUIsUUFBUSxDQUFDVixVQUNqRFcsV0FBVSxBQUFDLE9BQTJESixPQUFyRFEsdUJBQXNCLGlDQUFrRlAsT0FBbkRELHFCQUFvQixpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUN0SUksYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUksd0JBQXdCeEIsZUFBZXlCLFVBQVUsSUFDakRDLHlCQUF5QnpCLGdCQUFnQndCLFVBQVUsSUFDbkRFLFVBQVUsSUFBSSxDQUFDNUIsV0FBVyxHQUNieUIseUJBQXlCRSx5QkFDdkJGLHlCQUF5QkU7Z0JBRTlDakIsYUFBYW1CLElBQUFBLDhCQUFxQixFQUFDRCxTQUFTbkI7Z0JBRTVDQSxRQUFRcUIsS0FBSyxDQUFDLEFBQUMscUJBQTRDLE9BQXhCbkIseUJBQXdCO2dCQUUzRCxPQUFPRDtZQUNUOzs7O0tBRUEscUNBQU9xQixRQUFPIn0=