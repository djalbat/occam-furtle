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
                var bracketedExpressionNode = expressionNode.getBracketedExpressionNode();
                if (bracketedExpressionNode !== null) {
                    bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
                }
                return bracketedExpression;
            }
        }
    ]);
    return BracketedExpression;
}(), _define_property(_BracketedExpression, "name", "BracketedExpression"), _BracketedExpression));
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var Expression = _elements.default.Expression, BracketedExpression = _elements.default.BracketedExpression, expressionNode = bracketedExpressionNode.getExpressionNode(), expression = Expression.fromExpressionNode(expressionNode, context), bracketedExpressionString = (0, _string.bracketedExpressionStringFromBExpression)(expression, context), string = bracketedExpressionString, bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBCcmFja2V0ZWRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5leHByZXNzaW9uLmdldFR5cGUoKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHticmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nfScgYnJhY2tldGVkIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2JyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmd9JyBicmFja2V0ZWQgZXhwcmVzc2lvbi5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZEV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gICAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gICAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmcsIC8vL1xuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJzdHJpbmciLCJleHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RXhwcmVzc2lvbiIsImdldFR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwibmFtZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsImdldEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCO3NCQUdvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpELFdBQWVBLElBQUFBLGdCQUFNLHdDQUFDO2FBQU1DLG9CQUNkQyxNQUFNLEVBQUVDLFVBQVU7Z0NBREpGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNHLE9BQU87WUFBSTs7O1lBRTlDQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSw0QkFBNEIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFbERNLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE0QyxPQUExQkQsMkJBQTBCO2dCQUUzRE4sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDQztnQkFFdENBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUE4QyxPQUExQkYsMkJBQTBCO2dCQUU3RCxPQUFPTjtZQUNUOzs7O1lBSU9TLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFTCxPQUFPO2dCQUMvQyxJQUFJTSxzQkFBc0I7Z0JBRTFCLElBQU1DLDBCQUEwQkYsZUFBZUcsMEJBQTBCO2dCQUV6RSxJQUFJRCw0QkFBNEIsTUFBTTtvQkFDcENELHNCQUFzQkcsK0NBQStDRix5QkFBeUJQO2dCQUNoRztnQkFFQSxPQUFPTTtZQUNUOzs7O0tBWkEsdUNBQU9JLFFBQU87QUFlaEIsU0FBU0QsK0NBQStDRix1QkFBdUIsRUFBRVAsT0FBTztJQUN0RixJQUFRVyxhQUFvQ0MsaUJBQVEsQ0FBNUNELFlBQVlsQixzQkFBd0JtQixpQkFBUSxDQUFoQ25CLHFCQUNkWSxpQkFBaUJFLHdCQUF3Qk0saUJBQWlCLElBQzFEbEIsYUFBYWdCLFdBQVdQLGtCQUFrQixDQUFDQyxnQkFBZ0JMLFVBQzNEQyw0QkFBNEJhLElBQUFBLGdEQUF3QyxFQUFDbkIsWUFBWUssVUFDakZOLFNBQVNPLDJCQUNUSyxzQkFBc0IsSUFBSWIsb0JBQW9CQyxRQUFRQztJQUU1RCxPQUFPVztBQUNUIn0=