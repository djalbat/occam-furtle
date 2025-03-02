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
var returnStatementNodeQuery = (0, _query.nodeQuery)("/returnBlock/returnStatement");
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
                var Value = _dom.default.Value, returnStatementNode = returnStatementNodeQuery(returnBlockNode), value = Value.fromReturnStatementNode(returnStatementNode, context), string = stringFromValue(value, context), returnStatement = new ReturnStatement(string, value);
                return returnStatement;
            }
        }
    ]);
    return ReturnStatement;
}(), _define_property(_ReturnStatement, "name", "ReturnStatement"), _ReturnStatement));
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "Return ".concat(valueString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vc3RhdGVtZW50L3JldHVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCByZXR1cm5TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmV0dXJuQmxvY2svcmV0dXJuU3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZXR1cm5TdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9JyByZXR1cm4gc3RhdGVtZW50Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JldHVyblN0YXRlbWVudFN0cmluZ30nIHJldHVybiBzdGF0ZW1lbnQuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgIHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlUXVlcnkocmV0dXJuQmxvY2tOb2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHZhbHVlKTtcblxuICAgIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYFJldHVybiAke3ZhbHVlU3RyaW5nfTtgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicmV0dXJuU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5TdGF0ZW1lbnQiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja05vZGUiLCJWYWx1ZSIsImRvbSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInN0cmluZ0Zyb21WYWx1ZSIsInJldHVyblN0YXRlbWVudCIsIm5hbWUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSwyQkFBMkJDLElBQUFBLGdCQUFTLEVBQUM7SUFFM0MsV0FBZUMsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJSjtnQkFFSixJQUFNSyx3QkFBd0IsSUFBSSxDQUFDTixNQUFNLEVBQUcsR0FBRztnQkFFL0NLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF3QyxPQUF0QkQsdUJBQXNCO2dCQUV2REwsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0csUUFBUSxDQUFDQztnQkFFNUJBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUEwQyxPQUF0QkYsdUJBQXNCO2dCQUV6RCxPQUFPTDtZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFTCxPQUFPO2dCQUNqRCxJQUFNLEFBQUVNLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUsc0JBQXNCakIseUJBQXlCYyxrQkFDL0NULFFBQVFVLE1BQU1HLHVCQUF1QixDQUFDRCxxQkFBcUJSLFVBQzNETCxTQUFTZSxnQkFBZ0JkLE9BQU9JLFVBQ2hDVyxrQkFBa0IsSUFBSWpCLGdCQUFnQkMsUUFBUUM7Z0JBRXBELE9BQU9lO1lBQ1Q7Ozs7S0FWQSxtQ0FBT0MsUUFBTztBQWFoQixTQUFTRixnQkFBZ0JkLEtBQUssRUFBRUksT0FBTztJQUNyQyxJQUFNYSxjQUFjakIsTUFBTWtCLFFBQVEsQ0FBQ2QsVUFDN0JMLFNBQVMsQUFBQyxVQUFxQixPQUFaa0IsYUFBWTtJQUVyQyxPQUFPbEI7QUFDVCJ9