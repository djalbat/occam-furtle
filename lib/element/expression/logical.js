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
var _string = require("../../utilities/string");
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
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var logicalExpression = null;
                var logicalExpressionNode = expressionNode.getLogicalExpressionNode();
                if (logicalExpressionNode !== null) {
                    logicalExpression = logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context);
                }
                return logicalExpression;
            }
        }
    ]);
    return LogicalExpression;
}(), _define_property(_LogicalExpression, "name", "LogicalExpression"), _LogicalExpression));
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var Expression = _elements.default.Expression, LogicalExpression = _elements.default.LogicalExpression, leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(), rightExpressionNode = logicalExpressionNode.getRightExpressionNode(), type = _types.BOOLEAN_TYPE, disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), string = (0, _string.logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression)(disjunction, leftExpression, rightExpression, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function disjunctionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var disjunction = logicalExpressionNode.isDisjunction();
    return disjunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBsb2dpY2FsRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMb2dpY2FsRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbjtcbiAgICB0aGlzLmxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb247XG4gICAgdGhpcy5yaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bG9naWNhbEV4cHJlc3Npb25TdHJpbmd9JyBsb2dpY2FsIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb24gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uVHlwZSA9IGxlZnRFeHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25UeXBlID0gcmlnaHRFeHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgcmlnaHRFeHByZXNzaW9uU3RyaW5nID0gcmlnaHRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gPSBsZWZ0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uQm9vbGVhbiA9IHJpZ2h0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzanVuY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gfHwgcmlnaHRFeHByZXNzaW9uQm9vbGVhbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnRFeHByZXNzaW9uQm9vbGVhbiAmJiByaWdodEV4cHJlc3Npb25Cb29sZWFuKTtcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2xvZ2ljYWxFeHByZXNzaW9uU3RyaW5nfScgbG9naWNhbCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbEV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gICAgaWYgKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICB0eXBlID0gQk9PTEVBTl9UWVBFLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBsb2dpY2FsRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImRpc2p1bmN0aW9uIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqdW5jdGlvbiIsImdldExlZnRFeHByZXNzaW9uIiwiZ2V0UmlnaHRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJsZWZ0RXhwcmVzc2lvblR5cGUiLCJyaWdodEV4cHJlc3Npb25UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdEV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInJpZ2h0RXhwcmVzc2lvblN0cmluZyIsImxlZnRFeHByZXNzaW9uQm9vbGVhbiIsImdldEJvb2xlYW4iLCJyaWdodEV4cHJlc3Npb25Cb29sZWFuIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibmFtZSIsImxlZnRFeHByZXNzaW9uTm9kZSIsImdldExlZnRFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJnZXRSaWdodEV4cHJlc3Npb25Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dFQVBxQjtnRUFDQztxQkFHTztzQkFDOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNGLFdBQWVBLElBQUFBLGdCQUFNLHNDQUFDO2FBQU1DLGtCQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRDVDTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7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