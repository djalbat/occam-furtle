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
var procedureCallNodeQuery = (0, _query.nodeQuery)("/value/procedureCall");
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
                var procedureCallNode = procedureCallNodeQuery(valueNode);
                if (procedureCallNode !== null) {
                    var Values = _dom.default.Values, Reference = _dom.default.Reference, node = procedureCallNode, reference = Reference.fromValueNode(valueNode, context), values = Values.fromValueNode(valueNode, context), string = stringFromValuesAndReference(values, reference, context);
                    procedureCall = new ProcedureCall(string, reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function stringFromValuesAndReference(values, reference, context) {
    var valuesString = values.getString(), referenceString = reference.getString(), string = "".concat(referenceString, "(").concat(valuesString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcmVmZXJlbmNlLCB2YWx1ZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKCFwcm9jZWR1cmVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfSBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IGNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWUgPSBwcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZXMsIFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlc0FuZFJlZmVyZW5jZSh2YWx1ZXMsIHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZXNBbmRSZWZlcmVuY2UodmFsdWVzLCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAke3JlZmVyZW5jZVN0cmluZ30oJHt2YWx1ZXNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsicHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsInN0cmluZyIsInJlZmVyZW5jZSIsInZhbHVlcyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFZhbHVlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ0cmFjZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJ2YWx1ZSIsImNhbGwiLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJwcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJWYWx1ZXMiLCJkb20iLCJSZWZlcmVuY2UiLCJub2RlIiwic3RyaW5nRnJvbVZhbHVlc0FuZFJlZmVyZW5jZSIsIm5hbWUiLCJ2YWx1ZXNTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtnRUFDTTtxQkFHSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXpDLFdBQWVDLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsTUFBTTtnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRTdDTyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBc0MsT0FBcEJELHFCQUFvQjtnQkFFckQsSUFBTUUsbUJBQW1CSCxRQUFRSSw2QkFBNkIsQ0FBQyxJQUFJLENBQUNWLFNBQVM7Z0JBRTdFLElBQUksQ0FBQ1Msa0JBQWtCO29CQUNyQixJQUFNRSxVQUFVLEFBQUMsUUFBMkIsT0FBcEJKLHFCQUFvQixnQ0FDdENLLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGNBQWNULFFBQVFVLGNBQWMsSUFDcENDLFlBQVlYLFFBQVFZLHdCQUF3QixDQUFDLElBQUksQ0FBQ2xCLFNBQVMsR0FDM0RDLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsVUFDOUJhLFFBQVFGLFVBQVVHLElBQUksQ0FBQ25CLFFBQVFjO2dCQUVyQ1QsUUFBUWUsS0FBSyxDQUFDLEFBQUMscUJBQXdDLE9BQXBCZCxxQkFBb0I7Z0JBRXZELE9BQU9ZO1lBQ1Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFakIsT0FBTztnQkFDckMsSUFBSWtCLGdCQUFnQjtnQkFFcEIsSUFBTUMsb0JBQW9COUIsdUJBQXVCNEI7Z0JBRWpELElBQUlFLHNCQUFzQixNQUFNO29CQUM5QixJQUFRQyxTQUFzQkMsWUFBRyxDQUF6QkQsUUFBUUUsWUFBY0QsWUFBRyxDQUFqQkMsV0FDVkMsT0FBT0osbUJBQ1B6QixZQUFZNEIsVUFBVU4sYUFBYSxDQUFDQyxXQUFXakIsVUFDL0NMLFNBQVN5QixPQUFPSixhQUFhLENBQUNDLFdBQVdqQixVQUN6Q1AsU0FBUytCLDZCQUE2QjdCLFFBQVFELFdBQVdNO29CQUUvRGtCLGdCQUFnQixJQUFJMUIsY0FBY0MsUUFBUUMsV0FBV0M7Z0JBQ3ZEO2dCQUVBLE9BQU91QjtZQUNUOzs7O0tBbEJBLGlDQUFPTyxRQUFPO0FBcUJoQixTQUFTRCw2QkFBNkI3QixNQUFNLEVBQUVELFNBQVMsRUFBRU0sT0FBTztJQUM5RCxJQUFNMEIsZUFBZS9CLE9BQU9DLFNBQVMsSUFDL0IrQixrQkFBa0JqQyxVQUFVRSxTQUFTLElBQ3JDSCxTQUFTLEFBQUMsR0FBcUJpQyxPQUFuQkMsaUJBQWdCLEtBQWdCLE9BQWJELGNBQWE7SUFFbEQsT0FBT2pDO0FBQ1QifQ==