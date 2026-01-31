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
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbXBhcmlzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbXBhcmlzb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMubGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbjtcbiAgICB0aGlzLnJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uU3RyaW5nfScgY29tcGFyaXNvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdEV4cHJlc3Npb24gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uVHlwZSA9IGxlZnRFeHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25UeXBlID0gcmlnaHRFeHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0RXhwcmVzc2lvblR5cGUgIT09IHJpZ2h0RXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRFeHByZXNzaW9uU3RyaW5nID0gbGVmdEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICByaWdodEV4cHJlc3Npb25TdHJpbmcgPSByaWdodEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2xlZnRFeHByZXNzaW9uU3RyaW5nfSBsZWZ0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2xlZnRFeHByZXNzaW9uVHlwZX0nIHdoZXJlYXMgdGhlICR7cmlnaHRFeHByZXNzaW9uU3RyaW5nfSByaWdodCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtyaWdodEV4cHJlc3Npb25UeXBlfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRFeHByZXNzaW9uRXF1YWxUb1JpZ2h0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uLmlzRXF1YWxUbyhyaWdodEV4cHJlc3Npb24pO1xuXG4gICAgbGV0IGJvb2xlYW4gPSBsZWZ0RXhwcmVzc2lvbkVxdWFsVG9SaWdodEV4cHJlc3Npb247IC8vL1xuXG4gICAgaWYgKHRoaXMubmVnYXRlZCkge1xuICAgICAgYm9vbGVhbiA9ICFib29sZWFuOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvbiIsInN0cmluZyIsIm5lZ2F0ZWQiLCJsZWZ0RXhwcmVzc2lvbiIsInJpZ2h0RXhwcmVzc2lvbiIsImdldFN0cmluZyIsImlzTmVnYXRlZCIsImdldExlZnRFeHByZXNzaW9uIiwiZ2V0UmlnaHRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImNvbXBhcmlzb25TdHJpbmciLCJ0cmFjZSIsImxlZnRFeHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJyaWdodEV4cHJlc3Npb25UeXBlIiwibGVmdEV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsInJpZ2h0RXhwcmVzc2lvblN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRFeHByZXNzaW9uRXF1YWxUb1JpZ2h0RXhwcmVzc2lvbiIsImlzRXF1YWxUbyIsImJvb2xlYW4iLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCO2dFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl0QixXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQURsQ0o7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixjQUFjO1lBQzVCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBRXpDUyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBbUMsT0FBakJELGtCQUFpQjtnQkFFbEQsSUFBTVQsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDTSxRQUFRLENBQUNDLFVBQzlDTixrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLENBQUNLLFFBQVEsQ0FBQ0MsVUFDaERJLHFCQUFxQlgsZUFBZVksT0FBTyxJQUMzQ0Msc0JBQXNCWixnQkFBZ0JXLE9BQU87Z0JBRW5ELElBQUlELHVCQUF1QkUscUJBQXFCO29CQUM5QyxJQUFNQyx1QkFBdUJkLGVBQWVlLFFBQVEsQ0FBQ1IsVUFDL0NTLHdCQUF3QmYsZ0JBQWdCYyxRQUFRLENBQUNSLFVBQ2pEVSxVQUFVLEFBQUMsT0FBeUROLE9BQW5ERyxzQkFBcUIsZ0NBQWlFRSxPQUFuQ0wsb0JBQW1CLGtCQUFxRUUsT0FBckRHLHVCQUFzQixpQ0FBbUQsT0FBcEJILHFCQUFvQixPQUNoTEssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsdUNBQXVDckIsZUFBZXNCLFNBQVMsQ0FBQ3JCO2dCQUV0RSxJQUFJc0IsVUFBVUYsc0NBQXNDLEdBQUc7Z0JBRXZELElBQUksSUFBSSxDQUFDdEIsT0FBTyxFQUFFO29CQUNoQndCLFVBQVUsQ0FBQ0EsU0FBUyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNLEFBQUVDLGFBQWVDLGlCQUFRLENBQXZCRDtnQkFFUmhCLGFBQWFnQixXQUFXRSxXQUFXLENBQUNILFNBQVNoQjtnQkFFN0NBLFFBQVFvQixLQUFLLENBQUMsQUFBQyxxQkFBcUMsT0FBakJsQixrQkFBaUI7Z0JBRXBELE9BQU9EO1lBQ1Q7Ozs7S0FFQSw4QkFBT29CLFFBQU8ifQ==