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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
var _types = require("../../types");
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
var _NegatedValue;
var valueNodeQuery = (0, _query.nodeQuery)("/negatedValue/value"), negatedValueNodeQuery = (0, _query.nodeQuery)("/value/negatedValue");
var _default = (0, _dom.domAssigned)((_NegatedValue = /*#__PURE__*/ function() {
    function NegatedValue(string, type, value) {
        _class_call_check(this, NegatedValue);
        this.string = string;
        this.type = type;
        this.value = value;
    }
    _create_class(NegatedValue, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var negatedValueString = this.string; ///
                context.trace("Evaluating the '".concat(negatedValueString, "' negated value..."));
                value = this.value.evaluate(context);
                var valueType = value.getType;
                if (valueType !== _types.BOOLEAN_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " left value's type is '").concat(valueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = value.getBoolean();
                boolean = !boolean;
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(negatedValueString, "' negated value."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var negatedValue = null;
                var negatedValueNode = negatedValueNodeQuery(valueNode);
                if (negatedValueNode !== null) {
                    var Value = _dom.default.Value, node = negatedValueNode, string = context.nodeAsString(node), type = _types.BOOLEAN_TYPE, _$valueNode = valueNodeQuery(negatedValueNode), value = Value.fromValueNode(_$valueNode, context);
                    negatedValue = new NegatedValue(string, type, value);
                }
                return negatedValue;
            }
        }
    ]);
    return NegatedValue;
}(), _define_property(_NegatedValue, "name", "NegatedValue"), _NegatedValue));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmVnYXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgbmVnYXRlZFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25lZ2F0ZWRWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZFZhbHVlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRWYWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25lZ2F0ZWRWYWx1ZVN0cmluZ30nIG5lZ2F0ZWQgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGU7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSBsZWZ0IHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbiA9IHZhbHVlLmdldEJvb2xlYW4oKTtcblxuICAgIGJvb2xlYW4gPSAhYm9vbGVhbjtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZFZhbHVlU3RyaW5nfScgbmVnYXRlZCB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOZWdhdGVkVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbmVnYXRlZFZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IG5lZ2F0ZWRWYWx1ZU5vZGUgPSBuZWdhdGVkVmFsdWVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmIChuZWdhdGVkVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gbmVnYXRlZFZhbHVlTm9kZSwgIC8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgICAgICB2YWx1ZU5vZGUgPSB2YWx1ZU5vZGVRdWVyeShuZWdhdGVkVmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBuZWdhdGVkVmFsdWUgPSBuZXcgTmVnYXRlZFZhbHVlKHN0cmluZywgdHlwZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWdhdGVkVmFsdWU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibmVnYXRlZFZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOZWdhdGVkVmFsdWUiLCJzdHJpbmciLCJ0eXBlIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0VmFsdWUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJuZWdhdGVkVmFsdWVTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsIkJPT0xFQU5fVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsIlZhbHVlIiwiZG9tIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJuZWdhdGVkVmFsdWUiLCJuZWdhdGVkVmFsdWVOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMzQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVFLElBQUFBLGdCQUFXLGlDQUFDO2FBQU1DLGFBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEQUg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLHFCQUFxQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUUzQ08sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXFDLE9BQW5CRCxvQkFBbUI7Z0JBRXBETixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNDO2dCQUU1QixJQUFNRyxZQUFZUixNQUFNRSxPQUFPO2dCQUUvQixJQUFJTSxjQUFjQyxtQkFBWSxFQUFFO29CQUM5QixJQUFNQyxjQUFjVixNQUFNVyxRQUFRLENBQUNOLFVBQzdCTyxVQUFVLEFBQUMsT0FBMkNKLE9BQXJDRSxhQUFZLDJCQUFrRUQsT0FBekNELFdBQVUsaUNBQTRDLE9BQWJDLG1CQUFZLEVBQUMsT0FDNUdJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlHLFVBQVVoQixNQUFNaUIsVUFBVTtnQkFFOUJELFVBQVUsQ0FBQ0E7Z0JBRVgsSUFBTSxBQUFFRSxRQUFVQyxZQUFHLENBQWJEO2dCQUVSbEIsUUFBUWtCLE1BQU1FLFdBQVcsQ0FBQ0osU0FBU1gsVUFBVyxHQUFHO2dCQUVqREEsUUFBUWdCLEtBQUssQ0FBQyxBQUFDLHFCQUF1QyxPQUFuQmYsb0JBQW1CO2dCQUV0RCxPQUFPTjtZQUNUOzs7O1lBSU9zQixLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVsQixPQUFPO2dCQUNyQyxJQUFJbUIsZUFBZTtnQkFFbkIsSUFBTUMsbUJBQW1COUIsc0JBQXNCNEI7Z0JBRS9DLElBQUlFLHFCQUFxQixNQUFNO29CQUM3QixJQUFNLEFBQUVQLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRlEsT0FBT0Qsa0JBQ1AzQixTQUFTTyxRQUFRc0IsWUFBWSxDQUFDRCxPQUM5QjNCLE9BQU9VLG1CQUFZLEVBQ25CYyxjQUFZOUIsZUFBZWdDLG1CQUMzQnpCLFFBQVFrQixNQUFNSSxhQUFhLENBQUNDLGFBQVdsQjtvQkFFN0NtQixlQUFlLElBQUkzQixhQUFhQyxRQUFRQyxNQUFNQztnQkFDaEQ7Z0JBRUEsT0FBT3dCO1lBQ1Q7Ozs7S0FuQkEsZ0NBQU9JLFFBQU8ifQ==