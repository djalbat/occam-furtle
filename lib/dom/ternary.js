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
var ifValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[1]"), ternaryNodeQuery = (0, _query.nodeQuery)("/value/ternary"), elseValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[2]");
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
                var ternaryNode = ternaryNodeQuery(valueNode);
                if (ternaryNode !== null) {
                    var Value = _dom.default.Value, ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), value = Value.fromTernaryNode(ternaryNode, context), ifValue = Value.fromValueNode(ifValueNode, context), elseValue = Value.fromValueNode(elseValueNode, context), string = stringFromValueIfValueAndElseValue(value, ifValue, elseValue, context);
                    ternary = new Ternary(string, value, ifValue, elseValue);
                }
                return ternary;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));
function stringFromValueIfValueAndElseValue(value, ifValue, elseValue, context) {
    var valueString = value.asString(context), ifValueString = ifValue.asString(context), elseValueString = elseValue.asString(context), string = "If (".concat(valueString, ") ").concat(ifValueString, " Else ").concat(elseValueString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaWZWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L3ZhbHVlWzFdXCIpLFxuICAgICAgdGVybmFyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS90ZXJuYXJ5XCIpLFxuICAgICAgZWxzZVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVbMl1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFRlcm5hcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBpZlZhbHVlLCBlbHNlVmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pZlZhbHVlID0gaWZWYWx1ZTtcbiAgICB0aGlzLmVsc2VWYWx1ZSA9IGVsc2VWYWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldElmQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZWYWx1ZTtcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlVmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgdGVybmFyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIHR5cGUgaXMgJyR7dmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgIHZhbHVlID0gYm9vbGVhbiA/XG4gICAgICB0aGlzLmlmVmFsdWUuZXZhbHVhdGUoY29udGV4dCkgOlxuICAgICAgICB0aGlzLmVsc2VWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybmFyeVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm5hcnlOb2RlID0gdGVybmFyeU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBpZlZhbHVlTm9kZSA9IGlmVmFsdWVOb2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgICAgZWxzZVZhbHVlTm9kZSA9IGVsc2VWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZlZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShpZlZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlVmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGVsc2VWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlSWZWYWx1ZUFuZEVsc2VWYWx1ZSh2YWx1ZSwgaWZWYWx1ZSwgZWxzZVZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgdmFsdWUsIGlmVmFsdWUsIGVsc2VWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm5hcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWVJZlZhbHVlQW5kRWxzZVZhbHVlKHZhbHVlLCBpZlZhbHVlLCBlbHNlVmFsdWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgaWZWYWx1ZVN0cmluZyA9IGlmVmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIGVsc2VWYWx1ZVN0cmluZyA9IGVsc2VWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYElmICgke3ZhbHVlU3RyaW5nfSkgJHtpZlZhbHVlU3RyaW5nfSBFbHNlICR7ZWxzZVZhbHVlU3RyaW5nfTtgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiaWZWYWx1ZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm5hcnlOb2RlUXVlcnkiLCJlbHNlVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlRlcm5hcnkiLCJzdHJpbmciLCJ2YWx1ZSIsImlmVmFsdWUiLCJlbHNlVmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldElmQmxvY2siLCJnZXRFbHNlQmxvY2siLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ0ZXJuYXJ5U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidGVybmFyeSIsInRlcm5hcnlOb2RlIiwiVmFsdWUiLCJkb20iLCJpZlZhbHVlTm9kZSIsImVsc2VWYWx1ZU5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJzdHJpbmdGcm9tVmFsdWVJZlZhbHVlQW5kRWxzZVZhbHVlIiwibmFtZSIsImlmVmFsdWVTdHJpbmciLCJlbHNlVmFsdWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUEsbUJBQW1CQyxJQUFBQSxnQkFBUyxFQUFDLHNCQUM3QkMsbUJBQW1CRCxJQUFBQSxnQkFBUyxFQUFDLG1CQUM3QkUscUJBQXFCRixJQUFBQSxnQkFB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