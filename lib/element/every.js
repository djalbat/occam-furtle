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
var _types = require("../types");
var _element = require("../utilities/element");
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
var _Every;
var _default = (0, _elements.define)((_Every = /*#__PURE__*/ function() {
    function Every(string, variable, anonymousProcedure) {
        _class_call_check(this, Every);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Every, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var expression;
                var everyString = this.getString();
                context.trace("Evaluating the '".concat(everyString, "' every..."));
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.every(function(node) {
                    var expression;
                    var Expressions = _elements.default.Expressions;
                    expression = (0, _element.expressionFromNode)(node, context);
                    var expressions = Expressions.fromExpression(expression, context);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    var expressionType = expression.getType();
                    if (expressionType !== _types.BOOLEAN_TYPE) {
                        var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = expression.getBoolean();
                    return boolean;
                });
                expression = (0, _element.expressionFromBoolean)(boolean, context);
                context.trace("...evaluated the '".concat(everyString, "' every."));
                return expression;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tTm9kZSwgZXhwcmVzc2lvbkZyb21Cb29sZWFuIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFdmVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5ldmVyeSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICAgICAgICAgIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2V4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7ZXZlcnlTdHJpbmd9JyBldmVyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV2ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFdmVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwiZXZlcnlTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJldmVyeSIsIm5vZGUiLCJFeHByZXNzaW9ucyIsImVsZW1lbnRzIiwiZXhwcmVzc2lvbkZyb21Ob2RlIiwiZXhwcmVzc2lvbnMiLCJmcm9tRXhwcmVzc2lvbiIsImNhbGwiLCJCT09MRUFOX1RZUEUiLCJnZXRCb29sZWFuIiwiZXhwcmVzc2lvbkZyb21Cb29sZWFuIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0VBUHFCO2dFQUNDO3FCQUdtQjt1QkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFELFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRHRCSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO1lBQ2hDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxDQUFDTixTQUFTO2dCQUVsQ0ksUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQThCLE9BQVpELGFBQVk7Z0JBRTdDRCxhQUFhLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxRQUFRLENBQUNDO2dCQUVwQyxJQUFNSSxpQkFBaUJILFdBQVdJLE9BQU87Z0JBRXpDLElBQUlELG1CQUFtQkUsaUJBQVUsRUFBRTtvQkFDakMsSUFBTUMsbUJBQW1CTixXQUFXTCxTQUFTLElBQ3ZDWSxVQUFVLEFBQUMsT0FBd0NKLE9BQWxDRyxrQkFBaUIsbUJBQW9ERCxPQUFuQ0YsZ0JBQWUsc0JBQStCLE9BQVhFLGlCQUFVLEVBQUMsT0FDakdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFFBQVFYLFdBQVdZLFFBQVEsSUFDM0JDLFVBQVVGLE1BQU1HLEtBQUssQ0FBQyxTQUFDQztvQkFDckIsSUFBSWY7b0JBRUosSUFBTSxBQUFFZ0IsY0FBZ0JDLGlCQUFRLENBQXhCRDtvQkFFUmhCLGFBQWFrQixJQUFBQSwyQkFBa0IsRUFBQ0gsTUFBTWhCO29CQUV0QyxJQUFNb0IsY0FBY0gsWUFBWUksY0FBYyxDQUFDcEIsWUFBWUQ7b0JBRTNEQyxhQUFhLE1BQUtOLGtCQUFrQixDQUFDMkIsSUFBSSxDQUFDRixhQUFhcEI7b0JBRXZELElBQU1JLGlCQUFpQkgsV0FBV0ksT0FBTztvQkFFekMsSUFBSUQsbUJBQW1CbUIsbUJBQVksRUFBRTt3QkFDbkMsSUFBTWhCLG1CQUFtQk4sV0FBV0wsU0FBUyxJQUN2Q1ksVUFBVSxBQUFDLE9BQWdESixPQUExQ0csa0JBQWlCLDJCQUF1RWdCLE9BQTlDbkIsZ0JBQWUsaUNBQTRDLE9BQWJtQixtQkFBWSxFQUFDLE9BQ3RIZCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dCQUV4QyxNQUFNQztvQkFDUjtvQkFFQSxJQUFNSyxVQUFVYixXQUFXdUIsVUFBVTtvQkFFckMsT0FBT1Y7Z0JBQ1Q7Z0JBRU5iLGFBQWF3QixJQUFBQSw4QkFBcUIsRUFBQ1gsU0FBU2Q7Z0JBRTVDQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBZ0MsT0FBWkQsYUFBWTtnQkFFL0MsT0FBT0Q7WUFDVDs7OztLQUVBLHlCQUFPeUIsUUFBTyJ9