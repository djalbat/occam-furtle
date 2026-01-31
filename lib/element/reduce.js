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
var _Reduce;
var _default = (0, _elements.define)((_Reduce = /*#__PURE__*/ function() {
    function Reduce(string, variable, initialExpression, anonymousProcedure) {
        _class_call_check(this, Reduce);
        this.string = string;
        this.variable = variable;
        this.initialExpression = initialExpression;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Reduce, [
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
            key: "getInitialExpression",
            value: function getInitialExpression() {
                return this.initialExpression;
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
                var reduceString = this.getString();
                context.trace("Evaluating the '".concat(reduceString, "' reduce..."));
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), initialExpression = this.initialExpression.evaluate(context);
                expression = nodes.reduce(function(currentExpression, node) {
                    var expression;
                    var Expressions = _elements.default.Expressions;
                    expression = currentExpression; ///
                    var expressions = Expressions.fromExpression(expression, context);
                    expression = (0, _element.expressionFromNode)(node, context);
                    expressions.addExpression(expression);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    return expression;
                }, initialExpression);
                context.trace("...evaluated the '".concat(reduceString, "' reduce."));
                return expression;
            }
        }
    ]);
    return Reduce;
}(), _define_property(_Reduce, "name", "Reduce"), _Reduce));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbkZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWR1Y2Uge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGVzKCksXG4gICAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSB0aGlzLmluaXRpYWxFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgZXhwcmVzc2lvbiA9IG5vZGVzLnJlZHVjZSgoY3VycmVudEV4cHJlc3Npb24sIG5vZGUpID0+IHtcbiAgICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cztcblxuICAgICAgZXhwcmVzc2lvbiA9IGN1cnJlbnRFeHByZXNzaW9uOyAvLy9cblxuICAgICAgY29uc3QgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgZXhwcmVzc2lvbnMuYWRkRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICB9LCBpbml0aWFsRXhwcmVzc2lvbik7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JlZHVjZVN0cmluZ30nIHJlZHVjZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVkdWNlIiwic3RyaW5nIiwidmFyaWFibGUiLCJpbml0aWFsRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0SW5pdGlhbEV4cHJlc3Npb24iLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsInJlZHVjZSIsImN1cnJlbnRFeHByZXNzaW9uIiwibm9kZSIsIkV4cHJlc3Npb25zIiwiZWxlbWVudHMiLCJleHByZXNzaW9ucyIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbkZyb21Ob2RlIiwiYWRkRXhwcmVzc2lvbiIsImNhbGwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7Z0VBQ0M7cUJBR0s7dUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DLFdBQWVBLElBQUFBLGdCQUFNLDJCQUFDO2FBQU1DLE9BQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxpQkFBaUIsRUFBRUMsa0JBQWtCO2dDQUR6Q0o7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGlCQUFpQjtZQUMvQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osa0JBQWtCO1lBQ2hDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLGVBQWUsSUFBSSxDQUFDUCxTQUFTO2dCQUVuQ0ssUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQStCLE9BQWJELGNBQWE7Z0JBRTlDRCxhQUFhLElBQUksQ0FBQ1QsUUFBUSxDQUFDTyxRQUFRLENBQUNDO2dCQUVwQyxJQUFNSSxpQkFBaUJILFdBQVdJLE9BQU87Z0JBRXpDLElBQUlELG1CQUFtQkUsaUJBQVUsRUFBRTtvQkFDakMsSUFBTUMsbUJBQW1CTixXQUFXTyxRQUFRLENBQUNSLFVBQ3ZDUyxVQUFVLEFBQUMsT0FBd0NMLE9BQWxDRyxrQkFBaUIsbUJBQW9ERCxPQUFuQ0YsZ0JBQWUsc0JBQStCLE9BQVhFLGlCQUFVLEVBQUMsT0FDakdJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFFBQVFaLFdBQVdhLFFBQVEsSUFDM0JyQixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ00sUUFBUSxDQUFDQztnQkFFMURDLGFBQWFZLE1BQU1FLE1BQU0sQ0FBQyxTQUFDQyxtQkFBbUJDO29CQUM1QyxJQUFJaEI7b0JBRUosSUFBTSxBQUFFaUIsY0FBZ0JDLGlCQUFRLENBQXhCRDtvQkFFUmpCLGFBQWFlLG1CQUFtQixHQUFHO29CQUVuQyxJQUFNSSxjQUFjRixZQUFZRyxjQUFjLENBQUNwQixZQUFZRDtvQkFFM0RDLGFBQWFxQixJQUFBQSwyQkFBa0IsRUFBQ0wsTUFBTWpCO29CQUV0Q29CLFlBQVlHLGFBQWEsQ0FBQ3RCO29CQUUxQkEsYUFBYSxNQUFLUCxrQkFBa0IsQ0FBQzhCLElBQUksQ0FBQ0osYUFBYXBCO29CQUV2RCxPQUFPQztnQkFDVCxHQUFHUjtnQkFFSE8sUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQWlDLE9BQWJELGNBQWE7Z0JBRWhELE9BQU9EO1lBQ1Q7Ozs7S0FFQSwwQkFBT3dCLFFBQU8ifQ==