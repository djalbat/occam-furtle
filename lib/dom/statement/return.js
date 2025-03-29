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
var _ReturnStatement;
var returnBlockReturnStatementNodeQuery = (0, _query.nodeQuery)("/returnBlock/returnStatement");
var _default = (0, _dom.domAssigned)((_ReturnStatement = /*#__PURE__*/ function() {
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
    var Expression = _dom.default.Expression, ReturnStatement = _dom.default.ReturnStatement, expression = Expression.fromReturnStatementNode(returnStatementNode, context), string = stringFromExpression(expression, context), returnStatement = new ReturnStatement(string, expression);
    return returnStatement;
}
function stringFromExpression(expression, context) {
    var expressionString = expression.asString(context), string = "Return ".concat(expressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vc3RhdGVtZW50L3JldHVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5CbG9jay9yZXR1cm5TdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICAgIHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBSZXR1cm5TdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYFJldHVybiAke2V4cHJlc3Npb25TdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJyZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmV0dXJuU3RhdGVtZW50Iiwic3RyaW5nIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldEV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsIm5hbWUiLCJFeHByZXNzaW9uIiwiZG9tIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsc0NBQXNDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXRELFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsTUFBTSxFQUFFQyxVQUFVO2dDQURDRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlKO2dCQUVKLElBQU1LLHdCQUF3QixJQUFJLENBQUNOLE1BQU0sRUFBRyxHQUFHO2dCQUUvQ0ssUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXdDLE9BQXRCRCx1QkFBc0I7Z0JBRXZETCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDRyxRQUFRLENBQUNDO2dCQUV0Q0EsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQTBDLE9BQXRCRix1QkFBc0I7Z0JBRXpELE9BQU9MO1lBQ1Q7Ozs7WUFJT1EsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVMLE9BQU87Z0JBQ2pELElBQU1NLGlDQUFpQ2Ysb0NBQW9DYyxrQkFDckVFLHNCQUFzQkQsZ0NBQ3RCRSxrQkFBa0JDLHVDQUF1Q0YscUJBQXFCUDtnQkFFcEYsT0FBT1E7WUFDVDs7OztLQVJBLG1DQUFPRSxRQUFPO0FBV2hCLFNBQVNELHVDQUF1Q0YsbUJBQW1CLEVBQUVQLE9BQU87SUFDMUUsSUFBUVcsYUFBZ0NDLFlBQUcsQ0FBbkNELFlBQVlqQixrQkFBb0JrQixZQUFHLENBQXZCbEIsaUJBQ2RFLGFBQWFlLFdBQVdFLHVCQUF1QixDQUFDTixxQkFBcUJQLFVBQ3JFTCxTQUFTbUIscUJBQXFCbEIsWUFBWUksVUFDMUNRLGtCQUFrQixJQUFJZCxnQkFBZ0JDLFFBQVFDO0lBRXBELE9BQU9ZO0FBQ1Q7QUFFQSxTQUFTTSxxQkFBcUJsQixVQUFVLEVBQUVJLE9BQU87SUFDL0MsSUFBTWUsbUJBQW1CbkIsV0FBV29CLFFBQVEsQ0FBQ2hCLFVBQ3ZDTCxTQUFTLEFBQUMsVUFBMEIsT0FBakJvQixrQkFBaUI7SUFFMUMsT0FBT3BCO0FBQ1QifQ==