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
var _constants = require("../constants");
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
var _Comparison;
var terminalNodeQuery = (0, _query.nodeQuery)("/comparison/@*"), leftExpressionNodeQuery = (0, _query.nodeQuery)("/comparison/expression[0]"), rightExpressionNodeQuery = (0, _query.nodeQuery)("/comparison/expression[1]"), expressionComparisonNodeQuery = (0, _query.nodeQuery)("/expression/comparison");
var _default = (0, _dom.domAssigned)((_Comparison = /*#__PURE__*/ function() {
    function Comparison(string, negated, leftExpression, rightExpression) {
        _class_call_check(this, Comparison);
        this.string = string;
        this.negated = negated;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(Comparison, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
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
                var comparisonString = this.string; ///
                context.trace("Evaluating the '".concat(comparisonString, "' comparison..."));
                var leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
                if (leftExpressionType !== rightExpressionType) {
                    var leftExpressionString = leftExpression.asString(context), rightExpressionString = rightExpression.asString(context), message = "The ".concat(leftExpressionString, " left expression's type is '").concat(leftExpressionType, "' whereas the ").concat(rightExpressionString, " right expression's type is '").concat(rightExpressionType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftExpressionEqualToRightExpression = leftExpression.isEqualTo(rightExpression);
                var boolean = leftExpressionEqualToRightExpression; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                var Expression = _dom.default.Expression;
                expression = Expression.fromBoolean(boolean, context);
                context.debug("...evaluated the '".concat(comparisonString, "' comparison."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(valudNode, context) {
                var comparison = null;
                var expressionComparisonNode = expressionComparisonNodeQuery(valudNode);
                if (expressionComparisonNode !== null) {
                    var comparisonNode = expressionComparisonNode; ///
                    comparison = comparisonFromComparisonNode(comparisonNode, context);
                }
                return comparison;
            }
        }
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));
function negatedFromComparisonNode(comparisonNode) {
    var terminalNode = terminalNodeQuery(comparisonNode), terminalNodeContent = terminalNode.getContent(), negated = terminalNodeContent !== _constants.EQUAL_TO;
    return negated;
}
function comparisonFromComparisonNode(comparisonNode, context) {
    var Expression = _dom.default.Expression, Comparison = _dom.default.Comparison, leftExpressionNode = leftExpressionNodeQuery(comparisonNode), rightExpressionNode = rightExpressionNodeQuery(comparisonNode), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), negated = negatedFromComparisonNode(comparisonNode, context), string = stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context), comparison = new Comparison(string, negated, leftExpression, rightExpression);
    return comparison;
}
function stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context) {
    var operatorString = negated ? _constants.EQUAL_TO : _constants.NOT_EQUAL_TO, leftExpressionString = leftExpression.asString(context), rightExpressionString = rightExpression.asString(context), string = "".concat(leftExpressionString, " ").concat(operatorString, " ").concat(rightExpressionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFUVVBTF9UTywgTk9UX0VRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL0AqXCIpLFxuICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9leHByZXNzaW9uWzBdXCIpLFxuICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vZXhwcmVzc2lvblsxXVwiKSxcbiAgICAgIGV4cHJlc3Npb25Db21wYXJpc29uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vY29tcGFyaXNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uO1xuICAgIHRoaXMucmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbiA9IHRoaXMubGVmdEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gdGhpcy5yaWdodEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25UeXBlID0gbGVmdEV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblR5cGUgPSByaWdodEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRFeHByZXNzaW9uVHlwZSAhPT0gcmlnaHRFeHByZXNzaW9uVHlwZSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblN0cmluZyA9IHJpZ2h0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlcmVhcyB0aGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdEV4cHJlc3Npb25FcXVhbFRvUmlnaHRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb24uaXNFcXVhbFRvKHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgICBsZXQgYm9vbGVhbiA9IGxlZnRFeHByZXNzaW9uRXF1YWxUb1JpZ2h0RXhwcmVzc2lvbjsgLy8vXG5cbiAgICBpZiAodGhpcy5uZWdhdGVkKSB7XG4gICAgICBib29sZWFuID0gIWJvb2xlYW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZG9tO1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUodmFsdWROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbkNvbXBhcmlzb25Ob2RlID0gZXhwcmVzc2lvbkNvbXBhcmlzb25Ob2RlUXVlcnkodmFsdWROb2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uQ29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gZXhwcmVzc2lvbkNvbXBhcmlzb25Ob2RlOyAvLy9cblxuICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJpc29uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0ZXJtaW5hbE5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuZWdhdGVkID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgIT09IEVRVUFMX1RPKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZnVuY3Rpb24gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24sIENvbXBhcmlzb24gfSA9IGRvbSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gbGVmdEV4cHJlc3Npb25Ob2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gcmlnaHRFeHByZXNzaW9uTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmVnYXRlZExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uKG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gbmVnYXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBFUVVBTF9UTyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9UX0VRVUFMX1RPLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvblN0cmluZyA9IGxlZnRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25TdHJpbmcgPSByaWdodEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke2xlZnRFeHByZXNzaW9uU3RyaW5nfSAke29wZXJhdG9yU3RyaW5nfSAke3JpZ2h0RXhwcmVzc2lvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0RXhwcmVzc2lvbk5vZGVRdWVyeSIsInJpZ2h0RXhwcmVzc2lvbk5vZGVRdWVyeSIsImV4cHJlc3Npb25Db21wYXJpc29uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb21wYXJpc29uIiwic3RyaW5nIiwibmVnYXRlZCIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiaXNOZWdhdGVkIiwiZ2V0TGVmdEV4cHJlc3Npb24iLCJnZXRSaWdodEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwiY29tcGFyaXNvblN0cmluZyIsInRyYWNlIiwibGVmdEV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsInJpZ2h0RXhwcmVzc2lvblR5cGUiLCJsZWZ0RXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwicmlnaHRFeHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdEV4cHJlc3Npb25FcXVhbFRvUmlnaHRFeHByZXNzaW9uIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsIkV4cHJlc3Npb24iLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwidmFsdWROb2RlIiwiY29tcGFyaXNvbiIsImV4cHJlc3Npb25Db21wYXJpc29uTm9kZSIsImNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZSIsIm5hbWUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJFUVVBTF9UTyIsImxlZnRFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJzdHJpbmdGcm9tTmVnYXRlZExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIiwib3BlcmF0b3JTdHJpbmciLCJOT1RfRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjtnRUFDTTtxQkFFSTt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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