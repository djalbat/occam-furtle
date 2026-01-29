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
var _BitwiseExpression;
var _default = (0, _elements.define)((_BitwiseExpression = /*#__PURE__*/ function() {
    function BitwiseExpression(string, type, disjection, leftExpression, rightExpression) {
        _class_call_check(this, BitwiseExpression);
        this.string = string;
        this.type = type;
        this.disjection = disjection;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(BitwiseExpression, [
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
                return this.disjection;
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
                var bitwiseExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(bitwiseExpressionString, "' bitwise expression..."));
                var Expression = _elements.default.Expression, leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
                if (leftExpressionType !== _types.BOOLEAN_TYPE) {
                    var leftExpressionString = leftExpression.asString(context), message = "The ".concat(leftExpressionString, " left expression's type is '").concat(leftExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightExpressionType !== _types.BOOLEAN_TYPE) {
                    var rightExpressionString = rightExpression.asString(context), message1 = "The ".concat(rightExpressionString, " right expression's type is '").concat(rightExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftExpressionBoolean = leftExpression.getBoolean(), rightExpressionBoolean = rightExpression.getBoolean(), boolean = this.disjection ? leftExpressionBoolean || rightExpressionBoolean : leftExpressionBoolean && rightExpressionBoolean;
                expression = Expression.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(bitwiseExpressionString, "' bitwise expression."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var bitwiseExpression = null;
                var bitwiseExpressionNode = expressionNode.getBitwiseExpressionNode();
                if (bitwiseExpressionNode !== null) {
                    bitwiseExpression = bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context);
                }
                return bitwiseExpression;
            }
        }
    ]);
    return BitwiseExpression;
}(), _define_property(_BitwiseExpression, "name", "BitwiseExpression"), _BitwiseExpression));
function bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
    var Expression = _elements.default.Expression, BitwiseExpression = _elements.default.BitwiseExpression, leftExpressionNode = bitwiseExpressionNode.getLeftExpressionNode(), rightExpressionNode = bitwiseExpressionNode.getRightExpressionNode(), type = _types.BOOLEAN_TYPE, disjection = disjunctionFromBitwiseExpressionNode(bitwiseExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), string = (0, _string.bitwiseExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression)(disjection, leftExpression, rightExpression, context), bitwiseExpression = new BitwiseExpression(string, type, disjection, leftExpression, rightExpression);
    return bitwiseExpression;
}
function disjunctionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
    var disjection = bitwiseExpressionNode.isDisjunction();
    return disjection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBiaXR3aXNlRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBCaXR3aXNlRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgZGlzamVjdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kaXNqZWN0aW9uID0gZGlzamVjdGlvbjtcbiAgICB0aGlzLmxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb247XG4gICAgdGhpcy5yaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqZWN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgYml0d2lzZUV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtiaXR3aXNlRXhwcmVzc2lvblN0cmluZ30nIGJpdHdpc2UgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IHRoaXMubGVmdEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gdGhpcy5yaWdodEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25UeXBlID0gbGVmdEV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblR5cGUgPSByaWdodEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRFeHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0RXhwcmVzc2lvblN0cmluZyA9IGxlZnRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtsZWZ0RXhwcmVzc2lvblN0cmluZ30gbGVmdCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtsZWZ0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFeHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodEV4cHJlc3Npb25TdHJpbmcgPSByaWdodEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3JpZ2h0RXhwcmVzc2lvblN0cmluZ30gcmlnaHQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7cmlnaHRFeHByZXNzaW9uVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRFeHByZXNzaW9uQm9vbGVhbiA9IGxlZnRFeHByZXNzaW9uLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25Cb29sZWFuID0gcmlnaHRFeHByZXNzaW9uLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5kaXNqZWN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEV4cHJlc3Npb25Cb29sZWFuIHx8IHJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gJiYgcmlnaHRFeHByZXNzaW9uQm9vbGVhbik7XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtiaXR3aXNlRXhwcmVzc2lvblN0cmluZ30nIGJpdHdpc2UgZXhwcmVzc2lvbi5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJpdHdpc2VFeHByZXNzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBiaXR3aXNlRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBjb25zdCBiaXR3aXNlRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCaXR3aXNlRXhwcmVzc2lvbk5vZGUoKTtcblxuICAgIGlmIChiaXR3aXNlRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gYml0d2lzZUV4cHJlc3Npb25Gcm9tQml0d2lzZUV4cHJlc3Npb25Ob2RlKGJpdHdpc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpdHdpc2VFeHByZXNzaW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYml0d2lzZUV4cHJlc3Npb25Gcm9tQml0d2lzZUV4cHJlc3Npb25Ob2RlKGJpdHdpc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24sIEJpdHdpc2VFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gYml0d2lzZUV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gYml0d2lzZUV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgZGlzamVjdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBiaXR3aXNlRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihkaXNqZWN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgYml0d2lzZUV4cHJlc3Npb24gPSBuZXcgQml0d2lzZUV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBkaXNqZWN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gYml0d2lzZUV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzamVjdGlvbiA9IGJpdHdpc2VFeHByZXNzaW9uTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2plY3Rpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQml0d2lzZUV4cHJlc3Npb24iLCJzdHJpbmciLCJ0eXBlIiwiZGlzamVjdGlvbiIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzRGlzanVuY3Rpb24iLCJnZXRMZWZ0RXhwcmVzc2lvbiIsImdldFJpZ2h0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJiaXR3aXNlRXhwcmVzc2lvblN0cmluZyIsInRyYWNlIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwibGVmdEV4cHJlc3Npb25UeXBlIiwicmlnaHRFeHByZXNzaW9uVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRFeHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodEV4cHJlc3Npb25TdHJpbmciLCJsZWZ0RXhwcmVzc2lvbkJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRFeHByZXNzaW9uQm9vbGVhbiIsImJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJiaXR3aXNlRXhwcmVzc2lvbiIsImJpdHdpc2VFeHByZXNzaW9uTm9kZSIsImdldEJpdHdpc2VFeHByZXNzaW9uTm9kZSIsImJpdHdpc2VFeHByZXNzaW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZSIsImJpdHdpc2VFeHByZXNzaW9uU3RyaW5nRnJvbVR5cGVEaXNqdW5jdGlvbkxlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7Z0VBQ0M7cUJBR087c0JBQzhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRixXQUFlQSxJQUFBQSxnQkFBTSxzQ0FBQzthQUFNQyxrQkFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQUQzQ0w7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxD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