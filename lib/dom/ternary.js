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
var _Ternary;
var ifValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[1]"), elseValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[2]"), valueTernaryNodeQuery = (0, _query.nodeQuery)("/value/ternary");
var _default = (0, _dom.domAssigned)((_Ternary = /*#__PURE__*/ function() {
    function Ternary(string, value, ifValue, elseValue) {
        _class_call_check(this, Ternary);
        this.string = string;
        this.value = value;
        this.ifValue = ifValue;
        this.elseValue = elseValue;
    }
    _create_class(Ternary, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getIfBlock",
            value: function getIfBlock() {
                return this.ifValue;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseValue;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var ternaryString = this.string; ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                value = this.value.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.BOOLEAN_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's type is '").concat(valueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = value.getBoolean();
                value = boolean ? this.ifValue.evaluate(context) : this.elseValue.evaluate(context);
                context.debug("...evaluated the '".concat(ternaryString, "' ternary."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var ternary = null;
                var valueTernaryNode = valueTernaryNodeQuery(valueNode);
                if (valueTernaryNode !== null) {
                    var ternaryNode = valueTernaryNode; ///
                    ternary = ternaryFromTernaryNode(ternaryNode, context);
                }
                return ternary;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));
function ternaryFromTernaryNode(ternaryNode, context) {
    var Value = _dom.default.Value, Ternary = _dom.default.Ternary, ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), value = Value.fromTernaryNode(ternaryNode, context), ifValue = Value.fromValueNode(ifValueNode, context), elseValue = Value.fromValueNode(elseValueNode, context), string = stringFromValueIfValueAndElseValue(value, ifValue, elseValue, context), ternary = new Ternary(string, value, ifValue, elseValue);
    return ternary;
}
function stringFromValueIfValueAndElseValue(value, ifValue, elseValue, context) {
    var valueString = value.asString(context), ifValueString = ifValue.asString(context), elseValueString = elseValue.asString(context), string = "If (".concat(valueString, ") ").concat(ifValueString, " Else ").concat(elseValueString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaWZWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L3ZhbHVlWzFdXCIpLFxuICAgICAgZWxzZVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVbMl1cIiksXG4gICAgICB2YWx1ZVRlcm5hcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdGVybmFyeVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUsIGlmVmFsdWUsIGVsc2VWYWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlmVmFsdWUgPSBpZlZhbHVlO1xuICAgIHRoaXMuZWxzZVZhbHVlID0gZWxzZVZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0SWZCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZlZhbHVlO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VWYWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB0ZXJuYXJ5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgdmFsdWUgPSBib29sZWFuID9cbiAgICAgICAgICAgICAgdGhpcy5pZlZhbHVlLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybmFyeVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlVGVybmFyeU5vZGUgPSB2YWx1ZVRlcm5hcnlOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IHZhbHVlVGVybmFyeU5vZGU7IC8vL1xuXG4gICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm5hcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIFRlcm5hcnkgfSA9IGRvbSxcbiAgICAgICAgaWZWYWx1ZU5vZGUgPSBpZlZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgZWxzZVZhbHVlTm9kZSA9IGVsc2VWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUoaWZWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlVmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGVsc2VWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFsdWVJZlZhbHVlQW5kRWxzZVZhbHVlKHZhbHVlLCBpZlZhbHVlLCBlbHNlVmFsdWUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCB2YWx1ZSwgaWZWYWx1ZSwgZWxzZVZhbHVlKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlSWZWYWx1ZUFuZEVsc2VWYWx1ZSh2YWx1ZSwgaWZWYWx1ZSwgZWxzZVZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIGlmVmFsdWVTdHJpbmcgPSBpZlZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBlbHNlVmFsdWVTdHJpbmcgPSBlbHNlVmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGBJZiAoJHt2YWx1ZVN0cmluZ30pICR7aWZWYWx1ZVN0cmluZ30gRWxzZSAke2Vsc2VWYWx1ZVN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImlmVmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJlbHNlVmFsdWVOb2RlUXVlcnkiLCJ2YWx1ZVRlcm5hcnlOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlRlcm5hcnkiLCJzdHJpbmciLCJ2YWx1ZSIsImlmVmFsdWUiLCJlbHNlVmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldElmQmxvY2siLCJnZXRFbHNlQmxvY2siLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ0ZXJuYXJ5U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidGVybmFyeSIsInZhbHVlVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJpZlZhbHVlTm9kZSIsImVsc2VWYWx1ZU5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJzdHJpbmdGcm9tVmFsdWVJZlZhbHVlQW5kRWxzZVZhbHVlIiwiaWZWYWx1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