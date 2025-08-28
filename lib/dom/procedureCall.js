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
                var procedure = context.findProcedureByReference(this.reference), expressions = this.expressions.evaluate(context), expression = procedure.call(expressions, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmICghcHJvY2VkdXJlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30gcHJvY2VkdXJlIGlzIG5vdCBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gdGhpcy5leHByZXNzaW9ucy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlOyAvLy9cblxuICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSwgRXhwcmVzc2lvbnMsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb25zQW5kUmVmZXJlbmNlKGV4cHJlc3Npb25zLCByZWZlcmVuY2UsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb25zQW5kUmVmZXJlbmNlKGV4cHJlc3Npb25zLCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNTdHJpbmcgPSBleHByZXNzaW9ucy5nZXRTdHJpbmcoKSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7ZXhwcmVzc2lvbnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJyZWZlcmVuY2UiLCJleHByZXNzaW9ucyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldEV4cHJlc3Npb25zIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInRyYWNlIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwiZXhwcmVzc2lvbiIsImNhbGwiLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsIm5hbWUiLCJSZWZlcmVuY2UiLCJkb20iLCJFeHByZXNzaW9ucyIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uc0FuZFJlZmVyZW5jZSIsImV4cHJlc3Npb25zU3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7Z0VBQ007cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG1DQUFtQ0MsSUFBQUEsZ0JBQVMsRUFBQztJQUVuRCxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsTUFBTSxFQUFFQyxTQUFT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