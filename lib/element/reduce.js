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
var _Reduce;
var expressionReduceNodeQuery = (0, _query.nodeQuery)("/expression/reduce");
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
                    var Expression = _elements.default.Expression, Expressions = _elements.default.Expressions;
                    expression = currentExpression; ///
                    var expressions = Expressions.fromExpression(expression, context);
                    expression = Expression.fromNode(node, context);
                    expressions.addExpression(expression);
                    expression = _this.anonymousProcedure.call(expressions, context);
                    return expression;
                }, initialExpression);
                context.trace("...evaluated the '".concat(reduceString, "' reduce."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var reduce = null;
                var expressionReduceNode = expressionReduceNodeQuery(expressionNode);
                if (expressionReduceNode !== null) {
                    var reduceNode = expressionReduceNode; ///
                    reduce = reduceFromReduceNode(reduceNode, context);
                }
                return reduce;
            }
        }
    ]);
    return Reduce;
}(), _define_property(_Reduce, "name", "Reduce"), _Reduce));
function reduceFromReduceNode(reduceNode, context) {
    var Reduce = _elements.default.Reduce, Variable = _elements.default.Variable, Expression = _elements.default.Expression, AnonymousProcedure = _elements.default.AnonymousProcedure, expression = Expression.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialExpression = expression, anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), string = stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure), reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
    var variableString = variable.getString(), initialExpressionString = initialExpression.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Reduce(".concat(variableString, ", ").concat(anonymousProcedureString, ", ").concat(initialExpressionString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBleHByZXNzaW9uUmVkdWNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcmVkdWNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb247XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gdGhpcy5pbml0aWFsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGV4cHJlc3Npb24gPSBub2Rlcy5yZWR1Y2UoKGN1cnJlbnRFeHByZXNzaW9uLCBub2RlKSA9PiB7XG4gICAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgICAgY29uc3QgeyBFeHByZXNzaW9uLCBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHM7XG5cbiAgICAgIGV4cHJlc3Npb24gPSBjdXJyZW50RXhwcmVzc2lvbjsgLy8vXG5cbiAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBleHByZXNzaW9ucy5hZGRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgICBleHByZXNzaW9uID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgIH0sIGluaXRpYWxFeHByZXNzaW9uKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblJlZHVjZU5vZGUgPSBleHByZXNzaW9uUmVkdWNlTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25SZWR1Y2VOb2RlOyAvLy9cblxuICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UsIFZhcmlhYmxlLCBFeHByZXNzaW9uLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvblN0cmluZyA9IGluaXRpYWxFeHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBSZWR1Y2UoJHt2YXJpYWJsZVN0cmluZ30sICR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfSwgJHtpbml0aWFsRXhwcmVzc2lvblN0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25SZWR1Y2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJSZWR1Y2UiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImluaXRpYWxFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsRXhwcmVzc2lvbiIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwicmVkdWNlIiwiY3VycmVudEV4cHJlc3Npb24iLCJub2RlIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9ucyIsImZyb21FeHByZXNzaW9uIiwiZnJvbU5vZGUiLCJhZGRFeHByZXNzaW9uIiwiY2FsbCIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvblJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJuYW1lIiwiVmFyaWFibGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJmcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJ2YXJpYWJsZVN0cmluZyIsImluaXRpYWxFeHByZXNzaW9uU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIl0s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