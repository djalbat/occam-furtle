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
var _default = (0, _elements.define)((_Comparison = /*#__PURE__*/ function() {
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
                var Expression = _elements.default.Expression;
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
    var Expression = _elements.default.Expression, Comparison = _elements.default.Comparison, leftExpressionNode = leftExpressionNodeQuery(comparisonNode), rightExpressionNode = rightExpressionNodeQuery(comparisonNode), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), negated = negatedFromComparisonNode(comparisonNode, context), string = stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context), comparison = new Comparison(string, negated, leftExpression, rightExpression);
    return comparison;
}
function stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context) {
    var operatorString = negated ? _constants.EQUAL_TO : _constants.NOT_EQUAL_TO, leftExpressionString = leftExpression.asString(context), rightExpressionString = rightExpression.asString(context), string = "".concat(leftExpressionString, " ").concat(operatorString, " ").concat(rightExpressionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbXBhcmlzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVRVUFMX1RPLCBOT1RfRVFVQUxfVE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vQCpcIiksXG4gICAgICBsZWZ0RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL2V4cHJlc3Npb25bMF1cIiksXG4gICAgICByaWdodEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9leHByZXNzaW9uWzFdXCIpLFxuICAgICAgZXhwcmVzc2lvbkNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9jb21wYXJpc29uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uO1xuICAgIHRoaXMucmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRSaWdodEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRFeHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbiA9IHRoaXMubGVmdEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gdGhpcy5yaWdodEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25UeXBlID0gbGVmdEV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblR5cGUgPSByaWdodEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRFeHByZXNzaW9uVHlwZSAhPT0gcmlnaHRFeHByZXNzaW9uVHlwZSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvblN0cmluZyA9IHJpZ2h0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlcmVhcyB0aGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdEV4cHJlc3Npb25FcXVhbFRvUmlnaHRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb24uaXNFcXVhbFRvKHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgICBsZXQgYm9vbGVhbiA9IGxlZnRFeHByZXNzaW9uRXF1YWxUb1JpZ2h0RXhwcmVzc2lvbjsgLy8vXG5cbiAgICBpZiAodGhpcy5uZWdhdGVkKSB7XG4gICAgICBib29sZWFuID0gIWJvb2xlYW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHM7XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29tcGFyaXNvblN0cmluZ30nIGNvbXBhcmlzb24uYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZSh2YWx1ZE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uQ29tcGFyaXNvbk5vZGUgPSBleHByZXNzaW9uQ29tcGFyaXNvbk5vZGVRdWVyeSh2YWx1ZE5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Db21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBleHByZXNzaW9uQ29tcGFyaXNvbk5vZGU7IC8vL1xuXG4gICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5lZ2F0ZWQgPSAodGVybWluYWxOb2RlQ29udGVudCAhPT0gRVFVQUxfVE8pO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5mdW5jdGlvbiBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgQ29tcGFyaXNvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGxlZnRFeHByZXNzaW9uTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IHJpZ2h0RXhwcmVzc2lvbk5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IG5ldyBDb21wYXJpc29uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OZWdhdGVkTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24obmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCBvcGVyYXRvclN0cmluZyA9IG5lZ2F0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgRVFVQUxfVE8gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVF9FUVVBTF9UTyxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uU3RyaW5nID0gcmlnaHRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgJHtsZWZ0RXhwcmVzc2lvblN0cmluZ30gJHtvcGVyYXRvclN0cmluZ30gJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdEV4cHJlc3Npb25Ob2RlUXVlcnkiLCJyaWdodEV4cHJlc3Npb25Ob2RlUXVlcnkiLCJleHByZXNzaW9uQ29tcGFyaXNvbk5vZGVRdWVyeSIsImRlZmluZSIsIkNvbXBhcmlzb24iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0RXhwcmVzc2lvbiIsImdldFJpZ2h0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJjb21wYXJpc29uU3RyaW5nIiwidHJhY2UiLCJsZWZ0RXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwicmlnaHRFeHByZXNzaW9uVHlwZSIsImxlZnRFeHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJyaWdodEV4cHJlc3Npb25TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJsZWZ0RXhwcmVzc2lvbkVxdWFsVG9SaWdodEV4cHJlc3Npb24iLCJpc0VxdWFsVG8iLCJib29sZWFuIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsInZhbHVkTm9kZSIsImNvbXBhcmlzb24iLCJleHByZXNzaW9uQ29tcGFyaXNvbk5vZGUiLCJjb21wYXJpc29uTm9kZSIsImNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUiLCJuYW1lIiwibmVnYXRlZEZyb21Db21wYXJpc29uTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVFVQUxfVE8iLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwic3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiIsIm9wZXJhdG9yU3RyaW5nIiwiTk9UX0VRVUFMX1RPIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnRUFacUI7Z0VBQ0M7cUJBR0k7eUJBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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