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
    function ReturnStatement(string, value) {
        _class_call_check(this, ReturnStatement);
        this.string = string;
        this.value = value;
    }
    _create_class(ReturnStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var returnStatementString = this.string; ///
                context.trace("Evaluating the '".concat(returnStatementString, "' return statement..."));
                value = this.value.evaluate(context);
                context.debug("...evaluated the '".concat(returnStatementString, "' return statement."));
                return value;
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
    var Value = _dom.default.Value, ReturnStatement = _dom.default.ReturnStatement, value = Value.fromReturnStatementNode(returnStatementNode, context), string = stringFromValue(value, context), returnStatement = new ReturnStatement(string, value);
    return returnStatement;
}
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "Return ".concat(valueString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vc3RhdGVtZW50L3JldHVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5CbG9jay9yZXR1cm5TdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVyblN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfScgcmV0dXJuIHN0YXRlbWVudC5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5TdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGVRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICAgIHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgUmV0dXJuU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGBSZXR1cm4gJHt2YWx1ZVN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInJldHVybkJsb2NrUmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5TdGF0ZW1lbnQiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja1JldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21WYWx1ZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNDQUFzQ0MsSUFBQUEsZ0JBQVMsRUFBQztJQUV0RCxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlKO2dCQUVKLElBQU1LLHdCQUF3QixJQUFJLENBQUNOLE1BQU0sRUFBRyxHQUFHO2dCQUUvQ0ssUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXdDLE9BQXRCRCx1QkFBc0I7Z0JBRXZETCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDRyxRQUFRLENBQUNDO2dCQUU1QkEsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQTBDLE9BQXRCRix1QkFBc0I7Z0JBRXpELE9BQU9MO1lBQ1Q7Ozs7WUFJT1EsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVMLE9BQU87Z0JBQ2pELElBQU1NLGlDQUFpQ2Ysb0NBQW9DYyxrQkFDckVFLHNCQUFzQkQsZ0NBQ3RCRSxrQkFBa0JDLHVDQUF1Q0YscUJBQXFCUDtnQkFFcEYsT0FBT1E7WUFDVDs7OztLQVJBLG1DQUFPRSxRQUFPO0FBV2hCLFNBQVNELHVDQUF1Q0YsbUJBQW1CLEVBQUVQLE9BQU87SUFDMUUsSUFBUVcsUUFBMkJDLFlBQUcsQ0FBOUJELE9BQU9qQixrQkFBb0JrQixZQUFHLENBQXZCbEIsaUJBQ1RFLFFBQVFlLE1BQU1FLHVCQUF1QixDQUFDTixxQkFBcUJQLFVBQzNETCxTQUFTbUIsZ0JBQWdCbEIsT0FBT0ksVUFDaENRLGtCQUFrQixJQUFJZCxnQkFBZ0JDLFFBQVFDO0lBRXBELE9BQU9ZO0FBQ1Q7QUFFQSxTQUFTTSxnQkFBZ0JsQixLQUFLLEVBQUVJLE9BQU87SUFDckMsSUFBTWUsY0FBY25CLE1BQU1vQixRQUFRLENBQUNoQixVQUM3QkwsU0FBUyxBQUFDLFVBQXFCLE9BQVpvQixhQUFZO0lBRXJDLE9BQU9wQjtBQUNUIn0=