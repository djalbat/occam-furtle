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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
var _types = require("../types");
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
var _Ternary;
var ifExpressionNodeQuery = (0, _query.nodeQuery)("/ternary/expression[1]"), elseExpressionNodeQuery = (0, _query.nodeQuery)("/ternary/expression[2]"), expressionTernaryNodeQuery = (0, _query.nodeQuery)("/expression/ternary");
var _default = (0, _elements.define)((_Ternary = /*#__PURE__*/ function() {
    function Ternary(string, expression, ifExpression, elseExpression) {
        _class_call_check(this, Ternary);
        this.string = string;
        this.expression = expression;
        this.ifExpression = ifExpression;
        this.elseExpression = elseExpression;
    }
    _create_class(Ternary, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "getIfBlock",
            value: function getIfBlock() {
                return this.ifExpression;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var ternaryString = this.string; ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                expression = this.expression.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.BOOLEAN_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = expression.getBoolean();
                expression = boolean ? this.ifExpression.evaluate(context) : this.elseExpression.evaluate(context);
                context.debug("...evaluated the '".concat(ternaryString, "' ternary."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var ternary = null;
                var expressionTernaryNode = expressionTernaryNodeQuery(expressionNode);
                if (expressionTernaryNode !== null) {
                    var ternaryNode = expressionTernaryNode; ///
                    ternary = ternaryFromTernaryNode(ternaryNode, context);
                }
                return ternary;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));
function ternaryFromTernaryNode(ternaryNode, context) {
    var Expression = _elements.default.Expression, Ternary = _elements.default.Ternary, ifExpressionNode = ifExpressionNodeQuery(ternaryNode), elseExpressionNode = elseExpressionNodeQuery(ternaryNode), expression = Expression.fromTernaryNode(ternaryNode, context), ifExpression = Expression.fromExpressionNode(ifExpressionNode, context), elseExpression = Expression.fromExpressionNode(elseExpressionNode, context), string = stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context), ternary = new Ternary(string, expression, ifExpression, elseExpression);
    return ternary;
}
function stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context) {
    var expressionString = expression.asString(context), ifExpressionString = ifExpression.asString(context), elseExpressionString = elseExpression.asString(context), string = "If (".concat(expressionString, ") ").concat(ifExpressionString, " Else ").concat(elseExpressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBpZkV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS9leHByZXNzaW9uWzFdXCIpLFxuICAgICAgZWxzZUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS9leHByZXNzaW9uWzJdXCIpLFxuICAgICAgZXhwcmVzc2lvblRlcm5hcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi90ZXJuYXJ5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICBleHByZXNzaW9uID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblRlcm5hcnlOb2RlID0gZXhwcmVzc2lvblRlcm5hcnlOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uVGVybmFyeU5vZGU7IC8vL1xuXG4gICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm5hcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGlmRXhwcmVzc2lvbk5vZGUgPSBpZkV4cHJlc3Npb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbk5vZGUgPSBlbHNlRXhwcmVzc2lvbk5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSBuZXcgVGVybmFyeShzdHJpbmcsIGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uKGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvblN0cmluZyA9IGlmRXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb25TdHJpbmcgPSBlbHNlRXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYElmICgke2V4cHJlc3Npb25TdHJpbmd9KSAke2lmRXhwcmVzc2lvblN0cmluZ30gRWxzZSAke2Vsc2VFeHByZXNzaW9uU3RyaW5nfTtgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiaWZFeHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZWxzZUV4cHJlc3Npb25Ob2RlUXVlcnkiLCJleHByZXNzaW9uVGVybmFyeU5vZGVRdWVyeSIsImRlZmluZSIsIlRlcm5hcnkiLCJzdHJpbmciLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm5hcnlTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsInRlcm5hcnkiLCJleHByZXNzaW9uVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJuYW1lIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiaWZFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uTm9kZSIsImZyb21UZXJuYXJ5Tm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb25TdHJpbmciLCJlbHNlRXhwcmVzc2lvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0VBWHFCO2dFQUNDO3FCQUdJO3FCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsMkJBQ2xDQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMsMkJBQ3BDRSw2QkFBNkJGLElBQUFBLGdCQUFTLEVBQUM7SUFFN0MsV0FBZUcsSUFBQUEsZ0JBQU0sNEJBQUM7YUFBTUMsUUFDZEMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsY0FBYztnQ0FEbENKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxH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