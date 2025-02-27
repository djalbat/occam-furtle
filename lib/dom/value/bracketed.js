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
var _query = require("../../utilities/query");
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
var _BracketedValue;
var valueNodeQuery = (0, _query.nodeQuery)("/bracketedValue/value"), valueBracketedValueNodeQuery = (0, _query.nodeQuery)("/value/bracketedValue");
var _default = (0, _dom.domAssigned)((_BracketedValue = /*#__PURE__*/ function() {
    function BracketedValue(string, value) {
        _class_call_check(this, BracketedValue);
        this.string = string;
        this.value = value;
    }
    _create_class(BracketedValue, [
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
            key: "getType",
            value: function getType() {
                return this.value.getType();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var bracketedValueString = this.string; ///
                context.trace("Evaluating the '".concat(bracketedValueString, "' bracketed value..."));
                value = this.value.evaluate(context);
                context.debug("...evaluated the '".concat(bracketedValueString, "' bracketed value."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var bracketedValue = null;
                var valueBracketedValueNode = valueBracketedValueNodeQuery(valueNode);
                if (valueBracketedValueNode !== null) {
                    var Value = _dom.default.Value, bracketedValueNode = valueBracketedValueNode, node = bracketedValueNode, string = context.nodeAsString(node), _$valueNode = valueNodeQuery(bracketedValueNode), value = Value.fromValueNode(_$valueNode, context);
                    bracketedValue = new BracketedValue(string, value);
                }
                return bracketedValue;
            }
        }
    ]);
    return BracketedValue;
}(), _define_property(_BracketedValue, "name", "BracketedValue"), _BracketedValue));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IHZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JyYWNrZXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgdmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9icmFja2V0ZWRWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQnJhY2tldGVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudmFsdWUuZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFZhbHVlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YnJhY2tldGVkVmFsdWVTdHJpbmd9JyBicmFja2V0ZWQgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkVmFsdWVTdHJpbmd9JyBicmFja2V0ZWQgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYnJhY2tldGVkVmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGUgPSB2YWx1ZUJyYWNrZXRlZFZhbHVlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIGJyYWNrZXRlZFZhbHVlTm9kZSA9IHZhbHVlQnJhY2tldGVkVmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBicmFja2V0ZWRWYWx1ZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFsdWVOb2RlID0gdmFsdWVOb2RlUXVlcnkoYnJhY2tldGVkVmFsdWVOb2RlKSxcbiAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBicmFja2V0ZWRWYWx1ZSA9IG5ldyBCcmFja2V0ZWRWYWx1ZShzdHJpbmcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJhY2tldGVkVmFsdWU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQnJhY2tldGVkVmFsdWUiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZ2V0VHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImJyYWNrZXRlZFZhbHVlU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJicmFja2V0ZWRWYWx1ZSIsInZhbHVlQnJhY2tldGVkVmFsdWVOb2RlIiwiVmFsdWUiLCJkb20iLCJicmFja2V0ZWRWYWx1ZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLDBCQUMzQkMsK0JBQStCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRS9DLFdBQWVFLElBQUFBLGdCQUFXLG1DQUFDO2FBQU1DLGVBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILEtBQUssQ0FBQ0csT0FBTztZQUFJOzs7WUFFekNDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLHVCQUF1QixJQUFJLENBQUNQLE1BQU0sRUFBRSxHQUFHO2dCQUU3Q00sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXVDLE9BQXJCRCxzQkFBcUI7Z0JBRXRETixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNDO2dCQUU1QkEsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQXlDLE9BQXJCRixzQkFBcUI7Z0JBRXhELE9BQU9OO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFTCxPQUFPO2dCQUNyQyxJQUFJTSxpQkFBaUI7Z0JBRXJCLElBQU1DLDBCQUEwQmhCLDZCQUE2QmM7Z0JBRTdELElBQUlFLDRCQUE0QixNQUFNO29CQUNwQyxJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUscUJBQXFCSCx5QkFDckJJLE9BQU9ELG9CQUNQaEIsU0FBU00sUUFBUVksWUFBWSxDQUFDRCxPQUM5Qk4sY0FBWWhCLGVBQWVxQixxQkFDM0JmLFFBQVFhLE1BQU1KLGFBQWEsQ0FBQ0MsYUFBV0w7b0JBRTdDTSxpQkFBaUIsSUFBSWIsZUFBZUMsUUFBUUM7Z0JBQzlDO2dCQUVBLE9BQU9XO1lBQ1Q7Ozs7S0FuQkEsa0NBQU9PLFFBQU8ifQ==