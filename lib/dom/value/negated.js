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
                var valueType = value.getType();
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
                    var Value = _dom.default.Value, type = _types.BOOLEAN_TYPE, _$valueNode = valueNodeQuery(negatedValueNode), value = Value.fromValueNode(_$valueNode, context), string = stringFromValue(value, context);
                    negatedValue = new NegatedValue(string, type, value);
                }
                return negatedValue;
            }
        }
    ]);
    return NegatedValue;
}(), _define_property(_NegatedValue, "name", "NegatedValue"), _NegatedValue));
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "!".concat(valueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmVnYXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgbmVnYXRlZFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25lZ2F0ZWRWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZFZhbHVlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRWYWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25lZ2F0ZWRWYWx1ZVN0cmluZ30nIG5lZ2F0ZWQgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IGxlZnQgdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuZWdhdGVkVmFsdWVTdHJpbmd9JyBuZWdhdGVkIHZhbHVlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5lZ2F0ZWRWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBuZWdhdGVkVmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgbmVnYXRlZFZhbHVlTm9kZSA9IG5lZ2F0ZWRWYWx1ZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKG5lZ2F0ZWRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgICAgICB2YWx1ZU5vZGUgPSB2YWx1ZU5vZGVRdWVyeShuZWdhdGVkVmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgbmVnYXRlZFZhbHVlID0gbmV3IE5lZ2F0ZWRWYWx1ZShzdHJpbmcsIHR5cGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVnYXRlZFZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAhJHt2YWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuZWdhdGVkVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5lZ2F0ZWRWYWx1ZSIsInN0cmluZyIsInR5cGUiLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsIm5lZ2F0ZWRWYWx1ZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiVmFsdWUiLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsIm5lZ2F0ZWRWYWx1ZSIsIm5lZ2F0ZWRWYWx1ZU5vZGUiLCJzdHJpbmdGcm9tVmFsdWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7Z0VBQ007cUJBRUk7cUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRSxJQUFBQSxnQkFBVyxpQ0FBQzthQUFNQyxhQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7Z0NBREFIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSxxQkFBcUIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFM0NPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUFxQyxPQUFuQkQsb0JBQW1CO2dCQUVwRE4sUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0ksUUFBUSxDQUFDQztnQkFFNUIsSUFBTUcsWUFBWVIsTUFBTUUsT0FBTztnQkFFL0IsSUFBSU0sY0FBY0MsbUJBQVksRUFBRTtvQkFDOUIsSUFBTUMsY0FBY1YsTUFBTVcsUUFBUSxDQUFDTixVQUM3Qk8sVUFBVSxBQUFDLE9BQTJDSixPQUFyQ0UsYUFBWSwyQkFBa0VELE9BQXpDRCxXQUFVLGlDQUE0QyxPQUFiQyxtQkFBWSxFQUFDLE9BQzVHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJRyxVQUFVaEIsTUFBTWlCLFVBQVU7Z0JBRTlCRCxVQUFVLENBQUNBO2dCQUVYLElBQU0sQUFBRUUsUUFBVUMsWUFBRyxDQUFiRDtnQkFFUmxCLFFBQVFrQixNQUFNRSxXQUFXLENBQUNKLFNBQVNYLFVBQVcsR0FBRztnQkFFakRBLFFBQVFnQixLQUFLLENBQUMsQUFBQyxxQkFBdUMsT0FBbkJmLG9CQUFtQjtnQkFFdEQsT0FBT047WUFDVDs7OztZQUlPc0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFbEIsT0FBTztnQkFDckMsSUFBSW1CLGVBQWU7Z0JBRW5CLElBQU1DLG1CQUFtQjlCLHNCQUFzQjRCO2dCQUUvQyxJQUFJRSxxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTSxBQUFFUCxRQUFVQyxZQUFHLENBQWJELE9BQ0ZuQixPQUFPVSxtQkFBWSxFQUNuQmMsY0FBWTlCLGVBQWVnQyxtQkFDM0J6QixRQUFRa0IsTUFBTUksYUFBYSxDQUFDQyxhQUFXbEIsVUFDdkNQLFNBQVM0QixnQkFBZ0IxQixPQUFPSztvQkFFdENtQixlQUFlLElBQUkzQixhQUFhQyxRQUFRQyxNQUFNQztnQkFDaEQ7Z0JBRUEsT0FBT3dCO1lBQ1Q7Ozs7S0FsQkEsZ0NBQU9HLFFBQU87QUFxQmhCLFNBQVNELGdCQUFnQjFCLEtBQUssRUFBRUssT0FBTztJQUNyQyxJQUFNSyxjQUFjVixNQUFNVyxRQUFRLENBQUNOLFVBQzdCUCxTQUFTLEFBQUMsSUFBZSxPQUFaWTtJQUVuQixPQUFPWjtBQUNUIn0=