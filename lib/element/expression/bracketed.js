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
var _query = require("../../utilities/query");
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
var _BracketedExpression;
var expressionNodeQuery = (0, _query.nodeQuery)("/bracketedExpression/expression"), expressionBracketedExpressionNodeQuery = (0, _query.nodeQuery)("/expression/bracketedExpression");
var _default = (0, _elements.define)((_BracketedExpression = /*#__PURE__*/ function() {
    function BracketedExpression(string, expression) {
        _class_call_check(this, BracketedExpression);
        this.string = string;
        this.expression = expression;
    }
    _create_class(BracketedExpression, [
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
            key: "getType",
            value: function getType() {
                return this.expression.getType();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var bracketedExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(bracketedExpressionString, "' bracketed expression..."));
                expression = this.expression.evaluate(context);
                context.debug("...evaluated the '".concat(bracketedExpressionString, "' bracketed expression."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var bracketedExpression = null;
                var expressionBracketedExpressionNode = expressionBracketedExpressionNodeQuery(expressionNode);
                if (expressionBracketedExpressionNode !== null) {
                    var bracketedExpressionNode = expressionBracketedExpressionNode; ///
                    bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
                }
                return bracketedExpression;
            }
        }
    ]);
    return BracketedExpression;
}(), _define_property(_BracketedExpression, "name", "BracketedExpression"), _BracketedExpression));
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var Expression = _elements.default.Expression, BracketedExpression = _elements.default.BracketedExpression, expressionNode = expressionNodeQuery(bracketedExpressionNode), expression = Expression.fromExpressionNode(expressionNode, context), string = stringFromExpression(expression, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "(".concat(expressionString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JyYWNrZXRlZEV4cHJlc3Npb24vZXhwcmVzc2lvblwiKSxcbiAgICAgIGV4cHJlc3Npb25CcmFja2V0ZWRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vYnJhY2tldGVkRXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLmV4cHJlc3Npb24uZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmd9JyBicmFja2V0ZWQgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ30nIGJyYWNrZXRlZCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkRXhwcmVzc2lvblwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbkJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25CcmFja2V0ZWRFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZVF1ZXJ5KGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBuZXcgQnJhY2tldGVkRXhwcmVzc2lvbihzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgKCR7ZXhwcmVzc2lvblN0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGVRdWVyeSIsImRlZmluZSIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJzdHJpbmciLCJleHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RXhwcmVzc2lvbiIsImdldFR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImV4cHJlc3Npb25CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnFCO3FCQUdLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLG9DQUNoQ0MseUNBQXlDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXpELFdBQWVFLElBQUFBLGdCQUFNLHdDQUFDO2FBQU1DLG9CQUNkQyxNQUFNLEVBQUVDLFVBQVU7Z0NBREpGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNHLE9BQU87WUFBSTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSw0QkFBNEIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFbERNLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE0QyxPQUExQkQsMkJBQTBCO2dCQUUzRE4sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDQztnQkFFdENBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUE4QyxPQUExQkYsMkJBQTBCO2dCQUU3RCxPQUFPTjtZQUNUOzs7O1lBSU9TLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFTCxPQUFPO2dCQUMvQyxJQUFJTSxzQkFBc0I7Z0JBRTFCLElBQU1DLG9DQUFvQ2hCLHVDQUF1Q2M7Z0JBRWpGLElBQUlFLHNDQUFzQyxNQUFNO29CQUM5QyxJQUFNQywwQkFBMEJELG1DQUFtQyxHQUFHO29CQUV0RUQsc0JBQXNCRywrQ0FBK0NELHlCQUF5QlI7Z0JBQ2hHO2dCQUVBLE9BQU9NO1lBQ1Q7Ozs7S0FkQSx1Q0FBT0ksUUFBTztBQWlCaEIsU0FBU0QsK0NBQStDRCx1QkFBdUIsRUFBRVIsT0FBTztJQUN0RixJQUFRVyxhQUFvQ0MsaUJBQVEsQ0FBNUNELFlBQVlsQixzQkFBd0JtQixpQkFBUSxDQUFoQ25CLHFCQUNkWSxpQkFBaUJoQixvQkFBb0JtQiwwQkFDckNiLGFBQWFnQixXQUFXUCxrQkFBa0IsQ0FBQ0MsZ0JBQWdCTCxVQUMzRE4sU0FBU21CLHFCQUFxQmxCLFlBQVlLLFVBQzFDTSxzQkFBc0IsSUFBSWIsb0JBQW9CQyxRQUFRQztJQUU1RCxPQUFPVztBQUNUO0FBRUEsU0FBU08scUJBQXFCbEIsVUFBVSxFQUFFSyxPQUFPO0lBQy9DLElBQU1jLG1CQUFtQm5CLFdBQVdvQixRQUFRLENBQUNmLFVBQ3ZDTixTQUFTLEFBQUMsSUFBb0IsT0FBakJvQixrQkFBaUI7SUFFcEMsT0FBT3BCO0FBQ1QifQ==