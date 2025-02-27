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
var valueNodeQuery = (0, _query.nodeQuery)("/ternary/value[0]"), ifValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[1]"), ternaryNodeQuery = (0, _query.nodeQuery)("/value/ternary"), elseValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[2]");
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
                    var Value = _dom.default.Value, string = stringFromTernaryNode(ternaryNode, context), ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), value = Value.fromTernaryNode(ternaryNode, context), ifValue = Value.fromValueNode(ifValueNode, context), elseValue = Value.fromValueNode(elseValueNode, context);
                    ternary = new Ternary(string, value, ifValue, elseValue);
                }
                return ternary;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));
function stringFromTernaryNode(ternaryNode, context) {
    var string;
    var valueNode = valueNodeQuery(ternaryNode), ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), ifValueString = context.nodeAsString(ifValueNode), elseValueString = context.nodeAsString(elseValueNode), valueString = context.nodeAsString(valueNode);
    string = "If (".concat(valueString, ") ").concat(ifValueString, " ").concat(elseValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS92YWx1ZVswXVwiKSxcbiAgICAgIGlmVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS92YWx1ZVsxXVwiKSxcbiAgICAgIHRlcm5hcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvdGVybmFyeVwiKSxcbiAgICAgIGVsc2VWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L3ZhbHVlWzJdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUZXJuYXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgaWZWYWx1ZSwgZWxzZVZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaWZWYWx1ZSA9IGlmVmFsdWU7XG4gICAgdGhpcy5lbHNlVmFsdWUgPSBlbHNlVmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRJZkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmlmVmFsdWU7XG4gIH1cblxuICBnZXRFbHNlQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxzZVZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHRlcm5hcnlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICB2YWx1ZSA9IGJvb2xlYW4gP1xuICAgICAgdGhpcy5pZlZhbHVlLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgdGhpcy5lbHNlVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IHRlcm5hcnlOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlmVmFsdWVOb2RlID0gaWZWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgICBlbHNlVmFsdWVOb2RlID0gZWxzZVZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlmVmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGlmVmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVsc2VWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUoZWxzZVZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRlcm5hcnkgPSBuZXcgVGVybmFyeShzdHJpbmcsIHZhbHVlLCBpZlZhbHVlLCBlbHNlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJuYXJ5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWVOb2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICBpZlZhbHVlTm9kZSA9IGlmVmFsdWVOb2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICBlbHNlVmFsdWVOb2RlID0gZWxzZVZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgaWZWYWx1ZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGlmVmFsdWVOb2RlKSxcbiAgICAgICAgZWxzZVZhbHVlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoZWxzZVZhbHVlTm9kZSksXG4gICAgICAgIHZhbHVlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFsdWVOb2RlKTtcblxuICBzdHJpbmcgPSBgSWYgKCR7dmFsdWVTdHJpbmd9KSAke2lmVmFsdWVTdHJpbmd9ICR7ZWxzZVZhbHVlU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImlmVmFsdWVOb2RlUXVlcnkiLCJ0ZXJuYXJ5Tm9kZVF1ZXJ5IiwiZWxzZVZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJUZXJuYXJ5Iiwic3RyaW5nIiwidmFsdWUiLCJpZlZhbHVlIiwiZWxzZVZhbHVlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRJZkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybmFyeVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInRlcm5hcnkiLCJ0ZXJuYXJ5Tm9kZSIsIlZhbHVlIiwiZG9tIiwic3RyaW5nRnJvbVRlcm5hcnlOb2RlIiwiaWZWYWx1ZU5vZGUiLCJlbHNlVmFsdWVOb2RlIiwiZnJvbVRlcm5hcnlOb2RlIiwibmFtZSIsImlmVmFsdWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJlbHNlVmFsdWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7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