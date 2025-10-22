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
            key: "getName",
            value: function getName() {
                return this.reference.getName();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var procedureCallString = this.string; ///
                context.trace("Evaluating the '".concat(procedureCallString, "' procedure call..."));
                var name = this.getName(), procedurePresent = context.isProcedurePresentByName(name);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var procedure = context.findProcedureByName(name), expressions = this.expressions.evaluate(context), expression = procedure.call(expressions, context);
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
    var Reference = _dom.default.Reference, Expressions = _dom.default.Expressions, ProcedureCall = _dom.default.ProcedureCall, expressions = Expressions.fromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndExpressions(reference, expressions, context), procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function stringFromReferenceAndExpressions(reference, expressions, context) {
    var expressionsString = expressions.getString(), referenceString = reference.getString(), string = "".concat(referenceString, "(").concat(expressionsString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnM7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TmFtZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKCFwcm9jZWR1cmVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfSBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSB0aGlzLmV4cHJlc3Npb25zLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGU7IC8vL1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBFeHByZXNzaW9ucywgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICBleHByZXNzaW9ucyA9IEV4cHJlc3Npb25zLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMocmVmZXJlbmNlLCBleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMocmVmZXJlbmNlLCBleHByZXNzaW9ucywgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zLmdldFN0cmluZygpLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHtleHByZXNzaW9uc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwiZXhwcmVzc2lvbnMiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRFeHByZXNzaW9ucyIsImdldE5hbWUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJleHByZXNzaW9uIiwiY2FsbCIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwiRXhwcmVzc2lvbnMiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJzdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMiLCJleHByZXNzaW9uc1N0cmluZyIsInJlZmVyZW5jZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO2dFQUNNO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxtQ0FBbUNDLElBQUFBLGdCQUFTLEVBQUM7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