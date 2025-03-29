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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Ternary = /*#__PURE__*/ function() {
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
    var Expression = _dom.default.Expression, Ternary = _dom.default.Ternary, ifExpressionNode = ifExpressionNodeQuery(ternaryNode), elseExpressionNode = elseExpressionNodeQuery(ternaryNode), expression = Expression.fromTernaryNode(ternaryNode, context), ifExpression = Expression.fromExpressionNode(ifExpressionNode, context), elseExpression = Expression.fromExpressionNode(elseExpressionNode, context), string = stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context), ternary = new Ternary(string, expression, ifExpression, elseExpression);
    return ternary;
}
function stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context) {
    var expressionString = expression.asString(context), ifExpressionString = ifExpression.asString(context), elseExpressionString = elseExpression.asString(context), string = "If (".concat(expressionString, ") ").concat(ifExpressionString, " Else ").concat(elseExpressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaWZFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvZXhwcmVzc2lvblsxXVwiKSxcbiAgICAgIGVsc2VFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvZXhwcmVzc2lvblsyXVwiKSxcbiAgICAgIGV4cHJlc3Npb25UZXJuYXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vdGVybmFyeVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5pZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb247XG4gICAgdGhpcy5lbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICBleHByZXNzaW9uID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblRlcm5hcnlOb2RlID0gZXhwcmVzc2lvblRlcm5hcnlOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uVGVybmFyeU5vZGU7IC8vL1xuXG4gICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm5hcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgVGVybmFyeSB9ID0gZG9tLFxuICAgICAgICBpZkV4cHJlc3Npb25Ob2RlID0gaWZFeHByZXNzaW9uTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb25Ob2RlID0gZWxzZUV4cHJlc3Npb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uKGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCBleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb25JZkV4cHJlc3Npb25BbmRFbHNlRXhwcmVzc2lvbihleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb25TdHJpbmcgPSBpZkV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uU3RyaW5nID0gZWxzZUV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGBJZiAoJHtleHByZXNzaW9uU3RyaW5nfSkgJHtpZkV4cHJlc3Npb25TdHJpbmd9IEVsc2UgJHtlbHNlRXhwcmVzc2lvblN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImlmRXhwcmVzc2lvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImVsc2VFeHByZXNzaW9uTm9kZVF1ZXJ5IiwiZXhwcmVzc2lvblRlcm5hcnlOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlRlcm5hcnkiLCJzdHJpbmciLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRFeHByZXNzaW9uIiwiZ2V0SWZCbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm5hcnlTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsInRlcm5hcnkiLCJleHByZXNzaW9uVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJuYW1lIiwiRXhwcmVzc2lvbiIsImRvbSIsImlmRXhwcmVzc2lvbk5vZGUiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uIiwiaWZFeHByZXNzaW9uU3RyaW5nIiwiZWxzZUV4cHJlc3Npb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUNsQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLDJCQUNwQ0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDO0lBRTdDLFdBQWVHLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxjQUFjO2dDQUQ3Qko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFB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