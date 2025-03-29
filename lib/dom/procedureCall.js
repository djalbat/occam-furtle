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
var _ProcedureCall;
var expressionProcedureCallNodeQuery = (0, _query.nodeQuery)("/expression/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, expressions) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.expressions = expressions;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getExpressions",
            value: function getExpressions() {
                return this.expressions;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var procedureCallString = this.string; ///
                context.trace("Evaluating the '".concat(procedureCallString, "' procedure call..."));
                var procedurePresent = context.isProcedurePresentByReference(this.reference);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var fileContext = context.getFileContext(), procedure = context.findProcedureByReference(this.reference), expressions = this.expressions.evaluate(context), expression = procedure.call(expressions, fileContext);
                context.debug("...evaluated the '".concat(procedureCallString, "' procedure call."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var procedureCall = null;
                var expressionProcedureCallNode = expressionProcedureCallNodeQuery(expressionNode);
                if (expressionProcedureCallNode !== null) {
                    var procedureCallNode = expressionProcedureCallNode; ///
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var Reference = _dom.default.Reference, Expressions = _dom.default.Expressions, ProcedureCall = _dom.default.ProcedureCall, reference = Reference.fromProcedureCallNode(procedureCallNode, context), expressions = Expressions.fromProcedureCallNode(procedureCallNode, context), string = stringFromExpressionsAndReference(expressions, reference, context), procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function stringFromExpressionsAndReference(expressions, reference, context) {
    var expressionsString = expressions.getString(), referenceString = reference.getString(), string = "".concat(referenceString, "(").concat(expressionsString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSBjb250ZXh0LmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gdGhpcy5leHByZXNzaW9ucy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZTsgLy8vXG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UsIEV4cHJlc3Npb25zLCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uc0FuZFJlZmVyZW5jZShleHByZXNzaW9ucywgcmVmZXJlbmNlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uc0FuZFJlZmVyZW5jZShleHByZXNzaW9ucywgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7cmVmZXJlbmNlU3RyaW5nfSgke2V4cHJlc3Npb25zU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbImV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwiZXhwcmVzc2lvbnMiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRFeHByZXNzaW9ucyIsImV2YWx1YXRlIiwiY29udGV4dCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJleHByZXNzaW9uIiwiY2FsbCIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwibmFtZSIsIlJlZmVyZW5jZSIsImRvbSIsIkV4cHJlc3Npb25zIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwic3RyaW5nRnJvbUV4cHJlc3Npb25zQW5kUmVmZXJlbmNlIiwiZXhwcmVzc2lvbnNTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFB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