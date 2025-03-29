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
var _default = (0, _dom.domAssigned)((_BracketedExpression = /*#__PURE__*/ function() {
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
    var Expression = _dom.default.Expression, BracketedExpression = _dom.default.BracketedExpression, expressionNode = expressionNodeQuery(bracketedExpressionNode), expression = Expression.fromExpressionNode(expressionNode, context), string = stringFromExpression(expression, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "(".concat(expressionString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZXhwcmVzc2lvbi9icmFja2V0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9icmFja2V0ZWRFeHByZXNzaW9uL2V4cHJlc3Npb25cIiksXG4gICAgICBleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL2JyYWNrZXRlZEV4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEJyYWNrZXRlZEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLmV4cHJlc3Npb24uZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmd9JyBicmFja2V0ZWQgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ30nIGJyYWNrZXRlZCBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkRXhwcmVzc2lvblwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uQnJhY2tldGVkRXhwcmVzc2lvbk5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbkJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25CcmFja2V0ZWRFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYCgke2V4cHJlc3Npb25TdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbkJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJzdHJpbmciLCJleHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0RXhwcmVzc2lvbiIsImdldFR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImV4cHJlc3Npb25CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJFeHByZXNzaW9uIiwiZG9tIiwic3RyaW5nRnJvbUV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQ0FDaENDLHlDQUF5Q0QsSUFBQUEsZ0JBQVMsRUFBQztJQUV6RCxXQUFlRSxJQUFBQSxnQkFBVyx3Q0FBQzthQUFNQyxvQkFDbkJDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEQ0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csT0FBTztZQUFJOzs7WUFFOUNDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLDRCQUE0QixJQUFJLENBQUNQLE1BQU0sRUFBRSxHQUFHO2dCQUVsRE0sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTRDLE9BQTFCRCwyQkFBMEI7Z0JBRTNETixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxRQUFRLENBQUNDO2dCQUV0Q0EsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQThDLE9BQTFCRiwyQkFBMEI7Z0JBRTdELE9BQU9OO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVMLE9BQU87Z0JBQy9DLElBQUlNLHNCQUFzQjtnQkFFMUIsSUFBTUMsb0NBQW9DaEIsdUNBQXVDYztnQkFFakYsSUFBSUUsc0NBQXNDLE1BQU07b0JBQzlDLElBQU1DLDBCQUEwQkQsbUNBQW1DLEdBQUc7b0JBRXRFRCxzQkFBc0JHLCtDQUErQ0QseUJBQXlCUjtnQkFDaEc7Z0JBRUEsT0FBT007WUFDVDs7OztLQWRBLHVDQUFPSSxRQUFPO0FBaUJoQixTQUFTRCwrQ0FBK0NELHVCQUF1QixFQUFFUixPQUFPO0lBQ3RGLElBQVFXLGFBQW9DQyxZQUFHLENBQXZDRCxZQUFZbEIsc0JBQXdCbUIsWUFBRyxDQUEzQm5CLHFCQUNkWSxpQkFBaUJoQixvQkFBb0JtQiwwQkFDckNiLGFBQWFnQixXQUFXUCxrQkFBa0IsQ0FBQ0MsZ0JBQWdCTCxVQUMzRE4sU0FBU21CLHFCQUFxQmxCLFlBQVlLLFVBQzFDTSxzQkFBc0IsSUFBSWIsb0JBQW9CQyxRQUFRQztJQUU1RCxPQUFPVztBQUNUO0FBRUEsU0FBU08scUJBQXFCbEIsVUFBVSxFQUFFSyxPQUFPO0lBQy9DLElBQU1jLG1CQUFtQm5CLFdBQVdvQixRQUFRLENBQUNmLFVBQ3ZDTixTQUFTLEFBQUMsSUFBb0IsT0FBakJvQixrQkFBaUI7SUFFcEMsT0FBT3BCO0FBQ1QifQ==