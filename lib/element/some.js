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
var _Some;
var _default = (0, _elements.define)((_Some = /*#__PURE__*/ function() {
    function Some(string, variable, anonymousProcedure) {
        _class_call_check(this, Some);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Some, [
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
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.some(function(node) {
                    var expression;
                    var Expression = _elements.default.Expression, Expressions = _elements.default.Expressions;
                    expression = Expression.fromNode(node, context);
                    var expressions = Expressions.fromExpression(expression, context);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    var expressionType = expression.getType();
                    if (expressionType !== _types.BOOLEAN_TYPE) {
                        var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's type is '").concat(expressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = expression.getBoolean();
                    return boolean;
                });
                var Expression = _elements.default.Expression;
                expression = Expression.fromBoolean(boolean, context);
                context.trace("...evaluated the '".concat(someString, "' some."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var some = null;
                var someNode = expressionNode.getSomeNode();
                if (someNode !== null) {
                    some = someFromSomeNode(someNode, context);
                }
                return some;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));
function someFromSomeNode(someNode, context) {
    var Some = _elements.default.Some, Variable = _elements.default.Variable, AnonymousProcedure = _elements.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context), variable = Variable.fromSomeNode(someNode, context), string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context), some = new Some(string, variable, anonymousProcedure);
    return some;
}
function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
    var variableString = variable.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Some(".concat(variableString, ", ").concat(anonymousProcedureString, ") ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU29tZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCBzb21lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLi4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgICAgICAgICAgY29uc3QgeyBFeHByZXNzaW9uLCBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2V4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cztcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNvbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gICAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSwgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IEFub255bW91c1Byb2NlZHVyZS5mcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFNvbWUoJHt2YXJpYWJsZVN0cmluZ30sICR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfSkgYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNvbWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInNvbWVTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiYm9vbGVhbiIsInNvbWUiLCJub2RlIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZSIsImV4cHJlc3Npb25zIiwiZnJvbUV4cHJlc3Npb24iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJzb21lTm9kZSIsImdldFNvbWVOb2RlIiwic29tZUZyb21Tb21lTm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsImZyb21Tb21lTm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInZhcmlhYmxlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7cUJBR21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQUR0Qkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxhQUFhLElBQUksQ0FBQ04sU0FBUztnQkFFakNJLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYRCxZQUFXO2dCQUU1Q0QsYUFBYSxJQUFJLENBQUNQLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFcEMsSUFBTUksaUJBQWlCSCxXQUFXSSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLGlCQUFVLEVBQUU7b0JBQ2pDLElBQU1DLG1CQUFtQk4sV0FBV08sUUFBUSxDQUFDUixVQUN2Q1MsVUFBVSxBQUFDLE9BQXdDTCxPQUFsQ0csa0JBQWlCLG1CQUFvREQsT0FBbkNGLGdCQUFlLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRWixXQUFXYSxRQUFRLElBQzNCQyxVQUFVRixNQUFNRyxJQUFJLENBQUMsU0FBQ0M7b0JBQ3BCLElBQUloQjtvQkFFSixJQUFRaUIsYUFBNEJDLGlCQUFRLENBQXBDRCxZQUFZRSxjQUFnQkQsaUJBQVEsQ0FBeEJDO29CQUVwQm5CLGFBQWFpQixXQUFXRyxRQUFRLENBQUNKLE1BQU1qQjtvQkFFdkMsSUFBTXNCLGNBQWNGLFlBQVlHLGNBQWMsQ0FBQ3RCLFlBQVlEO29CQUUzREMsYUFBYSxNQUFLTixrQkFBa0IsQ0FBQzZCLElBQUksQ0FBQ0YsYUFBYXRCO29CQUV2RCxJQUFNSSxpQkFBaUJILFdBQVdJLE9BQU87b0JBRXpDLElBQUlELG1CQUFtQnFCLG1CQUFZLEVBQUU7d0JBQ25DLElBQU1sQixtQkFBbUJOLFdBQVdPLFFBQVEsQ0FBQ1IsVUFDdkNTLFVBQVUsQUFBQyxPQUFnREwsT0FBMUNHLGtCQUFpQiwyQkFBdUVrQixPQUE5Q3JCLGdCQUFlLGlDQUE0QyxPQUFicUIsbUJBQVksRUFBQyxPQUN0SGYsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDt3QkFFeEMsTUFBTUM7b0JBQ1I7b0JBRUEsSUFBTUssVUFBVWQsV0FBV3lCLFVBQVU7b0JBRXJDLE9BQU9YO2dCQUNUO2dCQUVOLElBQU0sQUFBRUcsYUFBZUMsaUJBQVEsQ0FBdkJEO2dCQUVSakIsYUFBYWlCLFdBQVdTLFdBQVcsQ0FBQ1osU0FBU2Y7Z0JBRTdDQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBK0IsT0FBWEQsWUFBVztnQkFFOUMsT0FBT0Q7WUFDVDs7OztZQUlPMkIsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUU3QixPQUFPO2dCQUMvQyxJQUFJZ0IsT0FBTztnQkFFWCxJQUFNYyxXQUFXRCxlQUFlRSxXQUFXO2dCQUUzQyxJQUFJRCxhQUFhLE1BQU07b0JBQ3JCZCxPQUFPZ0IsaUJBQWlCRixVQUFVOUI7Z0JBQ3BDO2dCQUVBLE9BQU9nQjtZQUNUOzs7O0tBWkEsd0JBQU9pQixRQUFPO0FBZWhCLFNBQVNELGlCQUFpQkYsUUFBUSxFQUFFOUIsT0FBTztJQUN6QyxJQUFRUixPQUF1QzJCLGlCQUFRLENBQS9DM0IsTUFBTTBDLFdBQWlDZixpQkFBUSxDQUF6Q2UsVUFBVUMscUJBQXVCaEIsaUJBQVEsQ0FBL0JnQixvQkFDbEJ4QyxxQkFBcUJ3QyxtQkFBbUJDLFlBQVksQ0FBQ04sVUFBVTlCLFVBQy9ETixXQUFXd0MsU0FBU0UsWUFBWSxDQUFDTixVQUFVOUIsVUFDM0NQLFNBQVM0Qyx3Q0FBd0MzQyxVQUFVQyxvQkFBb0JLLFVBQy9FZ0IsT0FBTyxJQUFJeEIsS0FBS0MsUUFBUUMsVUFBVUM7SUFFeEMsT0FBT3FCO0FBQ1Q7QUFFQSxTQUFTcUIsd0NBQXdDM0MsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUssT0FBTztJQUNwRixJQUFNc0MsaUJBQWlCNUMsU0FBU0UsU0FBUyxJQUNuQzJDLDJCQUEyQjVDLG1CQUFtQkMsU0FBUyxJQUN2REgsU0FBUyxBQUFDLFFBQTBCOEMsT0FBbkJELGdCQUFlLE1BQTZCLE9BQXpCQywwQkFBeUI7SUFFbkUsT0FBTzlDO0FBQ1QifQ==