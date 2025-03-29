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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Reduce = /*#__PURE__*/ function() {
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
                    var Expression = _dom.default.Expression, Expressions = _dom.default.Expressions;
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
    var Reduce = _dom.default.Reduce, Variable = _dom.default.Variable, Expression = _dom.default.Expression, AnonymousProcedure = _dom.default.AnonymousProcedure, expression = Expression.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialExpression = expression, anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context), string = stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure), reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
    var variableString = variable.getString(), initialExpressionString = initialExpression.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Reduce(".concat(variableString, ", ").concat(anonymousProcedureString, ", ").concat(initialExpressionString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZXhwcmVzc2lvblJlZHVjZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL3JlZHVjZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmVkdWNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb247XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gdGhpcy5pbml0aWFsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGV4cHJlc3Npb24gPSBub2Rlcy5yZWR1Y2UoKGN1cnJlbnRFeHByZXNzaW9uLCBub2RlKSA9PiB7XG4gICAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgICAgY29uc3QgeyBFeHByZXNzaW9uLCBFeHByZXNzaW9ucyB9ID0gZG9tO1xuXG4gICAgICBleHByZXNzaW9uID0gY3VycmVudEV4cHJlc3Npb247IC8vL1xuXG4gICAgICBjb25zdCBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgZXhwcmVzc2lvbnMuYWRkRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICB9LCBpbml0aWFsRXhwcmVzc2lvbik7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3JlZHVjZVN0cmluZ30nIHJlZHVjZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25SZWR1Y2VOb2RlID0gZXhwcmVzc2lvblJlZHVjZU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblJlZHVjZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZHVjZU5vZGUgPSBleHByZXNzaW9uUmVkdWNlTm9kZTsgLy8vXG5cbiAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlLCBWYXJpYWJsZSwgRXhwcmVzc2lvbiwgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb24sIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvblN0cmluZyA9IGluaXRpYWxFeHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBSZWR1Y2UoJHt2YXJpYWJsZVN0cmluZ30sICR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfSwgJHtpbml0aWFsRXhwcmVzc2lvblN0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25SZWR1Y2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZHVjZSIsInN0cmluZyIsInZhcmlhYmxlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEluaXRpYWxFeHByZXNzaW9uIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJyZWR1Y2UiLCJjdXJyZW50RXhwcmVzc2lvbiIsIm5vZGUiLCJFeHByZXNzaW9uIiwiZG9tIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9ucyIsImZyb21FeHByZXNzaW9uIiwiZnJvbU5vZGUiLCJhZGRFeHByZXNzaW9uIiwiY2FsbCIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvblJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJuYW1lIiwiVmFyaWFibGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJmcm9tUmVkdWNlTm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwidmFyaWFibGVTdHJpbmciLCJpbml0aWFsRXhwcmVzc2lvblN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2dFQUNNO3FCQUVJ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