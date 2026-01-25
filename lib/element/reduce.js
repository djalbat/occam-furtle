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
    var Reduce = _elements.default.Reduce, Variable = _elements.default.Variable, Expression = _elements.default.Expression, AnonymousProcedure = _elements.default.AnonymousProcedure, expression = Expression.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialExpression = expression, anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context), string = stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure), reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
    var variableString = variable.getString(), initialExpressionString = initialExpression.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Reduce(".concat(variableString, ", ").concat(anonymousProcedureString, ", ").concat(initialExpressionString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBleHByZXNzaW9uUmVkdWNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcmVkdWNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb247XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gdGhpcy5pbml0aWFsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGV4cHJlc3Npb24gPSBub2Rlcy5yZWR1Y2UoKGN1cnJlbnRFeHByZXNzaW9uLCBub2RlKSA9PiB7XG4gICAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgICAgY29uc3QgeyBFeHByZXNzaW9uLCBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHM7XG5cbiAgICAgIGV4cHJlc3Npb24gPSBjdXJyZW50RXhwcmVzc2lvbjsgLy8vXG5cbiAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBleHByZXNzaW9ucy5hZGRFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgICBleHByZXNzaW9uID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgIH0sIGluaXRpYWxFeHByZXNzaW9uKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblJlZHVjZU5vZGUgPSBleHByZXNzaW9uUmVkdWNlTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25SZWR1Y2VOb2RlOyAvLy9cblxuICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UsIFZhcmlhYmxlLCBFeHByZXNzaW9uLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb25TdHJpbmcgPSBpbml0aWFsRXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgUmVkdWNlKCR7dmFyaWFibGVTdHJpbmd9LCAke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30sICR7aW5pdGlhbEV4cHJlc3Npb25TdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uUmVkdWNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVmaW5lIiwiUmVkdWNlIiwic3RyaW5nIiwidmFyaWFibGUiLCJpbml0aWFsRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0SW5pdGlhbEV4cHJlc3Npb24iLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsInJlZHVjZSIsImN1cnJlbnRFeHByZXNzaW9uIiwibm9kZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsIkV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnMiLCJmcm9tRXhwcmVzc2lvbiIsImZyb21Ob2RlIiwiYWRkRXhwcmVzc2lvbiIsImNhbGwiLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZnJvbVJlZHVjZU5vZGUiLCJzdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInZhcmlhYmxlU3RyaW5nIiwiaW5pdGlhbEV4cHJlc3Npb25TdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7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