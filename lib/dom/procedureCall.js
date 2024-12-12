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
var _query = require("../utilities/query");
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
var procedureCallNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall");
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
            key: "call",
            value: function call(context) {
                var procedureCallString = this.string; ///
                context.trace("Calling the '".concat(procedureCallString, "' procedure..."));
                var procedure = context.findProcedureByReference(this.reference);
                if (procedure === null) {
                    var referenceString = this.reference.getString(), message = "The '".concat(referenceString, " procedure cannot be found.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var values = callValues(this.values, context);
                procedure.call(values, context);
                context.debug("...called the '".concat(procedureCallString, "' procedure."));
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(assigmentNode);
                if (procedureCallNode !== null) {
                    var Values = _dom.default.Values, Reference = _dom.default.Reference, node = procedureCallNode, string = context.nodeAsString(node), reference = Reference.fromAssignmentNode(assigmentNode, context), values = Values.fromAssignmentNode(assigmentNode, context);
                    procedureCall = new ProcedureCall(string, reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function callValues(values, context) {
    var Values = _dom.default.Values, array = values.mapValue(function(value) {
        value = value.call(context);
        return value;
    });
    values = Values.fromArray(array); ///
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgY2FsbChjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3JlZmVyZW5jZVN0cmluZ30gcHJvY2VkdXJlIGNhbm5vdCBiZSBmb3VuZC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IGNhbGxWYWx1ZXModGhpcy52YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgcHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlcywgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY2FsbFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZXMubWFwVmFsdWUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbUFycmF5KGFycmF5KTsgLy8vXG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwidmFsdWVzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0VmFsdWVzIiwiY2FsbCIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJjYWxsVmFsdWVzIiwiZGVidWciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxOb2RlIiwiVmFsdWVzIiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUi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