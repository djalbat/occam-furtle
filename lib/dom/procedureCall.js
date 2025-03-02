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
var valueProcedureCallNodeQuery = (0, _query.nodeQuery)("/value/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, values) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.values = values;
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
            key: "getValues",
            value: function getValues() {
                return this.values;
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
                var fileContext = context.getFileContext(), procedure = context.findProcedureByReference(this.reference), values = this.values.evaluate(context), value = procedure.call(values, fileContext);
                context.debug("...evaluated the '".concat(procedureCallString, "' procedure call."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var procedureCall = null;
                var valueProcedureCallNode = valueProcedureCallNodeQuery(valueNode);
                if (valueProcedureCallNode !== null) {
                    var procedureCallNode = valueProcedureCallNode; ///
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var Values = _dom.default.Values, Reference = _dom.default.Reference, ProcedureCall = _dom.default.ProcedureCall, reference = Reference.fromProcedureCallNode(procedureCallNode, context), values = Values.fromProcedureCallNode(procedureCallNode, context), string = stringFromValuesAndReference(values, reference, context), procedureCall = new ProcedureCall(string, reference, values);
    return procedureCall;
}
function stringFromValuesAndReference(values, reference, context) {
    var valuesString = values.getString(), referenceString = reference.getString(), string = "".concat(referenceString, "(").concat(valuesString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHZhbHVlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAoIXByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9IHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gY29udGV4dC5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICB2YWx1ZXMgPSB0aGlzLnZhbHVlcy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKHZhbHVlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlUHJvY2VkdXJlQ2FsbE5vZGUgPSB2YWx1ZVByb2NlZHVyZUNhbGxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHZhbHVlUHJvY2VkdXJlQ2FsbE5vZGU7IC8vL1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWVzLCBSZWZlcmVuY2UsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFsdWVzQW5kUmVmZXJlbmNlKHZhbHVlcywgcmVmZXJlbmNlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCB2YWx1ZXMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWVzQW5kUmVmZXJlbmNlKHZhbHVlcywgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7dmFsdWVzU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInZhbHVlUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsInN0cmluZyIsInJlZmVyZW5jZSIsInZhbHVlcyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFZhbHVlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJ2YWx1ZSIsImNhbGwiLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJwcm9jZWR1cmVDYWxsIiwidmFsdWVQcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsIm5hbWUiLCJWYWx1ZXMiLCJkb20iLCJSZWZlcmVuY2UiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJzdHJpbmdGcm9tVmFsdWVzQW5kUmVmZXJlbmNlIiwidmFsdWVzU3RyaW5nIiwicmVmZXJlbmNlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7Z0VBQ007cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLDhCQUE4QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU07Z0NBRE5IO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQU1DLHNCQUFzQixJQUFJLENBQUNSLE1BQU0sRUFBRyxHQUFHO2dCQUU3Q08sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXNDLE9BQXBCRCxxQkFBb0I7Z0JBRXJELElBQU1FLG1CQUFtQkgsUUFBUUksNkJBQTZCLENBQUMsSUFBSSxDQUFDVixTQUFTO2dCQUU3RSxJQUFJLENBQUNTLGtCQUFrQjtvQkFDckIsSUFBTUUsVUFBVSxBQUFDLFFBQTJCLE9BQXBCSixxQkFBb0IsZ0NBQ3RDSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxjQUFjVCxRQUFRVSxjQUFjLElBQ3BDQyxZQUFZWCxRQUFRWSx3QkFBd0IsQ0FBQyxJQUFJLENBQUNsQixTQUFTLEdBQzNEQyxTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDSSxRQUFRLENBQUNDLFVBQzlCYSxRQUFRRixVQUFVRyxJQUFJLENBQUNuQixRQUFRYztnQkFFckNULFFBQVFlLEtBQUssQ0FBQyxBQUFDLHFCQUF3QyxPQUFwQmQscUJBQW9CO2dCQUV2RCxPQUFPWTtZQUNUOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWpCLE9BQU87Z0JBQ3JDLElBQUlrQixnQkFBZ0I7Z0JBRXBCLElBQU1DLHlCQUF5QjlCLDRCQUE0QjRCO2dCQUUzRCxJQUFJRSwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTUMsb0JBQW9CRCx3QkFBd0IsR0FBRztvQkFFckRELGdCQUFnQkcsbUNBQW1DRCxtQkFBbUJwQjtnQkFDeEU7Z0JBRUEsT0FBT2tCO1lBQ1Q7Ozs7S0FkQSxpQ0FBT0ksUUFBTztBQWlCaEIsU0FBU0QsbUNBQW1DRCxpQkFBaUIsRUFBRXBCLE9BQU87SUFDcEUsSUFBUXVCLFNBQXFDQyxZQUFHLENBQXhDRCxRQUFRRSxZQUE2QkQsWUFBRyxDQUFoQ0MsV0FBV2pDLGdCQUFrQmdDLFlBQUcsQ0FBckJoQyxlQUNyQkUsWUFBWStCLFVBQVVDLHFCQUFxQixDQUFDTixtQkFBbUJwQixVQUMvREwsU0FBUzRCLE9BQU9HLHFCQUFxQixDQUFDTixtQkFBbUJwQixVQUN6RFAsU0FBU2tDLDZCQUE2QmhDLFFBQVFELFdBQVdNLFVBQ3pEa0IsZ0JBQWdCLElBQUkxQixjQUFjQyxRQUFRQyxXQUFXQztJQUUzRCxPQUFPdUI7QUFDVDtBQUVBLFNBQVNTLDZCQUE2QmhDLE1BQU0sRUFBRUQsU0FBUyxFQUFFTSxPQUFPO0lBQzlELElBQU00QixlQUFlakMsT0FBT0MsU0FBUyxJQUMvQmlDLGtCQUFrQm5DLFVBQVVFLFNBQVMsSUFDckNILFNBQVMsQUFBQyxHQUFxQm1DLE9BQW5CQyxpQkFBZ0IsS0FBZ0IsT0FBYkQsY0FBYTtJQUVsRCxPQUFPbkM7QUFDVCJ9