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
var _default = (0, _elements.define)((_ProcedureCall = /*#__PURE__*/ function() {
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
    var Reference = _elements.default.Reference, Expressions = _elements.default.Expressions, ProcedureCall = _elements.default.ProcedureCall, expressions = Expressions.fromProcedureCallNode(procedureCallNode, context), reference = Reference.fromProcedureCallNode(procedureCallNode, context), string = stringFromReferenceAndExpressions(reference, expressions, context), procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function stringFromReferenceAndExpressions(reference, expressions, context) {
    var expressionsString = expressions.getString(), referenceString = reference.getString(), string = "".concat(referenceString, "(").concat(expressionsString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZUNhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnM7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TmFtZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpO1xuXG4gICAgaWYgKCFwcm9jZWR1cmVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfSBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSB0aGlzLmV4cHJlc3Npb25zLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBwcm9jZWR1cmUuY2FsbChleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGU7IC8vL1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBFeHByZXNzaW9ucywgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRFeHByZXNzaW9ucyhyZWZlcmVuY2UsIGV4cHJlc3Npb25zLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZWZlcmVuY2VBbmRFeHByZXNzaW9ucyhyZWZlcmVuY2UsIGV4cHJlc3Npb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7cmVmZXJlbmNlU3RyaW5nfSgke2V4cHJlc3Npb25zU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwiZXhwcmVzc2lvbnMiLCJnZXRTdHJpbmciLCJnZXRSZWZlcmVuY2UiLCJnZXRFeHByZXNzaW9ucyIsImdldE5hbWUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByb2NlZHVyZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJleHByZXNzaW9uIiwiY2FsbCIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZWxlbWVudHMiLCJFeHByZXNzaW9ucyIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInN0cmluZ0Zyb21SZWZlcmVuY2VBbmRFeHByZXNzaW9ucyIsImV4cHJlc3Npb25zU3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7Z0VBQ0M7cUJBR0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLG1DQUFtQ0MsSUFB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