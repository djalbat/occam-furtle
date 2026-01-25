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
var _ReturnStatement;
var returnBlockReturnStatementNodeQuery = (0, _query.nodeQuery)("/returnBlock/returnStatement");
var _default = (0, _elements.define)((_ReturnStatement = /*#__PURE__*/ function() {
    function ReturnStatement(string, expression) {
        _class_call_check(this, ReturnStatement);
        this.string = string;
        this.expression = expression;
    }
    _create_class(ReturnStatement, [
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
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var returnStatementString = this.string; ///
                context.trace("Evaluating the '".concat(returnStatementString, "' return statement..."));
                expression = this.expression.evaluate(context);
                context.debug("...evaluated the '".concat(returnStatementString, "' return statement."));
                return expression;
            }
        }
    ], [
        {
            key: "fromReturnBlockNode",
            value: function fromReturnBlockNode(returnBlockNode, context) {
                var returnBlockReturnStatementNode = returnBlockReturnStatementNodeQuery(returnBlockNode), returnStatementNode = returnBlockReturnStatementNode, returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);
                return returnStatement;
            }
        }
    ]);
    return ReturnStatement;
}(), _define_property(_ReturnStatement, "name", "ReturnStatement"), _ReturnStatement));
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var Expression = _elements.default.Expression, ReturnStatement = _elements.default.ReturnStatement, expression = Expression.fromReturnStatementNode(returnStatementNode, context), string = stringFromExpression(expression, context), returnStatement = new ReturnStatement(string, expression);
    return returnStatement;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "Return ".concat(expressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9yZXR1cm4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHJldHVybkJsb2NrUmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVybkJsb2NrL3JldHVyblN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICAgIHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgUmV0dXJuICR7ZXhwcmVzc2lvblN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInJldHVybkJsb2NrUmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVmaW5lIiwiUmV0dXJuU3RhdGVtZW50Iiwic3RyaW5nIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsIm5hbWUiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7cUJBR0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxzQ0FBc0NDLElBQUFBLGdCQUFTLEVBQUM7SUFFdEQsV0FBZUMsSUFBQUEsZ0JBQU0sb0NBQUM7YUFBTUMsZ0JBQ2RDLE1BQU0sRUFBRUMsVUFBVTtnQ0FESkY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJSjtnQkFFSixJQUFNSyx3QkFBd0IsSUFBSSxDQUFDTixNQUFNLEVBQUcsR0FBRztnQkFFL0NLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF3QyxPQUF0QkQsdUJBQXNCO2dCQUV2REwsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0csUUFBUSxDQUFDQztnQkFFdENBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUEwQyxPQUF0QkYsdUJBQXNCO2dCQUV6RCxPQUFPTDtZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFTCxPQUFPO2dCQUNqRCxJQUFNTSxpQ0FBaUNmLG9DQUFvQ2Msa0JBQ3JFRSxzQkFBc0JELGdDQUN0QkUsa0JBQWtCQyx1Q0FBdUNGLHFCQUFxQlA7Z0JBRXBGLE9BQU9RO1lBQ1Q7Ozs7S0FSQSxtQ0FBT0UsUUFBTztBQVdoQixTQUFTRCx1Q0FBdUNGLG1CQUFtQixFQUFFUCxPQUFPO0lBQzFFLElBQVFXLGFBQWdDQyxpQkFBUSxDQUF4Q0QsWUFBWWpCLGtCQUFvQmtCLGlCQUFRLENBQTVCbEIsaUJBQ2RFLGFBQWFlLFdBQVdFLHVCQUF1QixDQUFDTixxQkFBcUJQLFVBQ3JFTCxTQUFTbUIscUJBQXFCbEIsWUFBWUksVUFDMUNRLGtCQUFrQixJQUFJZCxnQkFBZ0JDLFFBQVFDO0lBRXBELE9BQU9ZO0FBQ1Q7QUFFQSxTQUFTTSxxQkFBcUJsQixVQUFVLEVBQUVJLE9BQU87SUFDL0MsSUFBTWUsbUJBQW1CbkIsV0FBV29CLFFBQVEsQ0FBQ2hCLFVBQ3ZDTCxTQUFTLEFBQUMsVUFBMEIsT0FBakJvQixrQkFBaUI7SUFFMUMsT0FBT3BCO0FBQ1QifQ==