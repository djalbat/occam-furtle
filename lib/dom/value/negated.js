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
var valueNodeQuery = (0, _query.nodeQuery)("/negatedValue/value"), valueNegatedValueNodeQuery = (0, _query.nodeQuery)("/value/negatedValue");
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
                var valueNegatedValueNode = valueNegatedValueNodeQuery(valueNode);
                if (valueNegatedValueNode !== null) {
                    var negatedValueNode = valueNegatedValueNode; ///
                    negatedValue = negatedValueFromNegatedValueNode(negatedValueNode, context);
                }
                return negatedValue;
            }
        }
    ]);
    return NegatedValue;
}(), _define_property(_NegatedValue, "name", "NegatedValue"), _NegatedValue));
function negatedValueFromNegatedValueNode(negatedValueNode, context) {
    var Value = _dom.default.Value, NegatedValue = _dom.default.NegatedValue, valueNode = valueNodeQuery(negatedValueNode), value = Value.fromValueNode(valueNode, context), type = _types.BOOLEAN_TYPE, string = stringFromValue(value, context), negatedValue = new NegatedValue(string, type, value);
    return negatedValue;
}
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "!".concat(valueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmVnYXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgdmFsdWVOZWdhdGVkVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvbmVnYXRlZFZhbHVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOZWdhdGVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgbmVnYXRlZFZhbHVlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZFZhbHVlU3RyaW5nfScgbmVnYXRlZCB2YWx1ZS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gbGVmdCB2YWx1ZSdzIHR5cGUgaXMgJyR7dmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBib29sZWFuID0gIWJvb2xlYW47XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25lZ2F0ZWRWYWx1ZVN0cmluZ30nIG5lZ2F0ZWQgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZFZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5lZ2F0ZWRWYWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZU5lZ2F0ZWRWYWx1ZU5vZGUgPSB2YWx1ZU5lZ2F0ZWRWYWx1ZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlTmVnYXRlZFZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbmVnYXRlZFZhbHVlTm9kZSA9IHZhbHVlTmVnYXRlZFZhbHVlTm9kZTsgLy8vXG5cbiAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG5lZ2F0ZWRWYWx1ZUZyb21OZWdhdGVkVmFsdWVOb2RlKG5lZ2F0ZWRWYWx1ZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZWdhdGVkVmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuZWdhdGVkVmFsdWVGcm9tTmVnYXRlZFZhbHVlTm9kZShuZWdhdGVkVmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIE5lZ2F0ZWRWYWx1ZSB9ID0gZG9tLFxuICAgICAgICB2YWx1ZU5vZGUgPSB2YWx1ZU5vZGVRdWVyeShuZWdhdGVkVmFsdWVOb2RlKSxcbiAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG5ldyBOZWdhdGVkVmFsdWUoc3RyaW5nLCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAhJHt2YWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZU5lZ2F0ZWRWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmVnYXRlZFZhbHVlIiwic3RyaW5nIiwidHlwZSIsInZhbHVlIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwibmVnYXRlZFZhbHVlU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJCT09MRUFOX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJWYWx1ZSIsImRvbSIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwibmVnYXRlZFZhbHVlIiwidmFsdWVOZWdhdGVkVmFsdWVOb2RlIiwibmVnYXRlZFZhbHVlTm9kZSIsIm5lZ2F0ZWRWYWx1ZUZyb21OZWdhdGVkVmFsdWVOb2RlIiwibmFtZSIsInN0cmluZ0Zyb21WYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO2dFQUNNO3FCQUVJO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzNCQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUM7SUFFN0MsV0FBZUUsSUFBQUEsZ0JBQVcsaUNBQUM7YUFBTUMsYUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURBSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUw7Z0JBRUosSUFBTU0scUJBQXFCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDTyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBcUMsT0FBbkJELG9CQUFtQjtnQkFFcEROLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNJLFFBQVEsQ0FBQ0M7Z0JBRTVCLElBQU1HLFlBQVlSLE1BQU1FLE9BQU87Z0JBRS9CLElBQUlNLGNBQWNDLG1CQUFZLEVBQUU7b0JBQzlCLElBQU1DLGNBQWNWLE1BQU1XLFFBQVEsQ0FBQ04sVUFDN0JPLFVBQVUsQUFBQyxPQUEyQ0osT0FBckNFLGFBQVksMkJBQWtFRCxPQUF6Q0QsV0FBVSxpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUM1R0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSUcsVUFBVWhCLE1BQU1pQixVQUFVO2dCQUU5QkQsVUFBVSxDQUFDQTtnQkFFWCxJQUFNLEFBQUVFLFFBQVVDLFlBQUcsQ0FBYkQ7Z0JBRVJsQixRQUFRa0IsTUFBTUUsV0FBVyxDQUFDSixTQUFTWCxVQUFXLEdBQUc7Z0JBRWpEQSxRQUFRZ0IsS0FBSyxDQUFDLEFBQUMscUJBQXVDLE9BQW5CZixvQkFBbUI7Z0JBRXRELE9BQU9OO1lBQ1Q7Ozs7WUFJT3NCLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWxCLE9BQU87Z0JBQ3JDLElBQUltQixlQUFlO2dCQUVuQixJQUFNQyx3QkFBd0I5QiwyQkFBMkI0QjtnQkFFekQsSUFBSUUsMEJBQTBCLE1BQU07b0JBQ2xDLElBQU1DLG1CQUFtQkQsdUJBQXVCLEdBQUc7b0JBRW5ERCxlQUFlRyxpQ0FBaUNELGtCQUFrQnJCO2dCQUNwRTtnQkFFQSxPQUFPbUI7WUFDVDs7OztLQWRBLGdDQUFPSSxRQUFPO0FBaUJoQixTQUFTRCxpQ0FBaUNELGdCQUFnQixFQUFFckIsT0FBTztJQUNqRSxJQUFRYSxRQUF3QkMsWUFBRyxDQUEzQkQsT0FBT3JCLGVBQWlCc0IsWUFBRyxDQUFwQnRCLGNBQ1QwQixZQUFZOUIsZUFBZWlDLG1CQUMzQjFCLFFBQVFrQixNQUFNSSxhQUFhLENBQUNDLFdBQVdsQixVQUN2Q04sT0FBT1UsbUJBQVksRUFDbkJYLFNBQVMrQixnQkFBZ0I3QixPQUFPSyxVQUNoQ21CLGVBQWUsSUFBSTNCLGFBQWFDLFFBQVFDLE1BQU1DO0lBRXBELE9BQU93QjtBQUNUO0FBRUEsU0FBU0ssZ0JBQWdCN0IsS0FBSyxFQUFFSyxPQUFPO0lBQ3JDLElBQU1LLGNBQWNWLE1BQU1XLFFBQVEsQ0FBQ04sVUFDN0JQLFNBQVMsQUFBQyxJQUFlLE9BQVpZO0lBRW5CLE9BQU9aO0FBQ1QifQ==