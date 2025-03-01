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
                    var Value = _dom.default.Value, node = negatedValueNode, string = context.nodeAsString(node), type = _types.BOOLEAN_TYPE, _$valueNode = valueNodeQuery(negatedValueNode), value = Value.fromValueNode(_$valueNode, context);
                    negatedValue = new NegatedValue(string, type, value);
                }
                return negatedValue;
            }
        }
    ]);
    return NegatedValue;
}(), _define_property(_NegatedValue, "name", "NegatedValue"), _NegatedValue));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmVnYXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgbmVnYXRlZFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25lZ2F0ZWRWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZFZhbHVlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5lZ2F0ZWRWYWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25lZ2F0ZWRWYWx1ZVN0cmluZ30nIG5lZ2F0ZWQgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IGxlZnQgdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuZWdhdGVkVmFsdWVTdHJpbmd9JyBuZWdhdGVkIHZhbHVlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5lZ2F0ZWRWYWx1ZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBuZWdhdGVkVmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgbmVnYXRlZFZhbHVlTm9kZSA9IG5lZ2F0ZWRWYWx1ZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKG5lZ2F0ZWRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBuZWdhdGVkVmFsdWVOb2RlLCAgLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgICAgIHZhbHVlTm9kZSA9IHZhbHVlTm9kZVF1ZXJ5KG5lZ2F0ZWRWYWx1ZU5vZGUpLFxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG5ldyBOZWdhdGVkVmFsdWUoc3RyaW5nLCB0eXBlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lZ2F0ZWRWYWx1ZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuZWdhdGVkVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5lZ2F0ZWRWYWx1ZSIsInN0cmluZyIsInR5cGUiLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsIm5lZ2F0ZWRWYWx1ZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiVmFsdWUiLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsIm5lZ2F0ZWRWYWx1ZSIsIm5lZ2F0ZWRWYWx1ZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO2dFQUNNO3FCQUVJO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUUsSUFBQUEsZ0JBQVcsaUNBQUM7YUFBTUMsYUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURBSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUw7Z0JBRUosSUFBTU0scUJBQXFCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDTyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBcUMsT0FBbkJELG9CQUFtQjtnQkFFcEROLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNJLFFBQVEsQ0FBQ0M7Z0JBRTVCLElBQU1HLFlBQVlSLE1BQU1FLE9BQU87Z0JBRS9CLElBQUlNLGNBQWNDLG1CQUFZLEVBQUU7b0JBQzlCLElBQU1DLGNBQWNWLE1BQU1XLFFBQVEsQ0FBQ04sVUFDN0JPLFVBQVUsQUFBQyxPQUEyQ0osT0FBckNFLGFBQVksMkJBQWtFRCxPQUF6Q0QsV0FBVSxpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUM1R0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSUcsVUFBVWhCLE1BQU1pQixVQUFVO2dCQUU5QkQsVUFBVSxDQUFDQTtnQkFFWCxJQUFNLEFBQUVFLFFBQVVDLFlBQUcsQ0FBYkQ7Z0JBRVJsQixRQUFRa0IsTUFBTUUsV0FBVyxDQUFDSixTQUFTWCxVQUFXLEdBQUc7Z0JBRWpEQSxRQUFRZ0IsS0FBSyxDQUFDLEFBQUMscUJBQXVDLE9BQW5CZixvQkFBbUI7Z0JBRXRELE9BQU9OO1lBQ1Q7Ozs7WUFJT3NCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWxCLE9BQU87Z0JBQ3JDLElBQUltQixlQUFlO2dCQUVuQixJQUFNQyxtQkFBbUI5QixzQkFBc0I0QjtnQkFFL0MsSUFBSUUscUJBQXFCLE1BQU07b0JBQzdCLElBQU0sQUFBRVAsUUFBVUMsWUFBRyxDQUFiRCxPQUNGUSxPQUFPRCxrQkFDUDNCLFNBQVNPLFFBQVFzQixZQUFZLENBQUNELE9BQzlCM0IsT0FBT1UsbUJBQVksRUFDbkJjLGNBQVk5QixlQUFlZ0MsbUJBQzNCekIsUUFBUWtCLE1BQU1JLGFBQWEsQ0FBQ0MsYUFBV2xCO29CQUU3Q21CLGVBQWUsSUFBSTNCLGFBQWFDLFFBQVFDLE1BQU1DO2dCQUNoRDtnQkFFQSxPQUFPd0I7WUFDVDs7OztLQW5CQSxnQ0FBT0ksUUFBTyJ9