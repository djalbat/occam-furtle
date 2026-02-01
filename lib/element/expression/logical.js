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
                var term;
                var logicalExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(logicalExpressionString, "' logical expression..."));
                var leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
                if (leftExpressionType !== _types.BOOLEAN_TYPE) {
                    var leftExpressionString = leftExpression.getString(), message = "The ".concat(leftExpressionString, " left expression's type is '").concat(leftExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightExpressionType !== _types.BOOLEAN_TYPE) {
                    var rightExpressionString = rightExpression.getString(), message1 = "The ".concat(rightExpressionString, " right expression's type is '").concat(rightExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftExpressionBoolean = leftExpression.getBoolean(), rightExpressionBoolean = rightExpression.getBoolean(), boolean = this.disjunction ? leftExpressionBoolean || rightExpressionBoolean : leftExpressionBoolean && rightExpressionBoolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                context.debug("...evaluated the '".concat(logicalExpressionString, "' logical expression."));
                return term;
            }
        }
    ]);
    return LogicalExpression;
}(), _define_property(_LogicalExpression, "name", "LogicalExpression"), _LogicalExpression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uO1xuICAgIHRoaXMubGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbjtcbiAgICB0aGlzLnJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsRXhwcmVzc2lvblN0cmluZ30nIGxvZ2ljYWwgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdEV4cHJlc3Npb24gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uVHlwZSA9IGxlZnRFeHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25UeXBlID0gcmlnaHRFeHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgcmlnaHRFeHByZXNzaW9uU3RyaW5nID0gcmlnaHRFeHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gPSBsZWZ0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uQm9vbGVhbiA9IHJpZ2h0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzanVuY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gfHwgcmlnaHRFeHByZXNzaW9uQm9vbGVhbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnRFeHByZXNzaW9uQm9vbGVhbiAmJiByaWdodEV4cHJlc3Npb25Cb29sZWFuKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2xvZ2ljYWxFeHByZXNzaW9uU3RyaW5nfScgbG9naWNhbCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbEV4cHJlc3Npb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRFeHByZXNzaW9uIiwiZ2V0UmlnaHRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJsZWZ0RXhwcmVzc2lvblR5cGUiLCJyaWdodEV4cHJlc3Npb25UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdEV4cHJlc3Npb25TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodEV4cHJlc3Npb25TdHJpbmciLCJsZWZ0RXhwcmVzc2lvbkJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRFeHByZXNzaW9uQm9vbGVhbiIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5zQjt3QkFFQztxQkFDTTtvQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDO2FBQU1DLGtCQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRDVDTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxjQUFjO1lBQzVCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxlQUFlO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMsMEJBQTBCLElBQUksQ0FBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRWhEVyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBMEMsT0FBeEJELHlCQUF3QjtnQkFFekQsSUFBTVYsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDTyxRQUFRLENBQUNDLFVBQzlDUCxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNNLFFBQVEsQ0FBQ0MsVUFDaERJLHFCQUFxQlosZUFBZUcsT0FBTyxJQUMzQ1Usc0JBQXNCWixnQkFBZ0JFLE9BQU87Z0JBRW5ELElBQUlTLHVCQUF1QkUsbUJBQVksRUFBRTtvQkFDdkMsSUFBTUMsdUJBQXVCZixlQUFlRSxTQUFTLElBQy9DYyxVQUFVLEFBQUMsT0FBeURKLE9BQW5ERyxzQkFBcUIsZ0NBQWdGRCxPQUFsREYsb0JBQW1CLGlDQUE0QyxPQUFiRSxtQkFBWSxFQUFDLE9BQ25JRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJSix3QkFBd0JDLG1CQUFZLEVBQUU7b0JBQ3hDLElBQU1NLHdCQUF3Qm5CLGdCQUFnQkMsU0FBUyxJQUNqRGMsV0FBVSxBQUFDLE9BQTJESCxPQUFyRE8sdUJBQXNCLGlDQUFrRk4sT0FBbkRELHFCQUFvQixpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUN0SUcsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUksd0JBQXdCckIsZUFBZXNCLFVBQVUsSUFDakRDLHlCQUF5QnRCLGdCQUFnQnFCLFVBQVUsSUFDbkRFLFVBQVUsSUFBSSxDQUFDekIsV0FBVyxHQUNic0IseUJBQXlCRSx5QkFDdkJGLHlCQUF5QkU7Z0JBRTlDZCxPQUFPZ0IsSUFBQUEscUJBQWUsRUFBQ0QsU0FBU2hCO2dCQUVoQ0EsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLHFCQUE0QyxPQUF4QmhCLHlCQUF3QjtnQkFFM0QsT0FBT0Q7WUFDVDs7OztLQUVBLHFDQUFPa0IsUUFBTyJ9