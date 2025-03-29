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
var _Every;
var expressionEveryNodeQuery = (0, _query.nodeQuery)("/expression/every");
var _default = (0, _dom.domAssigned)((_Every = /*#__PURE__*/ function() {
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
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.every(function(node) {
                    var expression;
                    var Expression = _dom.default.Expression, Expressions = _dom.default.Expressions;
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
                var Expression = _dom.default.Expression;
                expression = Expression.fromBoolean(boolean, context);
                context.trace("...evaluated the '".concat(everyString, "' every."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var every = null;
                var expressionEveryNode = expressionEveryNodeQuery(expressionNode);
                if (expressionEveryNode !== null) {
                    var everyNode = expressionEveryNode; ///
                    every = everyFromEveryNode(everyNode, context);
                }
                return every;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));
function everyFromEveryNode(everyNode, context) {
    var Every = _dom.default.Every, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context), variable = Variable.fromEveryNode(everyNode, context), string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context), every = new Every(string, variable, anonymousProcedure);
    return every;
}
function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
    var variableString = variable.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Every(".concat(variableString, ", ").concat(anonymousProcedureString, ") ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXZlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25FdmVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL2V2ZXJ5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFdmVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5ldmVyeSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICAgICAgICAgIGNvbnN0IHsgRXhwcmVzc2lvbiwgRXhwcmVzc2lvbnMgfSA9IGRvbTtcblxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7ZXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGRvbTtcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5LmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXZlcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25FdmVyeU5vZGUgPSBleHByZXNzaW9uRXZlcnlOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25FdmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25FdmVyeU5vZGU7IC8vL1xuXG4gICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBldmVyeTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSwgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgRXZlcnkoJHt2YXJpYWJsZVN0cmluZ30sICR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfSkgYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25FdmVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiRXZlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImV2ZXJ5U3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJldmVyeSIsIm5vZGUiLCJFeHByZXNzaW9uIiwiZG9tIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZSIsImV4cHJlc3Npb25zIiwiZnJvbUV4cHJlc3Npb24iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRXZlcnlOb2RlIiwiZXZlcnlOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZnJvbUV2ZXJ5Tm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInZhcmlhYmxlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7Z0VBQ007cUJBRUk7cUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1BLDJC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