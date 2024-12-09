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
var _Parameter;
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(variable) {
        _class_call_check(this, Parameter);
        this.variable = variable;
    }
    _create_class(Parameter, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.variable.getString();
            }
        },
        {
            key: "isTypeNodeType",
            value: function isTypeNodeType() {
                return this.variable.isTypeNodeType();
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var Variable = _dom.default.Variable, variable = Variable.fromParameterNode(parameterNode, context), parameter = new Parameter(variable);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpOyB9XG5cbiAgaXNUeXBlTm9kZVR5cGUoKSB7IHJldHVybiB0aGlzLnZhcmlhYmxlLmlzVHlwZU5vZGVUeXBlKCk7IH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHZhcmlhYmxlKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVyIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsImdldFN0cmluZyIsImlzVHlwZU5vZGVUeXBlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwiZG9tIiwicGFyYW1ldGVyIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLFFBQVE7Z0NBRFdEO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVM7WUFBSTs7O1lBRWhEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW1CLE9BQU8sSUFBSSxDQUFDSCxRQUFRLENBQUNHLGNBQWM7WUFBSTs7OztZQUluREMsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQU0sQUFBRUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRlAsV0FBV08sU0FBU0gsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3JERyxZQUFZLElBQUlWLFVBQVVDO2dCQUVoQyxPQUFPUztZQUNUOzs7O0tBUkEsNkJBQU9DLFFBQU8ifQ==