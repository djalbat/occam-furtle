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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
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
var _NegatedExpression;
var expressionNodeQuery = (0, _query.nodeQuery)("/negatedExpression/expression"), expressionNegatedExpressionNodeQuery = (0, _query.nodeQuery)("/expression/negatedExpression");
var _default = (0, _dom.domAssigned)((_NegatedExpression = /*#__PURE__*/ function() {
    function NegatedExpression(string, type, expression) {
        _class_call_check(this, NegatedExpression);
        this.string = string;
        this.type = type;
        this.expression = expression;
    }
    _create_class(NegatedExpression, [
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
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var negatedExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(negatedExpressionString, "' negated expression..."));
                expression = this.expression.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.BOOLEAN_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " left expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = expression.getBoolean();
                boolean = !boolean;
                var Expression = _dom.default.Expression;
                expression = Expression.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(negatedExpressionString, "' negated expression."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var negatedExpression = null;
                var expressionNegatedExpressionNode = expressionNegatedExpressionNodeQuery(expressionNode);
                if (expressionNegatedExpressionNode !== null) {
                    var negatedExpressionNode = expressionNegatedExpressionNode; ///
                    negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
                }
                return negatedExpression;
            }
        }
    ]);
    return NegatedExpression;
}(), _define_property(_NegatedExpression, "name", "NegatedExpression"), _NegatedExpression));
function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var Expression = _dom.default.Expression, NegatedExpression = _dom.default.NegatedExpression, expressionNode = expressionNodeQuery(negatedExpressionNode), expression = Expression.fromExpressionNode(expressionNode, context), type = _types.BOOLEAN_TYPE, string = stringFromExpression(expression, context), negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "!".concat(expressionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZXhwcmVzc2lvbi9uZWdhdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25lZ2F0ZWRFeHByZXNzaW9uL2V4cHJlc3Npb25cIiksXG4gICAgICBleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9uZWdhdGVkRXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuZWdhdGVkRXhwcmVzc2lvblN0cmluZ30nIG5lZ2F0ZWQgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbiA9IGV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBkb207XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuZWdhdGVkRXhwcmVzc2lvblN0cmluZ30nIG5lZ2F0ZWQgZXhwcmVzc2lvbi5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5lZ2F0ZWRFeHByZXNzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5lZ2F0ZWRFeHByZXNzaW9uTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBuZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlOyAvLy9cblxuICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgTmVnYXRlZEV4cHJlc3Npb24gfSA9IGRvbSxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZVF1ZXJ5KG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5ldyBOZWdhdGVkRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYCEke2V4cHJlc3Npb25TdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsIkJPT0xFQU5fVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiRXhwcmVzc2lvbiIsImRvbSIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwiZXhwcmVzc2lvbk5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFB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