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
var _Every;
var expressionEveryNodeQuery = (0, _query.nodeQuery)("/expression/every");
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
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), boolean = nodes.every(function(node) {
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
    var Every = _elements.default.Every, Variable = _elements.default.Variable, AnonymousProcedure = _elements.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context), variable = Variable.fromEveryNode(everyNode, context), string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context), every = new Every(string, variable, anonymousProcedure);
    return every;
}
function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
    var variableString = variable.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Every(".concat(variableString, ", ").concat(anonymousProcedureString, ") ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgZXhwcmVzc2lvbkV2ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vZXZlcnlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFdmVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5ldmVyeSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICAgICAgICAgIGNvbnN0IHsgRXhwcmVzc2lvbiwgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtleHByZXNzaW9uVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm9vbGVhbiA9IGV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbjtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHM7XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7ZXZlcnlTdHJpbmd9JyBldmVyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV2ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBldmVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uRXZlcnlOb2RlID0gZXhwcmVzc2lvbkV2ZXJ5Tm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uRXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uRXZlcnlOb2RlOyAvLy9cblxuICAgICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnksIFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgRXZlcnkoJHt2YXJpYWJsZVN0cmluZ30sICR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfSkgYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25FdmVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlZmluZSIsIkV2ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJldmVyeVN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJib29sZWFuIiwiZXZlcnkiLCJub2RlIiwiRXhwcmVzc2lvbiIsImVsZW1lbnRzIiwiRXhwcmVzc2lvbnMiLCJmcm9tTm9kZSIsImV4cHJlc3Npb25zIiwiZnJvbUV4cHJlc3Npb24iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRXZlcnlOb2RlIiwiZXZlcnlOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZnJvbUV2ZXJ5Tm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInZhcmlhYmxlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUcUI7Z0VBQ0M7cUJBR0k7cUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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