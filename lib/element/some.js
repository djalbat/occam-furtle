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
var _query = require("../utilities/query");
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
var expressionSomeNodeQuery = (0, _query.nodeQuery)("/expression/some");
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
                var expressionSomeNode = expressionSomeNodeQuery(expressionNode);
                if (expressionSomeNode !== null) {
                    var someNode = expressionSomeNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBleHByZXNzaW9uU29tZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL3NvbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTb21lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGVzKCksXG4gICAgICAgICAgYm9vbGVhbiA9IG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgICAgICAgICBjb25zdCB7IEV4cHJlc3Npb24sIEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cztcblxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU29tZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc29tZSA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uU29tZU5vZGUgPSBleHByZXNzaW9uU29tZU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Tb21lTm9kZTsgLy8vXG5cbiAgICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29tZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lLCBWYXJpYWJsZSwgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgU29tZSgke3ZhcmlhYmxlU3RyaW5nfSwgJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9KSBgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZXhwcmVzc2lvblNvbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJTb21lIiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJzb21lU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJzb21lIiwibm9kZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsIkV4cHJlc3Npb25zIiwiZnJvbU5vZGUiLCJleHByZXNzaW9ucyIsImZyb21FeHByZXNzaW9uIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvblNvbWVOb2RlIiwic29tZU5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZnJvbVNvbWVOb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwidmFyaWFibGVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRxQjtnRUFDQztxQkFHSTtxQkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUEsMEJBQTBCQyxJQUFBQSxnQkFBUyxF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