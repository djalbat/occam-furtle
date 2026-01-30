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
                expression = Expression.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(logicalExpressionString, "' logical expression."));
                return expression;
            }
        }
    ]);
    return LogicalExpression;
}(), _define_property(_LogicalExpression, "name", "LogicalExpression"), _LogicalExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMb2dpY2FsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbjtcbiAgICB0aGlzLmxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb247XG4gICAgdGhpcy5yaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bG9naWNhbEV4cHJlc3Npb25TdHJpbmd9JyBsb2dpY2FsIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb24gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uVHlwZSA9IGxlZnRFeHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25UeXBlID0gcmlnaHRFeHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgcmlnaHRFeHByZXNzaW9uU3RyaW5nID0gcmlnaHRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gPSBsZWZ0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uQm9vbGVhbiA9IHJpZ2h0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzanVuY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gfHwgcmlnaHRFeHByZXNzaW9uQm9vbGVhbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnRFeHByZXNzaW9uQm9vbGVhbiAmJiByaWdodEV4cHJlc3Npb25Cb29sZWFuKTtcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2xvZ2ljYWxFeHByZXNzaW9uU3RyaW5nfScgbG9naWNhbCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbEV4cHJlc3Npb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRFeHByZXNzaW9uIiwiZ2V0UmlnaHRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJsZWZ0RXhwcmVzc2lvblR5cGUiLCJyaWdodEV4cHJlc3Npb25UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdEV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInJpZ2h0RXhwcmVzc2lvblN0cmluZyIsImxlZnRFeHByZXNzaW9uQm9vbGVhbiIsImdldEJvb2xlYW4iLCJyaWdodEV4cHJlc3Npb25Cb29sZWFuIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7cUJBR087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDO2FBQU1DLGtCQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRDVDTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxjQUFjO1lBQzVCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxlQUFlO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMsMEJBQTBCLElBQUksQ0FBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRWhEVyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBMEMsT0FBeEJELHlCQUF3QjtnQkFFekQsSUFBTSxBQUFFRSxhQUFlQyxpQkFBUSxDQUF2QkQsWUFDRlosaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDTyxRQUFRLENBQUNDLFVBQzlDUCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNNLFFBQVEsQ0FBQ0MsVUFDaERNLHFCQUFxQmQsZUFBZUcsT0FBTyxJQUMzQ1ksc0JBQXNCZCxnQkFBZ0JFLE9BQU87Z0JBRW5ELElBQUlXLHVCQUF1QkUsbUJBQVksRUFBRTtvQkFDdkMsSUFBTUMsdUJBQXVCakIsZUFBZWtCLFFBQVEsQ0FBQ1YsVUFDL0NXLFVBQVUsQUFBQyxPQUF5REwsT0FBbkRHLHNCQUFxQixnQ0FBZ0ZELE9BQWxERixvQkFBbUIsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDbklJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlMLHdCQUF3QkMsbUJBQVksRUFBRTtvQkFDeEMsSUFBTU8sd0JBQXdCdEIsZ0JBQWdCaUIsUUFBUSxDQUFDVixVQUNqRFcsV0FBVSxBQUFDLE9BQTJESixPQUFyRFEsdUJBQXNCLGlDQUFrRlAsT0FBbkRELHFCQUFvQixpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUN0SUksYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUksd0JBQXdCeEIsZUFBZXlCLFVBQVUsSUFDakRDLHlCQUF5QnpCLGdCQUFnQndCLFVBQVUsSUFDbkRFLFVBQVUsSUFBSSxDQUFDNUIsV0FBVyxHQUNieUIseUJBQXlCRSx5QkFDdkJGLHlCQUF5QkU7Z0JBRTlDakIsYUFBYUcsV0FBV2dCLFdBQVcsQ0FBQ0QsU0FBU25CLFVBQVcsR0FBRztnQkFFM0RBLFFBQVFxQixLQUFLLENBQUMsQUFBQyxxQkFBNEMsT0FBeEJuQix5QkFBd0I7Z0JBRTNELE9BQU9EO1lBQ1Q7Ozs7S0FFQSxxQ0FBT3FCLFFBQU8ifQ==