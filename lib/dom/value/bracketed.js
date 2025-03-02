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
                    var Value = _dom.default.Value, bracketedValueNode = valueBracketedValueNode, _$valueNode = valueNodeQuery(bracketedValueNode), value = Value.fromValueNode(_$valueNode, context), string = stringFromValue(value, context);
                    bracketedValue = new BracketedValue(string, value);
                }
                return bracketedValue;
            }
        }
    ]);
    return BracketedValue;
}(), _define_property(_BracketedValue, "name", "BracketedValue"), _BracketedValue));
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "(".concat(valueString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IHZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JyYWNrZXRlZFZhbHVlL3ZhbHVlXCIpLFxuICAgICAgdmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9icmFja2V0ZWRWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQnJhY2tldGVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMudmFsdWUuZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFZhbHVlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YnJhY2tldGVkVmFsdWVTdHJpbmd9JyBicmFja2V0ZWQgdmFsdWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkVmFsdWVTdHJpbmd9JyBicmFja2V0ZWQgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYnJhY2tldGVkVmFsdWUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGUgPSB2YWx1ZUJyYWNrZXRlZFZhbHVlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVCcmFja2V0ZWRWYWx1ZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIGJyYWNrZXRlZFZhbHVlTm9kZSA9IHZhbHVlQnJhY2tldGVkVmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICAgIHZhbHVlTm9kZSA9IHZhbHVlTm9kZVF1ZXJ5KGJyYWNrZXRlZFZhbHVlTm9kZSksXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIGJyYWNrZXRlZFZhbHVlID0gbmV3IEJyYWNrZXRlZFZhbHVlKHN0cmluZywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBicmFja2V0ZWRWYWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgKCR7dmFsdWVTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlQnJhY2tldGVkVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJyYWNrZXRlZFZhbHVlIiwic3RyaW5nIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldFR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJicmFja2V0ZWRWYWx1ZVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiYnJhY2tldGVkVmFsdWUiLCJ2YWx1ZUJyYWNrZXRlZFZhbHVlTm9kZSIsIlZhbHVlIiwiZG9tIiwiYnJhY2tldGVkVmFsdWVOb2RlIiwic3RyaW5nRnJvbVZhbHVlIiwibmFtZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDM0JDLCtCQUErQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUUvQyxXQUFlRSxJQUFBQSxnQkFBVyxtQ0FBQzthQUFNQyxlQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSCxLQUFLLENBQUNHLE9BQU87WUFBSTs7O1lBRXpDQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSx1QkFBdUIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFN0NNLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF1QyxPQUFyQkQsc0JBQXFCO2dCQUV0RE4sUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0ksUUFBUSxDQUFDQztnQkFFNUJBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUF5QyxPQUFyQkYsc0JBQXFCO2dCQUV4RCxPQUFPTjtZQUNUOzs7O1lBSU9TLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUwsT0FBTztnQkFDckMsSUFBSU0saUJBQWlCO2dCQUVyQixJQUFNQywwQkFBMEJoQiw2QkFBNkJjO2dCQUU3RCxJQUFJRSw0QkFBNEIsTUFBTTtvQkFDcEMsSUFBTSxBQUFFQyxRQUFVQyxZQUFHLENBQWJELE9BQ0ZFLHFCQUFxQkgseUJBQ3JCRixjQUFZaEIsZUFBZXFCLHFCQUMzQmYsUUFBUWEsTUFBTUosYUFBYSxDQUFDQyxhQUFXTCxVQUN2Q04sU0FBU2lCLGdCQUFnQmhCLE9BQU9LO29CQUV0Q00saUJBQWlCLElBQUliLGVBQWVDLFFBQVFDO2dCQUM5QztnQkFFQSxPQUFPVztZQUNUOzs7O0tBbEJBLGtDQUFPTSxRQUFPO0FBcUJoQixTQUFTRCxnQkFBZ0JoQixLQUFLLEVBQUVLLE9BQU87SUFDckMsSUFBTWEsY0FBY2xCLE1BQU1tQixRQUFRLENBQUNkLFVBQzdCTixTQUFTLEFBQUMsSUFBZSxPQUFabUIsYUFBWTtJQUUvQixPQUFPbkI7QUFDVCJ9