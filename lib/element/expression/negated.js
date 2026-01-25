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
var _default = (0, _elements.define)((_NegatedExpression = /*#__PURE__*/ function() {
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
                var Expression = _elements.default.Expression;
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
    var Expression = _elements.default.Expression, NegatedExpression = _elements.default.NegatedExpression, expressionNode = expressionNodeQuery(negatedExpressionNode), expression = Expression.fromExpressionNode(expressionNode, context), type = _types.BOOLEAN_TYPE, string = stringFromExpression(expression, context), negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "!".concat(expressionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmVnYXRlZEV4cHJlc3Npb24vZXhwcmVzc2lvblwiKSxcbiAgICAgIGV4cHJlc3Npb25OZWdhdGVkRXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL25lZ2F0ZWRFeHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmVnYXRlZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuZWdhdGVkRXhwcmVzc2lvblN0cmluZ30nIG5lZ2F0ZWQgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbiA9IGV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cztcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nfScgbmVnYXRlZCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZEV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25OZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTmVnYXRlZEV4cHJlc3Npb25Ob2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25OZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25OZWdhdGVkRXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShuZWdhdGVkRXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gQk9PTEVBTl9UWVBFLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAhJHtleHByZXNzaW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbk5lZ2F0ZWRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiTmVnYXRlZEV4cHJlc3Npb24iLCJzdHJpbmciLCJ0eXBlIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwibmVnYXRlZEV4cHJlc3Npb25TdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiQk9PTEVBTl9UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImV4cHJlc3Npb25OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuYW1lIiwic3RyaW5nRnJvbUV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJB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